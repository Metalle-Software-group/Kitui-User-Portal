'use server';
import Strapi, { StrapiOptions, StrapiRequestParams } from 'strapi-sdk-js';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { COOKIE_KEYS } from '@/constants';
import {
	SERVER_ERROR,
	StrapiAuthenticationData,
	TAuthUser,
} from '@/types/types';

export const getStrapiConfiguredInstance = (props?: Partial<StrapiOptions>) =>
	new Strapi({
		url: process.env.HOSTED_BACKEND_URL ?? 'https://mavuno.up.railway.app',
		axiosOptions: {
			...(getCookie({ name: COOKIE_KEYS.auth })
				? {
						headers: {
							Authorization: `Bearer ${getCookie({ name: COOKIE_KEYS.auth })}`,
						},
				  }
				: {}),
		},
		...props,
	});

export const AuthenticateUser = async ({
	identifier,
	password,
}: StrapiAuthenticationData) => {
	const strapi = getStrapiConfiguredInstance();

	const response = strapi.login({ identifier, password });

	return response
		.then(({ user, jwt }) =>
			getStrapiConfiguredInstance()
				.findOne<TAuthUser>('users', user.id as number, {
					populate: '*',
				})
				.then((data) => {
					const { ...newUser }: TAuthUser = data as any as TAuthUser;

					return {
						user: newUser,

						jwt,
					};
				})
		)
		.then(({ user, jwt }) => {
			cookies().set(COOKIE_KEYS.auth, jwt, {
				httpOnly: true,
				maxAge: 30000,
				secure: true,
				path: '/',
			});

			cookies().set(COOKIE_KEYS.user, JSON.stringify(user), {
				httpOnly: false,
				maxAge: 30000,
				secure: true,
				path: '/',
			});
		})
		.catch((err: SERVER_ERROR) => {
			throw new Error(
				err.error.status >= 400 && err.error.status <= 499
					? 'Invalid credentials provided'
					: 'Something went wrong.'
			);
		});
};

export const Logout = async () => {
	await getStrapiConfiguredInstance().logout();
	Object.values(COOKIE_KEYS).map((item) => deleteCookie({ name: item }));

	redirect('/');
};

export const deleteCookie = ({ name }: { name: string }) =>
	cookies().set(name, '', { maxAge: 0 });

export const fetchEndpointData = <dataTypeExpected = any>({
	options,
	url,
}: {
	options: StrapiRequestParams;
	url: string;
}) =>
	getStrapiConfiguredInstance().find<dataTypeExpected>(url, {
		...options,
	});

export const getCookie = ({ name }: { name: string }) =>
	cookies().get(name)?.value;

export const getCookieAsync = async ({ name }: { name: string }) =>
	cookies().get(name)?.value;

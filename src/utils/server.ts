'use server';
import Strapi, { StrapiOptions, StrapiRequestParams } from 'strapi-sdk-js';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { COOKIE_KEYS } from '@/constants';
import {
	SERVER_ERROR,
	StrapiAuthenticationData,
	TApiHandlerProps,
} from '@/types/types';

export const getStrapiConfiguredInstance = (
	props: Partial<StrapiOptions> = {}
) => {
	const auth = getCookie({ name: COOKIE_KEYS.auth });

	return new Strapi({
		url: 'https://kitui-jobs-portal.up.railway.app',
		axiosOptions: {
			...(auth
				? {
						headers: {
							Authorization: `Bearer ${auth}`,
						},
				  }
				: {}),
		},
		...props,
	});
};

export const AuthenticateUser = async ({
	identifier,
	password,
}: StrapiAuthenticationData) => {
	const strapi = new Strapi({
		url: 'https://kitui-jobs-portal.up.railway.app',
		// axiosOptions: {
		// 	...(auth
		// 		? {
		// 				headers: {
		// 					Authorization: `Bearer ${auth}`,
		// 				},
		// 		  }
		// 		: {}),
		// },
		// ...props,
	});

	const response = strapi.login({ identifier, password });

	return response
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

			return { data: user, err: null };
		})

		.catch((err: SERVER_ERROR) => {
			return {
				data: null,
				err:
					err.error.status >= 400 && err.error.status <= 499
						? 'Invalid credentials provided'
						: 'Something went wrong.',
			};
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
	new Strapi({
		url: 'https://kitui-jobs-portal.up.railway.app',
		// axiosOptions: {
		// 	...(auth
		// 		? {
		// 				headers: {
		// 					Authorization: `Bearer ${auth}`,
		// 				},
		// 		  }
		// 		: {}),
		// },
		// ...props,
	}).find<dataTypeExpected>(url, {
		...options,
	});

export const createResourceEndpointData = ({ data, url }: TApiHandlerProps) =>
	getStrapiConfiguredInstance()
		.create(url, data)
		.then((data: any) => ({ data, err: null }))
		.catch(({ error: { message, status, details } }: SERVER_ERROR) => ({
			err: { message, status, details },
			data: null,
		}));

export const getCookie = ({ name }: { name: string }) =>
	cookies().get(name)?.value;

export const getCookieAsync = async ({ name }: { name: string }) =>
	cookies().get(name)?.value;

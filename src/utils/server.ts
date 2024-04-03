'use server';
import Strapi, { StrapiOptions, StrapiRequestParams } from 'strapi-sdk-js';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import {
	BACKEND_BASE_URL,
	COOKIE_KEYS,
	THIRD_PARTY_TOKEN_NAME,
} from '@/constants';
import {
	SERVER_ERROR,
	StrapiAuthenticationData,
	TApiHandlerProps,
	TAuthScreenProps,
} from '@/types/types';

export const getCookie = ({ name }: { name: string }) => {
	const cookieStore = cookies();

	return cookieStore.get(name)?.value;
};

export const getCookieAsync = async ({ name }: { name: string }) => {
	const cookieStore = cookies();

	return cookieStore.get(name)?.value;
};

export const getStrapiConfiguredInstance = async (
	props: Partial<StrapiOptions> = {}
) => {
	const auth = await getCookieAsync({ name: COOKIE_KEYS.auth });

	return new Strapi({
		url: BACKEND_BASE_URL,
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
	const strapi = await getStrapiConfiguredInstance();

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

		.catch((err: SERVER_ERROR) => ({
			data: null,
			err:
				err.error.status >= 400 && err.error.status <= 499
					? 'Invalid credentials provided'
					: 'Something went wrong.',
		}));
};

export const Logout = async () => {
	const strapi = await getStrapiConfiguredInstance();
	strapi.logout();

	Object.values(COOKIE_KEYS).map((item) => deleteCookie({ name: item }));

	redirect('/');
};

export const deleteCookie = ({ name }: { name: string }) =>
	cookies().set(name, '', { maxAge: 0 });

export const fetchEndpointData = async <dataTypeExpected = any>({
	options,
	url,
}: {
	options: StrapiRequestParams;
	url: string;
}) => {
	const strapi = await getStrapiConfiguredInstance();
	return strapi.find<dataTypeExpected>(url, {
		...options,
	});
};

export const thirdPartyProviderSubmitToken = async <dataTypeExpected = any>({
	id_token,
	options,
	url,
}: {
	options: StrapiRequestParams;
	url: string;
} & TAuthScreenProps) => {
	const strapi = await getStrapiConfiguredInstance();

	const params = new URLSearchParams();
	params.set(THIRD_PARTY_TOKEN_NAME, id_token);

	console.log(params.toString());

	return strapi
		.axios({ url: `${url}?${params.toString()}`, method: 'GET' })
		.then(({ data }) => ({ data, err: null }))
		.catch(({ error: { message, status, details } }: SERVER_ERROR) => ({
			err: { message, status, details },
			data: null,
		}));
};

export const createResourceEndpointData = async <dataTypeExpected = any>({
	options = {},
	data,
	url,
}: TApiHandlerProps) => {
	const strapi = await getStrapiConfiguredInstance();

	return strapi
		.create<dataTypeExpected>(url, data, { ...options })
		.then((data: any) => ({ data, err: null }))
		.catch(({ error: { message, status, details } }: SERVER_ERROR) => ({
			err: { message, status, details },
			data: null,
		}));
};

export const updateResourceEndpointData = async ({
	data,
	url,
}: TApiHandlerProps) => {
	const strapi = await getStrapiConfiguredInstance();

	return strapi
		.axios({ url, method: 'PUT', data })
		.then(({ data }) => ({ data, err: null }))
		.catch(({ error: { message, status, details } }: SERVER_ERROR) => ({
			err: { message, status, details },
			data: null,
		}));
};

export const uploadResourceEndpointData = async ({
	data,
	url,
}: TApiHandlerProps) => {
	const auth = await getCookieAsync({ name: COOKIE_KEYS.auth });

	return fetch(`https://kitui-jobs-portal.up.railway.app/api/${url}`, {
		method: 'post',
		body: data,
		headers: {
			Authorization: `Bearer ${auth}`,
		},
	})
		.then((data) => data.json())
		.then((data: any) => ({ data, err: null }))
		.catch(({ error: { message, status, details } }: SERVER_ERROR) => ({
			err: { message, status, details },
			data: null,
		}));
};

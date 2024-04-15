'use server';
import Strapi, { StrapiOptions, StrapiRequestParams } from 'strapi-sdk-js';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { BACKEND_BASE_URL, COOKIE_KEYS } from '@/constants';
import {
	Details,
	SERVER_ERROR,
	StrapiAuthenticationData,
	TApiHandlerProps,
	TAuthScreenProps,
	TError,
	TUSER,
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
				maxAge: 3600,
				secure: true,
				path: '/',
			});

			cookies().set(COOKIE_KEYS.user, JSON.stringify(user), {
				httpOnly: false,
				maxAge: 3600,
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

export const updateUserCookies = async ({ user }: { user: TUSER }) => {
	cookies().set(COOKIE_KEYS.user, JSON.stringify(user), {
		httpOnly: false,
		maxAge: 3600,
		secure: true,
		path: '/',
	});
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
	qParams,
	url,
}: {
	options: StrapiRequestParams;
	url: string;
} & TAuthScreenProps) => {
	const strapi = await getStrapiConfiguredInstance();

	return strapi
		.axios({ url: `${url}?${qParams}`, method: 'GET' })
		.then(({ data: { user, jwt } }) => {
			cookies().set(COOKIE_KEYS.auth, jwt, {
				httpOnly: true,
				maxAge: 3600,
				secure: true,
				path: '/',
			});

			cookies().set(COOKIE_KEYS.user, JSON.stringify(user), {
				httpOnly: false,
				maxAge: 3600,
				secure: true,
				path: '/',
			});

			return { data: user, err: null };
		})
		.catch(
			({
				response: {
					data: {
						error: { status, name, message, details },
					},
				},
			}) => ({
				err: { message, status, details },
				data: null,
			})
		);
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
		.then((res) => {
			cookies().set(COOKIE_KEYS.user, JSON.stringify(res.data), {
				httpOnly: false,
				maxAge: 3600,
				secure: true,
				path: '/',
			});
			return data;
		})
		.then(({ data }) => ({ data, err: null }))
		.catch(
			({
				response: {
					data: {
						error: { message, details, status },
					},
				},
			}: {
				response: { data: SERVER_ERROR };
			}) => ({
				err: { message, status, details },
				data: null,
			})
		);
};

export const uploadResourceEndpointData = async ({
	method = 'POST',
	data,
	url,
}: TApiHandlerProps) => {
	const auth = await getCookieAsync({ name: COOKIE_KEYS.auth });

	return fetch(`${BACKEND_BASE_URL}/api/${url}`, {
		body: data,
		method,
		headers: {
			Authorization: `Bearer ${auth}`,
		},
	})
		.then((data) => data.json())
		.then(({ data, error }: SERVER_ERROR<TError | null>) =>
			error ? { data: null, err: error } : { data, err: null }
		)

		.catch(({ error: { message, status, details } }: SERVER_ERROR) => ({
			err: { message, status, details },
			data: null,
		}));
};

export const updateUserProfileEndpointData = async ({
	method = 'POST',
	data,
	url,
}: TApiHandlerProps) => {
	const auth = await getCookieAsync({ name: COOKIE_KEYS.auth });

	return fetch(`${BACKEND_BASE_URL}/api/${url}`, {
		body: data,
		method,
		headers: {
			Authorization: `Bearer ${auth}`,
		},
	})
		.then((data) => data.json())
		.then(({ data, error }: SERVER_ERROR<TError | null>) => {
			if (data?.id !== null || data?.id !== undefined) {
				const userCookie = cookies().get(COOKIE_KEYS.user)?.value;
				const currentUserDetails: TUSER | null = userCookie
					? JSON.parse(userCookie)
					: null;

				cookies().set(
					COOKIE_KEYS.user,
					JSON.stringify({ ...currentUserDetails, ...data }),
					{
						httpOnly: false,
						maxAge: 3600,
						secure: true,
						path: '/',
					}
				);
			}
			return error ? { data: null, err: error } : { data, err: null };
		})

		.catch(({ error: { message, status, details } }: SERVER_ERROR) => ({
			err: { message, status, details },
			data: null,
		}));
};

export const ResetPasswordHandler = async ({ data, url }: TApiHandlerProps) => {
	const strapi = await getStrapiConfiguredInstance();
	return strapi
		.axios({ method: 'POST', data, url })
		.then(({ data }) => ({ data, err: null }))
		.catch(
			({
				response: { status, data, message },
			}: {
				response: TError & { data: Details };
			}) => ({
				err: { status, details: data, message },
				data: null,
			})
		);
};

export const deleteResourceEndpointData = async ({
	data,
	url,
}: TApiHandlerProps) => {
	const strapi = await getStrapiConfiguredInstance();
	return strapi
		.axios({ method: 'DELETE', data, url })
		.then(({ data }) => ({ data, err: null }))
		.catch(
			({
				response: { status, details: data, message },
			}: {
				response: TError;
			}) => ({
				err: { status, details: data, message },
				data: null,
			})
		);
};

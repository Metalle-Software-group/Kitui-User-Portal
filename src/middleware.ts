import { NextResponse, NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { COOKIE_KEYS, FRONTEND_BASE_URL, URL_SEARCH_PARAMS } from './constants';

export default function middleware(req: NextRequest) {
	const cookieStore = cookies();

	const userInfo = cookieStore.get(COOKIE_KEYS.user);
	const token = cookieStore.get(COOKIE_KEYS.auth);

	let authenticated = token && userInfo ? true : false;

	const base_URL = `${FRONTEND_BASE_URL}/auth/signin?${
		URL_SEARCH_PARAMS.redirect
	}=${encodeURIComponent(req.url)}`;

	return authenticated
		? NextResponse.next()
		: NextResponse.redirect(base_URL, {
				status: 302,
		  });
}

export const config = {
	matcher: ['/jobs/:path/apply', '/profile'],
};

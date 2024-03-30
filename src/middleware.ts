import { NextResponse, NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { COOKIE_KEYS, URL_SEARCH_PARAMS } from './constants';

export default function middleware(req: NextRequest) {
	const cookieStore = cookies();

	const userInfo = cookieStore.get(COOKIE_KEYS.user);
	const token = cookieStore.get(COOKIE_KEYS.auth);

	let authenticated = token && userInfo ? true : false;

	const base_URL = `http${process.env.NODE_ENV === 'production' ? 's' : ''}://${
		new URL(req.url).host
	}/auth?${URL_SEARCH_PARAMS.redirect}=${encodeURIComponent(req.url)}`;

	return authenticated
		? NextResponse.next()
		: NextResponse.redirect(base_URL, {
				status: 302,
		  });
}

export const config = {
	matcher: ['/jobs/:path/apply', '/profile'],
};

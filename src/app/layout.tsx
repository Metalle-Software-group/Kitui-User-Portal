// 'use client';
import './globals.css';

import { Nunito_Sans } from 'next/font/google';
import { Metadata } from 'next';

import { PLATFORM_PREFIX_NAME, PLATFORM_SUFFIX_NAME } from '@/constants';
import LayoutWrappers from '@/components/layout-wrappers';
import { TNodes } from '@/types/types';

export const metadata: Metadata = {
	title: `${PLATFORM_PREFIX_NAME} ${PLATFORM_SUFFIX_NAME}`,
	authors: [
		{ name: 'Metalle Software Group', url: 'metallesoftwaregroup.com' },
	],
	description: 'Kitui county Job portal',
};

const entireFont = Nunito_Sans({
	weight: ['200', '300', '400', '700', '900', '1000'],
	subsets: ['latin'],
});

export default function RootLayout({ children }: Readonly<TNodes>) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body className={entireFont.className}>
				<LayoutWrappers>{children}</LayoutWrappers>
			</body>
		</html>
	);
}

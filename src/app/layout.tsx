import { Footer } from '@/components/frames/Footer';
import { Header } from '@/components/frames/Header';
import { PLATFORM_PREFIX_NAME, PLATFORM_SUFFIX_NAME } from '@/constants';
import { Metadata } from 'next/types';

import './globals.css';

export const metadata: Metadata = {
	title: `${PLATFORM_PREFIX_NAME} | Dashboard`,
	description: `${PLATFORM_PREFIX_NAME} ${PLATFORM_SUFFIX_NAME} Dashboard`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='bg-bodyBg'>
			<Header />
			<div className='w-full mb-[120px] px-[60px]'>{children}</div>
			<Footer />
		</main>
	);
}

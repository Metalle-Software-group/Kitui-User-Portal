import { Footer } from '@/components/frames/Footer';
import { Header } from '@/components/frames/Header';
import { PLATFORM_PREFIX_NAME, PLATFORM_SUFFIX_NAME } from '@/constants';
import { Metadata } from 'next/types';

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
			<div className='w-full h-full px-[100px] pb-[100px]'>{children}</div>
			<Footer />
		</main>
	);
}

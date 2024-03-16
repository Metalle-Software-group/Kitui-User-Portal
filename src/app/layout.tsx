'use client';
import { Footer } from '@/components/frames/Footer';
import { Header } from '@/components/frames/Header';

import './globals.css';
import { Nunito } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';

// export const metadata: Metadata = {
// 	title: `${PLATFORM_PREFIX_NAME} | Dashboard`,
// 	description: `${PLATFORM_PREFIX_NAME} ${PLATFORM_SUFFIX_NAME} Dashboard`,
// };

const entireFont = Nunito({
	weight: ['200', '300', '400', '700', '900'],
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const queryClient = new QueryClient();

	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body className={entireFont.className}>
				<QueryClientProvider client={queryClient}>
					<main className='bg-bodyBg relative'>
						<Header />
						<div className='w-full mb-[120px]'>{children}</div>
						<Footer />
					</main>
				</QueryClientProvider>
			</body>
		</html>
	);
}

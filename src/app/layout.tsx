'use client';
import { Nunito } from 'next/font/google';

// assets
import './globals.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { TNodes } from '@/types/types';

const entireFont = Nunito({
	weight: ['200', '300', '400', '700', '900'],
	subsets: ['latin'],
});

export default function DashboardLayout({ children }: TNodes) {
	const queryClient = new QueryClient();

	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body className={entireFont.className}>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</body>
		</html>
	);
}

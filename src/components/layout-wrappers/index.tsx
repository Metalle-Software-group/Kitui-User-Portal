'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { usePathname } from 'next/navigation';

import I18nProvider from '@/context/languageContext';
import { Header } from '../frames/Header';
import { Footer } from '../frames/Footer';
import { TNodes } from '@/types/types';

export default function ({ children }: TNodes) {
	const pathname = usePathname();

	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<I18nProvider>
				<main className='bg-bodyBg relative'>
					<div className='hidden md:block'>
						<Header />
					</div>

					<div
						className={`w-full h-[calc(100%-108px)] ${
							!pathname.startsWith('/auth') ? 'mb-[150px] md:mb-[120px]' : null
						}`}>
						{children}
					</div>

					{!pathname.startsWith('/auth') ? <Footer /> : null}
				</main>
			</I18nProvider>
		</QueryClientProvider>
	);
}

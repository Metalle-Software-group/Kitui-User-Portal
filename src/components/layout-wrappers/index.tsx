'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { usePathname } from 'next/navigation';

import I18nProvider from '@/context/languageContext';
import { Footer } from '../frames/Footer';
import { TNodes } from '@/types/types';
import dynamic from 'next/dynamic';
import { Loader } from '../reusables/Others';

const Header = dynamic(
	() => import('../frames/Header').then((mod) => mod.Header),
	{
		ssr: false,
		loading: (props) => (
			<div className='w-full h-[200px]'>
				<Loader {...{ title: 'Loading...' }} />
			</div>
		),
	}
);

export default function ({ children }: TNodes) {
	const pathname = usePathname();

	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<I18nProvider>
				<main className='bg-bodyBg relative flex flex-col justify-center items-center'>
					<div className=' md:block'>
						<Header />
					</div>

					<div
						className={`w-full ${
							pathname.startsWith('/auth')
								? "bg-[url('/images/others/login.svg')] bg-cover bg-no-repeat"
								: 'max-w-[1440px]'
						} h-[calc(100%-108px)] ${
							!pathname.startsWith('/auth') ? 'mb-[150px] md:mb-[120px]' : ''
						}`}>
						{children}
					</div>

					{!pathname.startsWith('/auth') ? (
						<div className='w-full'>
							<Footer />
						</div>
					) : null}
				</main>
			</I18nProvider>
		</QueryClientProvider>
	);
}

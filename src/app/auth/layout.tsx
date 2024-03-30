import { Nunito_Sans } from 'next/font/google';

import { TNodes } from '@/types/types';
import { Metadata } from 'next';
import { PLATFORM_PREFIX_NAME, PLATFORM_SUFFIX_NAME } from '@/constants';

export const metadata: Metadata = {
	title: `${PLATFORM_PREFIX_NAME} ${PLATFORM_SUFFIX_NAME} | Login`,
	// authors: [
	// 	{ name: 'Metalle Software Group', url: 'metallesoftwaregroup.com' },
	// ],
	description: 'Kitui county Job portal',
};

const entireFont = Nunito_Sans({
	weight: ['200', '300', '400', '700', '900'],
	subsets: ['latin'],
});

export default function DashboardLayout({ children }: TNodes) {
	return (
		<div className='h-full'>
			<div className='w-full h-full text-login-screen-text-color bg-login-screen-text-color text-black'>
				<div className='h-full inline-block align-top w-[50%]'>
					<img
						src={'/images/others/auth-screen.png'}
						className='w-full h-full object-cover'
						alt='Diversity'
					/>
				</div>

				<div className='h-full inline-block align-top w-[50%] overflow-auto'>
					{children}
				</div>
			</div>
		</div>
	);
}

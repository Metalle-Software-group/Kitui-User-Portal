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
			<div className='w-full flex justify-center text-login-screen-text-color bg-login-screen-text-colorr h-full text-black'>
				<div className='flex-[1] h-full w-full'>
					<img
						src={'/images/others/auth-screen.png'}
						className='w-full h-full object-cover'
						alt='Diversity'
					/>
				</div>

				<div className='flex-[1] h-fit w-full overflow-y-auto'>{children}</div>
			</div>
		</div>
	);
}

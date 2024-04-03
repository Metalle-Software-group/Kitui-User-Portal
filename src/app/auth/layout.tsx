import { Metadata } from 'next';

import { PLATFORM_PREFIX_NAME, PLATFORM_SUFFIX_NAME } from '@/constants';
import { TNodes } from '@/types/types';

export const metadata: Metadata = {
	title: `${PLATFORM_PREFIX_NAME} ${PLATFORM_SUFFIX_NAME} | Login`,
	// authors: [
	// 	{ name: 'Metalle Software Group', url: 'metallesoftwaregroup.com' },
	// ],
	description: 'Kitui county Job portal',
};

export default function DashboardLayout({ children }: TNodes) {
	return (
		<div className='w-full text-login-screen-text-color bg-login-screen-text-color text-black flex justify-center'>
			<div className='w-full px-[60px] my-[50px]'>{children}</div>
		</div>
	);
}

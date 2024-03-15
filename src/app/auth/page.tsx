import { Metadata } from 'next';

import { PLATFORM_PREFIX_NAME, PLATFORM_SUFFIX_NAME } from '@/constants/';
import AuthScreen from '@/components/auth/Auth';

export const metadata: Metadata = {
	title: `${PLATFORM_PREFIX_NAME} | Login`,
	description: `${PLATFORM_PREFIX_NAME} ${PLATFORM_SUFFIX_NAME} login page`,
};

export default function Home() {
	return (
		<div className='w-full h-screen flex items-center justify-center text-login-screen-text-color bg-login-screen-text-color text-black overflow-y-auto'>
			<div className='flex-[1] h-full w-full'>
				<img
					src={'/images/others/auth-screen.png'}
					className='w-full h-full object-cover'
					alt='Diversity'
				/>
			</div>

			<div className='flex-[1] px-[0px] h-full w-full overflow-y-auto py-[50px]'>
				<AuthScreen />
			</div>
		</div>
	);
}

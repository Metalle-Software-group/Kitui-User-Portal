import { Metadata } from 'next';

import { PLATFORM_PREFIX_NAME, PLATFORM_SUFFIX_NAME } from '@/constants/';
import { AuthScreen } from '@/components/auth/Auth';

export const metadata: Metadata = {
	description: `${PLATFORM_PREFIX_NAME} ${PLATFORM_SUFFIX_NAME} login page`,
	title: `${PLATFORM_PREFIX_NAME} | Login`,
};

export default function Home() {
	return (
		<div className='w-full'>
			<AuthScreen />
		</div>
	);
}

import { Metadata } from 'next';

import { PLATFORM_PREFIX_NAME, PLATFORM_SUFFIX_NAME } from '@/constants/';
import { VerifyEmail } from '@/components/auth/Auth';

export const metadata: Metadata = {
	description: `${PLATFORM_PREFIX_NAME} ${PLATFORM_SUFFIX_NAME}`,
	title: `${PLATFORM_PREFIX_NAME} | Verify email`,
};

export default function Home() {
	return (
		<div className='w-full'>
			<VerifyEmail />
		</div>
	);
}

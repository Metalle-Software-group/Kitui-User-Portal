import { Metadata } from 'next';

import { PLATFORM_PREFIX_NAME, PLATFORM_SUFFIX_NAME } from '@/constants/';
import { CreateUser } from '@/components/auth/Auth';

export const metadata: Metadata = {
	description: `${PLATFORM_PREFIX_NAME} ${PLATFORM_SUFFIX_NAME} register page`,
	title: `${PLATFORM_PREFIX_NAME} | Register`,
};

export default function Home() {
	return (
		<div className='w-full'>
			<CreateUser />
		</div>
	);
}

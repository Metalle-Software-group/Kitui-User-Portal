import { Metadata } from 'next';

import { PLATFORM_PREFIX_NAME, PLATFORM_SUFFIX_NAME } from '@/constants';
import { AuthPasswordWrapper } from '@/components/reusables/Others';

export const metadata: Metadata = {
	title: `${PLATFORM_PREFIX_NAME} | Reset password`,
	description: `${PLATFORM_PREFIX_NAME} ${PLATFORM_SUFFIX_NAME} Reset password`,
};

export default function Home() {
	return (
		<div className="w-full h-[100dvh] bg-[url('/images/others/login.svg')] bg-cover bg-no-repeat">
			<AuthPasswordWrapper />
		</div>
	);
}

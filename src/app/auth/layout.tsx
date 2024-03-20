import { Nunito_Sans } from 'next/font/google';

import { TNodes } from '@/types/types';
import { Metadata } from 'next';
import { PLATFORM_PREFIX_NAME, PLATFORM_SUFFIX_NAME } from '@/constants';
import { AuthLayout } from '@/components/layout-wrappers';

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
		<html lang='en' suppressHydrationWarning={true}>
			<body className={entireFont.className}>
				<AuthLayout>{children}</AuthLayout>
			</body>
		</html>
	);
}

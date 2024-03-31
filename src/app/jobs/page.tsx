'use client';
import { JobContainer } from '@/components/reusables/Others';

import { Suspense } from 'react';

export default function () {
	return (
		<Suspense>
			<JobContainer />
		</Suspense>
	);
}

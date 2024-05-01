'use client';

import { Loader } from '@/components/reusables/Others';
import dynamic from 'next/dynamic';
const SingleJobPage = dynamic(
	() =>
		import('@/components/reusables/Others').then(
			({ SingleJobPage }) => SingleJobPage
		),
	{
		ssr: false,
		loading: () => (
			<div className='w-full h-[200px]'>
				<Loader {...{ title: 'Loading...' }} />
			</div>
		),
	}
);

export default function ({ params }: { params: { jobId: string } }) {
	const { jobId } = params;

	return (
		<div className='w-full'>
			<SingleJobPage {...{ jobId }} />
		</div>
	);
}

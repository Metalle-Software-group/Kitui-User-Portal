'use client';

import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { formatDistance } from 'date-fns';
import { useQuery } from 'react-query';

import { CommentForm } from '@/components/reusables/CommentForm';
import { UploadDocsCard } from '@/components/cards/UploadDocsCard';
import { SloganWithCategory } from '@/components/reusables/Slogan';
import { Comments, Loader } from '@/components/reusables/Others';
import { fetchEndpointData } from '@/utils/server';
import { Alert } from '@/components/cards/Alert';
import { useQueryCustomWrapper } from '@/utils';
import { TJob } from '@/types/types';
import { ArrowRight } from 'lucide-react';
import RichTexEditor from '@/components/editor/RichText';

export default function ({ params }: { params: { jobId: string } }) {
	const pathname = usePathname();
	const { t } = useTranslation();

	const { jobId } = params;

	const { isLoading, isError, data } = useQuery({
		queryFn: useQueryCustomWrapper<TJob>,
		queryKey: [
			`jobs-data-${jobId}`,
			{
				url: `jobs/${jobId}`,
				qFunc: fetchEndpointData,
				options: {
					sort: 'createdAt:desc',
					populate: ['ministry', 'job_type', 'applications', 'comments'],
				},
			},
		],
		enabled: !!jobId,
	});

	console.log(data);

	return (
		<div className='w-full space-y-10'>
			{isLoading ? (
				<div className='w-full h-[400px] bg-light-Purple'>
					<Loader />
				</div>
			) : isError ? (
				<div className='w-full h-[400px] bg-light-Purple'>
					<Loader {...{ title: '' }} />
				</div>
			) : (
				<div>
					<SloganWithCategory
						{...{
							comments: data?.data?.comments.length ?? 0,
							category: data?.data?.ministry.name ?? '',
							type: data?.data?.job_type?.name ?? '',
							location: data?.data.location ?? '',
							title: data?.data?.title ?? '',
							datePosted: formatDistance(
								new Date(),
								data?.data?.application_end
									? new Date(data.data?.application_end)
									: new Date(),
								{ addSuffix: true }
							),
							slogan: t(
								'Make a real difference in your community by joining a vibrant team dedicated to serving the public good'
							),
						}}
					/>
				</div>
			)}

			<div className='px-[20px] pb-[20px] md:px-[100px] md:pb-[100px] space-y-10'>
				<div className='flex flex-col md:flex-row w-full gap-[10px]'>
					{isLoading ? (
						<div className='w-full h-full'>
							<Loader />
						</div>
					) : isError ? (
						<div className='w-full h-full'>
							<Loader {...{ title: 'Error loading data' }} />
						</div>
					) : (
						<div className='md:w-[70%] space-y-10'>
							<RichTexEditor {...{ value: data?.data?.description ?? '' }} />
							{data?.data?.comments && (
								<Comments comments={data.data?.comments} />
							)}
							<CommentForm />
						</div>
					)}
					<section className='md:w-[30%] space-y-10'>
						{isLoading ? (
							<div className='w-full md:w-[400px] flex flex-col border border-socialsColor rounded-[16px] px-[16px] py-[32px] gap-[16px] h-fit bg-white space-y-10'>
								<Loader />
							</div>
						) : isError ? (
							<div className='w-full md:w-[400px] flex flex-col border border-socialsColor rounded-[16px] px-[16px] py-[32px] gap-[16px] h-fit bg-white space-y-10'>
								<Loader {...{ title: 'Error loading data' }} />
							</div>
						) : (
							<UploadDocsCard
								{...{ applyUrl: `${pathname}/apply`, data: data?.data }}
							/>
						)}
					</section>
				</div>
				<section className='space-y-5'>
					<div className='flex w-full justify-between'>
						<p className='font-bold text-[20px] md:text-[30px] md:leading-[36px] md:tracking-[.75%] text-textTitle'>
							{t('You May Also Be Interested In')}
						</p>
						<button className='flex space-x-2 items-center cursor-pointer'>
							<p className='font-[600] text-[14px] leading-[20px] text-mainGreen'>
								{t('See All Jobs')}
							</p>
							<ArrowRight
								className='stroke-main-Green'
								width={'24px'}
								height={'24px'}
							/>
						</button>
					</div>
					<div className='flex md:grid md:grid-cols-2 gap-[16px] overflow-x-auto'>
						{/* {Featured.slice(0, 2).map((job) => (
							<FindJobsCard
								key={job.name}
								name={job.name}
								category={job.category}
								type={job.type}
								location={job.location}
								datePosted={job.datePosted}
								description={job.description}
								comments={job.comments}
								width='600px'
							/>
						))} */}
					</div>
				</section>
				<section>
					<Alert
						name={t('Never Miss Your Dream Job!')}
						icon={''}
						description={t(
							'Sign up for job alerts and get notified straight to your inbox when openings matching your profession are posted. Dont wait, register today and take the first step towards your perfect career!'
						)}
						buttonText={t('Get Job Alerts Now!')}
					/>
				</section>
			</div>
		</div>
	);
}

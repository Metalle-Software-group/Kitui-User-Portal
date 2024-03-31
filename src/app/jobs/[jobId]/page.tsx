'use client';

import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { formatDistance } from 'date-fns';
import { useQuery } from 'react-query';

import { CommentForm } from '@/components/reusables/CommentForm';
import { UploadDocsCard } from '@/components/cards/UploadDocsCard';
import { SloganWithCategory } from '@/components/reusables/Slogan';
import { Loader } from '@/components/reusables/Others';
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
							comments: data?.comments.length ?? 0,
							category: data?.ministry.name ?? '',
							type: data?.job_type?.name ?? '',
							location: data?.location ?? '',
							title: data?.title ?? '',
							datePosted: formatDistance(
								new Date(),
								data?.application_end
									? new Date(data?.application_end)
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
							<RichTexEditor {...{ value: data?.description ?? '' }} />
							{/* <JobDetails
							about={
								'The County Government is seeking a passionate and dedicated Public Health Educator to join our team and play a vital role in educating the community about critical health issues.'
							}
							responsibility={[
								'Develop and deliver informative materials: Create engaging presentations, brochures, and other resources to educate the public on a variety of topics, including disease prevention, healthy lifestyles, and community health initiatives.',
								'Conduct outreach programs: Organize workshops, seminars, and community events to reach diverse populations and raise awareness about important health concerns.',
								'Collaborate with stakeholders: Work closely with local organizations, healthcare professionals, and community leaders to develop and implement effective health promotion strategies.',
								'Provide individual and group education: Offer individual consultations and facilitate group discussions to empower individuals to make informed choices about their health.',
								'Evaluate program effectiveness: Assess the impact of your educational efforts and adapt programming accordingly to ensure continuous improvement.',
							]}
							qualifications={[
								'Bachelors degree in public health, health education, or a related field.',
								'Experience developing and delivering health education materials and programs.',
								'Strong public speaking and presentation skills.',
								'Ability to work independently and as part of a team.',
							]}
							benefits={[
								'Competitive salary and benefits package.',
								'Opportunity to make a real difference in the lives of others.',
								'Be part of a passionate team dedicated to improving community health.',
							]}
							comments={
								data
									? data?.comments.map((comment) => ({
											name: comment.createdBy.username,
											comment: comment.message,
											timeline: formatDistance(comment.createdAt, new Date(), {
												includeSeconds: true,
												addSuffix: true,
											}),

											replies: comment.replies.map((reply) => ({
												name: reply.createdBy.username,
												timeline: formatDistance(reply.createdAt, new Date(), {
													addSuffix: true,
												}),
												comment: reply.message,
											})),
									  }))
									: []
							}
							remark={
								'If you are passionate about public health, have a strong desire to educate others, and are committed to making a positive impact in your community, we encourage you to apply!'
							}
						/> */}
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
							<UploadDocsCard {...{ applyUrl: `${pathname}/apply`, data }} />
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

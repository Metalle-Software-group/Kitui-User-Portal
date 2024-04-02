'use client';

import { useRouter } from 'next/navigation';
import { formatDistance } from 'date-fns';

import { TJob } from '@/types/types';
import {
	JobMinistryTag,
	JobType,
	Loader,
	LocationLabel,
	TimeLimitLabel,
} from '../reusables/Others';
import { MessageIcon } from '../icons';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';

const RichTexEditor = dynamic(() => import('@/components/editor/RichText'), {
	ssr: false,
	loading: () => (
		<div className='dark:text-white w-[98%] h-[70px] selection:bg-inherit rounded-[12px] bg-sidebar-bg-light dark:bg-sidebar-bg text-body-bg dark:text-foundation flex items-center justify-self-center py-[10px] ml-4 mr-2'>
			<Loader
				{...{
					title: 'Loading...',
				}}
			/>
		</div>
	),
});

export const FindJobsCard = ({
	description,
	about_job,
	createdAt,
	comments,
	job_type,
	location,
	ministry,
	title,
	id,
}: TJob) => {
	const router = useRouter();

	return (
		<div
			className={`flex flex-col w-full  h-fit rounded-[20px] p-[20px] border-[1px] border-boxBorder-color justify-center items-start space-y-3 cursor-pointer`}
			{...{
				onClick: (e) => router.push(`/jobs/${id}`),
				title: 'Open this job',
			}}>
			<div className='flex gap-[16px] justify-between'>
				<p className='font-bold text-[18px] leading-[24.55px] text-title-text-color'>
					{title}
				</p>

				<div className='w-fit'>
					<JobMinistryTag
						{...{
							textClassName: 'text-dev-accent',
							ministry_name: ministry?.name ?? 'Ministry not found',
							className: 'bg-tag-color',
							dotClass: 'bg-dev-accent',
						}}
					/>
				</div>
			</div>

			<div className='my-[8px] flex gap-2 md:gap-[16px] items-center'>
				<div className='w-fit'>
					<JobType {...{ name: job_type?.name ?? 'Attachment' }} />
				</div>

				<div className='w-fit'>
					<LocationLabel {...{ name: location }} />
				</div>

				<div className='w-fit'>
					<TimeLimitLabel
						{...{
							name: formatDistance(
								new Date(),
								createdAt ? new Date(createdAt) : new Date(),
								{ addSuffix: true }
							),
						}}
					/>
				</div>
			</div>

			<div className='font-semibold text-[14px] leading-[24px] text-commentCardTextColor text-wrap'>
				{/* <RichTexEditor {...{ value: description }} /> */}
				{about_job}
			</div>

			<div className='flex w-full justify-between items-center'>
				<button className='flex w-[130px] rounded-[8px] bg-foundationGreen justify-center items-center'>
					<p className='font-semibold  text-[14px] leading-[20px] text-foundationGreen2 px-[8px] py-[14px]'>
						Apply Now
					</p>

					<ArrowRight
						className='stroke-main-Green'
						width={'24px'}
						height={'24px'}
					/>
				</button>
				<button className='flex w-[38px] justify-between items-center'>
					<MessageIcon
						{...{
							svgElementClassName: 'fill-commentOutlinerColor',
							className: 'w-[19px] h-[18px]',
							applyToSvgEl: true,
						}}
					/>
					<p className='font-[600]  text-[14px] leading-[20px] text-commentOutlinerColor'>
						{comments?.length}
					</p>
				</button>
			</div>
		</div>
	);
};

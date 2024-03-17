'use client';
import { FeaturedJobsTypes } from '@/types/types';
import Image from 'next/image';
import {
	JobMinistryTag,
	JobType,
	LocationLabel,
	TimeLimitLabel,
} from '../reusables/Others';
import { ArrowRightIcon } from '../icons';

export const FindJobsCard = ({
	name,
	category,
	type,
	location,
	datePosted,
	description,
	comments,
	width,
}: FeaturedJobsTypes) => {
	return (
		<div
			className={`flex flex-col w-fit ${
				width ? `md:w-[${width}]` : 'md:w-[800px]'
			} h-fit rounded-[20px] p-[20px] border-[1px] border-[#E9E9E9] justify-center items-start space-y-3`}>
			<div className='flex gap-[16px] justify-between'>
				<p className='font-bold text-[18px] leading-[24.55px] text-title-text-color'>
					Public Health Officer
				</p>

				<div className='w-fit'>
					<JobMinistryTag
						{...{
							textClassName: 'text-dev-accent',
							ministry_name: 'Youth & Culture',
							className: 'bg-tag-color',
							dotClass: 'bg-dev-accent',
						}}
					/>
				</div>
			</div>

			<div className='my-[8px] flex gap-2 md:gap-[16px] items-center'>
				<div className='w-fit'>
					<JobType />
				</div>

				<div className='w-fit'>
					<LocationLabel />
				</div>

				<div className='w-fit'>
					<TimeLimitLabel />
				</div>
			</div>

			<p className='font-[600] text-[14px] leading-[24px] text-commentCardTextColor'>
				{description}
			</p>

			<div className='flex w-full justify-between items-center'>
				<button className='flex w-[130px] rounded-[8px] bg-foundationGreen justify-center items-center'>
					<p className='font-[600]  text-[14px] leading-[20px] text-foundationGreen2 px-[8px] py-[14px]'>
						Apply Now
					</p>

					<ArrowRightIcon
						{...{
							svgElementClassName: 'fill-main-Green stroke-main-Green',
							applyToSvgEl: true,
							className: 'w-[24px] h-[24px]',
						}}
					/>
				</button>
				<button className='flex w-[38px] justify-between items-center'>
					<Image src='/message.svg' alt='comments' width={18} height={18} />
					<p className='font-[600]  text-[14px] leading-[20px] text-[#6B7280]'>
						{comments}
					</p>
				</button>
			</div>
		</div>
	);
};

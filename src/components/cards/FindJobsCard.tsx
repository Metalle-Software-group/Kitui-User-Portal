'use client';
import { FeaturedJobsTypes } from '@/types/types';
import {
	JobMinistryTag,
	JobType,
	LocationLabel,
	TimeLimitLabel,
} from '../reusables/Others';
import { ArrowRightIcon, MessageIcon } from '../icons';
import { usePathname, useRouter } from 'next/navigation';

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
	const pathname = usePathname();
	const router = useRouter();

	return (
		<div
			className={`flex flex-col w-fit ${
				width ? `md:w-[${width}]` : 'md:w-[800px]'
			} h-fit rounded-[20px] p-[20px] border-[1px] border-boxBorder-color justify-center items-start space-y-3 cursor-pointer`}
			{...{
				onClick: (e) => router.push(`${pathname}/id`),
				title: 'Open this job',
			}}>
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
					<MessageIcon
						{...{
							svgElementClassName: 'fill-commentOutlinerColor',
							className: 'w-[19px] h-[18px]',
							applyToSvgEl: true,
						}}
					/>
					<p className='font-[600]  text-[14px] leading-[20px] text-commentOutlinerColor'>
						{comments}
					</p>
				</button>
			</div>
		</div>
	);
};

import { FeaturedJobsTypes } from '@/types/types';
import Image from 'next/image';
import { MessageIcon } from '../icons';
import { LocationLabel } from '../reusables/Others';

export const FeaturedJobs = ({
	name,
	category,
	type,
	location,
	datePosted,
	description,
	comments,
}: FeaturedJobsTypes) => {
	return (
		<div className='flex flex-col w-[500px] h-[300px] rounded-[20px] p-[20px] border-[1px] border-tag-color justify-center items-start space-y-3'>
			<div className='flex justify-between'>
				<p className='font-bold text-[18px] leading[24.55px] text-textTitle'>
					{name}
				</p>
				<div className='flex w-fit ml-3 rounded-[10px] bg-tag-color border items-center'>
					<div className='rounded-full w-[6px] h-[6px] bg-mainGreen mr-2 ml-2'></div>
					{category}
				</div>
			</div>
			<div className='flex w-[300px] justify-between'>
				<div className='flex border w-[120px] rounded-[10px] bg-jobTypeBorderColor items-center justify-center'>
					{type}
				</div>
				<div className='flex items-center'>
					<LocationLabel />

					<p className='font-semibold text-[12px] leading-[16px] text-commentCardTextColor ml-1'>
						{location}
					</p>
				</div>
				<div className='flex items-center'>
					<Image src='clock.svg' alt='clock' width={18} height={18} />
					{/* <TimeLimitLabel {...{ name: datePosted }} /> */}
					<p className='font-[600] text-[12px] leading-[16px] text-commentCardTextColor ml-1'>
						{datePosted}
					</p>
				</div>
			</div>
			<p className='font-semibold text-[14px] leading-[24px] text-commentCardTextColor'>
				{description}
			</p>
			<div className='flex w-full justify-between items-center'>
				<button className='flex w-[130px] rounded-[8px] bg-foundationGreen justify-center items-center'>
					<p className='font-semibold  text-[14px] leading-[20px] text-foundationGreen2 px-[8px] py-[14px]'>
						Apply Now
					</p>
					<Image
						src='/icons/arrowRight.svg'
						alt='arrow right'
						width={18}
						height={18}
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
					<p className='font-semibold  text-[14px] leading-[20px] text-commentOutlinerColor'>
						{comments}
					</p>
				</button>
			</div>
		</div>
	);
};

import { JobDescriptionTypes } from '@/types/types';
import { Comments } from '../reusables/Others';

export const JobDetails = ({
	qualifications,
	responsibility,
	comments,
	benefits,
	remark,
	about,
}: JobDescriptionTypes) => {
	return (
		<div className='flex flex-col space-y-10'>
			<div className='flex flex-col gap-[6px]'>
				<p className='font-semibold text-[20px] leading-[28px] text-textTitle'>
					About The Role
				</p>
				<p className='text-bodyText font-normal text-[16px] leading-[24px]'>
					{about}
				</p>
			</div>
			<div className='flex flex-col gap-[6px]'>
				<p className='font-semibold text-[20px] leading-[28px] text-textTitle'>
					Responsibility
				</p>
				<ul className='list-disc'>
					{responsibility.map((e) => (
						<li
							key={e}
							className='text-bodyText font-normal text-[16px] leading-[24px]'>
							{e}
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-col gap-[6px]'>
				<p className='font-semibold text-[20px] leading-[28px] text-textTitle'>
					Qualifications
				</p>
				<ul className='list-disc'>
					{qualifications.map((e) => (
						<li
							key={e}
							className='text-bodyText font-normal text-[16px] leading-[24px]'>
							{e}
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-col gap-[6px]'>
				<p className='font-semibold text-[20px] leading-[28px] text-textTitle'>
					Benefits
				</p>
				<ul className='list-disc'>
					{benefits.map((e) => (
						<li
							key={e}
							className='text-bodyText font-normal text-[16px] leading-[24px]'>
							{e}
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-col gap-[6px]'>
				<Comments
					{...{
						comments,
						remark,
					}}
				/>
			</div>
		</div>
	);
};

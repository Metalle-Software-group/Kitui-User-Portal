import { ApplicantsIcon, ClockIcon, CommentsIcon, DeleteIcon } from '../icons';
import {
	TComponentBasicProps,
	TDepartmentCardProps,
	THowItWorksCardProps,
} from '@/types/types';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

export const JobType = ({
	className = 'border-brown-border text-brown-text px-[12px] py-[4px] rounded-[40px]',
	name = 'Attachment',
}: {
	className?: string;
	name?: string;
}) => {
	return (
		<p className={`border h-fit font-bold selection:bg-inherit ${className}`}>
			{name}
		</p>
	);
};

export const TimeLimitLabel = () => (
	<div className='flex gap-[4px] items-center justify-center'>
		<ClockIcon
			{...{
				styles: {
					width: '20px',
					height: '20px',
				},
				svgElementClassName: 'stroke-gray-body-text',
			}}
		/>
		<p className='text-time-color'>2 days ago</p>
	</div>
);

export const JobMinistryTag = ({
	textClassName = 'text-dev-accent',
	ministry_name = 'Youth & Culture',
	className = 'bg-tag-color',
	dotClass = 'bg-dev-accent',
}: {
	textClassName?: string;
	ministry_name: string;
	className?: string;
	dotClass?: string;
}) => (
	<div
		className={`rounded-[40px] gap-[4px] px-[12px] py-[4px] flex  min-h[24px] items-center ${className}`}>
		<p className={`w-[6px] h-[6px] rounded-full ${dotClass}`} />
		<p className={`font-bold leading-[16.37px] text-[12px] ${textClassName}`}>
			{ministry_name}
		</p>
	</div>
);

export const LocationIcon = ({
	svgElementClassName,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			className,
			style: styles,
		}}>
		<svg viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M20 9.75C20 16.5 12.5 21.75 12.5 21.75C12.5 21.75 5 16.5 5 9.75C5 7.76088 5.79018 5.85322 7.1967 4.4467C8.60322 3.04018 10.5109 2.25 12.5 2.25C14.4891 2.25 16.3968 3.04018 17.8033 4.4467C19.2098 5.85322 20 7.76088 20 9.75Z'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.5 14.4404C14.7091 14.4404 16.5 12.6496 16.5 10.4404C16.5 8.23129 14.7091 6.44043 12.5 6.44043C10.2909 6.44043 8.5 8.23129 8.5 10.4404C8.5 12.6496 10.2909 14.4404 12.5 14.4404Z'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	</div>
);

export const LocationLabel = () => (
	<div className='flex gap-[4px] items-center justify-center'>
		<LocationIcon
			{...{
				styles: {
					width: '20px',
					height: '20px',
				},
				svgElementClassName: 'stroke-gray-body-text',
			}}
		/>
		<p>Mwingi</p>
	</div>
);

export const ApplicantCountIcon = ({ count = 59 }: { count?: number }) => {
	return (
		<div className='flex gap-[6px] items-center justify-center'>
			<ApplicantsIcon
				{...{
					styles: {
						width: '28px',
						height: '28px',
					},
					svgElementClassName: 'stroke-gray-body-text',
				}}
			/>
			<p className='text-gray-body-text text-[14px] leading-[24px] font-normal'>
				{count} Applications
			</p>
		</div>
	);
};

export const Loader = ({ title = 'Loading data...' }: { title?: string }) => (
	<div className='w-full h-full flex justify-center items-center'>{title}</div>
);

export const DepartmentCard = ({
	subtitle,
	Icon,
	title,
}: TDepartmentCardProps) => (
	<div className='w-[265px] h-[202px] gap-[24px] rounded-[20px] p-[20px] border border-gray-300 flex flex-col items-center justify-around'>
		<div className=''>
			{Icon ? (
				<Icon
					{...{
						styles: {
							width: '61px',
							height: '60px',
						},
						svgElementClassName: 'fill-main-Green',
					}}
				/>
			) : null}
		</div>
		<div className='flex flex-col gap-[6px]'>
			<p className='font-bold text-center leading-[28px] text-[20px] text-title-text-color'>
				{title}
			</p>
			<p className='font-normal leading-[24px] text-gray-body-text text-center text-[16px]'>
				{subtitle}
			</p>
		</div>
	</div>
);

export const Comment = () => {
	return (
		<div className='w-fit'>
			<div className='flex justify-between'>
				<div className='flex gap-[6px] my-[6px]'>
					<p className='font-bold text-[16px] leading-[24px] text-name-color'>
						Musyoka Juma
					</p>
					<span className='font-normal text-[14px] leading-[24px] text-gray-body-text'>
						says
					</span>
				</div>

				<div className='bg-delete-btn w-[30px] h-[30px] rounded-[8px] gap-[8px] flex items-center justify-center cursor-pointer selection:bg-inherit'>
					<DeleteIcon
						{...{
							svgElementClassName: 'stroke-red-500',
							applyToSvgEl: false,
							styles: {
								width: '20px',
								height: '20px',
							},
						}}
					/>
				</div>
			</div>

			<div className='my-[6px] selection:bg-inherit'>
				<div className='text-gray-body-text font-normal text-[14px] leading-[24px]'>
					Develop and deliver informative materials: Create engaging
					presentations, brochures, and other resources to educate the public on
					a variety of topics, including disease prevention, healthy lifestyles,
					and community health initiatives.
				</div>

				<div className=''>
					<p className='text-green-text'>a min ago</p>
				</div>
			</div>
		</div>
	);
};

export const CommentCard = () => {
	return (
		<div className='w-[379px] p-[20px] bg-white border mx-auto rounded-[20px] gap-[12px] border-boxBorder-color'>
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

			<div className='my-[8px] flex gap-[16px] items-center'>
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

			<div className='w-fit leading-[24px] font-normal text-[14px] text-commentCardTextColor my-[4px]'>
				Join our passionate team of public health professionals and help educate
				the community about critical health issues. You'll develop and deliver
				info....
			</div>

			<div className='flex justify-between my-[6px]'>
				<div
					className='bg-tag-color w-fit h-fit flex gap-[2px] rounded-[8px] px-[14px] py-[8px] items-center justify-center selection:bg-inherit'
					role='button'>
					<p className='text-dev-accent w-fit font-semibold text-[14px] leading-[20px]'>
						View Job
					</p>
					<ArrowRightIcon width={24} height={24} color='#0B7437' />
				</div>

				<div className='flex gap-[4px] items-center justify-center selection:bg-inherit cursor-pointer'>
					<CommentsIcon
						{...{
							styles: {
								width: '20px',
								height: '20px',
							},
							svgElementClassName: 'stroke-gray-body-text',
						}}
					/>
					<p className='text-time-color'>3</p>
				</div>
			</div>
		</div>
	);
};

export const HowItWorksCard = ({
	Icon,
	title,
	subtitle,
	step,
}: THowItWorksCardProps) => {
	return (
		<div className='flex flex-col gap-[16px] p-[12px] rounded-[20px] w-[330px] items-center justify-center'>
			<div className=''>
				<Image src={Icon} width={200} height={200} alt={title} />
			</div>

			<div className='gap-[4px] flex flex-col justify-center items-center'>
				<p className='font-bold text-[20px] leading-[28px] tracking-[.5%] text-center text-textTitle'>
					{title}
				</p>
				<p className='text-bodyText leading-[24px] text-[16px] font-normal text-center'>
					{subtitle}
				</p>
			</div>
		</div>
	);
};

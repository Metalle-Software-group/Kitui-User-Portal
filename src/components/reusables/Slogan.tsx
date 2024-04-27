'use client';
import {
	FilterJobsTypes,
	SloganType,
	SloganWithCategoryType,
	TMoreSearchTypes,
} from '@/types/types';
import { SearchJob } from '../frames/SearchJob';
import {
	JobMinistryTag,
	JobType,
	LocationLabel,
	TimeLimitLabel,
} from './Others';
import { MessageIcon } from '../icons';
import { useTranslation } from 'react-i18next';

export const Slogan = ({
	currentValue = '',
	onClickHandler,
	beginningText,
	endingText,
	middleText,
	onChange,
	slogan,
	type,
	title,
}: SloganType &
	Pick<FilterJobsTypes, 'onChange' | 'type'> &
	TMoreSearchTypes) => {
	const { t } = useTranslation();
	return (
		<div
			className={`flex flex-col w-full bg-light-Purple h-[200px] md:h-[400px] items-center justify-center`}>
			<div className='w-fit flex flex-col gap-[24px]'>
				{middleText && (
					<div className='flex space-x-2 justify-center'>
						<p className='font-extrabold text-[24px] md:text-[48px] md:leading-[65.47px] text-textTitle'>
							{beginningText}
						</p>
						<p
							className={`text-main-Green font-extrabold text-[24px] md:text-[48px] md:leading-[65.47px]`}>
							{middleText}
						</p>
						<p className='font-extrabold text-[24px] md:text-[48px] md:leading-[65.47px] text-textTitle'>
							{endingText}
						</p>
					</div>
				)}
				{!middleText && (
					<p className='font-extrabold text-[24px] md:text-[48px] md:leading-[65.47px] text-textTitle'>
						{title}
					</p>
				)}
				<p className='font-normal leading-[24px] text-[16px] text-center text-bodyText'>
					{slogan}
				</p>
				<div className='w-full'>
					<SearchJob
						placeholder={t('Job title or keyword')}
						searchText={t('Search Job')}
						{...{
							onClickHandler,
							currentValue,
							width: '100%',
							onChange,
							type,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export const SloganWithCategory = ({
	datePosted,
	category,
	comments,
	location,
	slogan,
	type,
	title,
}: SloganWithCategoryType) => {
	return (
		<div
			className={`flex flex-col w-full h-[400px] items-center justify-center bg-light-Purple gap-[24px] p-5 md:p-0`}>
			<div className='flex flex-col sm:flex-row w-full justify-center space-x-5 items-center'>
				<p className='font-extrabold text-[24px] md:text-[48px] md:leading-[65.47px] text-textTitle'>
					{title}
				</p>
				<div className='w-fit'>
					<JobMinistryTag
						{...{
							className:
								'bg-bodyBg md:px-[16px] md:py-[6px] rounded-[40px] gap-[8px]',
							dotClass: 'bg-mainGreen w-[6px] h-[6px]',
							textClassName:
								'text-mainGreen text-[14px] leading-[24px] w-fit font-normal',
							ministry_name: category,
						}}
					/>
				</div>
			</div>

			<p className='text-bodyText leading-[24px] text-[16px] font-normal'>
				{slogan}
			</p>

			<div className='flex w-fit justify-between gap-[24px]'>
				<div className='my-[8px] flex gap-[16px] items-center flex-wrap justify-center'>
					<div className='w-fit'>
						<JobType
							{...{
								className:
									'border border-bodyBg gap-[10px] px-[12px] py-[4px] rounded-[40px] text-brown-text leading-[19.1px] font-bold text-[14px]',
								name: type,
							}}
						/>
					</div>

					<div className='w-fit'>
						<LocationLabel {...{ name: location }} />
					</div>

					<div className='w-fit'>
						<TimeLimitLabel {...{ name: datePosted }} />
					</div>
				</div>
			</div>

			<button className='flex justify-between items-center gap-[4px]'>
				<MessageIcon
					{...{
						svgElementClassName: 'fill-commentOutlinerColor',
						className: 'w-[19px] h-[18px]',
						applyToSvgEl: true,
					}}
				/>
				<p className='font-[600]  text-[14px] leading-[20px] text-commentOutlinerColor'>
					{comments} comments
				</p>
			</button>
		</div>
	);
};

export const SloganUpdates = ({
	currentValue = '',
	beginningText,
	onClickHandler,
	endingText,
	middleText,
	onChange,
	type,
	slogan,
	title,
}: SloganType &
	Pick<FilterJobsTypes, 'onChange' | 'type'> &
	TMoreSearchTypes) => {
	return (
		<div
			className={`flex flex-col w-full bg-light-Purple h-[400px] items-center justify-center`}>
			{endingText && (
				<div className='w-full flex space-x-2 justify-center'>
					<p className='font-[800] text-[48px] leading-[65.47px] text-textTitle'>
						{beginningText}
					</p>
					<p
						className={`text-[#0F9A49] font-[800] text-[48px] leading-[65.47px]`}>
						{endingText}
					</p>
				</div>
			)}
			<p>{slogan}</p>
			<SearchJob
				placeholder={'Job title or keyword'}
				searchText={'Search Job'}
				width='400px'
				{...{
					onClickHandler,
					currentValue,
					onChange,
					type,
				}}
			/>
		</div>
	);
};

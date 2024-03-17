'use client';
import { SloganType, SloganWithCategoryType } from '@/types/types';
import { SearchJob } from '../frames/SearchJob';
import Image from 'next/image';
import {
	JobMinistryTag,
	JobType,
	LocationLabel,
	TimeLimitLabel,
} from './Others';

export const Slogan = ({
	title,
	middleText,
	slogan,
	beginningText,
	endingText,
}: SloganType) => {
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
				<SearchJob
					placeholder={'Job title or keyword'}
					searchText={'Search Job'}
					onChange={() => {}}
					width='100%'
				/>
			</div>
		</div>
	);
};

export const SloganWithCategory = ({
	title,
	category,
	slogan,
	datePosted,
	type,
	comments,
	location,
}: SloganWithCategoryType) => {
	return (
		<div
			className={`flex flex-col w-full h-[400px] items-center justify-center bg-light-Purple gap-[24px]`}>
			<div className='flex w-full justify-center space-x-5 items-center'>
				<p className='font-extrabold text-[48px] leading-[65.47px] text-textTitle'>
					{title}
				</p>
				<div className='w-fit'>
					<JobMinistryTag
						{...{
							className:
								'bg-bodyBg px-[16px] py-[6px] rounded-[40px] gap-[8px]',
							dotClass: 'bg-mainGreen w-[6px] h-[6px]',
							textClassName:
								'text-mainGreen text-[14px] leading-[24px] font-normal',
							ministry_name: 'Youth & Culture',
						}}
					/>
				</div>
			</div>

			<p className='text-bodyText leading-[24px] text-[16px] font-normal'>
				{slogan}
			</p>

			<div className='flex w-fit justify-between gap-[24px]'>
				<div className='my-[8px] flex gap-[16px] items-center'>
					<div className='w-fit'>
						<JobType
							{...{
								className:
									'border border-bodyBg gap-[10px] px-[12px] py-[4px] rounded-[40px] text-brown-text leading-[19.1px] font-bold text-[14px]',
								name: 'Attachment',
							}}
						/>
					</div>

					<div className='w-fit'>
						<LocationLabel />
					</div>

					<div className='w-fit'>
						<TimeLimitLabel />
					</div>
				</div>
			</div>

			<button className='flex justify-between items-center space-x-4'>
				<Image src='/message.svg' alt='comments' width={18} height={18} />
				<p className='font-[600]  text-[14px] leading-[20px] text-[#6B7280]'>
					{comments} comments
				</p>
			</button>
		</div>
	);
};

export const SloganUpdates = ({
	title,
	middleText,
	slogan,
	beginningText,
	endingText,
}: SloganType) => {
	return (
		<div
			className={`flex flex-col w-full bg-[#F3E8FF] h-[400px] items-center justify-center`}>
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
				onChange={() => {}}
				width='400px'
			/>
		</div>
	);
};

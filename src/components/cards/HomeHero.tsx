'use client';
import { BASE_ASSET_URL } from '@/constants';
import { SearchJob } from '../frames/SearchJob';
import { GraphicsIcon } from '../icons';
import { FilterJobsTypes, TMoreSearchTypes } from '@/types/types';
import { useTranslation } from 'react-i18next';

export const HomeHero = ({
	onClickHandler,
	currentValue,
	onChange,
	type,
}: Pick<FilterJobsTypes, 'onChange' | 'type'> & TMoreSearchTypes) => {
	const { t } = useTranslation();

	return (
		<div className='h-fit flex-col sm:flex-row md:h-[700px] w-full flex gap-[24px] pt-[50px] pb-[50px] md:pt-[100px] md:pb-[100px] justify-between'>
			<section className='space-y-7  md:w-[553px]'>
				<div className='bg-purple-100 text-center px-[8px] rounded-[4px] gap-[10px] flex items-center justify-center w-fit'>
					<p className='font-semibold text-[16px] leading-[24px] text-center text-purple-800'>
						{t('Kitui County')}
					</p>
				</div>

				<div className='flex gap-[4px] flex-col relative w-fit selection:bg-inherit'>
					<div className='absolute top-[-40px] md:top-[-20px] right-0 md:right-[16px]'>
						<GraphicsIcon
							{...{
								svgElementClassName:
									'fill-[#D8B4FE] stroke-[#D8B4FE] w-[64px] h-[64px]',
								applyToSvgEl: true,
							}}
						/>
					</div>
					<p className='font-extrabold text-[24px] leading-[33px] md:text-[48px] md:leading-[65.47px] text-textTitle'>
						{t('Build Your Future')},
					</p>
					<p className='font-extrabold text-[24px] leading-[33px] md:text-[48px] md:leading-[65.47px] text-textTitle'>
						{t('Explore County Jobs')}
					</p>
				</div>

				<p className='font-normal text-[16px] leading-[24px] text-bodyText'>
					{t(
						'Make a real difference in your community by joining a vibrant team dedicated to serving the public good'
					)}
					.
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
			</section>

			<section className='w-fit'>
				<img
					src={`${BASE_ASSET_URL}/others/steps-img.png`}
					className='w-full h-full'
					alt='person'
				/>
			</section>
		</div>
	);
};

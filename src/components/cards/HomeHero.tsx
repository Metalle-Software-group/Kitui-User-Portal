'use client';
import { BASE_ASSET_URL } from '@/constants';
import { SearchJob } from '../frames/SearchJob';
import { GraphicsIcon } from '../icons';

export const HomeHero = () => {
	return (
		<div className='h-[700px] w-full flex gap-[24px] pt-[100px] pb-[100px] justify-between'>
			<section className='space-y-7 w-[553px]'>
				<div className='bg-purple-100 text-center px-[8px] rouded-[4px] gap-[10px] flex items-center justify-center w-fit'>
					<p className='font-semibold text-[16px] leading-[24px] text-center text-purple-800'>
						Kitui County
					</p>
				</div>

				<div className='flex gap-[4px] flex-col relative w-fit selection:bg-inherit'>
					<div className='absolute top-[-20px] right-[16px]'>
						<GraphicsIcon
							{...{
								svgElementClassName:
									'fill-[#D8B4FE] stroke-[#D8B4FE] w-[64px] h-[64px]',
								applyToSvgEl: true,
							}}
						/>
					</div>
					<p className='font-extrabold text-[48px] leading-[65.47px] text-textTitle'>
						Build Your Future,
					</p>
					<p className='font-extrabold text-[48px] leading-[65.47px] text-textTitle'>
						Explore County Jobs
					</p>
				</div>

				<p className='font-normal text-[16px] leading-[24px] text-bodyText'>
					Make a real difference in your community by joining a vibrant team
					dedicated to serving the public good.
				</p>

				<div className=''>
					<SearchJob
						placeholder={'Job title or keyword'}
						searchText={'Search Job'}
						{...{
							width: '100%',
						}}
						onChange={() => {}}
					/>
				</div>
			</section>
			<section className='col-span-2'>
				<img
					src={`${BASE_ASSET_URL}/others/steps-img.png`}
					className='w-full h-full'
					alt='person'
				/>
			</section>
		</div>
	);
};

'use client';

import { Alert } from '@/components/cards/Alert';
import { HomeHero } from '@/components/cards/HomeHero';
import { ArrowRightIcon } from '@/components/icons';
import { ArrowRightIcon as ArrowRightIconLucid } from 'lucide-react';
import { FeaturedJobsCategories } from '@/components/reusables/FeaturedJobsCategories';
import {
	CommentCard,
	DepartmentCard,
	HowItWorksCard,
} from '@/components/reusables/Others';
import {
	ExploreCategoryCards,
	FeaturedCategories,
	HowItWorksSteps,
} from '@/constants';

export default function () {
	return (
		<main className='w-full'>
			<section className='bg-radial-gradient px-[60px]'>
				<HomeHero />
			</section>
			<div className='space-y-10 px-[60px]'>
				<div className='flex justify-between items-center'>
					<div className='flex flex-col gap-[12px] selection:bg-inherit'>
						<p className='f font-extrabold text-[36px] leading-[36px] tracking-[-.75%] text-textTitle'>
							Explore By Category
						</p>

						<p className='font-semibold text-[16px] leading-[24px] text-bodyText text-center'>
							See available jobs categorized according to departments
						</p>
					</div>

					<div className='flex gap-[8px] cursor-pointer selection:bg-inherit'>
						<p className='font-semibold text-[14px] leading-[20px] text-main-Green'>
							See all categories
						</p>

						<ArrowRightIcon
							{...{
								svgElementClassName: 'fill-main-Green stroke-main-Green',
								applyToSvgEl: true,
								className: 'w-[20px] h-[20px]',
							}}
						/>
					</div>
				</div>

				<div className='rounded-[6px] mt-[16px] h-[98%] text-black flex flex-wrap gap-[20px] justify-between'>
					{ExploreCategoryCards.map((category, index) => (
						<div key={index}>
							<DepartmentCard {...category} />
						</div>
					))}
				</div>

				<div className='bg-purple-100 gap-[24px] px-[100px] py-[40px] flex flex-col'>
					<div className='flex gap-[12px] flex-col'>
						<p className='text-textTitle leading-[36px] text-[36px] tracking-[.75%] text-center font-extrabold'>
							How it works
						</p>

						<p className='text-bodyText text-center leading-[24px] text-[16px] font-semibold'>
							Easy Steps to Your Dream Job
						</p>
					</div>

					{/* how it works  */}
					<div className='flex gap-[24px] justify-between my-[12px]'>
						{HowItWorksSteps.map((item, index) => (
							<HowItWorksCard {...{ ...item, step: index + 1 }} key={index} />
						))}
					</div>
				</div>

				<div className='flex justify-between items-center selection:bg-inherit'>
					<div className='flex flex-col gap-[12px]'>
						<p className='f font-extrabold text-[36px] leading-[36px] tracking-[-.75%] text-textTitle'>
							Featured Jobs
						</p>

						<p className='font-semibold text-[16px] leading-[24px] text-bodyText text-center'>
							See Available jobs
						</p>
					</div>

					<div className='flex gap-[8px] cursor-pointer'>
						<p className='font-semibold text-[16px] leading-[24px] text-main-Green'>
							See all jobs
						</p>

						<ArrowRightIcon
							{...{
								svgElementClassName:
									'fill-main-Green stroke-main-Green w-[20px] h-[20px]',
								applyToSvgEl: true,
							}}
						/>
					</div>
				</div>

				<div className='flex w-full justify-center space-x-3 mb-5'>
					{FeaturedCategories.map((category) => (
						<FeaturedJobsCategories
							key={category.name}
							name={category.name}
							onChange={() => {}}
						/>
					))}
				</div>

				<div className='w-full'>
					<div className='flex gap-[12px] flex-wrap'>
						{[0, 0, 0, 0, 0, 0].map((_, index) => (
							<CommentCard key={index} />
						))}
					</div>

					<div className='flex items-center justify-center my-[20px]'>
						<div
							className='bg-main-Green w-fit h-fit flex gap-[2px] rounded-[8px] px-[18px] py-[10px] items-center justify-center selection:bg-inherit'
							role='button'>
							<p className='text-white w-fit font-semibold text-[14px] leading-[20px]'>
								More Jobs
							</p>
							<ArrowRightIconLucid width={24} height={24} color='white' />
						</div>
					</div>
				</div>

				<section>
					<Alert
						name={'Never Miss Your Dream Job!'}
						icon={''}
						description={
							'Sign up for job alerts and get notified straight to your inbox when openings matching your profession are posted. Dont wait, register today and take the first step towards your perfect career!'
						}
						buttonText={'Get Job Alerts Now!'}
					/>
				</section>
			</div>
		</main>
	);
}

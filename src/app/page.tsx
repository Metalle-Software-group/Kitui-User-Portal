'use client';

import { FeaturedJobsCategories } from '@/components/reusables/FeaturedJobsCategories';
import { HomeHero } from '@/components/cards/HomeHero';
import { Alert } from '@/components/cards/Alert';
import {
	MoreJobsComponent,
	HowItWorksCard,
	SeeAllCategories,
	DepartmentCard,
	CommentCard,
	SeeAllJobs,
} from '@/components/reusables/Others';

import {
	ExploreCategoryCards,
	FeaturedCategories,
	HowItWorksSteps,
	initialFilterState,
} from '@/constants';
import { TFilterTypes } from '@/types/types';
import { useState } from 'react';
import { getFilterUpdateFunction } from '@/utils';

// export const metadata: Metadata = { title: 'Home' };

export default function () {
	const [filters, setFilters] = useState<TFilterTypes>(initialFilterState);

	const updateFilter = getFilterUpdateFunction({ setFilters });

	return (
		<main className='w-full px-[20px] md:px-[100px]  md:mb-0'>
			<section className='bg-radial-gradient '>
				<HomeHero
					{...{
						onChange: updateFilter,
						type: 'term',
					}}
				/>
			</section>

			{/* category  */}
			<div className='space-y-10 '>
				<div className='flex justify-between items-center'>
					<div className='flex flex-col gap-[12px] selection:bg-inherit'>
						<p className='font-extrabold text-[20px] md:text-[36px] leading-[18px] md:leading-[36px] md:tracking-[-.75%] text-textTitle'>
							Explore By Category
						</p>

						<p className='md:font-semibold  md:text-[16px]  md:leading-[24px] text-bodyText '>
							See available jobs categorized according to departments
						</p>
					</div>

					<div className='flex  md:gap-[8px] cursor-pointer selection:bg-inherit'>
						<SeeAllCategories />
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-4 rounded-[6px] mt-[16px] h-[98%] text-black  gap-[20px] justify-between'>
					{ExploreCategoryCards.map((category, index) => (
						<div key={index}>
							<DepartmentCard {...category} />
						</div>
					))}
				</div>

				{/* how it works  */}
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
					<div className='flex flex-col md:flex-row gap-[24px] justify-between my-[12px]'>
						{HowItWorksSteps.map((item, index) => (
							<HowItWorksCard {...{ ...item, step: index + 1 }} key={index} />
						))}
					</div>
				</div>

				{/* featured jobs  */}
				<div className='flex justify-between items-center selection:bg-inherit'>
					<div className='flex flex-col gap-y-[12px]'>
						<p className='font-extrabold text-[20px] md:text-[36px] leading-[18px] md:leading-[36px] tracking-[-.75%] text-textTitle'>
							Featured Jobs
						</p>

						<p className='font-semibold md:text-[16px] md:leading-[24px] text-bodyText '>
							See Available jobs
						</p>
					</div>

					<div className='flex gap-[8px] cursor-pointer'>
						<SeeAllJobs />
					</div>
				</div>

				{/* featured jobs category list  */}
				<div className='flex w-full justify-center space-x-3 mb-5 overflow-x-auto'>
					{FeaturedCategories.map((category) => (
						<FeaturedJobsCategories
							key={category.name}
							name={category.name}
							onChange={() => {}}
						/>
					))}
				</div>

				{/* featured jobs card  */}
				<div className='w-full'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-[12px] '>
						{[0, 0, 0, 0, 0, 0].map((_, index) => (
							<CommentCard key={index} />
						))}
					</div>

					<div className='flex items-center justify-center my-[20px]'>
						<MoreJobsComponent />
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

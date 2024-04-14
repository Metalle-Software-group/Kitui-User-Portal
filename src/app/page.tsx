'use client';

import { HomeHero } from '@/components/cards/HomeHero';
import { Alert } from '@/components/cards/Alert';
import {
	HowItWorksCard,
	SeeMore,
	FeaturedJobs,
	Loader,
	DepartmentCard,
} from '@/components/reusables/Others';

import { HowItWorksSteps, initialFilterState } from '@/constants';
import { TFilterTypes, TMinistry } from '@/types/types';
import { useState } from 'react';
import { getFilterUpdateFunction, useQueryCustomWrapper } from '@/utils';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { fetchEndpointData } from '@/utils/server';

// export const metadata: Metadata = { title: 'Home' };

export default function () {
	const [filters, setFilters] = useState<TFilterTypes>(initialFilterState);
	const updateFilter = getFilterUpdateFunction({ setFilters });
	const { t } = useTranslation();
	const router = useRouter();

	const {
		isLoading: isMinistryLoading,
		isError: isMinistryError,
		data: ministries,
	} = useQuery({
		queryFn: useQueryCustomWrapper<TMinistry[]>,
		queryKey: [
			`ministry-data`,
			{
				url: `ministries`,
				qFunc: fetchEndpointData,
				options: {
					fields: ['name'],
				},
			},
		],
	});

	return (
		// 1440px -> px-[100px], 1300px below px-[80px], px-[16px]->686px and below
		<main className='w-full  md:mb-0 space-y-10'>
			<section className='bg-radial-gradient px-[16px] sm:px-[60px] lg:px-[80px] 2xl:px-[100px]'>
				<HomeHero
					{...{
						currentValue: filters.term,
						onChange: updateFilter,
						type: 'term',
						onClickHandler: () => {
							const searchParams = new URLSearchParams();

							searchParams.set('term', filters.term);
							filters.department.map((department) =>
								searchParams.set('departments[]', department)
							);

							filters.jobType.map((job_type) =>
								searchParams.set('job_type[]', job_type)
							);

							router.push(`/jobs?${searchParams.toString()}`);
						},
					}}
				/>
			</section>

			{/* category  */}

			<div className='flex justify-between items-center px-[16px] sm:px-[60px] lg:px-[80px] 2xl:px-[100px]'>
				<div className='flex flex-col gap-[12px] selection:bg-inherit'>
					<p className='font-extrabold text-[20px] md:text-[36px] leading-[18px] md:leading-[36px] md:tracking-[-.75%] text-textTitle'>
						{t('Explore By Category')}
					</p>

					<p className='md:font-semibold  md:text-[16px]  md:leading-[24px] text-bodyText '>
						{t('See available jobs categorized according to departments')}
					</p>
				</div>

				<SeeMore
					{...{
						title: 'See all categories',
						handler: () => {
							// const searchParams = new URLSearchParams();

							// searchParams.set('term', filters.term);
							// filters.department.map((department) =>
							// 	searchParams.set('departments[]', department)
							// );

							// filters.jobType.map((job_type) =>
							// 	searchParams.set('job_type[]', job_type)
							// );

							router.push(`/departments`);
						},
					}}
				/>
			</div>

			<div className='px-[16px] sm:px-[60px] lg:px-[80px] 2xl:px-[100px]'>
				{isMinistryLoading ? (
					<div className='w-full h-full my-[50px]'>
						<Loader />
					</div>
				) : isMinistryError ? (
					<div className='w-full h-full my-[50px]'>
						<Loader {...{ title: 'Error fetching data.' }} />
					</div>
				) : (
					<div className='flex items-center flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-[6px] mt-[16px] h-[98%] text-black gap-[20px] justify-between'>
						{ministries?.data.map((category, index) => (
							<div key={index}>
								<DepartmentCard {...category} />
							</div>
						))}
					</div>
				)}
			</div>

			{/* how it works  */}
			<div className='bg-purple-100 gap-[24px] px-[100px] py-[40px] flex flex-col'>
				<div className='flex gap-[12px] flex-col'>
					<p className='text-textTitle leading-[36px] text-[36px] tracking-[.75%] text-center font-extrabold'>
						{t('How it works')}
					</p>

					<p className='text-bodyText text-center leading-[24px] text-[16px] font-semibold'>
						{t('Easy Steps to Your Dream Job')}
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
			<div className='flex justify-between items-center selection:bg-inherit px-[16px] sm:px-[60px] lg:px-[80px] 2xl:px-[100px]'>
				<div className='flex flex-col gap-y-[12px]'>
					<p className='font-extrabold text-[20px] md:text-[36px] leading-[18px] md:leading-[36px] tracking-[-.75%] text-textTitle'>
						{t('Featured Jobs')}
					</p>

					<p className='font-semibold md:text-[16px] md:leading-[24px] text-bodyText '>
						{t('See Available jobs')}
					</p>
				</div>

				<div className='flex gap-[8px] cursor-pointer'>
					<SeeMore
						{...{
							title: 'See all jobs',
							handler: () => {
								// const searchParams = new URLSearchParams();

								// searchParams.set('term', filters.term);
								// filters.department.map((department) =>
								// 	searchParams.set('departments[]', department)
								// );

								// filters.jobType.map((job_type) =>
								// 	searchParams.set('job_type[]', job_type)
								// );

								router.push(`/jobs`);
							},
						}}
					/>
				</div>
			</div>

			{/* featured jobs  */}
			<section className='px-[16px] sm:px-[60px] lg:px-[80px] 2xl:px-[100px]'>
				<FeaturedJobs />
			</section>

			<section className='px-[16px] sm:px-[60px] lg:px-[80px] 2xl:px-[100px]'>
				<Alert
					name={t('Never Miss Your Dream Job!')}
					icon={''}
					description={t(
						'Sign up for job alerts and get notified straight to your inbox when openings matching your profession are posted. Dont wait, register today and take the first step towards your perfect career!'
					)}
					buttonText={t('Get Job Alerts Now!')}
				/>
			</section>
		</main>
	);
}

'use client';
import { Departments, EmploymentType, Featured } from '@/constants';
import { FindJobsCard } from '@/components/cards/FindJobsCard';
import { FilterCheckbox, FilterTag } from '@/components/reusables/Others';
import { Slogan } from '@/components/reusables/Slogan';
import { Alert } from '@/components/cards/Alert';

import { useState } from 'react';
import { SettingsIcon } from '@/components/icons';
import { TFilterTypes } from '@/types/types';

export default function () {
	const [filters, setFilters] = useState<TFilterTypes>({
		department: [],
		jobType: [],
	});

	return (
		<main className='w-full space-y-10'>
			<div className='w-full'>
				<Slogan
					slogan={
						'Make a real difference in your community by joining a vibrant team dedicated to serving the public good.'
					}
					beginningText='Find the'
					middleText='Right Job'
					endingText='for you'
				/>
			</div>

			<section className='px-[100px] pb-[100px]'>
				<div className='flex gap-[32px] justify-start my-[20px] w-full'>
					<div className='flex gap-[16px] items-center justify-start w-[328px]'>
						<button className='flex items-center justify-center'>
							<SettingsIcon
								{...{
									svgElementClassName:
										'fill-settingsIconColor stroke-settingsIconColor',
									applyToSvgEl: true,
									className: 'w-[24px] h-[24px]',
								}}
							/>
							<p className='text-settingsClearBarColor text-[14px] leading-[24px] font-normal'>
								Filter
							</p>
						</button>

						<div className='w-[1px] h-full bg-settingsClearColor'></div>
						<button className='flex space-x-2'>
							<p className='leading-[24px] font-normal text-[14px] text-settingsClearColor'>
								Clear All
							</p>
						</button>
					</div>

					<div className='flex gap-[12px]'>
						{EmploymentType.map(({ name }, index) => (
							<FilterTag key={index} {...{ name }} />
						))}
					</div>
				</div>
				<section className='flex w-full gap-[32px]'>
					<section className='w-[30%] space-y-10'>
						<div className='flex flex-col space-y-5'>
							<p className='selection:bg-inherit'>Departments</p>

							{Departments.map((department, index) => (
								<FilterCheckbox
									key={index}
									label={department.name}
									onChange={setFilters}
									{...{
										dataType: 'department',
										checked: filters.department.find(
											(value) => value === department.name
										)
											? true
											: false,
									}}
								/>
							))}
						</div>

						<div className='flex flex-col space-y-5'>
							<p>Employment Types</p>
							{EmploymentType.map((employment, index) => (
								<FilterCheckbox
									key={index}
									label={employment.name}
									onChange={setFilters}
									{...{
										dataType: 'jobType',
										checked: filters.jobType.find(
											(value) => value === employment.name
										)
											? true
											: false,
									}}
								/>
							))}
						</div>
					</section>
					<section className='w-[70%] mb-[100px] flex flex-col gap-[24px]'>
						{Featured.map((job, index) => (
							<FindJobsCard
								key={index}
								name={job.name}
								category={job.category}
								type={job.type}
								location={job.location}
								datePosted={job.datePosted}
								description={job.description}
								comments={job.comments}
							/>
						))}
					</section>
				</section>
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
			</section>
		</main>
	);
}

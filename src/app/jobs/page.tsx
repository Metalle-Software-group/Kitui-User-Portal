'use client';
import { Alert } from '@/components/cards/Alert';
import { Departments, EmploymentType, Featured } from '@/constants';
import { FindJobsCard } from '@/components/cards/FindJobsCard';
import { Slogan } from '@/components/reusables/Slogan';
import { SettingsIcon } from '@/components/icons';
import { FilterCheckbox } from '@/components/reusables/Others';
import { useReducer } from 'react';
import { AddRemoveEnum, TFilterTypes } from '@/types/types';

export default function () {
	const [filters, setFilters] = useReducer(
		(
			state: TFilterTypes,
			data: { type: AddRemoveEnum } & Partial<TFilterTypes>
		) => ({
			...state,
			...(data.type === AddRemoveEnum.Add ? {} : {}),
		}),
		{
			department: [],
			jobType: [],
		}
	);

	return (
		<main className='w-full h-dvh space-y-10'>
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
				<section className='flex w-full'>
					<section className='w-[30%] space-y-10'>
						<div className='flex justify-start space-x-2'>
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

							<div className='border-r-2 border-r-settingsClearColor'></div>
							<button className='flex space-x-2'>
								<p className='leading-[24px] font-normal text-[14px] text-settingsClearColor'>
									Clear All
								</p>
							</button>
						</div>

						<div className='flex flex-col space-y-5'>
							<p className='selection:bg-inherit'>Departments</p>

							{Departments.map((department) => (
								<FilterCheckbox
									key={department.name}
									label={department.name}
									onChange={(data) => {}}
								/>
							))}
						</div>

						<div className='flex flex-col space-y-5'>
							<p>Employment Types</p>
							{EmploymentType.map((employment) => (
								<FilterCheckbox
									key={employment.name}
									label={employment.name}
									onChange={() => {}}
								/>
							))}
						</div>
					</section>

					<section className='w-[70%] mb-[100px] flex flex-col gap-[24px]'>
						{Featured.map((job) => (
							<FindJobsCard
								key={job.name}
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

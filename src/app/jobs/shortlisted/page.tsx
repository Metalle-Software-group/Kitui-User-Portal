'use client';

import { ApplicantsColumns, actionsColumn } from '@/components/table/Columns';
import { Slogan } from '@/components/reusables/Slogan';
import {
	TableReusableComponent,
	JobMinistryTag,
} from '@/components/reusables/Others';
import { shortlistedData } from '@/data/dummy';
import { useState } from 'react';
import AlertDialogComponent from '@/components/reusables/AlertDialog';
import { Alert } from '@/components/cards/Alert';

const ShortListedCandidatesPage = () => {
	const [action, setAction] = useState<string | null>(null);

	// const {
	// 	isLoading: dataIsLoading,
	// 	isError: dataIsError,
	// 	data: customData,
	// } = useQuery({
	// 	queryFn: useQueryCustomWrapper<any>,
	// 	queryKey: [
	// 		`expenses-data`,
	// 		{
	// 			url: `organisation/summary/expenses/networks/1`,
	// 			qFunc: fetchEndpointData,
	// 			options: {
	// 				populate: '*',
	// 			},
	// 		},
	// 	],
	// });

	// console.log(customData);

	const ActionsHandlerMapping = [
		{
			label: 'Edit Job',
			onChangeHandler: (value: string) => setAction(value),
		},

		{
			label: 'Close Job',
			onChangeHandler: (value: string) => setAction(value),
		},
	];

	return (
		<main className='w-full flex flex-col gap-[80px] bg-white'>
			<div className='w-full'>
				<Slogan
					slogan={
						'View all shortlisted candidates for various positions here. You can search and filter for a specific position.'
					}
					beginningText='Kitui County Jobs'
					middleText='updates'
				/>
			</div>

			<div className=' h-full flex flex-col pl-[15px] pr-[15px] pt-[16px] pb-[33px] gap-y-[32px] md:gap-y-0 md:gap-[20px] md:px-[16px]'>
				<section className='w-full flex flex-col gap-y-[24px] md:mb-2 items-center justify-center'>
					{/* table */}
					<section className='gap-y-[32px] md:gap-y-0 md:col-span-3 h-fit overflow-auto w-[86%] shadow-tableBoxShadow border border-white rounded-[12px]'>
						<div className='md:col-span-6 py-[60px]'>
							<TableReusableComponent
								{...{
									title: (
										<div className='flex items-center gap-[8px]'>
											<p className='leading-[28px] text-table-title-color font-bold text-[20px] md:text-[24px] tracking-[-.5%]'>
												Recent applications
											</p>
											<JobMinistryTag
												{...{
													textClassName:
														'bg-applicant-colorbg text-applicant-colorText',
													ministry_name: '99 Applicants',
													className:
														'bg-applicant-colorbg rounded-[16px] px-[8px] py-[2px]',
													dotClass: 'hidden',
												}}
											/>
										</div>
									),
									columns: [
										...ApplicantsColumns,
										actionsColumn({ ActionsHandlerMapping }),
									],
									data: shortlistedData,
									titleFilterInline: true,
									showPagination: true,
									isSearchAtEnd: true,
									filter: true,
								}}
							/>
						</div>
					</section>
				</section>
			</div>
			<div className='w-full flex items-center justify-center'>
				<div className='w-[80%]'>
					<Alert
						name={'Never Miss Your Dream Job!'}
						icon={''}
						description={
							'Sign up for job alerts and get notified straight to your inbox when openings matching your profession are posted. Dont wait, register today and take the first step towards your perfect career!'
						}
						buttonText={'Get Job Alerts Now!'}
					/>
				</div>
			</div>

			{action === 'Delete' && (
				<AlertDialogComponent
					{...{
						onClicked: () =>
							// send request to backend to proceed the action
							setAction(null),
						description:
							'This action cannot be undone. This will permanently delete this record from the server.',
						title: 'Are you sure?',
					}}
				/>
			)}

			{action === 'Disable' && (
				<AlertDialogComponent
					{...{
						onClicked: () =>
							// send request to backend to proceed the action
							setAction(null),
						description: 'This will deny access',
						title: 'Are you sure?',
					}}
				/>
			)}

			{action === 'Report' && (
				<AlertDialogComponent
					{...{
						onClicked: () =>
							// send request to backend to proceed the action
							setAction(null),
						description: 'You are about to report an issue',
						title: 'Are you sure?',
					}}
				/>
			)}
		</main>
	);
};

export default ShortListedCandidatesPage;

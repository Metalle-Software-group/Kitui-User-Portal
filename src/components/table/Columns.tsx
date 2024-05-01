'use client';

import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';

import { DropdownMenuTrigger } from '../ui/dropdown-menu';
import {
	Avatar,
	DropDownWrapperCustomComponent,
	DropdownCustomComponent,
	JobMinistryTag,
	JobType,
} from '../reusables/Others';
import { HelpIcon } from '../icons';
import {
	DropdownData,
	JobTypes,
	TApplicationStatus,
	TColumnStaffDefinition,
	TJob,
	TUSER,
} from '@/types/types';
import { formatDistanceStrict } from 'date-fns';

export const ApplicantsColumns: ColumnDef<TColumnStaffDefinition>[] = [
	{
		accessorKey: 'user',
		header: 'Name',

		cell: ({ row }) => {
			const user: TUSER = row.getValue('user');

			return (
				<div className='w-full flex gap-[12px] items-center'>
					<Avatar
						{...{
							classNames:
								'w-[40px] h-[40px] font-bold text-[16px] leading-[24px] bg-applicant-colorbg',
							name: user.username,
							includeCam: false,
						}}
					/>
					<p className='font-normal text-[14px] leading-[24px] text-gray-body-text'>
						{user.username}
					</p>
				</div>
			);
		},
	},

	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => {
			const status: string = row.getValue('status');

			return (
				<div className='flex w-full'>
					<div
						className={`flex-grow-0 flex-shrink-0 flex-basis-auto h-[24px] w-fit leading-[20px] text-[12px] flex px-[8px] py-[2px] items-center rounded-[16px] font-semibold ${
							status === TApplicationStatus.New
								? 'bg-new-applicant-color text-new-applicant-text-color'
								: status === TApplicationStatus.Shortlisted ||
								  status === TApplicationStatus.Awarded
								? 'bg-hover-bg-color-btn text-green-text'
								: status === TApplicationStatus.UnderReview
								? 'bg-job-awarded-bg-color text-job-awarded-text-color'
								: status === TApplicationStatus.Rejected
								? 'bg-job-closed-bg-color text-job-closed-text-color'
								: ''
						}`}>
						{status === TApplicationStatus.Shortlisted
							? 'Shortlisted'
							: status === TApplicationStatus.Rejected
							? 'Rejected'
							: status === TApplicationStatus.UnderReview
							? 'Under review'
							: status === TApplicationStatus.Awarded
							? 'Awarded'
							: status === TApplicationStatus.New
							? 'New'
							: ''}
					</div>
				</div>
			);
		},
	},
	{
		accessorKey: 'job',
		header: () => (
			<div className='flex gap-[2px] items-center justify-center'>
				<div className='flex items-center gap-[2px]'>
					<p className='text-gray-body-text font-medium text-[12px] leading-[18px] text-center m-auto'>
						Position applied
					</p>
					<HelpIcon
						{...{
							styles: { height: '16px', width: '16px' },
							svgElementClassName: 'stroke-dots-color',
						}}
					/>
				</div>
			</div>
		),
		cell: ({ row }) => {
			const job: TJob = row.getValue('job');
			return (
				<div className='w-full flex justify-center'>
					<p className='text-center m-auto'>{job.title}</p>
				</div>
			);
		},
	},

	{
		accessorKey: 'user',
		header: 'Phone number',
		cell: ({ row }) => {
			const user: TUSER = row.getValue('user');
			return (
				<div className='h-fit flex flex-col justify-center  items-center px-[24px] py-[16px]'>
					<p className='font-normal leading-[24px] text-[14px] text-gray-body-text'>
						{user.phone_number?.substring(0, 4)}***
						{user.phone_number?.substring(7, 10)}
					</p>
				</div>
			);
		},
	},

	{
		accessorKey: 'job',
		header: 'Department',

		cell: ({ row }) => {
			const job: TJob = row.getValue('job');

			return (
				<div className='w-full flex gap-[6px] justify-center items-center'>
					<div className='w-fit'>
						<JobMinistryTag
							{...{
								textClassName:
									'text-gray-body-text leading-[16.37px] text-[12px] font-bold bg-gray-200',
								ministry_name: job?.ministry?.name,
								dotClass: 'bg-gray-body-text',
								className: 'bg-gray-200',
							}}
						/>
					</div>
					<div className='w-fit'>
						<JobType
							{...{
								className:
									'border-bg-gray-200 text-gray-body-text px-[12px] py-[4px] rounded-[40px]',
								name: job.job_type?.name,
							}}
						/>
					</div>
				</div>
			);
		},
	},
];

export const MyApplicantColumns: ColumnDef<TColumnStaffDefinition>[] = [
	{
		accessorKey: 'job',
		header: () => (
			<div className='flex gap-[2px] items-center justify-center w-fit'>
				<div className='flex items-center gap-[2px]'>
					<p className='text-gray-body-text font-medium text-[12px] leading-[18px] text-center m-auto'>
						Position applied
					</p>
					<HelpIcon
						{...{
							styles: { height: '16px', width: '16px' },
							svgElementClassName: 'stroke-dots-color',
						}}
					/>
				</div>
			</div>
		),
		cell: ({ row }) => {
			const job: TJob = row.getValue('job');

			return (
				<div className='w-full flex justify-center'>
					<p className='text-center m-auto'>{job.title}</p>
				</div>
			);
		},
	},

	{
		accessorKey: 'job',
		header: 'Department',

		cell: ({ row }) => {
			const job: TJob = row.getValue('job');

			return (
				<div className='w-full flex gap-[6px] items-center'>
					<div className='w-fit'>
						<JobMinistryTag
							{...{
								textClassName:
									'text-gray-body-text leading-[16.37px] text-[12px] font-bold bg-gray-200',
								ministry_name: job.ministry.name,
								dotClass: 'bg-gray-body-text',
								className: 'bg-gray-200',
							}}
						/>
					</div>

					<div className='w-fit'>
						<JobType
							{...{
								className: `${
									job.job_type?.name === JobTypes.Attachment
										? 'text-brown-text border-attachment-border'
										: job.job_type?.name === JobTypes.Contract
										? 'border-contract-border-color text-contract-text-color'
										: 'text-brown-text border-attachment-border'
								}`,
								name: job.job_type.name,
							}}
						/>
					</div>
				</div>
			);
		},
	},

	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => {
			const status: string = row.getValue('status');

			return (
				<div className='flex w-full'>
					<div
						className={`flex-grow-0 flex-shrink-0 flex-basis-auto h-[24px] w-fit leading-[20px] text-[12px] flex px-[8px] py-[2px] items-center rounded-[16px] font-semibold ${
							status === TApplicationStatus.New
								? 'bg-new-applicant-color text-new-applicant-text-color'
								: status === TApplicationStatus.Shortlisted ||
								  status === TApplicationStatus.Awarded
								? 'bg-hover-bg-color-btn text-green-text'
								: status === TApplicationStatus.UnderReview
								? 'bg-job-awarded-bg-color text-job-awarded-text-color'
								: status === TApplicationStatus.Rejected
								? 'bg-job-closed-bg-color text-job-closed-text-color'
								: ''
						}`}>
						{status === TApplicationStatus.Shortlisted
							? 'Shortlisted'
							: status === TApplicationStatus.Rejected
							? 'Rejected'
							: status === TApplicationStatus.UnderReview
							? 'Under review'
							: status === TApplicationStatus.Awarded
							? 'Awarded'
							: status === TApplicationStatus.New
							? 'New'
							: ''}
					</div>
				</div>
			);
		},
	},

	{
		accessorKey: 'comment',
		header: () => (
			<div className='flex gap-[2px] items-center justify-center'>
				<div className='flex items-center gap-[2px]'>
					<p className='text-gray-body-text font-medium text-[12px] leading-[18px] text-center m-auto'>
						Admin Comment
					</p>
					<HelpIcon
						{...{
							styles: { height: '16px', width: '16px' },
							svgElementClassName: 'stroke-dots-color',
						}}
					/>
				</div>
			</div>
		),
		cell: ({ row }) => {
			const comment: string = row.getValue('comment');
			return (
				<div className='h-fit flex flex-col justify-center  items-center px-[24px] py-[16px]'>
					<p className='font-normal leading-[24px] text-[14px] text-gray-body-text'>
						{comment?.substring(0, 28)}
					</p>
				</div>
			);
		},
	},

	{
		accessorKey: 'job',
		header: 'Application Deadline',
		cell: ({ row }) => {
			const job: TJob = row.getValue('job');

			return (
				<div className='h-fit flex flex-col justify-center  items-center px-[24px] py-[16px]'>
					<p className='font-normal leading-[24px] text-[14px] text-gray-body-text'>
						{formatDistanceStrict(
							job.application_end ?? new Date(),
							new Date(),
							{
								addSuffix: true,
							}
						)}
					</p>
				</div>
			);
		},
	},
];

export const actionsColumn: ({
	ActionsHandlerMapping,
}: {
	ActionsHandlerMapping: DropdownData[];
}) => ColumnDef<TColumnStaffDefinition> = ({ ActionsHandlerMapping }) => {
	return {
		accessorKey: 'actions',
		header: 'Actions',
		enableHiding: false,
		cell: ({}) => (
			<DropDownWrapperCustomComponent
				{...{
					components: (
						<DropdownMenuTrigger asChild>
							<div className='w-full flex justify-center items-center selection:bg-inherit'>
								<div className='w-[20px] h-[20px] text-body-bg dark:text-white'>
									<DotsVerticalIcon width={20} height={20} />
								</div>
							</div>
						</DropdownMenuTrigger>
					),
				}}>
				<DropdownCustomComponent
					{...{
						onChangeHandler: () => {},
						data: ActionsHandlerMapping,
						currPageSize: '',
					}}
				/>
			</DropDownWrapperCustomComponent>
		),
	};
};

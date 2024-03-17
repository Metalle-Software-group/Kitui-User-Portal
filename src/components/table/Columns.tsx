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
import { DropdownData, TColumnStaffDefinition } from '@/types/types';

export const ApplicantsColumns: ColumnDef<TColumnStaffDefinition>[] = [
	{
		accessorKey: 'name',
		header: 'Name',

		cell: ({ row }) => {
			const name = 'Joy Pendo';
			return (
				<div className='w-full flex gap-[12px] items-center'>
					<Avatar
						{...{
							classNames:
								'w-[40px] h-[40px] font-bold text-[16px] leading-[24px]',
							name,
						}}
					/>
					<p className='font-normal text-[14px] leading-[24px] text-gray-body-text'>
						{name}
					</p>
				</div>
			);
		},
	},

	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => {
			const name = row.getValue('status');

			return (
				<div
					className={`h-[24px] w-fit leading-[20px] text-[12px] flex px-[8px] py-[2px] justify-center items-center rounded-[16px] font-semibold ${
						name === 'active'
							? 'bg-hover-bg-color-btn text-dev-accent'
							: name === 'awarded'
							? 'bg-job-awarded-bg-color text-job-awarded-text-color'
							: 'bg-job-closed-bg-color text-job-closed-text-color'
					}`}>
					{name === 'shortlisted'
						? 'Shortlisted'
						: name === 'rejected'
						? 'Rejected'
						: 'Rejected'}
				</div>
			);
		},
	},
	{
		accessorKey: 'id',
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
			return (
				<div className='w-full flex justify-center'>
					<p className='text-center m-auto'>Product Designer</p>
				</div>
			);
		},
	},

	{
		accessorKey: 'phone',
		header: 'Phone number',
		cell: ({ row }) => {
			return (
				<div className='h-fit flex flex-col justify-center  items-center px-[24px] py-[16px]'>
					<p className='font-normal leading-[24px] text-[14px] text-gray-body-text'>
						0712345678
					</p>
				</div>
			);
		},
	},

	{
		accessorKey: 'department',
		header: 'Department',

		cell: ({ row }) => {
			const department: string = row.getValue('department');
			return (
				<div className='w-full flex gap-[6px] justify-center items-center'>
					<div className='w-fit'>
						<JobMinistryTag
							{...{
								textClassName:
									'text-gray-body-text leading-[16.37px] text-[12px] font-bold bg-gray-200',
								ministry_name: department,
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
								name: 'Contract',
							}}
						/>
					</div>
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

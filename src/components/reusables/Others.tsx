'use client';

import {
	ArrowRight,
	ArrowRightIcon as ArrowRightIconLucid,
	DownloadIcon,
	EyeIcon,
	PlusIcon,
} from 'lucide-react';

import { ChangeEvent, Fragment, useRef, useState } from 'react';
import { getCookie } from 'cookies-next';
import Image from 'next/image';

import {
	ApplicantsIcon,
	DocumentsIcon,
	ClockIcon,
	CloseIcon,
	DeleteIcon,
	FunnelIcon,
	SearchIcon,
	CheckMarkIcon,
	CrossMarkIcon,
	CameraIcon,
	DropFileIcon,
	MessageIcon,
} from '../icons';

import {
	TTableReusableComponent,
	TDropdownCustomComponent,
	THowItWorksCardProps,
	TComponentBasicProps,
	TDepartmentCardProps,
	JobDescriptionTypes,
	TComponentsType,
	FilterJobsTypes,
	TSearchProps,
	THeaderBtn,
	TNodes,
	EmpTypes,
	ProfilePropsTypes,
	FileSelectorPropsType,
	AddRemoveEnum,
	TSeeMore,
	TUSER,
	Application,
} from '@/types/types';
import { Checkbox } from '../ui/checkbox';
import {
	COOKIE_KEYS,
	FieldsToExcludeInFilter,
	URL_SEARCH_PARAMS,
} from '@/constants';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { DataTable } from '../table/Data-table';
import {
	ColumnFiltersState,
	VisibilityState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import { MyApplicantColumns } from '../table/Columns';
import { shortlistedData } from '@/data/dummy';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createResourceEndpointData, fetchEndpointData } from '@/utils/server';
import { usePathname, useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { useQueryCustomWrapper } from '@/utils';

export const JobType = ({
	className = 'border-brown-border text-brown-text px-[12px] py-[4px] rounded-[40px]',
	name = 'Attachment',
}: {
	className?: string;
	name?: string;
}) => {
	return (
		<p className={`border font-bold selection:bg-inherit ${className}`}>
			{name}
		</p>
	);
};

export const TimeLimitLabel = ({
	className = '',
	name = '2 days ago',
}: {
	className?: string;
	name?: string;
}) => (
	<div
		className={`flex h-fit gap-[4px] items-center justify-center ${className}`}>
		<ClockIcon
			{...{
				styles: {
					width: '20px',
					height: '20px',
				},
				svgElementClassName: 'stroke-gray-body-text',
			}}
		/>
		<p className='text-time-color'>
			{`${name} ${parseInt(name) < 0 ? 'Closed' : ''}${
				parseInt(name) === 0 ? 'Closes today' : ''
			}`}
		</p>
	</div>
);

export const JobMinistryTag = ({
	textClassName = 'text-dev-accent',
	ministry_name = 'Youth & Culture',
	className = 'bg-tag-color',
	dotClass = 'bg-dev-accent',
}: {
	textClassName?: string;
	ministry_name: string;
	className?: string;
	dotClass?: string;
}) => (
	<div
		className={`rounded-[40px] gap-[4px] px-[12px] py-[4px] flex  min-h-[24px] items-center ${className}`}>
		<p className={`w-[6px] h-[6px] rounded-full ${dotClass}`} />
		<p className={`font-bold leading-[16.37px] text-[12px] ${textClassName}`}>
			{ministry_name}
		</p>
	</div>
);

export const LocationIcon = ({
	svgElementClassName,
	className,
	styles,
}: TComponentBasicProps) => (
	<div
		{...{
			className,
			style: styles,
		}}>
		<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M20 9.75C20 16.5 12.5 21.75 12.5 21.75C12.5 21.75 5 16.5 5 9.75C5 7.76088 5.79018 5.85322 7.1967 4.4467C8.60322 3.04018 10.5109 2.25 12.5 2.25C14.4891 2.25 16.3968 3.04018 17.8033 4.4467C19.2098 5.85322 20 7.76088 20 9.75Z'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.5 14.4404C14.7091 14.4404 16.5 12.6496 16.5 10.4404C16.5 8.23129 14.7091 6.44043 12.5 6.44043C10.2909 6.44043 8.5 8.23129 8.5 10.4404C8.5 12.6496 10.2909 14.4404 12.5 14.4404Z'
				{...{
					className: svgElementClassName,
				}}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	</div>
);

export const LocationLabel = ({
	className = 'border-brown-border text-brown-text px-[12px] py-[4px] rounded-[40px]',
	name = 'Mwingi',
}: {
	className?: string;
	name?: string;
}) => (
	<div className={`flex gap-[4px] items-center justify-center ${className}`}>
		<LocationIcon
			{...{
				styles: {
					width: '18px',
					height: '18px',
				},
				svgElementClassName: 'stroke-gray-body-text',
			}}
		/>
		<p>{name}</p>
	</div>
);

export const ApplicantCountIcon = ({ count = 59 }: { count?: number }) => {
	return (
		<div className='flex gap-[6px] items-center justify-center'>
			<ApplicantsIcon
				{...{
					styles: {
						width: '28px',
						height: '28px',
					},
					svgElementClassName: 'stroke-gray-body-text',
				}}
			/>
			<p className='text-gray-body-text text-[14px] leading-[24px] font-normal'>
				{count} Applications
			</p>
		</div>
	);
};

export const Loader = ({
	align = 'justify-center',
	title = 'Loading data...',
}: {
	title?: string;
	align?: string;
}) => <div className={`w-full h-full flex ${align} items-center`}>{title}</div>;

export const DepartmentCard = ({
	subtitle,
	Icon,
	title,
}: TDepartmentCardProps) => (
	<div className='md:w-[265px] md:h-[202px] gap-[24px] rounded-[20px] md:p-[20px] border border-gray-300 flex flex-col items-center justify-around'>
		<div className=''>
			{Icon ? (
				<Icon
					{...{
						styles: {
							width: '61px',
							height: '60px',
						},
						svgElementClassName: 'fill-main-Green',
					}}
				/>
			) : null}
		</div>
		<div className='flex flex-col gap-[6px]'>
			<p className='font-bold text-center leading-[15px] md:leading-[28px] md:text-[20px] text-title-text-color'>
				{title}
			</p>
			<p className='font-normal leading-[24px] text-gray-body-text text-center text-[16px]'>
				{subtitle}
			</p>
		</div>
	</div>
);

export const Comment = () => {
	return (
		<div className='w-fit'>
			<div className='flex justify-between'>
				<div className='flex gap-[6px] my-[6px]'>
					<p className='font-bold text-[16px] leading-[24px] text-name-color'>
						Musyoka Juma
					</p>
					<span className='font-normal text-[14px] leading-[24px] text-gray-body-text'>
						says
					</span>
				</div>

				<div className='bg-delete-btn w-[30px] h-[30px] rounded-[8px] gap-[8px] flex items-center justify-center cursor-pointer selection:bg-inherit'>
					<DeleteIcon
						{...{
							svgElementClassName: 'stroke-red-500',
							applyToSvgEl: false,
							styles: {
								width: '20px',
								height: '20px',
							},
						}}
					/>
				</div>
			</div>

			<div className='my-[6px] selection:bg-inherit'>
				<div className='text-gray-body-text font-normal text-[14px] leading-[24px]'>
					Develop and deliver informative materials: Create engaging
					presentations, brochures, and other resources to educate the public on
					a variety of topics, including disease prevention, healthy lifestyles,
					and community health initiatives.
				</div>

				<div className=''>
					<p className='text-green-text'>a min ago</p>
				</div>
			</div>
		</div>
	);
};

export const CommentCard = () => {
	return (
		<div className='md:w-[379px] p-[20px] bg-white border mx-auto rounded-[20px] gap-[12px] border-boxBorder-color'>
			<div className='flex gap-[16px] justify-between'>
				<p className='font-bold text-[18px] leading-[24.55px] text-title-text-color'>
					Public Health Officer
				</p>

				<div className='w-fit'>
					<JobMinistryTag
						{...{
							textClassName: 'text-dev-accent',
							ministry_name: 'Youth & Culture',
							className: 'bg-tag-color',
							dotClass: 'bg-dev-accent',
						}}
					/>
				</div>
			</div>

			<div className='my-[8px] flex gap-[16px] items-center'>
				<div className='w-fit'>
					<JobType
						{...{
							className:
								'flex items-center justify-center border-brown-border text-brown-text px-[12px] py-[4px] rounded-[40px] leading-[16.37px] font-bold text-[12px] h-fit',
						}}
					/>
				</div>

				<div className='w-fit'>
					<LocationLabel
						{...{
							className:
								'flex gap-[2px] text-[12px] leading-[16.37px] font-semibold text-commentCardTextColor',
						}}
					/>
				</div>

				<div className='w-fit'>
					<TimeLimitLabel />
				</div>
			</div>

			<div className='w-fit leading-[24px] font-normal text-[14px] text-commentCardTextColor my-[4px]'>
				Join our passionate team of public health professionals and help educate
				the community about critical health issues. You'll develop and deliver
				info....
			</div>

			<div className='flex justify-between my-[6px]'>
				<div
					className='bg-tag-color w-fit h-fit flex gap-[2px] rounded-[8px] px-[14px] py-[8px] items-center justify-center selection:bg-inherit'
					role='button'>
					<p className='text-dev-accent w-fit font-semibold text-[14px] leading-[20px]'>
						View Job
					</p>

					<ArrowRight
						className='stroke-main-Green'
						width={'24px'}
						height={'24px'}
					/>
				</div>

				<div className='flex gap-[4px] items-center justify-center selection:bg-inherit cursor-pointer'>
					<MessageIcon
						{...{
							svgElementClassName: 'fill-gray-body-text',
							className: 'w-[18px] h-[18px]',
						}}
					/>
					<p className='text-time-color'>3</p>
				</div>
			</div>
		</div>
	);
};

export const HowItWorksCard = ({
	Icon,
	title,
	subtitle,
	step,
}: THowItWorksCardProps) => {
	const { t } = useTranslation();
	return (
		<div className='flex flex-col gap-[16px] p-[12px] rounded-[20px] md:w-[330px] items-center justify-center'>
			<div className=''>
				<Image src={Icon} width={200} height={200} alt={title} />
			</div>

			<div className='gap-[4px] flex flex-col justify-center items-center'>
				<p className='font-bold text-[20px] leading-[28px] tracking-[.5%] text-center text-textTitle'>
					{t(`${title}`)}
				</p>
				<p className='text-bodyText leading-[24px] text-[16px] font-normal text-center'>
					{t(`${subtitle}`)}
				</p>
			</div>
		</div>
	);
};

export const FilterCheckbox = ({
	onChange,
	checked,
	type,
	label,
	id,
}: FilterJobsTypes) => (
	<div className='flex items-center gap-[8px] selection:bg-inherit'>
		<Checkbox
			{...{
				onCheckedChange: (checked) =>
					checked
						? onChange({ type, action: AddRemoveEnum.Add, data: label })
						: onChange({ type, action: AddRemoveEnum.Remove, data: label }),
				className: `bg-checkboxColor data-[state=checked]:bg-checkboxColor1`,
				id: `filter-${label}${id}`,
				checked,
			}}
		/>
		<label
			htmlFor={`filter-${label}${id}`}
			className='leading-[24px] text-[14px] font-normal text-bodyText'>
			{label}
		</label>
	</div>
);

export const FilterTag = ({
	name = 'Contract',
	onChange,
	type,
}: EmpTypes & Pick<FilterJobsTypes, 'onChange' | 'type'>) => {
	return (
		<div className='bg-purple-200 border-purple-200 border gap-[10px] px-[16px] py-[8px] rounded-[20px] flex items-center justify-center selection:bg-inherit'>
			<p className='text-filtertTagColor leading-[24px] text-[14px] font-normal'>
				{name}
			</p>
			<div
				className='cursor-pointer selection:bg-inherit'
				{...{
					title: 'Remove filter',
					onClick: (e) =>
						onChange({ type, action: AddRemoveEnum.Remove, data: name }),
				}}>
				<CloseIcon
					{...{
						svgElementClassName:
							'fill-stroke-filtertTagColor stroke-filtertTagColor',
						className: 'w-[12px] h-[12px]',
						applyToSvgEl: true,
					}}
				/>
			</div>
		</div>
	);
};

export const Avatar = ({
	classNames = 'w-[32px] h-[32px] bg-applicant-colorbg',
	name,
}: {
	classNames?: string;
	name: string;
}) => {
	const [fname, lname] = name.split(' ');

	return (
		<div className='relative'>
			<p
				className={`rounded-[200px] text-deep-purple flex justify-center items-center content-center ${classNames}`}>
				{fname?.at(0)?.toUpperCase()}
				{lname?.at(0)?.toUpperCase()}
			</p>

			<div className='w-fit absolute bottom-[10px] right-[24px]'>
				<CameraIcon
					{...{
						svgElementClassName: 'stroke-bodyText',
						applyToSvgEl: true,
						styles: {
							width: '30px',
							height: '30px',
						},
					}}
				/>
			</div>
		</div>
	);
};

export const UploadedDocument = () => {
	const { t } = useTranslation();
	return (
		<div className='w-full flex justify-between items-center gap-[10px] border border-downloadBtnColor px-[6px] py-[8px] rounded-[6px] cursor-pointer selection:bg-inherit'>
			<div className='flex-[.4]'>
				<DocumentsIcon
					{...{
						svgElementClassName: 'stroke-dev-accent',
						applyToSvgEl: false,
						styles: {
							width: '24px',
							height: '24px',
						},
					}}
				/>
			</div>

			<div className='leading-[24px] text-[16px] font-normal text-gray-body-text flex-[10] w-full'>
				{t('Job description')}
			</div>
			<div className='flex-[5] flex gap-[16px] items-center justify-end'>
				<div className='w-fit'>
					<EyeIcon className='text-mainGreen leading-[20px] text-[14px] font-semibold w-[22px] h-[22px]' />
				</div>
				<div className='cursor-pointer selection:bg-inherit'>
					<DownloadIcon className='text-mainGreen leading-[20px] text-[14px] font-semibold w-[22px] h-[22px]' />
				</div>
			</div>
		</div>
	);
};

export const Comments = ({
	comments,
}: Pick<JobDescriptionTypes, 'comments'>) => {
	return (
		<div className='flex flex-col gap-[6px]'>
			<p className='font-semibold text-[20px] leading-[28px] tracking-[.5%] text-textTitle'>
				Comments
			</p>

			{comments.length < 1 ? (
				<div className='font-normal text-[16px] leading-[24px] text-gray-600'>
					No comments yet. Be the first one to leave a comment.
				</div>
			) : null}
			{comments.map(({ name, comment, timeline, replies }) => (
				<div key={name} className='flex flex-col gap-[6px]'>
					<div className='flex gap-[6px] item-center'>
						<p className='font-bold text-[16px] leading-[24px] text-commentsColor'>
							{name}
						</p>
						<p className='leading-[24px] text-[14px] font-normal text-bodyText'>
							says
						</p>
					</div>
					<p className='text-bodyText font-normal text-[16px] leading-[24px]'>
						{comment}
					</p>
					<p className='text-mainGreen font-normal text-[16px] leading-[24px]'>
						{timeline}
					</p>

					<div className='px-[32px]'>
						{replies?.map(({ comment, name, timeline }) => (
							<div key={name} className='flex flex-col gap-[6px]'>
								<div className='flex gap-[6px] items-center'>
									<p className='font-bold text-[16px] leading-[24px] text-commentsColor'>
										{name}
									</p>
									<p className='leading-[24px] text-[14px] font-normal text-bodyText'>
										responded
									</p>
								</div>
								<p className='text-bodyText font-normal text-[16px] leading-[24px]'>
									{comment}
								</p>
								<p className='text-mainGreen font-normal text-[16px] leading-[24px]'>
									{timeline}
								</p>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export const DropDownWrapperCustomComponent = ({
	components,
	children,
}: TNodes & TComponentsType) => {
	return (
		<DropdownMenu>
			{components}
			{children}
		</DropdownMenu>
	);
};

export const DropdownCustomComponent = ({
	onChangeHandler,
	currPageSize,
	width,
	data,
}: TDropdownCustomComponent) => (
	<DropdownMenuContent
		className={`dark:text-white w-fit md:w-[60px] bg-white text-body py-[10px] ${
			width ? `w-[${width}px]` : 'w-fit'
		}`}>
		<DropdownMenuRadioGroup
			{...{
				className: `${width ? `w-[${width}px]` : ''}`,

				onValueChange: (value) => {
					const foundTargetObject = data.find(({ label }) => label === value);
					onChangeHandler(foundTargetObject);
				},
				value: `${currPageSize!}`,
			}}>
			{data.map(({ label: network }, index) => (
				<DropdownMenuRadioItem
					key={`dropdown-${index}`}
					className='cursor-pointer'
					{...{
						value: network,
					}}>
					{network}
				</DropdownMenuRadioItem>
			))}
		</DropdownMenuRadioGroup>
	</DropdownMenuContent>
);

export const Search = ({
	onChangeHandler,
	title = "I'm looking for...",
	value,
}: TSearchProps) => {
	return (
		<div
			{...{
				className: `relative w-[400px] mx-[6px] cursor-pointer`,
			}}>
			<div className='absolute top-[calc(calc(100%-24px)/2)] left-[4px]'>
				<SearchIcon
					{...{
						styles: {
							width: '20px',
							height: '20px',
						},
						svgElementClassName: 'stroke-[1.67px] stroke-searchIconColor',
					}}
				/>
			</div>
			<input
				className='rounded-[8px] border px-[14px] py-[10px] pl-[26px] placeholder:text-[#c3c3c3] w-full focus:border-[1px] focus:border-dev-accent h-[44px] outline-none shadow-btnBoxShadow'
				{...{
					onChange: onChangeHandler,
					placeholder: title,
					type: 'text',
					value,
				}}
			/>
		</div>
	);
};

export default function AddJobsBtn({
	Icon = PlusIcon,
	text,
	present,
	action,
}: THeaderBtn) {
	return (
		<div
			className='w-fit flex items-center cursor-pointer gap-[4px] rounded-[8px] bg-dev-accent border-border-color selection:bg-inherit shadow-btnBoxShadow px-[16px] py-[10px] border'
			onClick={action!}
			role='button'>
			<div className=' text-body-bg dark:text-white'>
				{
					<Icon
						width={20}
						height={20}
						color='white'
						{...{
							styles: {
								width: '24px',
								height: '24px',
							},
							svgElementClassName: 'stroke-white',
						}}
					/>
				}
			</div>
			<h2 className='text-white font-semibold text-[14px] leading-[20px]'>
				{text}
			</h2>
		</div>
	);
}

export function FilterIconComponent() {
	return (
		<DropdownMenuTrigger asChild>
			<div className='flex px-[16px] py-[10px] border border-border-color rounded-[8px] gap-[8px] shadow-btnBoxShadow items-center justify-center selection:bg-inherit cursor-pointer'>
				<FunnelIcon
					{...{
						styles: {
							width: '20px',
							height: '20px',
						},
						svgElementClassName: 'stroke-filter-stroke-color',
					}}
				/>

				<p className='text-center font-normal text-filter-stroke-color text-[14px] leading-[24px]'>
					Filters
				</p>
			</div>
		</DropdownMenuTrigger>
	);
}

export const TableComponentHeadings = ({ children }: TNodes) => {
	return (
		<div className='flex justify-between items-center w-full gap-[24px] flex-wrap h-[83px] px-[24px] py-[20px]'>
			{children}
		</div>
	);
};

export const TableReusableComponent = ({
	headerBtn = {
		present: false,
	},
	showPagination = false,
	searchColumn = 'name',
	isSearchAtEnd = false,
	isLoadingMainContrib,
	isErrorMainContrib,
	columns,
	title,
	data,
}: TTableReusableComponent & {
	isLoadingMainContrib?: boolean;
	isErrorMainContrib?: boolean;
}) => {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
		['networkBgColor']: false,
	});

	const [currentFilter, setCurrentFilter] = useState<string>('');

	const table = useReactTable({
		getPaginationRowModel: getPaginationRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		columns,
		data,

		state: {
			columnVisibility,
			columnFilters,
		},
	});

	const processedColumnNames = table
		.getAllColumns()
		.filter(({ id }) => !FieldsToExcludeInFilter.includes(id))
		.map(({ id }) => `${id.at(0)?.toUpperCase()}${id.slice(1, id.length)}`);

	return (
		<Fragment>
			<div className='md:col-span-6 rounded-[12px] bg-white shadow-sidebarShadow'>
				<TableComponentHeadings>
					<div className='w-fit'>
						{typeof title === 'string' ? (
							<p className='leading-[28px] text-table-title-color font-bold text-[20px] md:text-[24px] tracking-[-.5%]'>
								{title}
							</p>
						) : (
							<Fragment>{title}</Fragment>
						)}
					</div>

					{!isSearchAtEnd ? (
						<div
							className={`flex items-center justify-center gap-[12px] flex-[2]`}>
							<div className='md:flex items-center justify-center w-full'>
								<Search
									{...{
										title: `Search`,
										onChangeHandler: (event) =>
											table
												.getColumn(searchColumn)
												?.setFilterValue(event.target.value),
										value:
											(table
												.getColumn(searchColumn)
												?.getFilterValue() as string) ?? '',
									}}
								/>
							</div>
						</div>
					) : null}

					<div className='flex gap-[12px] items-center'>
						<div className='md:flex items-center justify-end gap-[12px]'>
							{isSearchAtEnd ? (
								<div
									className={`flex items-center justify-center gap-[12px] flex-[2]`}>
									<div className='md:flex items-center justify-center w-full'>
										<Search
											{...{
												title: `Search`,
												onChangeHandler: (event) =>
													table
														.getColumn(searchColumn)
														?.setFilterValue(event.target.value),
												value:
													(table
														.getColumn(searchColumn)
														?.getFilterValue() as string) ?? '',
											}}
										/>
									</div>
								</div>
							) : null}
							<DropDownWrapperCustomComponent
								{...{
									components: <FilterIconComponent />,
								}}>
								<DropdownCustomComponent
									{...{
										onChangeHandler: (value) => setCurrentFilter(value),
										currPageSize: currentFilter,
										data: processedColumnNames.map((item) => ({
											label: item,
											onChangeHandler: console.log,
										})),
									}}
								/>
							</DropDownWrapperCustomComponent>
						</div>
						{headerBtn.present ? <AddJobsBtn {...headerBtn} /> : null}
					</div>
				</TableComponentHeadings>

				{isLoadingMainContrib ? (
					<div className='w-full flex justify-center items-center h-[480px] dark:text-sidebar-bg-light text-body bg-sidebar-bg-light dark:bg-small-card-bg dark:border-fwd-darker px-[12px] py-[16px] dark:hover:bg-fwd-darker hover:bg-foundation data-[state=selected]:bg-fwd-darker shadow-cardBoxShadow dark:shadow-cardBoxShadowDark'>
						<Loader
							{...{
								title: 'Loading data...',
							}}
						/>
					</div>
				) : isErrorMainContrib ? (
					<div className='h-[480px] w-full flex justify-center items-center text-body bg-small-card-bg-light dark:text-sidebar-bg-light dark:bg-border-color dark:border-fwd-darker px-[12px] py-[16px] dark:hover:bg-fwd-darker hover:bg-foundation data-[state=selected]:bg-fwd-darker shadow-cardBoxShadow dark:shadow-cardBoxShadowDark'>
						<Loader
							{...{
								title: 'Error loading data',
							}}
						/>
					</div>
				) : (
					<DataTable
						{...{
							pagination: showPagination,
							table,
						}}
					/>
				)}
			</div>
		</Fragment>
	);
};

export const SelectedFileSingleList = ({
	handleDeleteItem,
	file,
}: { file: File } & Pick<FileSelectorPropsType, 'handleDeleteItem'>) => {
	return (
		<div className='flex flex-col gap-[8px]'>
			<div className='flex gap-[4x] justify-between items-center'>
				<CheckMarkIcon
					{...{
						svgElementClassName: 'stroke-checkMarkColor',
						className: 'w-[24px] h-[24px]',
						applyToSvgEl: true,
					}}
				/>
				<div className='flex-[1] px-[6px]'>
					<p className='font-normal leading-[25.78px] text-[16px] text-bodyText overflow-x-hidden'>
						{file.name}
					</p>
				</div>

				<div
					onClick={(e) => handleDeleteItem(file)}
					className='w-fit'
					title='Delete file'>
					<CrossMarkIcon
						{...{
							svgElementClassName: 'stroke-crossMarkColor hover:stroke-red-700',
							className: 'w-[24px] h-[24px]',
							applyToSvgEl: true,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export const FileListDivider = () => (
	<div className='bg-dividerColor h-[1px]'></div>
);

export const Profile = ({}: ProfilePropsTypes) => {
	const [errMessage, setErrMsg] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const pathname = usePathname();
	const router = useRouter();
	const { t } = useTranslation();

	const userCookie = getCookie(COOKIE_KEYS.user);

	const userInfo: TUSER | null = userCookie ? JSON.parse(userCookie) : null;

	const FormSchema = z.object({
		name: z.string().min(2, {
			message: 'Name must be at least 2 characters.',
		}),

		phone: z.string().min(2, {
			message: 'Phone number must be at least 2 characters.',
		}),

		email: z
			.string()
			.email({ message: 'Email field must contain a valid email' }),

		nationalId: z
			.string()
			.min(6, {
				message: 'ID must be at least 6 characters.',
			})
			.max(9, { message: 'ID mus 8 characters or less' }),
		gender: z.string().min(2, {
			message: 'Gender must be at least 2 characters.',
		}),
		location: z.string().min(2, {
			message: 'Location must be field.',
		}),
		countyResidence: z.string().min(2, {
			message: 'County of Residence must be filled',
		}),
		subCounty: z.string().min(2, {
			message: 'Sub-county must be at least 2 characters.',
		}),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			countyResidence: userInfo?.county ?? '',
			nationalId: userInfo?.id_number ?? '',
			subCounty: userInfo?.sub_county ?? '',
			phone: userInfo?.phone_number ?? '',
			location: userInfo?.location ?? '',
			name: userInfo?.username ?? '',
			gender: userInfo?.gender ?? '',
			email: userInfo?.email ?? '',
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		setLoading(true);
		createResourceEndpointData({ data, url: `users/1` })
			.then(({ data: res, err }) => {
				if (err) {
					if (err.status === 400)
						err.details.errors.map(({ path: [field_name], message, name }) =>
							//@ts-ignore
							form.setError(field_name, {
								message: message.replace(field_name, 'This field '),
							})
						);
					else if (err.status === 401)
						router.push(
							`/?${URL_SEARCH_PARAMS.redirect}=${encodeURIComponent(pathname)}`
						);
					else if (err.status === 403) setErrMsg('Permission denied');
					else setErrMsg('Something went wrong');
				} else {
					console.log(res);
				}
			})
			.finally(() => setLoading(false));
	}

	return (
		<div className='shadow-profileBoxShadow bg-white gap-[4px] md:p-[28px] p-3 rounded-[20px]'>
			<p className='text-title-text-color tracking-[-.5%] md:leading-[28px] md:text-[24px] font-bold'>
				Profile details
			</p>

			<p className='w-fit mx-auto text-red-700 font-normal text-[16px]'>
				{errMessage}
			</p>

			<div className='w-full h-fit flex gap-[40px] md:p-[28px] flex-wrap'>
				<Form {...form} {...{}}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='w-full space-y-6'>
						<div className='flex flex-wrap gap-[24px]'>
							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name='name'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												{t('Name')}
											</FormLabel>
											<FormControl>
												<Input placeholder='Name' {...field} className='' />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												{t('Email')}
											</FormLabel>
											<FormControl>
												<Input placeholder='Email address' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<div className='flex flex-wrap gap-[24px]'>
							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name='phone'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												{t('Phone')}
											</FormLabel>
											<FormControl>
												<Input placeholder='Phone' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name={'nationalId'}
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												{t('ID Number')}
											</FormLabel>
											<FormControl>
												<Input placeholder='' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<div className='flex flex-wrap gap-[24px]'>
							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name='gender'
									render={({ field }) => (
										<FormItem className='space-y-3'>
											<FormLabel>{t('Gender')}</FormLabel>
											<FormControl>
												<RadioGroup
													onValueChange={field.onChange}
													defaultValue={field.value}
													className='flex flex-col space-y-1'>
													<FormItem className='flex items-center space-x-3 space-y-0'>
														<FormControl>
															<RadioGroupItem value='female' />
														</FormControl>
														<FormLabel className='font-normal'>
															Female
														</FormLabel>
													</FormItem>

													<FormItem className='flex items-center space-x-3 space-y-0'>
														<FormControl>
															<RadioGroupItem value='male' />
														</FormControl>
														<FormLabel className='font-normal'>Male</FormLabel>
													</FormItem>
												</RadioGroup>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<div className='flex flex-wrap gap-[24px] my-[6px]'>
							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name={'countyResidence'}
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												{t('County of residence')}
											</FormLabel>
											<FormControl>
												<Input placeholder='e.g Kitui' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<div className='flex flex-wrap gap-[24px]'>
							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name={'subCounty'}
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												{t('Sub county')}
											</FormLabel>
											<FormControl>
												<Input placeholder='e.g Kibati' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name={'location'}
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												{t('Location')}
											</FormLabel>
											<FormControl>
												<Input placeholder='e.g Mwingi' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<div className='w-full justify-center flex my-[8px] gap-[32px]'>
							<Button
								className='rounded-[8px] bg-dev-accent hover:bg-dev-accent text-white border-dev-accent border px-[40px] py-[12px] gap-[8px] shadow-btnBoxShadow w-fit items-center justify-center'
								type='submit'
								{...(loading ? { disabled: true } : {})}>
								<p className='text-inherit'>
									{t(loading ? 'Updating...' : 'Update details')}
								</p>
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};

export const MyApplications = () => {
	const userCookie = getCookie(COOKIE_KEYS.user);

	const userInfo: TUSER | null = userCookie ? JSON.parse(userCookie) : null;

	const { isLoading, isError, data } = useQuery({
		queryFn: useQueryCustomWrapper<Application[]>,
		queryKey: [
			`my-applications-data`,
			{
				url: `applications`,
				qFunc: fetchEndpointData,
				options: {
					populate: {
						job: { ministry: '', job_type: '' },
						comment: '',
						comments: '',
						user: '',
					},
					sort: 'createdAt:desc',
					filters: { user: { id: 1 } },
				},
			},
		],
	});

	data;

	const { t } = useTranslation();
	return (
		<div className='gap-y-[32px] md:gap-y-0 md:col-span-3 h-fit overflow-auto shadow-tableBoxShadow bg-white border border-white rounded-[12px] p-[10px]'>
			<div className='md:col-span-6'>
				<TableReusableComponent
					{...{
						title: (
							<div className='flex items-center gap-[8px]'>
								<p className='leading-[28px] text-table-title-color font-bold text-[20px] md:text-[24px] tracking-[-.5%]'>
									{t('My Applications')}
								</p>
							</div>
						),
						columns: MyApplicantColumns,
						searchColumn: 'department',
						data: shortlistedData,
						titleFilterInline: false,
						showPagination: true,
						isSearchAtEnd: false,
						filter: true,
					}}
				/>
			</div>
		</div>
	);
};

export const NewsCard = () => {
	const { t } = useTranslation();
	return (
		<div className='flex flex-col absolute md:h-[216px] rounded-[10px] md:rounded-[25px] p-[10px] md:p-[28px] justify-center items-center top-[-90px] bg-footer-color gap-[10px] z-[2]'>
			<p className='font-bold md:text-[30px] md:leading-[36px] md:tracking-[.75%]'>
				{t('County news & updates')}
			</p>

			<p className='md:leading-[24px] md:text-[16px] font-normal text-bodyBg'>
				{t(
					'Get the latest county news,articles, and resources sent directly to your email every month'
				)}
				.
			</p>

			<div className='flex gap-[8px] w-[200px] md:w-[400px] justify-center'>
				<input
					className='px-[10px] font-normal text-[14px] leading-[24px] outline-none text-inputTextColor rounded-[10px] w-full'
					onChange={() => {}}
					placeholder={t('Email')}
				/>
				<button className='flex gap-[8px] px-[8px] py-[5px] md:px-[16px] md:py-[10px] rounded-[8px] w-[100px] h-[44px] justify-center items-center bg-footer-btnColor text-white shadow-btnBoxShadow'>
					{t('Subscribe')}
				</button>
			</div>
		</div>
	);
};

export const Error404 = () => {
	return (
		<div className='shadow-page404Shadow bg-white gap-[32px] p-[40px] rounded-[20px] fex flex-col'>
			<div className='flex flex-col  gap-[14px]'>
				<p className=' tracking-[.75%] leading-[36px] text-[30px] font-bold text-textTitle'>
					Sorry! We're having a technical hiccup on our end.
				</p>
				<p className='text-bodyText leading-[24px] text-[16px] font-normal'>
					Sometimes, a fresh start is all it takes. Head back to the homepage
					and explore from there.
				</p>
			</div>
			<div className=''>Image</div>
			<div className=''>Buttons</div>
		</div>
	);
};

export const UploadFileCard = ({
	handleDeleteItem,
	setSelectedFile,
	selectedFiles,
}: FileSelectorPropsType) => {
	const inputFieldRef = useRef<HTMLInputElement | null>(null);
	const { t } = useTranslation();
	const triggerFileSelectorDialog = (e: any) => inputFieldRef.current?.click();

	const handleSelectedFile = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedFile((prev) =>
			e.currentTarget?.files
				? [...prev, ...Array.from(e.currentTarget?.files)]
				: prev
		);
		if (inputFieldRef.current) inputFieldRef.current.value = '';
	};

	return (
		<div className='border rounded-[8px] px-[18px] py-[20px] border-checkboxColor'>
			<div className='w-full' title='Select file or drag and drop here'>
				<div
					className='flex gap-[60px] cursor-pointer selection:bg-inherit'
					onClick={triggerFileSelectorDialog}
					onDrag={triggerFileSelectorDialog}>
					<div className='px-[14px] py-[8px] rounded-[4px] bg-chooseFileBgColor'>
						<p className='leading-[19.36px] text-[16px] font-medium text-checkMarkColor'>
							{t('Choose file')}
						</p>
					</div>
					<div className='flex gap-[4px]'>
						<DropFileIcon
							{...{
								svgElementClassName: 'stroke-chooseFileIconBgColor',
								applyToSvgEl: false,
								styles: {
									width: '24px',
									height: '24px',
								},
							}}
						/>
						<p className='text-chooseFileTextColor leading-[25.78px] text-[16px] font-normal'>
							{t('Drop your documents here')}
						</p>
					</div>
				</div>

				<input
					{...{
						onChange: handleSelectedFile,
						accept: '.pdf, .doc, .docx',
						multiple: true,
						id: 'picture',
						type: 'file',
					}}
					ref={inputFieldRef}
					className='hidden'
				/>
			</div>
			<div className='flex flex-col gap-[8px] my-[10px]'>
				{selectedFiles.map((file, index) => (
					<React.Fragment key={index}>
						<SelectedFileSingleList {...{ file, handleDeleteItem }} />
						{index !== selectedFiles.length - 1 ? <FileListDivider /> : null}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export const SeeMore = ({ title, handler }: TSeeMore) => (
	<div
		className='flex  md:gap-[8px] cursor-pointer selection:bg-inherit w-fit'
		onClick={handler}>
		<p className='font-semibold md:text-[14px] md:leading-[20px] text-main-Green'>
			{title}
		</p>
		<ArrowRight className='stroke-main-Green' width={'24px'} height={'24px'} />
	</div>
);

export const MoreJobsComponent = () => (
	<div
		className='bg-main-Green w-fit h-fit flex gap-[2px] rounded-[8px] px-[18px] py-[10px] items-center justify-center selection:bg-inherit'
		role='button'>
		<p className='text-white w-fit font-semibold text-[14px] leading-[20px]'>
			More Jobs
		</p>
		<ArrowRightIconLucid width={24} height={24} color='white' />
	</div>
);

export const UserProfile = () => {
	const userCookie = getCookie(COOKIE_KEYS.user);

	const userInfo: TUSER | null = userCookie ? JSON.parse(userCookie) : null;

	return (
		<div className='flex gap-[24px] items-center w-fit'>
			<Avatar
				{...{
					classNames:
						'w-[130px] h-[130px] font-bold text-[48px] leading-[36px] bg-purple-100',
					name: userInfo?.username ?? '',
				}}
			/>
			<div className='flex gap-[10px] flex-col'>
				<p className='text-center tracking-[-.5%] leading-[30.01px] text-[22px] font-bold text-title-text-color'>
					{userInfo?.username ?? ''}
				</p>
				<p className='text-gray-body-text text-center leading-[24px] text-[16px] font-normal'>
					{userInfo?.email ?? ''}
				</p>
			</div>
		</div>
	);
};

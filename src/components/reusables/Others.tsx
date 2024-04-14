'use client';

import {
	ArrowRight,
	ArrowRightIcon as ArrowRightIconLucid,
	DownloadIcon,
	EyeIcon,
	PlusIcon,
} from 'lucide-react';

import { ChangeEvent, Fragment, Suspense, useRef, useState } from 'react';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
	SettingsIcon,
} from '../icons';

import {
	TTableReusableComponent,
	TDropdownCustomComponent,
	THowItWorksCardProps,
	TComponentBasicProps,
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
	TMoreSearchTypes,
	TJob,
	TFilterTypes,
	TMinistry,
	TJobTypes,
	TSinglePageProps,
	TCommentType,
	TSuccessProps,
	JobStatusEnum,
	Media,
} from '@/types/types';
import { Checkbox } from '../ui/checkbox';
import {
	BASE_ASSET_URL,
	COOKIE_KEYS,
	FieldsToExcludeInFilter,
	URL_SEARCH_PARAMS,
	initialFilterState,
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
import React from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	deleteResourceEndpointData,
	fetchEndpointData,
	uploadResourceEndpointData,
} from '@/utils/server';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';
import {
	getFilterUpdateFunction,
	getTextFromHTML,
	useQueryCustomWrapper,
} from '@/utils';
import { formatDistance } from 'date-fns';
import { FeaturedJobsCategories } from './FeaturedJobsCategories';
import { Slogan, SloganWithCategory } from './Slogan';
import { FindJobsCard } from '../cards/FindJobsCard';
import { Alert } from '../cards/Alert';
import RichTexEditor from '../editor/RichText';
import { CommentForm } from './CommentForm';
import { UploadDocsCard } from '../cards/UploadDocsCard';
import Link from 'next/link';

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
		<p className='text-time-color'>{name}</p>
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
	title = 'Fetching data...',
}: {
	title?: string;
	align?: string;
}) => <div className={`w-full h-full flex ${align} items-center`}>{title}</div>;

export const DepartmentCard = ({ name, icon, id }: TMinistry) => {
	return (
		<div className='h-[84px] w-[80vw] md:max-w-[286px] gap-[12px] rounded-[6px] p-[12px] border border-gray-border flex items-center justify-between bg-white'>
			<div className='flex-[1]'>
				{icon ? (
					<img
						src={icon.url}
						alt={icon.alternativeText}
						className='w-full h-auto'
					/>
				) : null}
			</div>

			<div className='flex flex-col gap-[6px] flex-[8]'>
				<p className='font-bold leading-[24px] tracking-[.5%] text-[16px] text-title-text-color'>
					{name}
				</p>
				<p className='font-normal leading-[24px] text-gray-body-text text-[14px]'>
					{id} open position
				</p>
			</div>
		</div>
	);
};

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

export const CommentCard = ({
	application_end,
	description,
	comments,
	job_type,
	location,
	ministry,
	title,
	id,
}: TJob) => {
	const router = useRouter();

	return (
		<div
			className='w-[90%] md:w-[100%] md:max-w-[379px] p-[20px] bg-white border mx-auto rounded-[20px] gap-[12px] border-boxBorder-color'
			{...{
				onClick: (e) => router.push(`/jobs/${id}`),
				title: 'Open this job',
			}}>
			<div className='flex gap-[16px] justify-between'>
				<p className='font-bold text-[18px] leading-[24.55px] text-title-text-color'>
					{title}
				</p>

				<div className='w-fit'>
					<JobMinistryTag
						{...{
							textClassName: 'text-dev-accent',
							ministry_name: ministry?.name,
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
							name: job_type?.name,
						}}
					/>
				</div>

				<div className='w-fit'>
					<LocationLabel
						{...{
							className:
								'flex gap-[2px] text-[12px] leading-[16.37px] font-semibold text-commentCardTextColor',
							name: location,
						}}
					/>
				</div>

				<div className='w-fit'>
					<TimeLimitLabel
						{...{
							name: formatDistance(application_end ?? new Date(), new Date(), {
								addSuffix: true,
							}),
						}}
					/>
				</div>
			</div>

			<div className='w-fit leading-[24px] font-normal text-[14px] text-commentCardTextColor my-[4px]'>
				{getTextFromHTML(description).substring(0, 150)} ...
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
					<p className='text-time-color'>{comments.length}</p>
				</div>
			</div>
		</div>
	);
};

export const HowItWorksCard = ({
	subtitle,
	Icon,
	title,
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
					{step}. {t(`${title}`)}
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
	includeCam = true,
	name,
}: {
	includeCam?: boolean;
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
			{includeCam ? (
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
			) : null}
		</div>
	);
};

export const UploadedDocument = ({ file }: { file: Media }) => {
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
				{file.name}
			</div>
			<div className='flex-[5] flex gap-[16px] items-center justify-end'>
				<Link
					className='cursor-pointer selection:bg-inherit'
					download={file.previewUrl ?? file.url}
					href={file.previewUrl ?? file.url}
					target='_blank'>
					<EyeIcon className='text-mainGreen leading-[20px] text-[14px] font-semibold w-[22px] h-[22px]' />
				</Link>

				<Link
					className='cursor-pointer selection:bg-inherit'
					download={file.url}
					href={file.url}
					target='_blank'>
					<DownloadIcon className='text-mainGreen leading-[20px] text-[14px] font-semibold w-[22px] h-[22px]' />
				</Link>
			</div>
		</div>
	);
};

export const Comments = ({
	comments,
}: Pick<JobDescriptionTypes, 'comments'>) => (
	<div className='flex flex-col gap-[6px]'>
		<p className='font-semibold text-[20px] leading-[28px] tracking-[.5%] text-textTitle'>
			Comments
		</p>

		{comments.length < 1 ? (
			<div className='font-normal text-[16px] leading-[24px] text-gray-600'>
				No comments yet. Be the first one to leave a comment.
			</div>
		) : null}
		{comments.map(({ id, message, user, createdAt, replies }) => (
			<div key={id} className='flex flex-col gap-[6px]'>
				<div className='flex gap-[6px] item-center'>
					<p className='font-bold text-[16px] leading-[24px] text-commentsColor'>
						{user.username}
					</p>
					<p className='leading-[24px] text-[14px] font-normal text-bodyText'>
						says
					</p>
				</div>
				<p className='text-bodyText font-normal text-[16px] leading-[24px]'>
					{message}
				</p>
				<p className='text-mainGreen font-normal text-[16px] leading-[24px]'>
					{formatDistance(createdAt, new Date(), { addSuffix: true })}
				</p>

				<div className='px-[32px]'>
					{replies?.map(({ message, id, user, createdAt }) => {
						return (
							<div key={id} className='flex flex-col gap-[6px]'>
								<div className='flex gap-[6px] items-center'>
									<p className='font-bold text-[16px] leading-[24px] text-commentsColor'>
										{user?.username}
									</p>
									<p className='leading-[24px] text-[14px] font-normal text-bodyText'>
										responded
									</p>
								</div>
								<p className='text-bodyText font-normal text-[16px] leading-[24px]'>
									{message}
								</p>
								<p className='text-mainGreen font-normal text-[16px] leading-[24px]'>
									{formatDistance(new Date(), createdAt, {
										addSuffix: true,
									})}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		))}
	</div>
);

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
	pageCount,
	pageSize,
	onPageChange,
}: TTableReusableComponent & {
	isLoadingMainContrib?: boolean;
	isErrorMainContrib?: boolean;
	pageCount: number;
	pageSize: number;
	onPageChange: (page: number) => void;
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
											onChangeHandler: console.log,
											label: item,
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
							pageCount: pageCount,
							pageSize: pageSize,
							onPageChange,
						}}
					/>
				)}
			</div>
		</Fragment>
	);
};

export const SelectedFileSingleList = ({
	handleDeleteRemoteItem,
	handleDeleteItem,
	remoteFile,
	file,
}: {
	remoteFile?: Media;
	file?: File;
} & Pick<
	FileSelectorPropsType,
	'handleDeleteItem' | 'handleDeleteRemoteItem'
>) => (
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
					{remoteFile ? remoteFile.name : file?.name}
				</p>
			</div>

			<div
				onClick={(e) =>
					remoteFile
						? handleDeleteRemoteItem
							? handleDeleteRemoteItem({ id: remoteFile.id })
							: null
						: handleDeleteItem
						? handleDeleteItem(file!)
						: null
				}
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

export const FileListDivider = () => (
	<div className='bg-dividerColor h-[1px]'></div>
);

export const ProfileContainer = ({ data, refetch }: ProfilePropsTypes) => {
	const [selectedFiles, setSelectedFile] = useState<File[]>([]);
	const [errMessage, setErrMsg] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const pathname = usePathname();
	const { t } = useTranslation();
	const router = useRouter();

	const handleDeleteItem = (file: File) =>
		setSelectedFile(selectedFiles.filter((currItem) => currItem !== file));

	const FormSchema = z.object({
		username: z
			.string()
			.min(2, {
				message: 'Username must be at least 2 characters.',
			})
			.max(25, {
				message: 'Username must not exceed 25 characters.',
			})
			.optional(),

		firstname: z
			.string()
			.min(2, {
				message: 'First name must be at least 2 characters.',
			})
			.max(25, {
				message: 'First name must not exceed 25 characters.',
			})
			.optional(),

		lastname: z
			.string()
			.min(2, {
				message: 'Last name must be at least 2 characters.',
			})
			.max(25, {
				message: 'Last name must not exceed 25 characters.',
			})
			.optional(),

		phone_number: z
			.string()
			.min(2, {
				message: 'Phone number must be at least 2 characters.',
			})
			.max(12, {
				message: 'Phone number must not exceed 12 characters.',
			})
			.optional(),

		email: z
			.string()
			.email({ message: 'Email field must contain a valid email' })
			.max(25, {
				message: 'Email must not exceed 25 characters.',
			})
			.optional(),

		id_number: z
			.string()
			.min(6, {
				message: 'ID must be at least 6 characters.',
			})
			.max(9, { message: 'ID must not exceed 8 characters' })
			.optional(),

		gender: z
			.string()
			.min(2, {
				message: 'Gender must be filled',
			})
			.optional(),

		location: z
			.string()
			.min(2, {
				message: 'Location must be field.',
			})
			.max(25, {
				message: 'Location must not exceed 25 characters.',
			})
			.optional(),
		county: z
			.string()
			.min(2, {
				message: 'County of Residence must be filled',
			})
			.max(25, {
				message: 'County must not exceed 25 characters.',
			})
			.optional(),
		sub_county: z
			.string()
			.min(2, {
				message: 'Sub-county must be at least 2 characters.',
			})
			.max(25, {
				message: 'Sub-county must not exceed 25 characters.',
			})
			.optional(),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			phone_number: data?.data.phone_number ?? '',
			sub_county: data?.data.sub_county ?? '',
			id_number: data?.data.id_number ?? '',
			firstname: data?.data.firstname ?? '',
			username: data?.data.username ?? '',
			lastname: data?.data.lastname ?? '',
			location: data?.data.location ?? '',
			county: data?.data.county ?? '',
			gender: data?.data.gender ?? '',
			email: data?.data.email ?? '',
		},
	});

	const handleDeleteRemoteItem = ({ id }: { id: string | number }) => {
		deleteResourceEndpointData({
			url: `upload/files/${id}`,
			data: {},
		})
			.then(({ err }) => {
				if (err) {
					if (err.status === 400)
						err.details.errors.map(({ path, message, name }) => {
							const [field_name, ...rest] = path;
							//@ts-ignore
							form.setError(field_name, {
								message: message.replace(field_name, 'This field '),
							});
						});
					else if (err.status === 401)
						router.push(
							`/?${URL_SEARCH_PARAMS.redirect}=${encodeURIComponent(pathname)}`
						);
					else if (err.status === 403) setErrMsg('Permission denied');
					else setErrMsg('Something went wrong');
				}

				if (data) refetch();
			})
			.finally(() => setLoading(false));
	};

	function onSubmit(data: z.infer<typeof FormSchema>) {
		const frmData = new FormData();

		selectedFiles.map((file) => frmData.append('files.files', file));

		frmData.append('data', `${JSON.stringify(data)}`);
		setLoading(true);

		uploadResourceEndpointData({
			data: frmData,
			url: `auth/users`,
			method: 'PUT',
		})
			.then(({ data, err }) => {
				if (err) {
					if (err.status === 400)
						err.details.errors &&
							err.details.errors.map(({ path: [field_name], message }) =>
								//@ts-ignore
								form.setError(field_name, {
									message: message.replace(field_name, 'This field '),
								})
							);
					else if (err.status === 401)
						router.push(
							`/?${URL_SEARCH_PARAMS.redirect}=${encodeURIComponent(pathname)}`
						);
					else if (err.status === 403) {
						setErrMsg('Permission denied');
						toast.error('Permission denied', {
							position: 'top-right',
						});
					} else {
						setErrMsg('Something went wrong');
						toast.error('Something went wrong', {
							position: 'top-right',
						});
					}
				} else
					toast.success('Profile Updated', {
						position: 'top-right',
					});
			})
			.finally(() => setLoading(false));
	}

	return (
		<Suspense>
			<div className='shadow-profileBoxShadow bg-white gap-[4px] md:p-[28px] p-3 rounded-[20px]'>
				<p className='text-title-text-color tracking-[-.5%] md:leading-[28px] md:text-[24px] font-bold'>
					Profile details
				</p>

				<p className='w-fit mx-auto text-red-700 font-normal text-[16px]'>
					{errMessage}
				</p>

				<div className='w-full h-fit flex gap-[40px] md:p-[28px] flex-wrap'>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='w-full space-y-6'>
							<div className='flex flex-wrap gap-[24px]'>
								<div className='flex-[1]'>
									<FormField
										control={form.control}
										name='username'
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
										{...{ disabled: true }}
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
										name={'firstname'}
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-title-text-color'>
													{t('First name')}
												</FormLabel>
												<FormControl>
													<Input
														placeholder='First name'
														{...field}
														className=''
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<div className='flex-[1]'>
									<FormField
										control={form.control}
										name={'lastname'}
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-title-text-color'>
													{t('Last name')}
												</FormLabel>
												<FormControl>
													<Input placeholder='Last name' {...field} />
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
										name='phone_number'
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
										name={'id_number'}
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
															<FormLabel className='font-normal'>
																Male
															</FormLabel>
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
										name={'county'}
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
										name={'sub_county'}
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

							<div className=''>
								<p className='font-bold leading-[24px] text-[16px] text-textTitle'>
									{t('Upload files *')}
								</p>

								<UploadFileCard
									{...{
										handleDeleteRemoteItem,
										jobFiles: data?.data.files ?? [],
										handleDeleteItem,
										setSelectedFile,
										selectedFiles,
									}}
								/>
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
				<ToastContainer />
			</div>
		</Suspense>
	);
};

export const Profile = () => {
	const { isLoading, isError, data, refetch } = useQuery({
		queryFn: useQueryCustomWrapper<TUSER>,
		queryKey: [
			`user-data`,
			{
				url: `auth/me`,
				qFunc: fetchEndpointData,
			},
		],
	});

	return (
		<div className='w-full h-full'>
			{isLoading ? (
				<div className='w-full h-full'>
					<Loader />
				</div>
			) : isError ? (
				<div className='w-full h-full'>
					<Loader {...{ title: 'Error loading data' }} />
				</div>
			) : (
				<ProfileContainer {...{ data, refetch }} />
			)}
		</div>
	);
};

export const MyApplications = () => {
	const userCookie = getCookie(COOKIE_KEYS.user);
	const userInfo: TUSER | null = userCookie ? JSON.parse(userCookie) : null;
	const [page, setCurrentPage] = useState(1);
	const { t } = useTranslation();

	const { isLoading, isError, data } = useQuery({
		queryFn: useQueryCustomWrapper<Application[]>,
		queryKey: [
			`my-applications-data`,
			{
				url: `myapplications`,
				qFunc: fetchEndpointData,
				options: {
					populate: {
						job: {
							populate: { ministry: true, job_type: true },
						},
						comment: true,
						user: true,
					},
					sort: 'createdAt:desc',
				},
			},
		],
		enabled: !!userInfo?.id && !!page,
	});

	return (
		<div className='gap-y-[32px] md:gap-y-0 md:col-span-3 h-fit overflow-auto shadow-tableBoxShadow bg-white border border-white rounded-[12px] p-[10px]'>
			{isLoading ? (
				<div className='w-full h-full'>
					<Loader />
				</div>
			) : isError ? (
				<div className='w-full h-full'>
					<Loader {...{ title: 'Error fetching data' }} />
				</div>
			) : (
				<div className='md:col-span-6'>
					<TableReusableComponent
						{...{
							title: (
								<div className='flex items-center gap-[8px]'>
									<p className='leading-[28px] text-table-title-color font-bold text-[20px] md:text-[24px] tracking-[-.5%]'>
										{t('My Applications')}
									</p>

									<JobMinistryTag
										{...{
											textClassName:
												'bg-applicant-colorbg text-applicant-colorText',
											ministry_name: `${data?.meta.pagination.total} Applications`,
											className:
												'bg-applicant-colorbg rounded-[16px] px-[8px] py-[2px]',
											dotClass: 'hidden',
										}}
									/>
								</div>
							),
							columns: MyApplicantColumns,
							searchColumn: 'job',
							titleFilterInline: false,
							showPagination: true,
							isSearchAtEnd: false,
							data: data?.data ?? [],
							// filter: true,
							pageCount: data?.meta?.pagination?.pageCount ?? 1,
							pageSize: data?.meta.pagination.page || 1,
							onPageChange: (page) => {
								setCurrentPage(page);
							},
						}}
					/>
				</div>
			)}
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
	handleDeleteRemoteItem,
	handleDeleteItem,
	setSelectedFile,
	selectedFiles,
	setError,
	jobFiles = [],
}: FileSelectorPropsType) => {
	const inputFieldRef = useRef<HTMLInputElement | null>(null);
	const { t } = useTranslation();
	const triggerFileSelectorDialog = (e: any) => inputFieldRef.current?.click();

	const handleSelectedFile = (e: ChangeEvent<HTMLInputElement>) => {
		setError && setError();

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

				{jobFiles.map((remoteFile, index) => (
					<React.Fragment key={index}>
						<SelectedFileSingleList
							{...{ remoteFile, handleDeleteRemoteItem, handleDeleteItem }}
						/>
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

export const MoreJobsComponent = ({
	onClickHandler,
}: Pick<TMoreSearchTypes, 'onClickHandler'>) => (
	<div
		className='bg-main-Green w-fit h-fit flex gap-[2px] rounded-[8px] px-[18px] py-[10px] items-center justify-center selection:bg-inherit'
		onClick={onClickHandler}
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

export const FeaturedJobs = () => {
	const [filters, setFilters] = useState<TFilterTypes>(initialFilterState);

	const updateFilter = getFilterUpdateFunction({ setFilters });
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
				qFunc: fetchEndpointData,
				url: `ministries`,
				options: {
					fields: ['name'],
				},
			},
		],
	});

	const { isLoading, isError, data, error } = useQuery({
		queryFn: useQueryCustomWrapper<TJob[]>,
		queryKey: [
			`featured-jobs`,
			{
				url: `jobs`,
				qFunc: fetchEndpointData,
				options: {
					populate: ['ministry', 'job_type', 'applications', 'comments'],
					sort: 'createdAt:desc',
					filters: {
						...(filters.department.length > 0
							? {
									ministry: {
										name: {
											$in: filters.department,
										},
									},
							  }
							: {}),
					},
				},
			},
		],
	});

	return (
		<div className='w-full'>
			{/* featured jobs category list  */}
			{isMinistryLoading ? (
				<div className='w-full h-full my-[50px]'>
					<Loader />
				</div>
			) : isMinistryError ? (
				<div className='w-full h-full my-[50px]'>
					<Loader {...{ title: 'Error fetching data.' }} />
				</div>
			) : (
				<div className='w-full gap-[24px] px-[24px] py-[10px]'>
					<div className='flex gap-[16px] py-[20px] overflow-x-auto'>
						<FeaturedJobsCategories
							{...{
								onChange: () => setFilters(initialFilterState),
								checked: filters === initialFilterState ? true : false,
								name: 'All',
							}}
						/>

						{ministries?.data?.map(({ name }, index) => (
							<FeaturedJobsCategories
								key={index}
								{...{
									onChange: updateFilter,
									checked: filters.department.find((value) => value === name)
										? true
										: false,
									name,
								}}
							/>
						))}
					</div>
				</div>
			)}

			<div className='w-full'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px]'>
					{isLoading ? (
						<div className='w-full h-full py-[50px]'>
							<Loader />
						</div>
					) : isError ? (
						<div className='w-full h-full py-[50px]'>
							<Loader {...{ title: 'Error fetching data.' }} />
						</div>
					) : (
						data?.data?.map((job, index) => (
							<CommentCard key={index} {...job} />
						))
					)}
				</div>

				<div className='flex items-center justify-center my-[20px]'>
					<MoreJobsComponent
						{...{
							onClickHandler: () => {
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
		</div>
	);
};

export const JobContainer = () => {
	const params = useSearchParams();
	const router = useRouter();
	const [page, setCurrentPage] = useState(1);
	const [filters, setFilters] = useState<TFilterTypes>({
		...initialFilterState,
		department: params.getAll('departments') ?? initialFilterState.department,
		jobType: params.getAll('job_type') ?? initialFilterState.jobType,
		term: params.get('term') ?? initialFilterState.term,
	});

	const updateFilter = getFilterUpdateFunction({ setFilters });
	const { t } = useTranslation();

	const clearFilters = () => setFilters(initialFilterState);

	const { isLoading, isError, data } = useQuery({
		queryFn: useQueryCustomWrapper<TJob[]>,
		queryKey: [
			`jobs-data`,
			{
				url: `jobs`,
				qFunc: fetchEndpointData,
				options: {
					populate: ['ministry', 'job_type', 'applications', 'comments'],
					sort: 'createdAt:desc',
					pagination: {
						page: page,
					},
					filters: {
						$and: [
							...(filters.term
								? [
										{
											title: {
												$containsi: filters.term,
											},
										},
								  ]
								: []),

							...(filters.jobType.length > 0
								? [
										{
											job_type: {
												name: {
													$in: filters.jobType,
												},
											},
										},
								  ]
								: []),
							,
							...(filters.department.length > 0
								? [
										{
											ministry: {
												name: {
													$in: filters.department,
												},
											},
										},
								  ]
								: []),
							...[{ status: JobStatusEnum.Open }],
						],
					},
				},
			},
		],
		enabled: !!page,
	});

	const {
		isLoading: isJobtypeLoading,
		isError: isJobTypeError,
		data: jobTypes,
	} = useQuery({
		queryFn: useQueryCustomWrapper<TJobTypes[]>,
		queryKey: [
			`jobtype-data`,
			{
				url: `job-types`,
				qFunc: fetchEndpointData,
				options: {
					fields: ['name'],
				},
			},
		],
	});

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
		<main className='w-full space-y-10'>
			<div className='w-full'>
				<Slogan
					slogan={t(
						'Make a real difference in your community by joining a vibrant team dedicated to serving the public good'
					)}
					beginningText={t('Find the')}
					middleText={t('Right Job')}
					endingText={t('for you')}
					{...{
						onClickHandler: () => {},
						currentValue: filters.term,
						onChange: updateFilter,
						type: 'term',
					}}
				/>
			</div>

			<section className='px-[20px] pb-[20px] md:px-[100px] md:pb-[100px]'>
				<div className='flex gap-[32px] justify-start my-[20px] w-full overflow-x-auto h-[40px]'>
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
								{t('Filter')}
							</p>
						</button>

						<div className='w-[1px] h-full bg-settingsClearColor'></div>
						<button className='flex space-x-2' onClick={clearFilters}>
							<p className='leading-[24px] font-normal text-[14px] text-settingsClearColor'>
								{t('Clear All')}
							</p>
						</button>
					</div>

					<div className='flex gap-[12px] w-full items-center justify-start'>
						{filters.department.map((name, index) => (
							<FilterTag
								key={index}
								{...{ name, onChange: updateFilter, type: 'department' }}
							/>
						))}

						{filters.jobType.map((name, index) => (
							<FilterTag
								key={index}
								{...{ name, onChange: updateFilter, type: 'jobType' }}
							/>
						))}
					</div>
				</div>

				<section className='flex flex-col md:flex-row w-full gap-[32px]'>
					<section className='w-full md:w-[30%] space-y-10 overflow-x-auto py-[30px]'>
						<div className='flex flex-col space-y-5'>
							<p className='selection:bg-inherit'>{t('Departments')}</p>

							{isMinistryLoading ? (
								<div className='w-full rounded flex'>
									<Loader {...{ align: 'justify-start' }} />
								</div>
							) : isMinistryError ? (
								<div className='w-full rounded flex'>
									<Loader
										{...{
											title: 'Error loading job types',
											align: 'justify-start',
										}}
									/>
								</div>
							) : (
								<div className='flex md:flex-col md:space-y-5 space-x-2 md:space-x-0'>
									{ministries?.data?.map(({ name }, index) => (
										<FilterCheckbox
											key={index}
											{...{
												onChange: updateFilter,
												type: 'department',
												label: name,
												checked: filters.department.find(
													(value) => value === name
												)
													? true
													: false,
											}}
										/>
									))}
								</div>
							)}
						</div>

						<div className='flex flex-col space-y-5'>
							<p>{t('Employment Types')}</p>

							{isJobtypeLoading ? (
								<div className='w-full rounded flex'>
									<Loader {...{ align: 'justify-start' }} />
								</div>
							) : isJobTypeError ? (
								<div className='w-full rounded flex'>
									<Loader
										{...{
											title: 'Error loading job types',
											align: 'justify-start',
										}}
									/>
								</div>
							) : (
								<div className='flex md:flex-col md:space-y-5 space-x-2 md:space-x-0'>
									{jobTypes?.data?.map(({ name }, index) => (
										<FilterCheckbox
											key={index}
											{...{
												checked: filters.jobType.find((value) => value === name)
													? true
													: false,

												onChange: updateFilter,
												type: 'jobType',
												label: name,
											}}
										/>
									))}
								</div>
							)}
						</div>
					</section>

					{/* job listing */}
					<section className='w-[70%] mb-[100px] flex flex-col gap-[24px]'>
						{isLoading ? (
							<div className='w-[70%] h-full'>
								<Loader />
							</div>
						) : isError ? (
							<div className='h-full w-[70%]'>
								<Loader {...{ title: 'Error loading data' }} />
							</div>
						) : (
							<React.Fragment>
								{data && data.data.length > 0 ? (
									<div className='space-y-10'>
										<div className='flex flex-col gap-[24px]'>
											{data.data?.map((job, index) => (
												<FindJobsCard key={index} {...job} />
											))}
										</div>

										<div>
											<div className='flex items-center justify-center'>
												<div className='flex items-center justify-center'>
													<button
														onClick={() => {
															page > 1 && setCurrentPage(page - 1);
														}}>
														<svg
															width='24px'
															height='24px'
															viewBox='0 0 24 24'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'>
															<path
																d='M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z'
																fill='#0F0F0F'
															/>
														</svg>
													</button>

													{data.meta.pagination.pageCount > 6 ? (
														<>
															{new Array(3).fill(0).map((_, index) => (
																<PageForPaginationJobs
																	{...{
																		content: `${page + index}`,
																		handler: () => {
																			page >= 1 && setCurrentPage(page + index);
																		},
																		active: index === 0 ? true : false,
																	}}
																	key={index}
																/>
															))}

															<PageForPaginationJobs
																{...{
																	active: false,
																	content: '...',
																	handler: () => {},
																}}
															/>

															{new Array(3).fill(0).map((_, index) => (
																<PageForPaginationJobs
																	{...{
																		active: false,
																		content: `${page + index + 3}`,
																		handler: () => {
																			page >= 1 && setCurrentPage(page + index);
																		},
																	}}
																	key={index}
																/>
															))}
														</>
													) : (
														<>
															{new Array(data.meta.pagination.pageCount)
																.fill(0)
																.map((_, index) => (
																	<PageForPaginationJobs
																		{...{
																			content: `${page + index}`,
																			handler: () => {
																				page >= 1 &&
																					page <
																						data.meta.pagination.pageCount &&
																					setCurrentPage(page + index);
																			},
																			active: index === 0 ? true : false,
																		}}
																		key={index}
																	/>
																))}
														</>
													)}
													<button
														onClick={() => {
															page >= 1 &&
																page < data.meta.pagination.pageCount &&
																setCurrentPage(page + 1);
														}}>
														<svg
															width='24px'
															height='24px'
															viewBox='0 0 24 24'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'>
															<path
																d='M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z'
																fill='#0F0F0F'
															/>
														</svg>
													</button>
												</div>
											</div>
										</div>
									</div>
								) : (
									<div className='font-normal text-[16px] leading-[24px] text-gray-600'>
										No Jobs available
									</div>
								)}
							</React.Fragment>
						)}
					</section>
				</section>
				<section>
					<Alert
						name={t('Never Miss Your Dream Job!')}
						icon={''}
						description={t(
							'Sign up for job alerts and get notified straight to your inbox when openings matching your profession are posted. Dont wait, register today and take the first step towards your perfect career!'
						)}
						buttonText={t('Get Job Alerts Now!')}
					/>
				</section>
			</section>
		</main>
	);
};

export const SingleJobPage = ({ jobId }: Pick<TSinglePageProps, 'jobId'>) => {
	const [chats, setChats] = useState<TCommentType[]>([]);

	const { t } = useTranslation();

	const userCookie = getCookie(COOKIE_KEYS.user);
	const userInfo: TUSER | null = userCookie ? JSON.parse(userCookie) : null;

	const { isLoading, isError, data } = useQuery({
		queryFn: useQueryCustomWrapper<TJob>,
		queryKey: [
			`jobs-data-${jobId}`,
			{
				url: `jobs/${jobId}`,
				qFunc: fetchEndpointData,
				options: {
					sort: 'createdAt:desc',
					populate: {
						...(userInfo?.id ? { applications: true } : {}),
						job_type: true,
						comments: {
							populate: {
								user: true,
								replies: {
									populate: {
										comment: true,
										message: true,
										user: true,
										id: true,
									},
								},
							},
						},
						ministry: true,
						files: true,
					},

					filter: {
						...(userInfo?.id
							? {
									applications: {
										user: {
											id: {
												$eq: userInfo?.id,
											},
										},
									},
							  }
							: {}),
					},
				},
			},
		],
		enabled: !!jobId,
	});

	return (
		<div className='w-full space-y-10'>
			{isLoading ? (
				<div className='w-full h-[400px] bg-light-Purple'>
					<Loader />
				</div>
			) : isError ? (
				<div className='w-full h-[400px] bg-light-Purple'>
					<Loader {...{ title: 'Error loading data' }} />
				</div>
			) : (
				<div>
					<SloganWithCategory
						{...{
							comments: data?.data?.comments.length ?? 0,
							category: data?.data?.ministry.name ?? '',
							type: data?.data?.job_type?.name ?? '',
							location: data?.data.location ?? '',
							title: data?.data?.title ?? '',
							datePosted: formatDistance(
								data?.data?.application_end
									? new Date(data.data?.application_end)
									: new Date(),
								new Date(),
								{ addSuffix: true }
							),
							slogan: t(
								'Make a real difference in your community by joining a vibrant team dedicated to serving the public good'
							),
						}}
					/>
				</div>
			)}

			<div className='px-[20px] pb-[20px] md:px-[100px] md:pb-[100px] space-y-10'>
				<div className='flex flex-col md:flex-row w-full gap-[10px]'>
					{isLoading ? (
						<div className='w-full h-full'>
							<Loader />
						</div>
					) : isError ? (
						<div className='w-full h-full'>
							<Loader {...{ title: 'Error loading data' }} />
						</div>
					) : (
						<div className='md:w-[70%] space-y-10'>
							{data?.data.about_job ? (
								<div className='w-fit'>
									<p className='text-[20px] font-semibold leading-[24px] tracking-[.5%] text-textTitle'>
										About jobs
									</p>
									<p className='text-bodyText leading-[24px] text-[16px] font-normal'>
										{data.data.about_job}
									</p>
								</div>
							) : null}
							<RichTexEditor {...{ value: data?.data?.description ?? '' }} />
							{data?.data?.comments && (
								<Comments
									comments={[...chats, ...(data.data?.comments ?? [])]}
								/>
							)}

							{userInfo && userInfo.id ? (
								<CommentForm {...{ jobId, setChats }} />
							) : (
								<div className='font-normal text-[16px] leading-[24px]'>
									You must{' '}
									<Link href={'/auth/signin'} className='text-main-Green'>
										login
									</Link>{' '}
									to comment
								</div>
							)}
						</div>
					)}
					<section className='md:w-[30%] space-y-10'>
						{isLoading ? (
							<div className='w-full md:w-[400px] flex flex-col border border-socialsColor rounded-[16px] px-[16px] py-[32px] gap-[16px] h-fit bg-white space-y-10'>
								<Loader />
							</div>
						) : isError ? (
							<div className='w-full md:w-[400px] flex flex-col border border-socialsColor rounded-[16px] px-[16px] py-[32px] gap-[16px] h-fit bg-white space-y-10'>
								<Loader {...{ title: 'Error loading data' }} />
							</div>
						) : (
							<UploadDocsCard
								{...{
									applyUrl: {
										url:
											data?.data?.applications &&
											data?.data.applications?.length > 0
												? '/jobs/shortlisted'
												: `/jobs/${data?.data.id}/apply`,
										title:
											data?.data?.applications &&
											data?.data.applications?.length > 0
												? 'View Shortlisted Candidates'
												: 'Apply Now',
									},
									data: data?.data,
								}}
							/>
						)}
					</section>
				</div>
				<section className='space-y-5'>
					<div className='flex w-full justify-between'>
						<p className='font-bold text-[20px] md:text-[30px] md:leading-[36px] md:tracking-[.75%] text-textTitle'>
							{t('You May Also Be Interested In')}
						</p>
						<button className='flex space-x-2 items-center cursor-pointer'>
							<p className='font-[600] text-[14px] leading-[20px] text-mainGreen'>
								{t('See All Jobs')}
							</p>
							<ArrowRight
								className='stroke-main-Green'
								width={'24px'}
								height={'24px'}
							/>
						</button>
					</div>
					<div className='flex  gap-[16px] overflow-x-auto'>
						{isLoading ? (
							<div className='w-full md:w-[400px] flex flex-col border border-socialsColor rounded-[16px] px-[16px] py-[32px] gap-[16px] h-fit bg-white space-y-10'>
								<Loader />
							</div>
						) : isError ? (
							<div className='w-full md:w-[400px] flex flex-col border border-socialsColor rounded-[16px] px-[16px] py-[32px] gap-[16px] h-fit bg-white space-y-10'>
								<Loader {...{ title: 'Error loading data' }} />
							</div>
						) : data?.data?.relatedjobs &&
						  data?.data?.relatedjobs?.length > 0 ? (
							data?.data?.relatedjobs?.map((job, index) => (
								<CommentCard key={index} {...job} />
							))
						) : (
							<div className='font-normal text-[16px] leading-[24px] text-gray-600'>
								No related jobs at the moment.
							</div>
						)}
					</div>
				</section>
				<section>
					<Alert
						name={t('Never Miss Your Dream Job!')}
						icon={''}
						description={t(
							'Sign up for job alerts and get notified straight to your inbox when openings matching your profession are posted. Dont wait, register today and take the first step towards your perfect career!'
						)}
						buttonText={t('Get Job Alerts Now!')}
					/>
				</section>
			</div>
		</div>
	);
};

export const VerificationCodeCard = ({
	sentiment,
	title,
}: Exclude<TSuccessProps, 'link'>) => {
	return (
		<div className='flex flex-col rounded-[20px] gap-[32px] w-6/12'>
			<div className='w-full aspect-auto flex justify-center'>
				<img
					src={`${BASE_ASSET_URL}/others/email-verified.svg`}
					className='object-cover w-[50%] h-full'
					alt='mail sent'
				/>
			</div>

			<div className='w-full'>
				<div className='flex gap-[4px] flex-col'>
					<p className='font-bold text-[30px] leading-[36px] tracking-[-.75%] text-center text-textTitle'>
						{title}
					</p>
					<p className='font-normal text-[16px] leading-[24px] text-bodyText'>
						{sentiment}
					</p>
				</div>
			</div>

			{/* <div className='flex flex-col gap-[4px]'>
				<p className='text-[16px] leading-[24px] font-bold text-textTitle'>
					Verification code*
				</p>

				<input
					type={'text'}
					className='border border-gray-300 px-[12px] py-[14px] rounded-[6px] text-black'
					onChange={(e) => {}}
				/>
			</div> */}
		</div>
	);
};

export const data = '';

export const PageForPagination = ({
	active = false,
	content,
	handler,
}: {
	handler: (data: any) => void;
	content: string;
	active?: boolean;
}) => (
	<div
		className={`rounded-[8px] selection:bg-inherit flex items-center justify-center leading-[24px] hover:bg-[#F9F5FF] text-[14px] font-medium text-center cursor-pointer w-[40px] h-[40px] ${
			active ? 'bg-[#F9F5FF] text-[#7F56D9]' : 'text-main-orange'
		}`}
		onClick={handler}>
		{content}
	</div>
);

export const PageForPaginationJobs = ({
	active = false,
	content,
	handler,
}: {
	handler: (data: any) => void;
	content: string;
	active?: boolean;
}) => (
	<div
		className={`rounded-[8px] selection:bg-inherit flex items-center justify-center leading-[24px] ml-2 hover:bg-[#F9F5FF] text-[14px] font-medium text-center cursor-pointer w-[40px] h-[40px] ${
			active ? 'bg-purple-800 text-white' : 'bg-purple-100 text-black'
		}`}
		onClick={handler}>
		{content}
	</div>
);

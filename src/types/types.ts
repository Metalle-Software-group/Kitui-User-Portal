import { StrapiRequestParams } from 'strapi-sdk-js';
import React, { Dispatch, SetStateAction } from 'react';

import { ColumnDef } from '@tanstack/react-table';

export type NavUrlType = {
	name: string;
	url: string;
};

export type ExplorationCardsTypes = {
	description: string;
	name: string;
	url: string;
	alt: string;
};

export type AlertCardsTypes = {
	buttonText: string;
	description: string;
	name: string;
	icon: string;
};

export type SearchTypes = {
	searchText: string;
	placeholder: string;
	width?: string;
};

export type FeaturedJobsTypes = {
	datePosted: string;
	comments: number;
	description: string;
	category: string;
	location: string;
	width?: string;
	name: string;
	type: string;
};

export type FeatureCategoriesTypes = {
	name: string;
} & Pick<FilterJobsTypes, 'onChange'>;

export type TFilterTypes = {
	jobType: JobTypes[] | string[];
	department: string[];
	term: string;
};

export type TupdateFilterType = keyof TFilterTypes;

export enum JobTypes {
	attachment = 'Attachment',
	contract = 'Contract',
}

export type TAddRemoveFilter = {
	type: TupdateFilterType;
	action?: AddRemoveEnum;
	data: string | JobTypes;
};

export type FilterJobsTypes = {
	onChange: ({ type, data, action }: TAddRemoveFilter) => null | void;
	type: TupdateFilterType;
	checked: boolean;
	label: string;
	id?: string;
};

export type SloganType = {
	beginningText?: string;
	endingText?: string;
	middleText?: string;
	slogan: string;
	title?: string;
};

export type SloganWithCategoryType = {
	datePosted: string;
	comments: number;
	category: string;
	location: string;
	slogan: string;
	type: string;
	title: string;
};

export type JobDescriptionTypes = {
	comments: TCommentType[];
	responsibility: string[];
	qualifications: string[];
	benefits: string[];
	remark: string;
	about: string;
};

export type TNodes = {
	children?: React.ReactNode;
};

export type TComponentBasicProps = {
	styles?: React.CSSProperties;
	svgElementClassName?: string;
	roundRingClassnames?: string;
	applyToSvgEl?: boolean;
	className?: string;
};

export type TDashboardTypes = {
	IconForOpened?: (props: TComponentBasicProps) => React.JSX.Element;
	EndIcon?: (props: TComponentBasicProps) => React.JSX.Element;
	Icon?: (props: TComponentBasicProps) => React.JSX.Element;
	suburls?: TDashboardTypes[];
	onClick?: () => void;
	name: string;
	url: string;
};

export type TDepartmentCardProps = { title: string; subtitle: string } & Pick<
	TDashboardTypes,
	'Icon'
>;

export type THowItWorksCardProps = Pick<
	TDepartmentCardProps,
	'subtitle' | 'title'
> & {
	step?: number;
	Icon: string;
};

export enum AddRemoveEnum {
	Remove = 'Remove',
	Add = 'Add',
}

export type EmpTypes = { name: string };

export type THeaderBtn = {
	action?: (args: any) => any;
	present: boolean;
	text?: string;
	Icon?: any;
};

export type TTableReusableComponent = {
	title: string | React.ReactNode;
	columns: ColumnDef<any, any>[];
	headerBtn?: THeaderBtn;
	showPagination?: boolean;
	isSearchAtEnd?: boolean;
	searchColumn?: string;
	sort?: boolean;
	data: any[];
};

export type TSearchProps = {
	onChangeHandler?: (props: any) => void;
	value?: string;
	title?: string;
};

export type TComponentsType = {
	components: React.ReactNode;
};

export interface DropdownData<LabelType = string> {
	onChangeHandler: (value: string) => any;
	id?: string | number;
	label: LabelType;
}

export type TDropdownCustomComponent = {
	onChangeHandler: (value: any) => any;
	currPageSize?: string | number;
	data: DropdownData[];
	width?: number;
} & TNodes;

export type TColumnStaffDefinition = {
	accessorKey?: string;
	header?: string;
	id?: string;
	enableHiding?: boolean;
	cell?: any;
};
export interface StrapiAuthenticationData {
	identifier: string;
	password: string;
}

export interface Role {
	description: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	type: string;
	id: number;
}

export type TAuthUser = TUSER;

export type TError = {
	message: string;
	status: number;
	details: Details;
	name: string;
};

export type Details = {
	errors: [{ path: string[]; message: string; name: string }];
};

export type TqueryKey = [
	string,
	{
		options: StrapiRequestParams;
		url: string;
		qFunc: <dataTypeExpected>(params: {
			options: StrapiRequestParams;
			url: string;
		}) => Promise<StrapiResponse<dataTypeExpected>>;
	}
];

export type ProfilePropsTypes = {};

export type FileSelectorPropsType = {
	setSelectedFile: Dispatch<SetStateAction<File[]>>;
	handleDeleteItem: (file: File) => void;
	selectedFiles: File[];
};

export type TUploadDocsCardProps = {
	applyUrl: {
		title: string;
		url: string;
	};
};

export type TApiHandlerProps = {
	id?: number | string;
	data: any;
	url: string;
	options?: {
		[key: string]: any;
	};
};

export type TMinistry = {
	id: number;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
};

export type TUSER = {
	phone_number: null | string;
	ministry?: TMinistry;
	confirmed: boolean;
	accessType: string;
	gender: null | string;
	username: string;
	staff_role: Role;
	createdAt: Date;
	updatedAt: Date;
	blocked: boolean;
	provider: string;
	sub_county: null;
	id_number: null;
	status: string;
	email: string;
	location: null;
	county: null;
	id: number;
};

export type SERVER_ERROR = {
	error: TError;
	data: {};
};

export type ResponseMeta = {
	pagination: {
		pageSize: 25;
		pageCount: 1;
		page: 0;
		total: 0;
	};
};
export interface StrapiResponse<T> {
	meta: ResponseMeta;
	data: T;
}

export type THttpMethods = 'POST' | 'GET' | 'PUT' | 'PATCH';

export type TCreateEditJobProps = {
	successBtn: {
		subDetails: { method: THttpMethods; url: string };
		text: string;
	};
	titleEnd?: React.ReactNode;
	jobTypes?: TJobTypes[];
	ministries?: TMinistry[];
	title: string;
};

export type TJobTypes = {
	publishedAt: Date;
	createdAt: Date;
	updatedAt: Date;
	name: string;
	id: number;
};

export type TJobStatus = 'Open' | 'Closed' | 'Suspended';

export enum JobStatusEnum {
	UnderReview = 'under_review',
	Closed = 'closed',
	Open = 'open',
}

export enum TApplicationStatus {
	UnderReview = 'under_review',
	Shortlisted = 'shortlisted',
	Rejected = 'rejected',
}

export interface TReply {
	comment?: TCommentType;
	publishedAt?: Date;
	createdAt: Date;
	updatedAt: Date;
	message: string;
	user?: TUSER;
	id: number;
}

export interface MediaFormat {
	height: number;
	width: number;
	name: string;
	size: number;
	hash: string;
	ext: string;
	mime: string;
	path: string;
	url: string;
}

export type Media = {
	id: number;
	attributes: {
		formats: {
			thumbnail: MediaFormat;
			small: MediaFormat;
			medium: MediaFormat;
			large: MediaFormat;
		};
		alternativeText: string;
		previewUrl: string;
		updatedAt: Date;
		createdAt: Date;
		provider: string;
		caption: string;
		height: number;
		width: number;
		name: string;
		size: number;
		mime: string;
		hash: string;
		ext: string;
		url: string;
	};
};

export type TCommentType = {
	createdBy: TUSER;
	updatedBy: TUSER;
	publishedAt?: Date;
	createdAt: string;
	replies?: TReply[];
	updatedAt: Date;
	message: string;
	hidden: boolean;
	user: TUSER;
	job: TJob;
	id: string;
};

export interface TJob<TMedia = any> {
	comments: TCommentType[];
	applications: Application[];
	application_start: string;
	applicationCount: number;
	application_end: string;
	job_type: TJobTypes;
	status: TJobStatus;
	relatedjobs: TJob[];
	publishedAt: string;
	ministry: TMinistry;
	description: string;
	about_job: string;
	createdAt: string;
	updatedAt: string;
	createdBy: any;
	updatedBy: any;
	location: string;
	closedBy: any;
	files: TMedia;
	title: string;
	id: number;
}

export type TSuccessProps = {
	sentiment: string;
	title: string;
	link: {
		text: string;
		url: string;
	};
};

export interface Application {
	status?: TApplicationStatus;
	comment?: TCommentType;
	publishedAt?: Date;
	createdAt: Date;
	updatedAt: Date;
	user?: TUSER;
	job?: TJob;
	files?: any[];
	id: number;
}

export type TSeeMore = {
	handler: (props: any) => void;
	title: string;
};

export type TDataApplyJobORUpdateProfile = {
	user: string | number;
	job: string | number;
	comment?: string;
	files?: any[];
};

export type TMoreSearchTypes = {
	onClickHandler: (any: any) => void;
	currentValue?: string;
};

export type TSinglePageProps = {
	jobId: string | number;
};

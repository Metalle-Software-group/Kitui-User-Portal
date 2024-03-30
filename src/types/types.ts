import { StrapiRequestParams, StrapiResponse } from 'strapi-sdk-js';
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
	onChange?: () => void;
	name: string;
};

export type TFilterTypes = {
	jobType: JobTypes[];
	department: string[];
	term: string;
};

export type TupdateFilterType = keyof TFilterTypes;

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
	comments: commentType[];
	responsibility: string[];
	qualifications: string[];
	benefits: string[];
	remark: string;
	about: string;
};

export type commentType = {
	replies?: commentType[];
	comment: string;
	timeline: string;
	name: string;
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

export enum JobTypes {
	attachment = 'Attachment',
	contract = 'Contract',
}

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

export type ProfilePropsTypes = {
	onSubmit: any;
	form: any;
};

export type FileSelectorPropsType = {
	setSelectedFile: Dispatch<SetStateAction<File[]>>;
	handleDeleteItem: (file: File) => void;
	selectedFiles: File[];
};

export type TUploadDocsCardProps = {
	applyUrl: string;
};

export type TApiHandlerProps = {
	id?: number | string;
	data: any;
	url: string;
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
	Shortlisted = 'shortlisted ',
	Rejected = 'rejected',
}

export type TCommentType = {
	replies: TCommentType[];
	createdBy: TUSER;
	updatedBy: TUSER;
	createdAt: string;
	updatedAt: string;
	message: string;
	hidden: boolean;
	user: TUSER;
	job: TJob;
};

export type TJob = {
	comments: TCommentType[];
	applications: Application[];
	application_start: string;
	applicationCount: number;
	application_end: string;
	job_type: TJobTypes;
	status: TJobStatus;
	ministry: TMinistry;
	description: string;
	publishedAt: string;
	createdAt: string;
	updatedAt: string;
	createdBy: any;
	updatedBy: any;
	location: string;
	closedBy: any;
	title: string;
	id: number;
	files: any;
};

export interface Application {
	status?: TApplicationStatus;
	comment?: Comment;
	publishedAt?: Date;
	createdAt: Date;
	updatedAt: Date;
	user?: TUSER;
	job?: TJob;
	files?: any[];
	id: number;
}

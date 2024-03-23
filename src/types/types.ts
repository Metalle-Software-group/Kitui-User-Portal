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
	onChange: (props: any) => void;
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
};

export type TupdateFilterType = keyof TFilterTypes;

export type TAddRemoveFilter = {
	type: TupdateFilterType;
	action: AddRemoveEnum;
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

export type TUSER = {
	firstName: string | null;
	lastName: string | null;
	createdAt: string;
	updatedAt: string;
	username: string;
	confirmed: true;
	provider: string;
	blocked: false;
	email: string;
	id: number;
	role: Role;
};

export type TAuthUser = TUSER;

export type Details = {};

export type SERVER_ERR = {
	status: number;
	name: string;
	message: string;
	details: Details;
};

export type SERVER_ERROR = {
	error: SERVER_ERR;
	data: any;
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

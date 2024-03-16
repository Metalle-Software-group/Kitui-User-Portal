import React, { Dispatch, SetStateAction } from 'react';

export type NavUrlType = {
	name: string;
	url: string;
};

export type ExplorationCardsTypes = {
	url: string;
	alt: string;
	name: string;
	description: string;
};

export type AlertCardsTypes = {
	name: string;
	icon: string;
	description: string;
	buttonText: string;
};

export type SearchTypes = {
	placeholder: string;
	searchText: string;
	onChange: (props: any) => void;
	width?: string;
};

export type FeaturedJobsTypes = {
	name: string;
	category: string;
	type: string;
	location: string;
	datePosted: string;
	description: string;
	comments: number;
	width?: string;
};

export type FeatureCategoriesTypes = {
	name: string;
	onChange?: () => void;
};

export type TFilterTypes = {
	jobType: JobTypes[];
	department: string[];
};

export type FilterJobsTypes = {
	onChange: Dispatch<SetStateAction<TFilterTypes>>;
	checked: boolean;
	label: string;
	id?: string;
} & { dataType: keyof TFilterTypes };

export type SloganType = {
	title?: string;
	beginningText?: string;
	endingText?: string;
	middleText?: string;
	slogan: string;
};

export type SloganWithCategoryType = {
	title: string;
	category: string;
	type: string;
	location: string;
	datePosted: string;
	comments: number;
	slogan: string;
};

export type JobDescriptionTypes = {
	about: string;
	responsibility: string[];
	qualifications: string[];
	benefits: string[];
	comments: commentType[];
	remark: string;
};

export type commentType = {
	name: string;
	comment: string;
	timeline: string;
};

export type TNodes = {
	children?: React.ReactNode;
};

export type TComponentBasicProps = {
	styles?: React.CSSProperties;
	svgElementClassName?: string;
	applyToSvgEl?: boolean;
	className?: string;
};

export type TDashboardTypes = {
	suburls?: TDashboardTypes[];
	IconForOpened?: (props: TComponentBasicProps) => React.JSX.Element;
	EndIcon?: (props: TComponentBasicProps) => React.JSX.Element;
	Icon?: (props: TComponentBasicProps) => React.JSX.Element;
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
	attachmen = 'attachment',
	contract = 'contract',
}

export enum AddRemoveEnum {
	Remove = 'Remove',
	Add = 'Add',
}

export type EmpTypes = { name: string };

import {
	AgricultureAndLivestockIcon,
	HealthCareIcon,
	YSportIcon,
	EnergyIcon,
	WaterIcon,
	RoadsIcon,
	TradeIcon,
	HomeIcon,
} from '@/components/icons';
import {
	THowItWorksCardProps,
	FeatureCategoriesTypes,
	TDepartmentCardProps,
	FeaturedJobsTypes,
	TFilterTypes,
	NavUrlType,
	EmpTypes,
} from '@/types/types';

export const NavUrls: NavUrlType[] = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'Find Jobs',
		url: '/jobs',
	},
	{
		name: 'Departments',
		url: '/departments',
	},
	{
		name: 'Kitui County',
		url: 'kitui-county',
	},
	{
		name: 'Sign In',
		url: '/auth/signin',
	},
];

export const ExploreCategoryCards: TDepartmentCardProps[] = [
	{
		title: 'Youth, Sports & Culture',
		subtitle: '10 Open Positions',
		Icon: YSportIcon,
	},
	{
		title: 'Health & Sanitation',
		subtitle: '10 Open Positions',
		Icon: HealthCareIcon,
	},
	{
		Icon: AgricultureAndLivestockIcon,
		title: 'Agriculture & Livestock',
		subtitle: '10 Open Positions',
	},
	{
		title: 'Water & Irrigation',
		subtitle: '10 Open Positions',
		Icon: WaterIcon,
	},

	{
		title: 'Land,Housing & Urban Planning',
		subtitle: '10 Open Positions',
		Icon: HomeIcon,
	},
	{
		title: 'Roads,Public Works & Transport',
		subtitle: '10 Open Positions',
		Icon: RoadsIcon,
	},
	{
		title: 'Trade,Industry & Co-Operatives',
		subtitle: '10 Open Positions',
		Icon: TradeIcon,
	},
	{
		title: 'Energy,Environment & Forestry',
		subtitle: '10 Open Positions',
		Icon: EnergyIcon,
	},
];

export const Featured: FeaturedJobsTypes[] = [
	{
		name: 'Public Health Officer',
		category: 'Health & Sanitation',
		type: 'Attachment',
		location: 'Mwingi',
		datePosted: '2 days ago',
		description:
			'Join our passionate team of public health professionals and help educate the community about critical health issues. Youll develop and deliver inform',
		comments: 3,
	},
	{
		name: 'Public Health Officer',
		category: 'Health & Sanitation',
		type: 'Attachment',
		location: 'Mwingi',
		datePosted: '2 days ago',
		description:
			'Join our passionate team of public health professionals and help educate the community about critical health issues. Youll develop and deliver inform',
		comments: 3,
	},
	{
		name: 'Public Health Officer',
		category: 'Health & Sanitation',
		type: 'Attachment',
		location: 'Mwingi',
		datePosted: '2 days ago',
		description:
			'Join our passionate team of public health professionals and help educate the community about critical health issues. Youll develop and deliver inform',
		comments: 3,
	},
	{
		name: 'Public Health Officer',
		category: 'Health & Sanitation',
		type: 'Attachment',
		location: 'Mwingi',
		datePosted: '2 days ago',
		description:
			'Join our passionate team of public health professionals and help educate the community about critical health issues. Youll develop and deliver inform',
		comments: 3,
	},
	{
		name: 'Public Health Officer',
		category: 'Health & Sanitation',
		type: 'Attachment',
		location: 'Mwingi',
		datePosted: '2 days ago',
		description:
			'Join our passionate team of public health professionals and help educate the community about critical health issues. Youll develop and deliver inform',
		comments: 3,
	},
	{
		name: 'Public Health Officer',
		category: 'Health & Sanitation',
		type: 'Attachment',
		location: 'Mwingi',
		datePosted: '2 days ago',
		description:
			'Join our passionate team of public health professionals and help educate the community about critical health issues. Youll develop and deliver inform',
		comments: 3,
	},
];

export const FeaturedCategories: Pick<FeatureCategoriesTypes, 'name'>[] = [
	{
		name: 'All',
	},
	{
		name: 'Health & Sanitation',
	},
	{
		name: 'Youth & Culture',
	},
	{
		name: 'Agriculture',
	},
	{
		name: 'Trade & Finance',
	},
];

export const Departments = [
	{
		name: 'Youth & Culture',
	},
	{
		name: 'Psyche & Culture',
	},
	// {
	// 	name: 'Youth & Culture',
	// },
	// {
	// 	name: 'Youth & Culture',
	// },
	// {
	// 	name: 'Youth & Culture',
	// },

	// {
	// 	name: 'Youth & Culture',
	// },
	// {
	// 	name: 'Youth & Culture',
	// },
	// {
	// 	name: 'Youth & Culture',
	// },
];

export const EmploymentType: EmpTypes[] = [
	{
		name: 'Attachment',
	},
	{
		name: 'Contract',
	},
];

export const Kitui = [
	'Home',
	'Governor',
	'Deputy Governor',
	'County Secretary',
	'KCPSB',
	'County News',
	'Contact us',
	'Disclaimer & Privacy Statement',
];

export const Partners = [
	' ICT Authority',
	'Kitui Municipality',
	'Council of Governors',
	'County Assembly of Kitui',
	'Commission on Revenue Allocation',
];

export const quickLinks = [
	' GHRIS',
	'eCitizen',
	'Staffmail',
	'Public Service Payroll',
];

export const Government = [
	'IFMIS',
	'Ministry of ICT',
	'Ministry of Devolution',
];

export const BASE_ASSET_URL = '/images';

export const BASE_URL = '/';

// export const NAV_URLS: TDashboardTypes[] = [
// 	{
// 		Icon: HomeIcon,
// 		url: `${BASE_URL}`,
// 		name: 'Dashboard',
// 		suburls: [],
// 		perms: [],
// 	},
// 	{
// 		url: `${BASE_URL}/applicants`,
// 		Icon: ApplicantsIcon,
// 		name: 'Applicants',
// 		perms: [],
// 	},

// 	{
// 		url: `${BASE_URL}/jobs`,
// 		Icon: WorkIcon,
// 		name: 'Jobs',
// 		perms: [],
// 	},

// 	{
// 		url: `${BASE_URL}/departments`,
// 		Icon: CompassIcon,
// 		name: 'Departments',
// 		suburls: [],
// 		perms: [],
// 	},

// 	{
// 		url: `${BASE_URL}/comments`,
// 		Icon: CommentsIcon,
// 		name: 'Comments',
// 		suburls: [],
// 		perms: [],
// 	},

// 	{
// 		url: `${BASE_URL}/staff`,
// 		name: 'User management',
// 		Icon: TwoUsersIcon,
// 		suburls: [],
// 		perms: [],
// 	},
// ];

export const NumberPrecisionAccronymn = [
	{ suffix: 'T', threshold: 1e12 },
	{ suffix: 'B', threshold: 1e9 },
	{ suffix: 'M', threshold: 1e6 },
	{ suffix: 'K', threshold: 1e3 },
	{ suffix: '', threshold: 1 },
];

export const PLATFORM_PREFIX_NAME = 'Kitui';
export const PLATFORM_SUFFIX_NAME = 'County gov';

export const FieldsToExcludeInFilter = ['actions', 'id'];

export const PAGE_SIZE: string[] = ['5', '10', '25', '50', '100'];

export const COOKIE_KEYS = {
	user: 'u_',
	auth: 'a_',
};

export const URL_SEARCH_PARAMS = { redirect: 'redir_uri' };

export const HowItWorksSteps: THowItWorksCardProps[] = [
	{
		subtitle: 'Create a free account and showcase your skills and experience.',
		Icon: `${BASE_ASSET_URL}/others/how-step-1.png`,
		title: 'Create your profile',
	},
	{
		subtitle: 'Search jobs and submit your application easily and efficiently.',
		Icon: `${BASE_ASSET_URL}/others/how-step-2.png`,
		title: 'Apply for a job',
	},

	{
		subtitle: 'Track your application status and see shortlisted candidates.',
		Icon: `${BASE_ASSET_URL}/others/how-step-3.png`,
		title: 'Track your progress',
	},
];

export const initialFilterState: TFilterTypes = {
	department: [],
	jobType: [],
	term: '',
};

export const currentlySelectedJobKey = 'current_job';

export const BACKEND_BASE_URL = 'https://kitui-jobs-portal.up.railway.app';

export const THIRD_PARTY_TOKEN_NAME = 'id_token';

export enum PROFILE_TAB_ENUM {
	'MY_JOBS' = 'myjobs',
	'PROFILE' = 'profile',
}
export const PROFILE_TAB = 'active';

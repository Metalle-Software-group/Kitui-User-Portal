'use client';

import { useTranslation } from 'react-i18next';

import { Loader } from '@/components/reusables/Others';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileIcon, WorkIcon } from '@/components/icons';
import dynamic from 'next/dynamic';

const UserProfile = dynamic(
	() => import('@/components/reusables/Others').then((mod) => mod.UserProfile),
	{
		ssr: false,
		loading: (props) => (
			<div className='w-full h-[200px]'>
				<Loader />
			</div>
		),
	}
);

const Profile = dynamic(
	() => import('@/components/reusables/Others').then((mod) => mod.Profile),
	{
		ssr: false,
		loading: (props) => (
			<div className='w-full h-[200px]'>
				<Loader />
			</div>
		),
	}
);

const MyApplications = dynamic(
	() =>
		import('@/components/reusables/Others').then((mod) => mod.MyApplications),
	{
		ssr: false,
		loading: (props) => (
			<div className='w-full h-full'>
				<Loader />
			</div>
		),
	}
);

const ProfilePage = () => {
	const { t } = useTranslation();

	return (
		<div className='md:mx-[50px] md:my-[85px] flex flex-col gap-[40px] md:px-[16px] md:py-[24px] px-[20px] pt-[20px] pb-[20px]'>
			<div className=''>
				<p className='text-textTitle leading-[36px] font-bold text-[30px] tracking-[.75%]'>
					{t('Welcome')}
				</p>
				<p className='text-bodyText leading-[24px] text-[14px] font-normal'>
					{t('Access your past applications and profile from here')}
				</p>
			</div>

			<UserProfile />

			<div className='md:p-[20px] md:py-[16px] mx-auto shadow-applicantBoxDetailsShadow rounded-[8px] w-full'>
				<Tabs defaultValue='my_applications' className='w-full'>
					<TabsList className='border-b-[1px] md:px-[8px] h-[52px] w-full justify-start gap-[10px]'>
						<TabsTrigger
							value='my_applications'
							className='flex flex-col gap-[4px]'>
							<WorkIcon
								{...{
									svgElementClassName:
										'stroke-inherit fill-inherit stroke-inherit',
									applyToSvgEl: true,
									styles: {
										width: '24px',
										height: '24px',
									},
								}}
							/>
							<p className='text-inherit font-medium text-[16px] md:leading-[22px] text-center'>
								{t('My Applications')}
							</p>
						</TabsTrigger>

						<TabsTrigger
							value='profile_info'
							className='flex flex-col gap-[4px]'>
							<ProfileIcon
								{...{
									svgElementClassName: 'stroke-inherit fill-inherit',
									applyToSvgEl: true,
									styles: {
										width: '24px',
										height: '24px',
									},
								}}
							/>
							<p className='text-inherit font-medium text-[16px] md:leading-[22px] text-center'>
								{t('Profile')}
							</p>
						</TabsTrigger>
					</TabsList>

					<TabsContent value='my_applications'>
						<MyApplications />
					</TabsContent>

					<TabsContent value='profile_info'>
						<Profile />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default ProfilePage;

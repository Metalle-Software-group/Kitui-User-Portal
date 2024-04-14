'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import {
	COOKIE_KEYS,
	NavUrls,
	PROFILE_TAB,
	PROFILE_TAB_ENUM,
} from '@/constants';
import LanguageSelector from '../translation/LanguageSelect';
import { useTranslation } from 'react-i18next';
import { getCookie } from 'cookies-next';
import { useState } from 'react';
import { Logout } from '@/utils/server';
import { TUSER } from '@/types/types';

export const Header = () => {
	const [modal, setModal] = useState(false);
	const userCookie = getCookie(COOKIE_KEYS.user);
	const { t } = useTranslation();
	const router = useRouter();
	const [userInfo, setUserInfo] = useState<TUSER | null>(
		userCookie ? JSON.parse(userCookie) : null
	);
	const name = userInfo?.username || 'K E';
	const [fname, lname] = name.split(' ');

	return (
		// shadow-headerShadow
		<nav className='px-[10px] bg-white sticky top-0 left-0 z-[100] h-[108px] w-[99vw] flex justify-center items-center'>
			<div className='flex justify-between items-center max-w-[1440px] w-full'>
				<div
					className='flex justify-between py-[12px]'
					onClick={(e) => router.push('/')}>
					<Image
						className='dark:invert ml-[24px] mr-[24px] p-2'
						src='/images/logo/logo.png'
						alt='KCG Logo'
						width={84}
						height={84}
						priority
					/>
				</div>

				<div className='w-fit'>
					<div className='flex gap-[50px] w-full justify-between text-bodyText font-extrabold text-[16px] leading-[24px]'>
						{NavUrls.map(({ url, name }, index) => (
							<Link
								key={index}
								{...{
									className:
										'gap-[2px] flex py-[10px] leading-[24px] text-[16px] text-bodyText font-bold',
									href:
										url === '/auth/signin'
											? userCookie
												? `/profile?=${PROFILE_TAB}=${PROFILE_TAB_ENUM.PROFILE}`
												: url
											: url,
								}}>
								{t(
									`${
										url === '/auth/signin'
											? userCookie
												? 'Profile'
												: name
											: name
									}`
								)}
							</Link>
						))}
					</div>
				</div>
				<div className='flex w-[266px] justify-between items-center'>
					<div className='flex space-x-2'>
						<Image
							src='/header/translate.svg'
							alt='Vercel Logo'
							width={24}
							height={24}
							priority
						/>
						<LanguageSelector />
					</div>
					<div className='flex space-x-2'>
						<Image
							src='/header/accessibility.svg'
							alt='Vercel Logo'
							width={24}
							height={24}
							priority
						/>
						<Image
							src='/header/dropdown.svg'
							alt='Vercel Logo'
							width={24}
							height={24}
							priority
						/>
					</div>
					<div className='flex w-fit h-[36px] justify-center items-center rounded-xl border-2 border-mainGreen cursor-pointer selection:bg-inherit'>
						<p className='text-mainGreen font-[600] text-[14px] leading-[20px] px-[8px] py-[14px]'>
							{t('Contact Us')}
						</p>
					</div>
				</div>
				{userCookie && (
					<div className='flex flex-col w-[88px] h-[44px]'>
						<div className='flex  rounded-[50px] bg-mainGreen px-[14px] py-[6px] gap-[10px] items-center'>
							<div className='flex w-[32px] h-[32px] rounded-full bg-white text-black font-bold items-center justify-center'>
								{fname?.at(0)?.toUpperCase()}
								{lname?.at(0)?.toUpperCase()}
							</div>
							<button onClick={() => setModal(!modal)}>
								<svg
									className='fill-current w-5 h-5  text-white font-bold'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									<path d='M10 12.586L3.707 6.293a1 1 0 0 1 1.414-1.414L10 10.758l5.879-5.879a1 1 0 1 1 1.414 1.414L10 12.586z' />
								</svg>
							</button>
						</div>
						{modal && (
							<div className='flex flex-col w-[81px] h-[64px] rounded-[8px] justify-between mt-2 bg-white'>
								<Link
									className='ml-2'
									href={`/profile?=${PROFILE_TAB}=${PROFILE_TAB_ENUM.PROFILE}`}>
									Profile
								</Link>
								<button
									className='m-0'
									onClick={() => {
										Logout();
									}}>
									Sign Out
								</button>
							</div>
						)}
					</div>
				)}
			</div>
		</nav>
	);
};

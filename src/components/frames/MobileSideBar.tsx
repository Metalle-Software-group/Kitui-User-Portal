'use client';

import {
	COOKIE_KEYS,
	NavUrls,
	PROFILE_TAB,
	PROFILE_TAB_ENUM,
} from '@/constants';
import { getCookie } from 'cookies-next';
import { t } from 'i18next';
import { useState } from 'react';
import Link from 'next/link';
import { HumbuggerComponent } from '../reusables/Others';

export const MobileSideBar = () => {
	const userCookie = getCookie(COOKIE_KEYS.user);
	const [opened, setOpened] = useState(false);
	return (
		<div className='mt-3 relative'>
			{/* <button onClick={() => setOpened(!opened)}>
				{!opened && (
					<div>
						<svg
							width='24px'
							height='24px'
							opacity={0.6}
							viewBox='0 0 24 24'
							fill='#1C2E45'
							xmlns='http://www.w3.org/2000/svg'>
							<g
								id='Page-1'
								stroke='none'
								strokeWidth='1'
								fill='none'
								fillRule='evenodd'>
								<g
									id='Icon-Set-Filled'
									transform='translate(-212.000000, -888.000000)'
									fill='#1C2E45'>
									<path
										d='M230,904 L214,904 C212.896,904 212,904.896 212,906 C212,907.104 212.896,908 214,908 L230,908 C231.104,908 232,907.104 232,906 C232,904.896 231.104,904 230,904 L230,904 Z M230,896 L214,896 C212.896,896 212,896.896 212,898 C212,899.104 212.896,900 214,900 L230,900 C231.104,900 232,899.104 232,898 C232,896.896 231.104,896 230,896 L230,896 Z M214,892 L230,892 C231.104,892 232,891.104 232,890 C232,888.896 231.104,888 230,888 L214,888 C212.896,888 212,888.896 212,890 C212,891.104 212.896,892 214,892 L214,892 Z'
										id='hamburger'
									/>
								</g>
							</g>
						</svg>
					</div>
				)}
				{opened && (
					<div>
						<svg
							fill='#1C2E45'
							width='30px'
							opacity={0.6}
							height='30px'
							viewBox='0 0 32 32'>
							<path
								d='M16,26c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2s2,0.896,2,2v16C18,25.104,17.104,26,16,26z'
								id='XMLID_298_'
							/>
							<path
								d='M24,26c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2s2,0.896,2,2v16C26,25.104,25.104,26,24,26z'
								id='XMLID_310_'
							/>
							<path
								d='M8,26c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2s2,0.896,2,2v16C10,25.104,9.104,26,8,26z'
								id='XMLID_312_'
							/>
						</svg>
					</div>
				)}
			</button> */}

			<div className='w-fit'>
				<HumbuggerComponent
					{...{ opened, onChangeHandler: () => setOpened((prev) => !prev) }}
				/>
			</div>

			<div className='absolute'>
				{opened && (
					<div className='flex flex-col w-fit  bg-slate-300 rounded-xl p-[20px] transition-transform duration-500'>
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
								}}
								onClick={(e) => setOpened((prev) => !prev)}>
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
				)}
			</div>
		</div>
	);
};

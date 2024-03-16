'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { NavUrls } from '@/constants';

export const Header = () => {
	const router = useRouter();

	return (
		<nav className='shadow-headerShadow px-[100px] bg-white sticky top-0 left-0'>
			<div className='flex justify-between py-[12px] items-center'>
				<div
					className='flex justify-between py-[12px]'
					onClick={(e) => router.push('/')}>
					<Image
						src='/images/logo/logo.png'
						alt='KCG Logo'
						className='dark:invert ml-[24px] mr-[24px]'
						width={84}
						height={84}
						priority
					/>
				</div>
				<div className='w-3/6 ml-[50px] mr-[50px]'>
					<div className='flex w-full justify-between text-bodyText font-extrabold text-[16px] leading-[24px]'>
						{NavUrls.map(({ url, name }, index) => (
							<Link
								key={index}
								{...{
									className: '',
									href: url,
								}}>
								{name}
							</Link>
						))}
					</div>
				</div>
				<div className='flex w-[266px] justify-between '>
					<div className='flex space-x-2'>
						<Image
							src='/header/translate.svg'
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
					<div className='flex w-[98px] h-[36px] justify-center items-center rounded-xl border-2 border-mainGreen cursor-pointer selection:bg-inherit'>
						<p className='text-mainGreen font-bold text-[16px] leading-[20px]'>
							Contact Us
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

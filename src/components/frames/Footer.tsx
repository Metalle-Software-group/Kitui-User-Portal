'use client';

import {
	BASE_ASSET_URL,
	Government,
	Kitui,
	Partners,
	quickLinks,
} from '@/constants';
import Image from 'next/image';
import { NewsCard } from '../reusables/Others';
import { FBIcon, InstagramIcon, XIcon } from '../icons';

export const Footer = () => {
	return (
		<div className='relative h-[600px] md:pt-[50px]'>
			<div className='absolute top-0 left-0 w-full overflow-hidden transform rotate-[180deg] z-[1] bg-footer-btnColor'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					preserveAspectRatio='none'
					viewBox='0 0 1200 120'
					data-name='Layer 1'
					fill='#000000'
					className='relative  block w-[calc(100%+1.3px)] h-[50px] transform transform-[180deg]'>
					<path
						d='M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z'
						className='fill-white'
					/>
				</svg>
			</div>

			<div className='text-white'>
				<div className='flex w-full h-fit justify-center bg-footer-btnColor px-5 md:px-0'>
					<NewsCard />
					<div className='flex flex-col w-full space-y-10 md:pt-[200px] md:px-[100px]'>
						<div className='w-full space-y-5 md:h-[500px] md:grid md:grid-cols-6 border-b-2 border-white text-white '>
							<div className=''>
								<img
									src={`${BASE_ASSET_URL}/logo/logo.png`}
									alt='Kitui Logo'
									className=''
								/>
							</div>

							<div className='space-y-5'>
								<p className='font-[700] md:text-[20px] md:leading-[27px] text-[#F5F5F5]'>
									Kitui
								</p>
								<div className='space-y-5'>
									{Kitui.map((e) => (
										<p
											className='font-[400] text-[16px] leading-[24px]'
											key={e}>
											{e}
										</p>
									))}
								</div>
							</div>
							<div className='space-y-5'>
								<p className='font-[700] md:text-[20px] md:leading-[27px] text-[#F5F5F5]'>
									Partners
								</p>
								<div className='space-y-5'>
									{Partners.map((e) => (
										<p
											className='font-[400] md:text-[16px] md:leading-[24px]'
											key={e}>
											{e}
										</p>
									))}
								</div>
							</div>
							<div className='space-y-5'>
								<p className='font-[700] md:text-[20px] md:leading-[27px] text-[#F5F5F5]'>
									Quick Links
								</p>
								<div className='space-y-5'>
									{quickLinks.map((e) => (
										<p
											className='font-[400] md:text-[16px] md:leading-[24px]'
											key={e}>
											{e}
										</p>
									))}
								</div>
							</div>
							<div className='space-y-5'>
								<p className='font-[700] md:text-[20px] md:leading-[27px] text-[#F5F5F5]'>
									Government
								</p>
								<div className='space-y-5'>
									{Government.map((e) => (
										<p
											className='font-[400] md:text-[16px] md:leading-[24px]'
											key={e}>
											{e}
										</p>
									))}
								</div>
							</div>
							<div className='space-y-5'>
								<p className='font-[700] md:text-[20px] md:leading-[27px] text-[#F5F5F5]'>
									Contact Us
								</p>
								<div className='space-y-5'>
									<div className='flex flex-col'>
										<p className='font-[400] md:text-[16px] md:leading-[24px]'>
											Opening Hours
										</p>
										<p>Mon- Fri 8:00 AM - 5:00 PM</p>
									</div>
									<div className='flex space-x-3'>
										<Image
											src='/mail.svg'
											alt='download'
											width={20}
											height={20}
											priority
										/>
										<p>livestock@kitui.go.ke</p>
									</div>
									<div className='flex space-x-3'>
										<Image
											src='/mail.svg'
											alt='download'
											width={20}
											height={20}
											priority
										/>
										<p>agriculture@kitui.go.ke</p>
									</div>
									<div className='flex space-x-3'>
										<Image
											src='/mail.svg'
											alt='download'
											width={20}
											height={20}
											priority
										/>
										<p>info@kitui.go.ke</p>
									</div>
									<div className='flex space-x-3'>
										<Image
											src='/phone.svg'
											alt='download'
											width={20}
											height={20}
											priority
										/>
										<p>0702 615 888</p>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col md:flex-row w-full items-center space-y-5  md:space-y-0 md:justify-between '>
							<div className='flex space-x-5'>
								<XIcon
									{...{
										svgElementClassName:
											'stroke-white fill-transparent w-[50px] h-[50px]',
										roundRingClassnames: 'stroke-white',
										applyToSvgEl: true,
										// className: '',
									}}
								/>
								<FBIcon
									{...{
										svgElementClassName:
											'stroke-white fill-transparent w-[50px] h-[50px]',
										roundRingClassnames: 'stroke-white',
										applyToSvgEl: true,
										// className: '',
									}}
								/>

								<InstagramIcon
									{...{
										svgElementClassName:
											'stroke-white fill-transparent w-[50px] h-[50px]',
										roundRingClassnames: 'stroke-white',
										applyToSvgEl: true,
										// className: '',
									}}
								/>
							</div>
							<p className='text-white'>@ 2024 County Government Of Kitui.</p>
							<p className='text-white'>All rights preserved.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

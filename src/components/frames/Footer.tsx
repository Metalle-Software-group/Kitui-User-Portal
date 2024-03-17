'use client';

import {
	BASE_ASSET_URL,
	Government,
	Kitui,
	Partners,
	quickLinks,
} from '@/constants';
import Image from 'next/image';
import { FBIcon, InstagramIcon, XIcon } from '../icons';

export const Footer = () => {
	return (
		<div className='relative h-[600px] pt-[50px]'>
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
						className='fill-[#fff]'></path>
				</svg>
			</div>

			<div className='text-white'>
				<div className='flex w-full h-fit justify-center bg-footer-btnColor'>
					<div className='flex flex-col absolute  h-[216px] rounded-[25px] p-[28px] justify-center items-center top-[-90px] bg-footer-color gap-[10px] z-[2]'>
						<p className='font-bold text-[30px] leading-[36px] tracking-[.75%]'>
							County news & updates
						</p>

						<p className='leading-[24px] text-[16px] font-normal text-bodyBg'>
							Get the latest county news,articles, and resources sent directly
							to your email every month.
						</p>

						<div className='flex gap-[8px] w-[400px] justify-center'>
							<input
								placeholder='Your Email'
								onChange={() => {}}
								className='px-[10px] font-normal text-[14px] leading-[24px] outline-none text-inputTextColor'
							/>
							<button className='flex gap-[8px] px-[16px] py-[10px] rounded-[8px] w-[100px] h-[44px] justify-center items-center bg-footer-btnColor text-white shadow-btnBoxShadow'>
								Subscribe
							</button>
						</div>
					</div>
					<div className='flex flex-col w-full space-y-10 pt-[200px] px-[100px]'>
						<div className='w-full h-[500px] grid grid-cols-6 border-b-2 border-white text-white '>
							<div className=''>
								<img
									src={`${BASE_ASSET_URL}/logo/logo.png`}
									alt='Kitui Logo'
									className=''
								/>
							</div>

							<div className='space-y-5'>
								<p className='font-[700] text-[20px] leading-[27px] text-[#F5F5F5]'>
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
								<p className='font-[700] text-[20px] leading-[27px] text-[#F5F5F5]'>
									Partners
								</p>
								<div className='space-y-5'>
									{Partners.map((e) => (
										<p
											className='font-[400] text-[16px] leading-[24px]'
											key={e}>
											{e}
										</p>
									))}
								</div>
							</div>
							<div className='space-y-5'>
								<p className='font-[700] text-[20px] leading-[27px] text-[#F5F5F5]'>
									Quick Links
								</p>
								<div className='space-y-5'>
									{quickLinks.map((e) => (
										<p
											className='font-[400] text-[16px] leading-[24px]'
											key={e}>
											{e}
										</p>
									))}
								</div>
							</div>
							<div className='space-y-5'>
								<p className='font-[700] text-[20px] leading-[27px] text-[#F5F5F5]'>
									Government
								</p>
								<div className='space-y-5'>
									{Government.map((e) => (
										<p
											className='font-[400] text-[16px] leading-[24px]'
											key={e}>
											{e}
										</p>
									))}
								</div>
							</div>
							<div className='space-y-5'>
								<p className='font-[700] text-[20px] leading-[27px] text-[#F5F5F5]'>
									Contact Us
								</p>
								<div className='space-y-5'>
									<div className='flex flex-col'>
										<p className='font-[400] text-[16px] leading-[24px]'>
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
						<div className='flex w-full justify-between'>
							<div className='flex space-x-5'>
								<XIcon
									{...{
										svgElementClassName:
											'stroke-white fill-[#00000000] w-[40px] h-[40px]',
										className: 'w-[44px] h-[44px]',
										applyToSvgEl: true,
									}}
								/>
								<FBIcon
									{...{
										svgElementClassName:
											'stroke-white fill-[#00000000] w-[40px] h-[40px]',
										className: 'w-[40px] h-[40px]',
										applyToSvgEl: true,
									}}
								/>
								<InstagramIcon
									{...{
										svgElementClassName:
											'stroke-white fill-[#00000000] w-[40px] h-[40px]',
										className: 'w-[40px] h-[40px]',
										applyToSvgEl: true,
									}}
								/>
							</div>
							<p className='text-white'>
								@ 2024 County Government Of Kitui. All rights preserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

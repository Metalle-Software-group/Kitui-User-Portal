'use client';
import { useState } from 'react';

export default function () {
	const [profile, setProfile] = useState(true);
	return (
		<main className='flex flex-col py-[60px] px-[100px] space-y-10'>
			<section className='space-y-5'>
				<p className='font-[700] text-[30px] leading-[36px] text-textTitle'>
					Welcome Joy,
				</p>
				<p className='font-[400] text-[16px] leading-[24px] text-bodyText'>
					Access your past applications and profile from here
				</p>
			</section>
			<section className='w-[260px] h-[130px] flex space-x-10'>
				<div className='bg-[#F3E8FF] rounded-full h-[100px] w-[100px]'></div>
				<div className='flex flex-col space-y-5'>
					<p className='font-[700] text-[22px] leading-[30px] text-textTitle'>
						Joy Kyallo
					</p>
					<p className='font-[400] text-[16px] leading-[24px] text-bodyText'>
						joy@gmail.com
					</p>
				</div>
			</section>
			<section className='flex w-[300px] space-x-10  border-b-zinc-500'>
				<button
					onClick={() => {
						setProfile(!profile);
					}}>
					<p
						className={`border-0 font-[700] text-[16px] leading-[22px] text-textTitle ${
							!profile && 'text-mainGreen'
						}`}>
						My Applications
					</p>
				</button>
				<button
					onClick={() => {
						setProfile(!profile);
					}}>
					<p
						className={`font-[700] text-[16px] leading-[22px] text-textTitle ${
							!profile && 'text-mainGreen'
						}`}>
						Joy Kyallo
					</p>
				</button>
				<div className=''></div>
			</section>
			<section className='flex flex-col'>
				<form className='flex flex-col w-full h-[990px] rounded-[20px] space-y-[32px]  items-center'>
					<p className='font-[700] text-[30px] leading-[36px] text-textTitle'>
						My Job Profile Details
					</p>
					<div className='w-full'>
						<div className='grid grid-cols-2 gap-[32px] items-center'>
							<div className='flex flex-col'>
								<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
									Name *
								</label>
								<input
									type='text'
									required
									placeholder='Jane Pendo'
									className='w-full rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
								/>
							</div>
							<div className='flex flex-col'>
								<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
									Email *
								</label>
								<input
									type='email'
									required
									placeholder='e.g jane@gmail.com'
									className='w-full rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
								/>
							</div>
							<div className='flex flex-col'>
								<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
									Phone Number *
								</label>
								<input
									type='number'
									placeholder='0712345678'
									min={10}
									max={10}
									required
									className='w-full rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
								/>
							</div>
							<div className='flex flex-col'>
								<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
									ID Number *
								</label>
								<input
									type='text'
									required
									className='w-full rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
								/>
							</div>
						</div>
						<div className='flex flex-col items-start mt-5'>
							<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
								Gender *
							</label>
							<div className='flex flex-col justify-start space-y-3'>
								<div className='flex space-x-5'>
									<input
										type='radio'
										value='male'
										checked={true}
										className='focus:ring-purple-500'
									/>
									<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
										Male
									</label>
								</div>
								<div className='flex space-x-5'>
									<input
										type='radio'
										value='male'
										className='focus:ring-purple-500'
									/>
									<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
										Female
									</label>
								</div>
							</div>
						</div>
						<div className='flex flex-col mt-5'>
							<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
								County Of Residence *
							</label>
							<input
								type='text'
								required
								placeholder='e.g Kitui'
								className='w-full rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
							/>
						</div>
						<div className='grid grid-cols-2 gap-[32px] mt-5'>
							<div className='flex flex-col'>
								<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
									Sub County *
								</label>
								<input
									type='text'
									required
									placeholder='e.g Kitui-West'
									className='w-full rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
								/>
							</div>
							<div className='flex flex-col'>
								<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
									Location *
								</label>
								<input
									type='text'
									required
									placeholder='e.g Kabati'
									className='w-full rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
								/>
							</div>
						</div>
						<div className='flex flex-col mt-5'>
							<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
								Upload Files *
							</label>
							<input
								type='file'
								required
								placeholder='e.g Kitui-West'
								className='w-full rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
							/>
						</div>
						<label className='font-[700] text-[16px] leading-[24px] text-search-iconColor mt-5'>
							Kindly attach the following files: Resumes, cover letter.
						</label>
						<button className='flex w-full h-[40px] rounded-[8px] bg-mainGreen border justify-center items-center mt-5'>
							<p className='text-white font-[600] text-[14px] leading-[20px] '>
								Register
							</p>
						</button>
					</div>
				</form>
			</section>
		</main>
	);
}

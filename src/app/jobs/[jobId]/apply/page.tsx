'use client';

import {
	JobMinistryTag,
	TimeLimitLabel,
	LocationLabel,
	UploadFileCard,
	JobType,
} from '@/components/reusables/Others';
import { useState } from 'react';

const ApplyJob = () => {
	const [selectedFiles, setSelectedFile] = useState<File[]>([]);

	const handleDeleteItem = (file: File) =>
		setSelectedFile(
			selectedFiles.filter((currItem) => {
				return currItem !== file;
			})
		);

	return (
		<div className='w-full bg-bodyBg my-[60px] flex flex-col justify-center items-center'>
			<div className='shadow-applicationFormBoxShadow bg-white p-[40px] gap-[32px] rounded-[20px] w-[819px]'>
				{/* header  */}
				<div className='flex flex-col gap-[6px] items-center justify-center'>
					<p className='leading-[36px] font-bold text-[30px] tracking-[.75%] text-textTitle'>
						Job Application
					</p>

					<div className='flex flex-col gap-[10px]'>
						<div className='flex w-full justify-center space-x-5 items-center'>
							<p className='font-bold leading-[24.55px] tracking-[.5%] text-[18px] text-textTitle'>
								Public Health Officer
							</p>
							<div className='w-fit'>
								<JobMinistryTag
									{...{
										className:
											'bg-tag-color px-[12px] py-[4px] rounded-[40px] gap-[4px]',
										dotClass: 'bg-mainGreen w-[6px] h-[6px]',
										textClassName:
											'text-mainGreen text-[12px] leading-[16.37px] font-bold',
										ministry_name: 'Youth & Culture',
									}}
								/>
							</div>
						</div>

						<div className='flex w-fit justify-between gap-[24px]'>
							<div className='my-[8px] flex gap-[16px] items-center'>
								<div className='w-fit'>
									<JobType
										{...{
											className:
												'border border-jobTypeBorderColor gap-[10px] px-[12px] py-[4px] rounded-[40px] text-brown-text leading-[16.37px] font-bold text-[12px]',
											name: 'Attachment',
										}}
									/>
								</div>

								<div className='w-fit'>
									<LocationLabel />
								</div>

								<div className='w-fit'>
									<TimeLimitLabel />
								</div>
							</div>
						</div>
					</div>

					<p className='text-bodyText leading-[24px] text-[16px] font-normal'>
						Please complete the form below to apply for the opportunity
					</p>
				</div>

				<div className='flex flex-col gap-[24px]'>
					<div className='font-normal text-[16px] leading-[24px] text-bodyText'>
						<p className='font-normal text-[16px] leading-[24px] text-bodyText'>
							Kindly attach the following files:
						</p>
						<div className='px-[20px]'>
							<ul
								{...{
									className:
										'font-normal text-[16px] leading-[24px] text-bodyText list-disc',
								}}>
								<li>Resume,</li>
								<li>Cover letter</li>
							</ul>
						</div>
					</div>

					{/* upload area  */}
					<div className=''>
						<p className='font-bold leading-[24px] text-[16px] text-textTitle'>
							Upload files *
						</p>

						<UploadFileCard
							{...{ selectedFiles, setSelectedFile, handleDeleteItem }}
						/>
					</div>

					<div className='flex gap-[32px]'>
						<button className='rounded-[8px] border px-[20px] py-[12px] bg-white border-jobApplicationBtnColor shadow-btnBoxShadow text-bodyText leading-[24px] text-[16px] font-semibold'>
							Update Job Profile
						</button>
						<button className='rounded-[8px] bg-main-Green border px-[20px] py-[12px] border-main-Green shadow-btnBoxShadow font-semibold leading-[24px] text-[16px] text-white flex-[1]'>
							Submit Application
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplyJob;

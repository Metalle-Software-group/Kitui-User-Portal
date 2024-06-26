'use client';
import { UploadedDocument } from '../reusables/Others';
import { FBIcon, InstagramIcon, LinkIcon, XIcon } from '../icons';
import { useRouter } from 'next/navigation';
import { TJob, TUploadDocsCardProps } from '@/types/types';
import { useTranslation } from 'react-i18next';
import { currentlySelectedJobKey } from '@/constants';

export const UploadDocsCard = ({
	applyUrl,
	data,
}: TUploadDocsCardProps & { data?: TJob }) => {
	const setLocalStorageItem = (data: any) =>
		data
			? localStorage.setItem(currentlySelectedJobKey, JSON.stringify(data))
			: null;

	const { t } = useTranslation();
	const router = useRouter();

	return (
		<div className='flex flex-col justify-center items-center ] md:w-[400px]'>
			<div className='flex flex-col border border-socialsColor rounded-[16px] px-[16px] py-[32px] gap-[16px] h-fit bg-white space-y-10 w-full'>
				{data?.applications && data.applications.length > 0 ? null : (
					<div className='flex flex-col justify-center items-center space-y-5'>
						<p className='font-bold text-[16px] leading-[24px] text-textTitle'>
							{t('View Uploaded Documents')}
						</p>

						<div className='w-full flex gap-[6px] flex-col'>
							{data?.files?.length ? (
								data?.files.map((file, index) => (
									<UploadedDocument {...{ file }} key={index} />
								))
							) : (
								<div className='font-normal text-[16px] leading-[24px] text-gray-600 px-[20px]'>
									No files where attached
								</div>
							)}
						</div>
					</div>
				)}

				<div className='flex justify-center items-center'>
					<button
						className='flex w-fit h-fit bg-main-Green rounded-[8px] border items-center justify-center px-[20px] py-[12px] gap-[8px] shadow-btnBoxShadow text-white'
						aria-label={'button'}
						role={'button'}
						onClick={(e) => {
							setLocalStorageItem(data);
							router.push(applyUrl.url);
						}}>
						{t(applyUrl.title)}
					</button>
				</div>
				<div className='flex flex-col justify-center items-center space-y-5'>
					<div>
						<p className='font-semibold text-[20px] leading-[28px] text-textTitle tracking-[.5]'>
							{t('Share This Job')}
						</p>
					</div>
					<div className='flex space-x-3'>
						<LinkIcon
							{...{
								svgElementClassName:
									'stroke-black fill-transparent w-[50px] h-[50px]',
								applyToSvgEl: true,
							}}
						/>

						<XIcon
							{...{
								svgElementClassName:
									'stroke-black fill-transparent w-[50px] h-[50px]',
								applyToSvgEl: true,
							}}
						/>

						<FBIcon
							{...{
								svgElementClassName:
									'stroke-black fill-transparent w-[50px] h-[50px]',
								applyToSvgEl: true,
							}}
						/>

						<InstagramIcon
							{...{
								svgElementClassName:
									'stroke-black fill-transparent w-[50px] h-[50px]',
								applyToSvgEl: true,
								// className: '',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export const ViewShortListedCandidatesCard = () => {
	return (
		<div className='flex flex-col '>
			<div className='w-[400px] h-[355px] border rounded-[16px] bg-white px-[32px] py-[16px] space-y-10 justify-center items-center'>
				<div className='flex   justify-center items-center'>
					<button className='flex w-full h-[48px] bg-main-Green rounded-[8px] border-[1px] items-center justify-center'>
						<p className='text-white'>View Shortlisted Candidates</p>
					</button>
				</div>
				<div className='flex flex-col justify-center items-center space-y-5'>
					<div>
						<p className='font-[600] text-[20px] leading-[28px] text-textTitle'>
							Share This Job
						</p>
					</div>
					<div className='flex space-x-3'>
						<LinkIcon
							{...{
								svgElementClassName:
									'stroke-black fill-transparent w-[50px] h-[50px]',
								applyToSvgEl: true,
								// className: '',
							}}
						/>
						<XIcon
							{...{
								svgElementClassName:
									'stroke-black fill-transparent w-[50px] h-[50px]',
								applyToSvgEl: true,
								// className: '',
							}}
						/>
						<FBIcon
							{...{
								svgElementClassName:
									'stroke-black fill-transparent w-[50px] h-[50px]',
								applyToSvgEl: true,
								// className: '',
							}}
						/>
						<InstagramIcon
							{...{
								svgElementClassName:
									'stroke-black fill-transparent w-[50px] h-[50px]',
								applyToSvgEl: true,
								// className: '',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

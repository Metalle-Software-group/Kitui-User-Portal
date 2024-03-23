import { UploadedDocument } from '../reusables/Others';
import { FBIcon, InstagramIcon, LinkIcon, XIcon } from '../icons';
import { useRouter } from 'next/navigation';
import { TUploadDocsCardProps } from '@/types/types';

export const UploadDocsCard = ({ applyUrl }: TUploadDocsCardProps) => {
	const router = useRouter();
	return (
		<div className='flex flex-col justify-center items-center ] md:w-[400px]'>
			<div className='flex flex-col border border-socialsColor rounded-[16px] px-[16px] py-[32px] gap-[16px] h-fit bg-white space-y-10 w-full'>
				<div className='flex flex-col justify-center items-center space-y-5'>
					<p className='font-bold text-[16px] leading-[24px] text-textTitle'>
						View Uploaded Documents
					</p>

					<div className='w-full flex gap-[6px] flex-col'>
						<UploadedDocument />
						<UploadedDocument />
						<UploadedDocument />
					</div>
				</div>
				<div className='flex justify-center items-center'>
					<button
						className='flex w-fit h-fit bg-main-Green rounded-[8px] border items-center justify-center px-[20px] py-[12px] gap-[8px] shadow-btnBoxShadow text-white'
						aria-label={'button'}
						role={'button'}
						onClick={(e) => router.push(applyUrl)}>
						Apply Now
					</button>
				</div>
				<div className='flex flex-col justify-center items-center space-y-5'>
					<div>
						<p className='font-semibold text-[20px] leading-[28px] text-textTitle tracking-[.5]'>
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

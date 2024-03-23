import { BASE_ASSET_URL } from '@/constants';

export default function () {
	return (
		<div className='w-full flex px-[14px] py-[20px] justify-center items-center flex-col gap-[32px]'>
			<div className='w-[360px] h-auto'>
				<img
					src={`${BASE_ASSET_URL}/others/404.svg`}
					alt='not found'
					className='w-full h-full'
				/>
			</div>

			<div className='flex items-center justify-center flex-col max-w-[500px] w-fit gap-[20px]'>
				<p className='text-bodyText leading-[24px] text-[16px] font-normal'>
					You have hit a deadlink, here are your options:
				</p>

				<div className='flex gap-[20px]'>
					<button className='rounded-[8px] bg-main-Green border text-white border-main-Green shadow-btnBoxShadow px-[20px] py-[12px] font-bold text-[16px] leading-[24px]'>
						Go back
					</button>
					<button className='rounded-[8px] text-textTitle font-bold text-[16px] leading-[24px] border border-jobApplicationBtnColor shadow-btnBoxShadow px-[20px] py-[12px] bg-white'>
						Go home
					</button>
				</div>
			</div>
		</div>
	);
}

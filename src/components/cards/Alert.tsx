import { BASE_ASSET_URL } from '@/constants';
import { AlertCardsTypes } from '@/types/types';
import { ArrowRightIcon } from 'lucide-react';

export const Alert = ({
	name,
	icon,
	description,
	buttonText,
}: AlertCardsTypes) => {
	return (
		<div className='flex w-full h-[402px] rounded-[20px] bg-foundationGreen mb-10 justify-between items-center p-[32px] gap-[100px]'>
			<div className='w-[50%] flex flex-col gap-[16px]'>
				<p className='text-textTitle font-bold text-[30px] leading[36px] tracking-[.75%]'>
					{name}
				</p>

				<p className='text-bodyText font-normal text-[16px] leading[24px]'>
					{description}
				</p>
				<button className='flex w-fit bg-main-Green h-[48px] items-center rounded-[8px] border px-[20px] py-[12px] text-white border-main-Green'>
					{buttonText}
					<ArrowRightIcon width={20} height={30} color='white' />
				</button>
			</div>
			<div className='w-[40%] h-full flex flex-col'>
				<img
					src={`${BASE_ASSET_URL}/others/never-miss.png`}
					alt='people'
					className='w-full h-[90%] object-cover'
				/>
			</div>
		</div>
	);
};

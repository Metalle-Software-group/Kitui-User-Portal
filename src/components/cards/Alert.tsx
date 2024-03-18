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
		<div className='flex w-full h-fit md:h-[402px] md:rounded-[20px] bg-foundationGreen mb-10 justify-between items-center p-[32px] md:gap-[100px]'>
			<div className='md:w-[50%] flex flex-col gap-[16px]'>
				<p className='text-textTitle font-bold text-[20px] md:text-[30px] md:leading[36px] md:tracking-[.75%]'>
					{name}
				</p>

				<p className='text-bodyText font-normal md:text-[16px] md:leading[24px] line-clamp-2 overflow-hidden'>
					{description}
				</p>
				<button className='flex w-fit bg-main-Green h-[48px] items-center rounded-[8px] border px-[20px] py-[12px] text-white border-main-Green'>
					{buttonText}
					<ArrowRightIcon width={20} height={30} color='white' />
				</button>
			</div>
			<div className='hidden md:flex md:w-[40%] h-full  flex-col'>
				<img
					src={`${BASE_ASSET_URL}/others/never-miss.png`}
					alt='people'
					className='w-full h-full object-cover'
				/>
			</div>
		</div>
	);
};

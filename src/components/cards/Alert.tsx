import { AlertCardsTypes } from '@/types/types';
import React from 'react';
import Image from 'next/image';

export const Alert = ({
  name,
  icon,
  description,
  buttonText,
}: AlertCardsTypes) => {
  return (
    <div className='flex w-full h-[400px] rounded-[20px] bg-foundationGreen mb-10 items-center p-[32px] space-x-[100px]'>
      <div className='w-[50%] flex flex-col'>
        <p className='text-textTitle font-[700] text-[30px] leading[36px]'>
          {name}
        </p>
        <p className='text-bodyText font-[400] text-[16px] leading[24px]'>
          {description}
        </p>
        <button className='flex w-fit bg-main-Green h-[48px] rounded-[8px] border-[1px] pt-[12px] pr-[20px] pb-[12px] pl-[20px] space-x-[8px] text-white'>
          {buttonText}
          <Image
            src='/icons/arrowRightWhite.svg'
            alt='Vercel Logo'
            width={20}
            height={30}
            priority
          />
        </button>
      </div>
      <div className='w-[20%] flex flex-col'>
        <Image
          src='/people/footer.jpg'
          alt='people'
          className='w-full h-[300px]'
          width={200}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

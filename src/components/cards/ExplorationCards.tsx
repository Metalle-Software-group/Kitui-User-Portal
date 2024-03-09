import { ExplorationCardsTypes } from '@/types/types';
import React from 'react';
import Image from 'next/image';


export const CategoryCards = ({
  name,
  description,
  url,
  alt,
}: ExplorationCardsTypes) => {
  return (
    <div className='flex flex-col w-[256px] h-[178px] rounded-[20px] p-[20px] border-[1px] border-[#D1D5DB] justify-center items-center'>
      <Image
        src={url}
        alt={alt}
        className='dark:invert ml-[24px] mr-[24px]'
        width={84}
        height={84}
        priority
      />
      <p className='text-textTitle font-[700] text-[20px] leading-[28px]'>
        {name}
      </p>
      <p className='text-bodyText font-[400] text-[16px] leading-[24px]'>
        {description}
      </p>
    </div>
  );
};

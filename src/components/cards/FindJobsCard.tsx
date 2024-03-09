'use client'
import { FeaturedJobsTypes } from '@/types/types';
import React from 'react';
import Image from 'next/image';

export const FindJobsCard = ({
  name,
  category,
  type,
  location,
  datePosted,
  description,
  comments,
  width,
}: FeaturedJobsTypes) => {
  return (
    <div
      className={`flex flex-col ${
        width ? `w-[${width}]` : 'w-[800px]'
      } h-[300px] rounded-[20px] p-[20px] border-[1px] border-[#E9E9E9] justify-center items-start space-y-3`}>
      <div className='flex justify-between'>
        <p className='font-[700] text-[18px] leading[24.55px] text-textTitle'>
          {name}
        </p>
        <div className='flex w-fit ml-3 rounded-[10px]  bg-[#E7F5ED] border items-center'>
          <div className='rounded-full w-[6px] h-[6px] bg-mainGreen mr-2 ml-2'></div>
          {category}
        </div>
      </div>
      <div className={`flex w-[300px] justify-between`}>
        <div className='flex border w-[120px] rounded-[10px] bg-[#F1EAE4] items-center justify-center'>
          {type}
        </div>
        <div className='flex items-center'>
          <Image
            src='/location.svg'
            alt='location'
            width={18}
            height={18}
          />
          <p className='font-[600] text-[12px] leading-[16px] text-[#717171] ml-1'>
            {location}
          </p>
        </div>
        <div className='flex items-center'>
          <Image
            src='/clock.svg'
            alt='clock'
            width={18}
            height={18}
          />
          <p className='font-[600] text-[12px] leading-[16px] text-[#717171] ml-1'>
            {datePosted}
          </p>
        </div>
      </div>
      <p className='font-[600] text-[14px] leading-[24px] text-[#717171]'>
        {description}
      </p>
      <div className='flex w-full justify-between items-center'>
        <button className='flex w-[130px] rounded-[8px] bg-foundationGreen justify-center items-center'>
          <p className='font-[600]  text-[14px] leading-[20px] text-foundationGreen2 px-[8px] py-[14px]'>
            Apply Now
          </p>
          <Image
            src='/icons/arrowRight.svg'
            alt='arrow right'
            width={18}
            height={18}
          />
        </button>
        <button className='flex w-[38px] justify-between items-center'>
          <Image
            src='/message.svg'
            alt='comments'
            width={18}
            height={18}
          />
          <p className='font-[600]  text-[14px] leading-[20px] text-[#6B7280]'>
            {comments}
          </p>
        </button>
      </div>
    </div>
  );
};

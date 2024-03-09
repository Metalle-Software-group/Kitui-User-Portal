import { Input } from 'postcss';
import React from 'react';
import Image from 'next/image';
import { SearchTypes } from '@/types/types';

export const SearchJob = ({
  placeholder,
  searchText,
  onChange,
  width
}: SearchTypes) => {
  return (
    <div className={`flex ${width ? `w-[${width}]` : 'w-fit'} h-[72px] rounded-[12px] p-[12px] shadow-xl border justify-between bg-white`}>
      <div className='flex mr-2 items-center'>
        <Image
          src='/search.svg'
          alt='Vercel Logo'
          width={20}
          height={20}
          priority
        />
      </div>
      <input
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className='flex bg-main-Green rounded-[8px] border-[1px] pr-[12px] pt-[20px] pl-[12px] pb-[20px] items-center'>
        <p className='text-white'>{searchText}</p>
      </div>
    </div>
  );
};

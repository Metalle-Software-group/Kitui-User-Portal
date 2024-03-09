'use client';
import { FeatureCategoriesTypes } from '@/types/types';
import React, { useState } from 'react';

export const FeaturedJobsCategories = ({
  name,
  onChange,
}: FeatureCategoriesTypes) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={`flex w-[145] px-[10px] py-[18px] ${
        selected ? 'bg-[#6B21A8]' : 'bg-[#D8B4FE]'
      } border rounded-[40px] justify-between items-center`}
      onClick={() => {
        setSelected(!selected);
        onChange;
      }}>
      <div className='rounded-full  bg-bodyBg w-[8px] h-[8px] ml-2'></div>
      <p className='text-bodyBg font-[700] text-[12px] leading-[16.37px]'>
        {name}
      </p>
    </button>
  );
};

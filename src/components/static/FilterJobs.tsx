'use client'
import { FilterJobsTypes } from '@/types/types'
import React, { useState } from 'react'

export const FilterJobs = ({label,id,onChange}: FilterJobsTypes) => {
    const[checked,setChecked] = useState(false);
  return (
    <div className='w-[80%] flex items-center'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='h-[20px] w-[20px] text-purple-800'
      />
      <label className='ml-2'>{label}</label>
    </div>
  );
}

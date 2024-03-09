import { JobDescriptionTypes } from '@/types/types';
import React from 'react';

export const JobDetails = ({
  responsibility,
  qualifications,
  benefits,
  comments,
  remark,
  about,
}: JobDescriptionTypes) => {
  return (
    <div className='flex flex-col space-y-10'>
      <div className='space-y-5'>
        <p className='font-[600] text-[20px] leading-[28px] text-textTitle'>
          About The Role
        </p>
        <p className='text-bodyText font-[600] text-[16px] leading-[24px]'>
          {about}
        </p>
      </div>
      <div className='space-y-5'>
        <p className='font-[600] text-[20px] leading-[28px] text-textTitle'>
          Responsibility
        </p>
        <ul className='list-disc'>
          {responsibility.map((e) => (
            <li
              key={e}
              className='text-bodyText font-[600] text-[16px] leading-[24px]'>
              {e}
            </li>
          ))}
        </ul>
      </div>
      <div className='space-y-5'>
        <p className='font-[600] text-[20px] leading-[28px] text-textTitle'>
          Qualifications
        </p>
        <ul className='list-disc'>
          {qualifications.map((e) => (
            <li
              key={e}
              className='text-bodyText font-[600] text-[16px] leading-[24px]'>
              {e}
            </li>
          ))}
        </ul>
      </div>
      <div className='space-y-5'>
        <p className='font-[600] text-[20px] leading-[28px] text-textTitle'>
          Benefits
        </p>
        <ul className='list-disc'>
          {benefits.map((e) => (
            <li
              key={e}
              className='text-bodyText font-[600] text-[16px] leading-[24px]'>
              {e}
            </li>
          ))}
        </ul>
      </div>
      <div className='space-y-5'>
        <p className='font-[600] text-[20px] leading-[28px] text-textTitle'>
          Comments
        </p>
        {comments.map((e) => (
          <div
            key={e.name}
            className='space-y-5'>
            <p className='font-[700] text-[16px] leading-[24px] text-[#333333]'>
              {e.name} says
            </p>
            <p className='text-bodyText font-[600] text-[16px] leading-[24px]'>
              {e.comment}
            </p>
            <p className='text-mainGreen font-[600] text-[16px] leading-[24px]'>
              {e.timeline}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

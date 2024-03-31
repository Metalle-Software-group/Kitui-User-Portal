'use client'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const CommentForm = () => {
	const {t} = useTranslation();
	const [checked, setChecked] = useState(false);
	return (
    <div className='flex flex-col space-y-10'>
      <div className='space-y-5'>
        <p className='font-semibold text-[20px] leading-[28px] text-textTitle'>
          {t('Leave a comment')}
        </p>
        <p className='font-[700] text-[16px] leading-[24px] text-commentsColor'>
          {t(
            'Your email address will not be published. Required fields are marked'
          )}
          *
        </p>
      </div>

      <form className='space-y-5'>
        <div className='flex flex-col space-y-3 w-full'>
          <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
            {t('Comment')}*
          </label>
          <textarea
            placeholder='Your comment here'
            className='h-[100px] rounded-[6px] border px-[14px] py-[12px] border-[#D1D5DB] bg-bodyBg'
            onChange={() => {}}
            required
          />
        </div>
        <div className='grid grid-cols-2 gap-[16px]'>
          <div className='flex flex-col space-y-3 w-full'>
            <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
              {t('Name')}*
            </label>
            <input
              placeholder='e.g James Musyoka'
              required
              type='text'
              className='h-[52px] rounded-[6px] border px-[14px] py-[12px] border-[#D1D5DB] bg-bodyBg'
              onChange={() => {}}
            />
          </div>
          <div className='flex flex-col space-y-3 w-full'>
            <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
              {t('Email')}*
            </label>
            <input
              placeholder='e.g jamesmusyoka@gmail.com'
              required
              type='email'
              className='h-[52px] rounded-[6px] border px-[14px] py-[12px] border-[#D1D5DB] bg-bodyBg'
              onChange={() => {}}
            />
          </div>
        </div>
        <div className='flex flex-col space-y-3 w-full'>
          <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
            {t('Website Link')}*
          </label>
          <input
            placeholder=''
            required
            type='text'
            className='h-[52px] rounded-[6px] border px-[14px] py-[12px] border-[#D1D5DB] bg-bodyBg'
            onChange={() => {}}
          />
        </div>
        <div className='flex space-x-3 w-full'>
          <input
            checked={checked}
            id='remember-me'
            type='checkbox'
            required
            onChange={() => setChecked(!checked)}
          />
          <label
            className='font-[400] text-[14px] leading-[24px] text-textTitle cursor-pointer selection:bg-inherit'
            htmlFor='remember-me'>
            {t('Save my name,email and website for the next time I comment.')}
          </label>
        </div>
        <button className='flex rounded-[8px] bg-mainGreen border gap-[8px] justify-center items-center px-[16px] py-[10px] border-mainGreen shadow-btnBoxShadow'>
          <p className='text-white font-semibold text-[14px] leading-[20px] '>
            {t('Post Comment')}
          </p>
        </button>
      </form>
    </div>
  );
};

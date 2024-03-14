import React from 'react';

export const RegistrationForm = () => {
  return (
    <form className='flex flex-col w-[820px] h-[900px] rounded-[20px] p-[40px] py-[200px] px-[300px] shadow-xl shadow-[#1A3860] space-y-[32px] justify-center items-center'>
      <p className='font-[700] text-[30px] leading-[36px] text-textTitle'>
        Create an account
      </p>
      <p className='font-[400] text-[16px] leading-[24px] text-bodyText'>
        Please complete the form below to create your job profile
      </p>
      <div className='w-[740px] h-[630px]'>
        <div className='grid grid-cols-2 space-y-[32px]'>
          <div>
            <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
              Name *
            </label>
            <input
              type='text'
              required
              placeholder='Jane Pendo'
              className='w-[350px] rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
            />
          </div>
          <div>
            <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
              Email *
            </label>
            <input
              type='email'
              required
              placeholder='e.g jane@gmail.com'
              className='w-[350px] rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
            />
          </div>
          <div>
            <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
              Phone Number *
            </label>
            <input
              type='number'
              placeholder='0712345678'
              min={10}
              max={10}
              required
              className='w-[350px] rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
            />
          </div>
          <div>
            <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
              ID Number *
            </label>
            <input
              type='text'
              required
              className='w-[350px] rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
            />
          </div>
        </div>
        <div>
          <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
            Gender *
          </label>
          <div className='space-y-3'>
            <input
              type='radio'
              value='male'
              checked={true}
              className='focus:ring-purple-500'
            />
            <input
              type='radio'
              value='female'
              className='focus:ring-purple-500'
            />
          </div>
        </div>
        <div>
          <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
            County Of Residence *
          </label>
          <input
            type='text'
            required
            placeholder='e.g Kitui'
            className='w-full rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
          />
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
              Sub County *
            </label>
            <input
              type='text'
              required
              placeholder='e.g Kitui-West'
              className='w-[350px] rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
            />
          </div>
          <div>
            <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
              Location *
            </label>
            <input
              type='text'
              required
              placeholder='e.g Kabati'
              className='w-[350px] rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
            />
          </div>
        </div>
        <div>
          <label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
            Upload Files *
          </label>
          <input
            type='file'
            required
            placeholder='e.g Kitui-West'
            className='w-[350px] rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
          />
          <label className='font-[700] text-[16px] leading-[24px] text-[#9CA3AF]'>
            Kindly attach the following files: Resumes, cover letter.
          </label>
        </div>
        <button className='flex w-full h-[40px] rounded-[8px] bg-mainGreen border justify-center items-center'>
          <p className='text-white font-[600] text-[14px] leading-[20px] '>
            Register
          </p>
        </button>
      </div>
    </form>
  );
};

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const TechnicalErrorCard = () => {
  return (
    <div className='flex w-[820px] h-[520px] py-[200px] px-[300px] justify-center items-center'>
      <Image
        src='/error404.svg'
        alt='error404'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
      <p className='font-[700] text-[30px] leading-[36px] text-textTitle'>
        Sorry! We`re Having a technical hiccup on our end.
      </p>
      <p className='fot-[400px] text-[16px] leading-[24px] text-bodyText'>
        We apologize for the inconvenience! Please try submitting your
        application again in a few minutes. If the issue persists, our support
        team is available to help you.
      </p>
      <div className='flex w-[310px] h-[48px] space-x-[32px]'>
        <button className='flex w-[112px] rounded-[8px] bg-foundationGreen justify-center items-center'>
          <p className='font-[600]  text-[14px] leading-[20px] text-foundationGreen2 px-[8px] py-[14px]'>
            Try Again
          </p>
        </button>
        <button className='flex w-[160px] rounded-[8px] bg-white border border-[#D0D5DD] justify-center items-center'>
          <p className='font-[600]  text-[14px] leading-[20px] text-foundationGreen2 px-[8px] py-[14px]'>
            Try Again
          </p>
        </button>
      </div>
    </div>
  );
};

export const SuccessfulApplicationCard = () => {
  return (
    <div className='flex flex-col w-[820px] h-[520px] p-10 justify-center items-center shadow-applicationFormBoxShadow bg-white gap-[32px]'>
      <Image
        src='/success.svg'
        alt='success'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
      <p className='font-[700] text-[30px] leading-[36px] text-textTitle'>
        Your job application has been received.
      </p>
      <p className='fot-[400px] text-[16px] leading-[24px] text-bodyText'>
        Thank you for expressing your interest in joining our team. Shortlisted
        candidates shall be posted here. All the best.
      </p>
      <div className='flex w-[180px] h-[48px] space-x-[32px]'>
        <Link
          href={'/'}
          className='flex rounded-[8px] bg-white border border-[#D0D5DD] justify-center items-center'>
          <p className='font-[600]  text-[14px] leading-[20px] text-foundationGreen2 px-[8px] py-[14px]'>
            Back To Home Page
          </p>
        </Link>
      </div>
    </div>
  );
};

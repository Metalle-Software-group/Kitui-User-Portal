import { NavUrls } from '@/constants';
import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <nav className='top-0 flex w-full h-[108px] justify-center mt-[10px] mb-[10px] border-b-2 items-center pl-[10px] pr-[10px] shadow-lg'>
      <div className='flex justify-items-start'>
        <Image
          src='/vercel.svg'
          alt='Vercel Logo'
          className='dark:invert ml-[24px] mr-[24px]'
          width={84}
          height={84}
          priority
        />
      </div>
      <div className='w-3/6 ml-[50px] mr-[50px]'>
        <ul className='flex w-full justify-between text-bodyText font-extrabold text-[16px] leading-[24px]'>
          {NavUrls.map((url) => (
            <li key={url.name}>{url.name}</li>
          ))}
        </ul>
      </div>
      <div className='flex w-[266px] justify-between '>
        <div className='flex space-x-2'>
          <Image
            src='/header/translate.svg'
            alt='Vercel Logo'
            width={24}
            height={24}
            priority
          />
          <Image
            src='/header/dropdown.svg'
            alt='Vercel Logo'
            width={24}
            height={24}
            priority
          />
        </div>
        <div className='flex space-x-2'>
          <Image
            src='/header/accessibility.svg'
            alt='Vercel Logo'
            width={24}
            height={24}
            priority
          />
          <Image
            src='/header/dropdown.svg'
            alt='Vercel Logo'
            width={24}
            height={24}
            priority
          />
        </div>
        <div className='flex w-[98px] h-[36px] justify-center items-center rounded-xl border-2 border-mainGreen'>
          <p className='text-mainGreen font-bold text-[16px] leading-[20px]'>
            Contact Us
          </p>
        </div>
      </div>
    </nav>
  );
};

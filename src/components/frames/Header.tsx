'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { NavUrls } from '@/constants';

export const Header = () => {
  const router = useRouter();

  return (
    <div className='flex w-full bg-white h-[110px] items-center'>
      <nav className='flex  px-[100px] w-full justify-between shadow-headerShadow '>
        <div
          className='flex justify-between py-[12px]'
          onClick={(e) => router.push('/')}>
          <Image
            src='/images/logo/logo.png'
            alt='KCG Logo'
            className='dark:invert ml-[24px] mr-[24px]'
            width={84}
            height={84}
            priority
          />
        </div>
        <div className='flex justify-center items-center '>
          <div className='flex w-full gap-x-[80px] text-bodyText font-extrabold text-[16px] leading-[24px]'>
            {NavUrls.map(({ url, name }, index) => (
              <Link
                key={index}
                {...{
                  className: '',
                  href: url,
                }}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex items-center w-[266px] justify-between '>
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
          <div className='flex w-[98px] h-[36px] justify-center items-center rounded-xl border-2 border-mainGreen cursor-pointer selection:bg-inherit'>
            <p className='text-mainGreen font-bold text-[16px] leading-[20px]'>
              Contact Us
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { NavUrls } from '@/constants';
import LanguageSelector from '../translation/LanguageSelect';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const router = useRouter();
  const { t } = useTranslation();

  {
    /* check on box shadow on the header  */
  }
  return (
    <nav className='shadow-headerShadow px-[100px] bg-white sticky top-0 left-0 z-[100] h-[108px]'>
      <div className='flex justify-between items-center'>
        <div
          className='flex justify-between py-[12px]'
          onClick={(e) => router.push('/')}>
          <Image
            className='dark:invert ml-[24px] mr-[24px] p-2'
            src='/images/logo/logo.png'
            alt='KCG Logo'
            width={84}
            height={84}
            priority
          />
        </div>

        <div className='w-fit'>
          <div className='flex gap-[50px] w-full justify-between text-bodyText font-extrabold text-[16px] leading-[24px]'>
            {NavUrls.map(({ url, name }, index) => (
              <Link
                key={index}
                {...{
                  className:
                    'gap-[2px] flex py-[10px] leading-[24px] text-[16px] text-bodyText font-bold',
                  href: url,
                }}>
                {t(`${name}`)}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex w-[266px] justify-between items-center'>
          <div className='flex space-x-2'>
            <Image
              src='/header/translate.svg'
              alt='Vercel Logo'
              width={24}
              height={24}
              priority
            />
            <LanguageSelector />
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
          <div className='flex w-fit h-[36px] justify-center items-center rounded-xl border-2 border-mainGreen cursor-pointer selection:bg-inherit p-2'>
            <p className='text-mainGreen font-bold text-[16px] leading-[20px]'>
              {t('Contact Us')}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

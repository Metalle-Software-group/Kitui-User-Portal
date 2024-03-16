'use client';

import {
  BASE_ASSET_URL,
  Government,
  Kitui,
  Partners,
  quickLinks,
} from '@/constants';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className='relative h-[600px] md:pt-[50px]'>
      <div className='absolute top-0 left-0 w-full overflow-hidden transform rotate-[180deg] z-[1] bg-footer-btnColor'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          data-name='Layer 1'
          fill='#000000'
          className='relative  block w-[calc(100%+1.3px)] h-[50px] transform transform-[180deg]'>
          <path
            d='M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z'
            className='fill-[#fff]'></path>
        </svg>
      </div>

      <div className='text-white'>
        <div className='flex w-full h-fit justify-center bg-footer-btnColor px-5 md:px-0'>
          <div className='flex flex-col absolute  md:h-[216px] rounded-[10px] md:rounded-[25px] p-[10px] md:p-[28px] justify-center items-center top-[-130px] bg-footer-color gap-[10px] z-[2]'>
            <p className='font-bold md:text-[30px] md:leading-[36px] md:tracking-[.75%]'>
              County news & updates
            </p>

            <p className='md:leading-[24px] md:text-[16px] font-normal text-bodyBg'>
              Get the latest county news,articles, and resources sent directly
              to your email every month.
            </p>

            <div className='flex gap-[8px] w-[200px] md:w-[400px] justify-center'>
              <input
                placeholder='Your Email'
                onChange={() => {}}
                className='px-[10px] font-normal text-[14px] leading-[24px] outline-none text-inputTextColor rounded-[10px]'
              />
              <button className='flex gap-[8px] px-[8px] py-[5px] md:px-[16px] md:py-[10px] rounded-[8px] w-[100px] h-[44px] justify-center items-center bg-footer-btnColor text-white shadow-btnBoxShadow'>
                Subscribe
              </button>
            </div>
          </div>
          <div className='flex flex-col w-full space-y-10 md:pt-[200px] md:px-[100px]'>
            <div className='w-full space-y-5 md:h-[500px] md:grid md:grid-cols-6 border-b-2 border-white text-white '>
              <div className=''>
                <img
                  src={`${BASE_ASSET_URL}/logo/logo.png`}
                  alt='Kitui Logo'
                  className=''
                />
              </div>

              <div className='space-y-5'>
                <p className='font-[700] md:text-[20px] md:leading-[27px] text-[#F5F5F5]'>
                  Kitui
                </p>
                <div className='space-y-5'>
                  {Kitui.map((e) => (
                    <p
                      className='font-[400] text-[16px] leading-[24px]'
                      key={e}>
                      {e}
                    </p>
                  ))}
                </div>
              </div>
              <div className='space-y-5'>
                <p className='font-[700] md:text-[20px] md:leading-[27px] text-[#F5F5F5]'>
                  Partners
                </p>
                <div className='space-y-5'>
                  {Partners.map((e) => (
                    <p
                      className='font-[400] md:text-[16px] md:leading-[24px]'
                      key={e}>
                      {e}
                    </p>
                  ))}
                </div>
              </div>
              <div className='space-y-5'>
                <p className='font-[700] md:text-[20px] md:leading-[27px] text-[#F5F5F5]'>
                  Quick Links
                </p>
                <div className='space-y-5'>
                  {quickLinks.map((e) => (
                    <p
                      className='font-[400] md:text-[16px] md:leading-[24px]'
                      key={e}>
                      {e}
                    </p>
                  ))}
                </div>
              </div>
              <div className='space-y-5'>
                <p className='font-[700] md:text-[20px] md:leading-[27px] text-[#F5F5F5]'>
                  Government
                </p>
                <div className='space-y-5'>
                  {Government.map((e) => (
                    <p
                      className='font-[400] md:text-[16px] md:leading-[24px]'
                      key={e}>
                      {e}
                    </p>
                  ))}
                </div>
              </div>
              <div className='space-y-5'>
                <p className='font-[700] md:text-[20px] md:leading-[27px] text-[#F5F5F5]'>
                  Contact Us
                </p>
                <div className='space-y-5'>
                  <div className='flex flex-col'>
                    <p className='font-[400] md:text-[16px] md:leading-[24px]'>
                      Opening Hours
                    </p>
                    <p>Mon- Fri 8:00 AM - 5:00 PM</p>
                  </div>
                  <div className='flex space-x-3'>
                    <Image
                      src='/mail.svg'
                      alt='download'
                      width={20}
                      height={20}
                      priority
                    />
                    <p>livestock@kitui.go.ke</p>
                  </div>
                  <div className='flex space-x-3'>
                    <Image
                      src='/mail.svg'
                      alt='download'
                      width={20}
                      height={20}
                      priority
                    />
                    <p>agriculture@kitui.go.ke</p>
                  </div>
                  <div className='flex space-x-3'>
                    <Image
                      src='/mail.svg'
                      alt='download'
                      width={20}
                      height={20}
                      priority
                    />
                    <p>info@kitui.go.ke</p>
                  </div>
                  <div className='flex space-x-3'>
                    <Image
                      src='/phone.svg'
                      alt='download'
                      width={20}
                      height={20}
                      priority
                    />
                    <p>0702 615 888</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full items-center space-y-5  md:space-y-0 md:justify-between '>
              <div className='flex space-x-5'>
                <Image
                  src='/twitterxWhite.svg'
                  alt='download'
                  width={40}
                  height={40}
                  priority
                />
                <Image
                  src='/fbWhite.svg'
                  alt='download'
                  width={40}
                  height={40}
                  priority
                />
                <Image
                  src='/igWhite.svg'
                  alt='download'
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <p className='text-white'>@ 2024 County Government Of Kitui.</p>
              <p className='text-white'>All rights preserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

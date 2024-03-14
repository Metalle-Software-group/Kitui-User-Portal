'use client';
import React from 'react';
import Image from 'next/image';
import { Government, Kitui, Partners, quickLinks } from '@/constants';

export const Footer = () => {
  return (
    <div className='flex relative w-full h-[800px] justify-center  bg-[#212121]  '>
      <div className='flex flex-col absolute  h-[210px] rounded-[25px] p-[28px] justify-center items-center top-[-100px] bg-foundationGreen space-y-10'>
        <p>County news & updates</p>
        <p>
          Get the latest county news,articles, and resources sent directly to
          your email every month.
        </p>
        <div className='flex space-x-5'>
          <input
            placeholder='Your Email'
            onChange={() => {}}
          />
          <button className='flex w-[100px] h-[44px] justify-center items-center bg-[#212121] text-white'>
            Subscribe
          </button>
        </div>
      </div>
      <div className='flex flex-col w-full space-y-10 pt-[200px] px-[100px]'>
        <div className='w-full h-[500px] grid grid-cols-6 border-b-2 border-white text-white '>
          <div>Logo</div>
          <div className='space-y-5'>
            <p className='font-[700] text-[20px] leading-[27px] text-[#F5F5F5]'>
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
            <p className='font-[700] text-[20px] leading-[27px] text-[#F5F5F5]'>
              Partners
            </p>
            <div className='space-y-5'>
              {Partners.map((e) => (
                <p
                  className='font-[400] text-[16px] leading-[24px]'
                  key={e}>
                  {e}
                </p>
              ))}
            </div>
          </div>
          <div className='space-y-5'>
            <p className='font-[700] text-[20px] leading-[27px] text-[#F5F5F5]'>
              Quick Links
            </p>
            <div className='space-y-5'>
              {quickLinks.map((e) => (
                <p
                  className='font-[400] text-[16px] leading-[24px]'
                  key={e}>
                  {e}
                </p>
              ))}
            </div>
          </div>
          <div className='space-y-5'>
            <p className='font-[700] text-[20px] leading-[27px] text-[#F5F5F5]'>
              Government
            </p>
            <div className='space-y-5'>
              {Government.map((e) => (
                <p
                  className='font-[400] text-[16px] leading-[24px]'
                  key={e}>
                  {e}
                </p>
              ))}
            </div>
          </div>
          <div className='space-y-5'>
            <p className='font-[700] text-[20px] leading-[27px] text-[#F5F5F5]'>
              Contact Us
            </p>
            <div className='space-y-5'>
              <div className='flex flex-col'>
                <p className='font-[400] text-[16px] leading-[24px]'>
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
        <div className='flex w-full justify-between '>
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
          <p className='text-white'>
            @ 2024 County Government Of Kitui. All rights preserved.
          </p>
        </div>
      </div>
    </div>
  );
};

'use client';
import React from 'react';
import { SearchJob } from '../frames/SearchJob';
import Image from 'next/image';

export const HomeHero = () => {
  return (
    <div className='h-[700px] grid grid-cols-5 pt-[100px] pb-[100px]'>
      <section className='col-span-3 space-y-7'>
        <p className='bg-light-Purple w-[106px]'>Kitui County</p>
        <p className='font-[800] text-[48px] leading-[65px] text-textTitle'>
          Build Your Future,
        </p>
        <p className='font-[800] text-[48px] leading-[65px] text-textTitle'>
          Explore County Jobs
        </p>
        <p className='font-[400] text-[16px] leading-[24px] text-bodyText'>
          Make a real difference in your community by joining a vibrant team
          dedicated to serving the public good
        </p>
        <SearchJob
          placeholder={'Job title or keyword'}
          searchText={'Search Job'}
          onChange={() => {}}
        />
      </section>
      <section className='col-span-2'>
        <img
          src='/people/hero.jpg'
          alt='person'
          className='w-full h-full'
        />
      </section>
    </div>
  );
};

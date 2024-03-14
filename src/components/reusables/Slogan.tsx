'use client';
import { SloganType, SloganWithCategoryType } from '@/types/types';
import React from 'react';
import { SearchJob } from '../frames/SearchJob';
import Image from 'next/image';

export const Slogan = ({
  title,
  middleText,
  slogan,
  beginningText,
  endingText,
}: SloganType) => {
  return (
    <div
      className={`flex flex-col w-full bg-[#F3E8FF] h-[400px] items-center justify-center`}>
      {middleText && (
        <div className='w-full flex space-x-2 justify-center'>
          <p className='font-[800] text-[48px] leading-[65px] text-textTitle'>
            {beginningText}
          </p>
          <p className={`text-[#0F9A49] font-[800] text-[48px] leading-[65px]`}>
            {middleText}
          </p>
          <p className='font-[800] text-[48px] leading-[65px] text-textTitle'>
            {endingText}
          </p>
        </div>
      )}
      {!middleText && (
        <p className='font-[800] text-[48px] leading-[65px] text-textTitle'>
          {title}
        </p>
      )}
      <p>{slogan}</p>
      <SearchJob
        placeholder={'Job title or keyword'}
        searchText={'Search Job'}
        onChange={() => {}}
        width='400px'
      />
    </div>
  );
};

export const SloganWithCategory = ({
  title,
  category,
  slogan,
  datePosted,
  type,
  comments,
  location,
}: SloganWithCategoryType) => {
  return (
    <div
      className={`flex flex-col w-full h-[400px] items-center justify-center bg-[#F3E8FF] space-y-10`}>
      <div className='flex w-full justify-center space-x-5 items-center'>
        <p className='font-[800] text-[48px] leading-[65px] text-textTitle'>
          {title}
        </p>
        <div className='flex w-[200px] h-[50px] rounded-[40px]  bg-[#E7F5ED] border items-center justify-center space-x-2'>
          <div className='rounded-full w-[6px] h-[6px] bg-mainGreen  ml-2'></div>
          <p className='mr-1'>{category}</p>
        </div>
      </div>
      <p>{slogan}</p>
      <div className='flex w-[300px] justify-between space-x-3'>
        <div className='flex border w-[120px] rounded-[10px] bg-[#F1EAE4] items-center justify-center'>
          {type}
        </div>
        <div className='flex items-center'>
          <Image
            src='/location.svg'
            alt='location'
            width={18}
            height={18}
          />
          <p className='font-[600] text-[12px] leading-[16px] text-[#717171] ml-1'>
            {location}
          </p>
        </div>
        <div className='flex items-center'>
          <Image
            src='/clock.svg'
            alt='clock'
            width={30}
            height={30}
          />
          <p className='font-[600] text-[12px] leading-[16px] text-[#717171] ml-1'>
            {datePosted}
          </p>
        </div>
      </div>

      <button className='flex  justify-between items-center space-x-4'>
        <Image
          src='/message.svg'
          alt='comments'
          width={18}
          height={18}
        />
        <p className='font-[600]  text-[14px] leading-[20px] text-[#6B7280]'>
          {comments} comments
        </p>
      </button>
    </div>
  );
};



export const SloganUpdates = ({
  title,
  middleText,
  slogan,
  beginningText,
  endingText,
}: SloganType) => {
  return (
    <div
      className={`flex flex-col w-full bg-[#F3E8FF] h-[400px] items-center justify-center`}>
      {endingText && (
        <div className='w-full flex space-x-2 justify-center'>
          <p className='font-[800] text-[48px] leading-[65px] text-textTitle'>
            {beginningText}
          </p>
          <p className={`text-[#0F9A49] font-[800] text-[48px] leading-[65px]`}>
            {endingText}
          </p>
        </div>
      )}
      <p>{slogan}</p>
      <SearchJob
        placeholder={'Job title or keyword'}
        searchText={'Search Job'}
        onChange={() => {}}
        width='400px'
      />
    </div>
  );
};
import React from 'react';
import Image from 'next/image';

export const UploadDocsCard = () => {
  return (
    <div className='flex flex-col '>
      <div className='w-[400px] h-[355px] border rounded-[16px] bg-white px-[32px] py-[16px] space-y-10 justify-center items-center'>
        <div className='flex flex-col justify-center items-center space-y-5'>
          <p className='font-[700px] text-[16px] leading-[24px] text-textTitle'>
            View Uploaded Documents
          </p>
          <div className='w-fit flex  items-center border rounded-[6px]  py-[6px] border-[#B5E0c7]'>
            <Image
              src='/file.svg'
              alt='file'
              width={20}
              height={20}
              priority
            />
            <input
              placeholder=''
              onChange={() => {}}
            />
            <div className='flex space-x-3 items-center'>
              <Image
                src='/eye.svg'
                alt='eye'
                width={20}
                height={20}
                priority
              />
              <Image
                src='/download.svg'
                alt='download'
                width={20}
                height={20}
                priority
              />
            </div>
          </div>
        </div>
        <div className='flex   justify-center items-center'>
          <div className='flex w-[120px] h-[48px] bg-main-Green rounded-[8px] border-[1px] items-center justify-center'>
            <p className='text-white'>Apply Now</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center space-y-5'>
          <div>
            <p className='font-[600] text-[20px] leading-[28px] text-textTitle'>
              Share This Job
            </p>
          </div>
          <div className='flex space-x-3'>
            <Image
              src='/link.svg'
              alt='download'
              width={40}
              height={40}
              priority
            />
            <Image
              src='/twitterx.svg'
              alt='download'
              width={40}
              height={40}
              priority
            />
            <Image
              src='/facebook.svg'
              alt='download'
              width={40}
              height={40}
              priority
            />
            <Image
              src='/instagram.svg'
              alt='download'
              width={40}
              height={40}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ViewShortListedCandidatesCard = () => {
  return (
    <div className='flex flex-col '>
      <div className='w-[400px] h-[355px] border rounded-[16px] bg-white px-[32px] py-[16px] space-y-10 justify-center items-center'>
        <div className='flex   justify-center items-center'>
          <button className='flex w-full h-[48px] bg-main-Green rounded-[8px] border-[1px] items-center justify-center'>
            <p className='text-white'>View Shortlisted Candidates</p>
          </button>
        </div>
        <div className='flex flex-col justify-center items-center space-y-5'>
          <div>
            <p className='font-[600] text-[20px] leading-[28px] text-textTitle'>
              Share This Job
            </p>
          </div>
          <div className='flex space-x-3'>
            <Image
              src='/link.svg'
              alt='download'
              width={40}
              height={40}
              priority
            />
            <Image
              src='/twitterx.svg'
              alt='download'
              width={40}
              height={40}
              priority
            />
            <Image
              src='/facebook.svg'
              alt='download'
              width={40}
              height={40}
              priority
            />
            <Image
              src='/instagram.svg'
              alt='download'
              width={40}
              height={40}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

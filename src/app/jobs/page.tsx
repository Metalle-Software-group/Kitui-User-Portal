'use client';
import { Alert } from '@/components/cards/Alert';
import React from 'react';
import Image from 'next/image';
import { Departments, EmploymentType, Featured } from '@/constants';
import { FilterJobs } from '@/components/static/FilterJobs';
import { FindJobsCard } from '@/components/cards/FindJobsCard';
import { Slogan } from '@/components/reusables/Slogan';

export default function () {
  return (
    <main className='w-full h-[100dvh] space-y-10'>
      <section>
        <Slogan
          slogan={
            'Make a real difference in your community by joining a vibrant team dedicated to serving the public good.'
          }
          beginningText='Find the'
          middleText='Right Job'
          endingText='for you'
        />
      </section>
      <section className='px-[100px] pb-[100px]'>
        <section className='flex w-full'>
          <section className='w-[30%] space-y-10'>
            <div className='flex justify-start space-x-2'>
              <button className='flex '>
                <Image
                  src='location.svg'
                  alt='location'
                  width={18}
                  height={18}
                />
                <p>Filter</p>
              </button>
              <div className='border-r-2 border-r-[#5633D1]'></div>
              <button className='flex space-x-2'>
                <Image
                  src='location.svg'
                  alt='location'
                  width={18}
                  height={18}
                />
                <p>Clear All</p>
              </button>
            </div>
            <div className='flex flex-col space-y-5'>
              <p>Departments</p>
              {Departments.map((department) => (
                <FilterJobs
                  key={department.name}
                  label={department.name}
                  onChange={() => {}}
                />
              ))}
            </div>
            <div className='flex flex-col space-y-5'>
              <p>Employment Types</p>
              {EmploymentType.map((employment) => (
                <FilterJobs
                  key={employment.name}
                  label={employment.name}
                  onChange={() => {}}
                />
              ))}
            </div>
          </section>
          <section className='w-[70%]'>
            {Featured.map((job) => (
              <FindJobsCard
                key={job.name}
                name={job.name}
                category={job.category}
                type={job.type}
                location={job.location}
                datePosted={job.datePosted}
                description={job.description}
                comments={job.comments}
              />
            ))}
          </section>
        </section>
        <section>
          <Alert
            name={'Never Miss Your Dream Job!'}
            icon={''}
            description={
              'Sign up for job alerts and get notified straight to your inbox when openings matching your profession are posted. Dont wait, register today and take the first step towards your perfect career!'
            }
            buttonText={'Get Job Alerts Now!'}
          />
        </section>
      </section>
    </main>
  );
}

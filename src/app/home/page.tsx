'use client'
import { Alert } from '@/components/cards/Alert';
import { CategoryCards } from '@/components/cards/ExplorationCards';
import { FeaturedJobs } from '@/components/cards/FeaturedJobsCard';
import { HomeHero } from '@/components/cards/HomeHero';
import { FeaturedJobsCategories } from '@/components/reusables/FeaturedJobsCategories';
import { ExploreCategoryCards, Featured, FeaturedCategories } from '@/constants';
import React from 'react';

export default function () {
  return (
    <main className='space-y-10'>
      <section>
        <HomeHero />
      </section>
      <div className='space-y-10 mb-10'>
        <p className='font-[800] text-[36px] leading-[36px] text-textTitle'>
          Explore By Category
        </p>
        <p className='font-[600px] text-[16px] leading-[24px] text-bodyText'>
          See Available job categorized according to departments
        </p>
      </div>
      <section className='h-[400px] grid grid-cols-4'>
        {ExploreCategoryCards.map((category) => (
          <div key={category.url}>
            <CategoryCards
              url={category.url}
              alt={category.alt}
              name={category.name}
              description={category.description}
            />
          </div>
        ))}
      </section>
      <div className='space-y-10 mb-10'>
        <p className='font-[800] text-[36px] leading-[36px] text-textTitle'>
          Featured Jobs
        </p>
        <p className='font-[600px] text-[16px] leading-[24px] text-bodyText'>
          See Available jobs
        </p>
      </div>
      <div className='flex w-full justify-center space-x-3 mb-5'>
        {FeaturedCategories.map((category) =>(
          <FeaturedJobsCategories key={category.name} name={category.name} onChange={()=>{} }/>
        ))}
      </div>
      <section className='grid grid-cols-3 '>
        {Featured.map((job) => (
          <FeaturedJobs
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
    </main>
  );
}

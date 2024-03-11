import { Alert } from '@/components/cards/Alert';
import { SloganUpdates } from '@/components/reusables/Slogan';
import React from 'react';

export default function () {
  return (
    <main className='w-full h-[100dvh] space-y-10'>
      <section>
        <SloganUpdates
          slogan={
            'View All ShortListed Candidates for various positions here. You can search and filter for a specific position.'
          }
          beginningText='Kitui County Jobs'
          endingText='updates'
        />
      </section>
      <section className='px-[100px]  space-y-10'>//table</section>
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

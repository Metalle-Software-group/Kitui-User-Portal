'use client';

import { Alert } from '@/components/cards/Alert';
import { DepartmentCard, Loader } from '@/components/reusables/Others';
import { ExploreCategoryCards } from '@/constants';
import { TMinistry } from '@/types/types';
import { useQueryCustomWrapper } from '@/utils';
import { fetchEndpointData } from '@/utils/server';
import { Coming_Soon } from 'next/font/google';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

export default function () {
  const {
    isLoading: isMinistryLoading,
    isError: isMinistryError,
    data: ministries,
  } = useQuery({
    queryFn: useQueryCustomWrapper<TMinistry[]>,
    queryKey: [
      `ministry-data`,
      {
        url: `ministries`,
        qFunc: fetchEndpointData,
        options: {
          fields: ['name'],
        },
      },
    ],
  });

  console.log(ministries);

  const { t } = useTranslation();
  return (
    <div className='py-[60px] px-[30px] flex flex-col gap-[20px]'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-[12px] selection:bg-inherit'>
          <p className='f font-extrabold text-[20px] md:text-[36px] leading-[18px] md:leading-[36px] md:tracking-[-.75%] text-textTitle'>
            {t('List of all departments')}
          </p>

          <p className='md:font-semibold  md:text-[16px]  md:leading-[24px] text-bodyText '>
            {t('See available jobs categorized according to departments')}
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 rounded-[6px] mt-[16px] h-[98%] text-black  gap-[20px] justify-between'>
        {isMinistryLoading ? (
          <div className='w-full rounded flex'>
            <Loader {...{ align: 'justify-start' }} />
          </div>
        ) : isMinistryError ? (
          <div className='w-full rounded flex'>
            <Loader
              {...{
                title: 'Error loading job types',
                align: 'justify-start',
              }}
            />
          </div>
        ) : (
          <>
            {ExploreCategoryCards.filter((category) =>
              ministries?.some((ministry) =>
                category.title
                  .toLowerCase()
                  .trim()
                  .includes(ministry.name.toLowerCase().trim())
              )
            ).map((category, index) => (
              <div key={index}>
                <DepartmentCard {...category} />
              </div>
            ))}
          </>
        )}
      </div>

      <div className='mt-[100px]'>
        <Alert
          name={t('Never Miss Your Dream Job!')}
          icon={''}
          description={t(
            'Sign up for job alerts and get notified straight to your inbox when openings matching your profession are posted. Dont wait, register today and take the first step towards your perfect career!'
          )}
          buttonText={t('Get Job Alerts Now!')}
        />
      </div>
    </div>
  );
}

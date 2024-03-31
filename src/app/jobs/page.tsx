'use client';
import { initialFilterState } from '@/constants';
import { FindJobsCard } from '@/components/cards/FindJobsCard';
import {
  FilterCheckbox,
  FilterTag,
  Loader,
} from '@/components/reusables/Others';
import { Slogan } from '@/components/reusables/Slogan';
import { Alert } from '@/components/cards/Alert';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useQuery } from 'react-query';
import React from 'react';

import { getFilterUpdateFunction, useQueryCustomWrapper } from '@/utils';
import { TFilterTypes, TJob, TJobTypes, TMinistry } from '@/types/types';
import { SettingsIcon } from '@/components/icons';
import { fetchEndpointData } from '@/utils/server';

export default function () {
  const [filters, setFilters] = useState<TFilterTypes>(initialFilterState);
  const updateFilter = getFilterUpdateFunction({ setFilters });
  const { t } = useTranslation();

  const clearFilters = () => setFilters(initialFilterState);

  const { isLoading, isError, data } = useQuery({
    queryFn: useQueryCustomWrapper<TJob[]>,
    queryKey: [
      `jobs-data`,
      {
        url: `jobs`,
        qFunc: fetchEndpointData,
        options: {
          populate: ['ministry', 'job_type', 'applications', 'comments'],
          sort: 'createdAt:desc',
          filters: {
            $and: [
              ...(filters.term
                ? [
                    {
                      title: {
                        $containsi: filters.term,
                      },
                    },
                  ]
                : []),

              ...(filters.jobType.length > 0
                ? [
                    {
                      job_type: {
                        name: {
                          $in: filters.jobType,
                        },
                      },
                    },
                  ]
                : []),
              ,
              ...(filters.department.length > 0
                ? [
                    {
                      ministry: {
                        name: {
                          $in: filters.department,
                        },
                      },
                    },
                  ]
                : []),
            ],
          },
        },
      },
    ],
  });

  const {
    isLoading: isJobtypeLoading,
    isError: isJobTypeError,
    data: jobTypes,
  } = useQuery({
    queryFn: useQueryCustomWrapper<TJobTypes[]>,
    queryKey: [
      `jobtype-data`,
      {
        url: `job-types`,
        qFunc: fetchEndpointData,
        options: {
          fields: ['name'],
        },
      },
    ],
  });

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

  return (
    <main className='w-full space-y-10'>
      <div className='w-full'>
        <Slogan
          slogan={t(
            'Make a real difference in your community by joining a vibrant team dedicated to serving the public good'
          )}
          beginningText={t('Find the')}
          middleText={t('Right Job')}
          endingText={t('for you')}
          {...{
            onChange: updateFilter,
            type: 'term',
          }}
        />
      </div>

      <section className='px-[20px] pb-[20px] md:px-[100px] md:pb-[100px]'>
        <div className='flex gap-[32px] justify-start my-[20px] w-full overflow-x-auto h-[40px]'>
          <div className='flex gap-[16px] items-center justify-start w-[328px]'>
            <button className='flex items-center justify-center'>
              <SettingsIcon
                {...{
                  svgElementClassName:
                    'fill-settingsIconColor stroke-settingsIconColor',
                  applyToSvgEl: true,
                  className: 'w-[24px] h-[24px]',
                }}
              />
              <p className='text-settingsClearBarColor text-[14px] leading-[24px] font-normal'>
                {t('Filter')}
              </p>
            </button>

            <div className='w-[1px] h-full bg-settingsClearColor'></div>
            <button
              className='flex space-x-2'
              onClick={clearFilters}>
              <p className='leading-[24px] font-normal text-[14px] text-settingsClearColor'>
                {t('Clear All')}
              </p>
            </button>
          </div>

          <div className='flex gap-[12px] w-full items-center justify-start'>
            {filters.department.map((name, index) => (
              <FilterTag
                key={index}
                {...{ name, onChange: updateFilter, type: 'department' }}
              />
            ))}

            {filters.jobType.map((name, index) => (
              <FilterTag
                key={index}
                {...{ name, onChange: updateFilter, type: 'jobType' }}
              />
            ))}
          </div>
        </div>

        <section className='flex flex-col md:flex-row w-full gap-[32px]'>
          <section className='w-full md:w-[30%] space-y-10 overflow-x-auto py-[30px]'>
            <div className='flex flex-col space-y-5'>
              <p className='selection:bg-inherit'>{t('Departments')}</p>

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
                <div className='flex md:flex-col md:space-y-5 space-x-2 md:space-x-0'>
                  {ministries?.map(({ name }, index) => (
                    <FilterCheckbox
                      key={index}
                      {...{
                        onChange: updateFilter,
                        type: 'department',
                        label: name,
                        checked: filters.department.find(
                          (value) => value === name
                        )
                          ? true
                          : false,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className='flex flex-col space-y-5'>
              <p>{t('Employment Types')}</p>

              {isJobtypeLoading ? (
                <div className='w-full rounded flex'>
                  <Loader {...{ align: 'justify-start' }} />
                </div>
              ) : isJobTypeError ? (
                <div className='w-full rounded flex'>
                  <Loader
                    {...{
                      title: 'Error loading job types',
                      align: 'justify-start',
                    }}
                  />
                </div>
              ) : (
                <div className='flex md:flex-col md:space-y-5 space-x-2 md:space-x-0'>
                  {jobTypes?.map(({ name }, index) => (
                    <FilterCheckbox
                      key={index}
                      {...{
                        checked: filters.jobType.find((value) => value === name)
                          ? true
                          : false,

                        onChange: updateFilter,
                        type: 'jobType',
                        label: name,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* job listing */}
          <section className='w-[70%] mb-[100px] flex flex-col gap-[24px]'>
            {isLoading ? (
              <div className='w-[70%] h-full'>
                <Loader />
              </div>
            ) : isError ? (
              <div className='h-full w-[70%]'>
                <Loader {...{ title: 'Error loading data' }} />
              </div>
            ) : (
              <React.Fragment>
                {data && data.length > 0 ? (
                  data?.map((job, index) => (
                    <FindJobsCard
                      key={index}
                      {...job}
                    />
                  ))
                ) : (
                  <div className='font-normal text-[16px] leading-[24px] text-gray-600'>
                    No Jobs available
                  </div>
                )}
              </React.Fragment>
            )}
          </section>
        </section>
        <section>
          <Alert
            name={t('Never Miss Your Dream Job!')}
            icon={''}
            description={t(
              'Sign up for job alerts and get notified straight to your inbox when openings matching your profession are posted. Dont wait, register today and take the first step towards your perfect career!'
            )}
            buttonText={t('Get Job Alerts Now!')}
          />
        </section>
      </section>
    </main>
  );
}

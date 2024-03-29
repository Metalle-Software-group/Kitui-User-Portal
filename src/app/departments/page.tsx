'use client';

import { Alert } from '@/components/cards/Alert';
import { DepartmentCard } from '@/components/reusables/Others';
import { ExploreCategoryCards } from '@/constants';
import { useTranslation } from 'react-i18next';


const Departments = () => {
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
        {ExploreCategoryCards.map((category, index) => (
          <div key={index}>
            <DepartmentCard {...category} />
          </div>
        ))}
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
};

export default Departments;

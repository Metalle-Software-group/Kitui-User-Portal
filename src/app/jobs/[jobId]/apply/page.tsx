'use client';

import {
	JobMinistryTag,
	TimeLimitLabel,
	LocationLabel,
	UploadFileCard,
	JobType,
} from '@/components/reusables/Others';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ApplyJob = () => {
	const [selectedFiles, setSelectedFile] = useState<File[]>([]);
  const { t } = useTranslation();
	const handleDeleteItem = (file: File) =>
		setSelectedFile(
			selectedFiles.filter((currItem) => {
				return currItem !== file;
			})
		);

	return (
    <div className='w-full bg-bodyBg my-10 md:my-[60px] flex flex-col justify-center items-center'>
      <div className='shadow-applicationFormBoxShadow bg-white p-10 md:p-[40px] gap-[32px] rounded-[20px] md:w-[819px]'>
        {/* header  */}
        <div className='flex flex-col gap-[6px] items-center justify-center'>
          <p className=' font-bold text-[20px] md:text-[30px] md:leading-[36px] md:tracking-[.75%] text-textTitle'>
            {t('Job Application')}
          </p>

          <div className='flex flex-col gap-[10px]'>
            <div className='flex w-full justify-center space-x-5 items-center'>
              <p className='font-bold leading-[24.55px] tracking-[.5%] text-[18px] text-textTitle'>
                {t('Public Health Officer')}
              </p>
              <div className='w-fit'>
                <JobMinistryTag
                  {...{
                    className:
                      'bg-tag-color px-[12px] py-[4px] rounded-[40px] gap-[4px]',
                    dotClass: 'bg-mainGreen w-[6px] h-[6px]',
                    textClassName:
                      'text-mainGreen text-[12px] leading-[16.37px] font-bold',
                    ministry_name: 'Youth & Culture',
                  }}
                />
              </div>
            </div>

            <div className='flex w-fit justify-between gap-[24px]'>
              <div className='my-[8px] flex md:gap-[16px] items-center'>
                <div className='w-fit'>
                  <JobType
                    {...{
                      className:
                        'border border-jobTypeBorderColor gap-[10px] px-[12px] py-[4px] rounded-[40px] text-brown-text leading-[16.37px] font-bold text-[12px]',
                      name: 'Attachment',
                    }}
                  />
                </div>

                <div className='w-fit'>
                  <LocationLabel />
                </div>

                <div className='w-fit'>
                  <TimeLimitLabel />
                </div>
              </div>
            </div>
          </div>

          <p className='text-bodyText md:leading-[24px] text-[16px] font-normal'>
            {t('Please complete the form below to apply for the opportunity')}
          </p>
        </div>

        <div className='flex flex-col gap-[24px]'>
          <div className='font-normal text-[16px] leading-[24px] text-bodyText'>
            <p className='font-normal text-[16px] leading-[24px] text-bodyText'>
              {t('Kindly attach the following files:')}
            </p>
            <div className='px-[20px]'>
              <ul
                {...{
                  className:
                    'font-normal text-[16px] leading-[24px] text-bodyText list-disc',
                }}>
                <li>{t('Resume,')}</li>
                <li>{t('Cover letter')}</li>
              </ul>
            </div>
          </div>

          {/* upload area  */}
          <div className=''>
            <p className='font-bold leading-[24px] text-[16px] text-textTitle'>
              {t('Upload files *')}
            </p>

            <UploadFileCard
              {...{ selectedFiles, setSelectedFile, handleDeleteItem }}
            />
          </div>

          <div className='flex gap-[32px]'>
            <button className='rounded-[8px] border px-[20px] py-[12px] bg-white border-jobApplicationBtnColor shadow-btnBoxShadow text-bodyText leading-[24px] text-[16px] font-semibold'>
              {t('Update Job Profile')}
            </button>
            <button className='rounded-[8px] bg-main-Green border px-[20px] py-[12px] border-main-Green shadow-btnBoxShadow font-semibold leading-[24px] text-[16px] text-white flex-[1]'>
              {t('Submit Application')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;

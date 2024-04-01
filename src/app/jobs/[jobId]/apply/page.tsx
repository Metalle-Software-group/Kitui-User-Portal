'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { formatDistance } from 'date-fns';
import { useEffect, useState } from 'react';

import {
  COOKIE_KEYS,
  URL_SEARCH_PARAMS,
  currentlySelectedJobKey,
} from '@/constants';
import {
  JobMinistryTag,
  TimeLimitLabel,
  LocationLabel,
  UploadFileCard,
  JobType,
} from '@/components/reusables/Others';
import {
  SERVER_ERROR,
  TApiHandlerProps,
  TDataApplyJobORUpdateProfile,
  TJob,
} from '@/types/types';
import {
  createResourceEndpointData,
  getCookie,
  getCookieAsync,
} from '@/utils/server';
import { getLocalStorageItem } from '@/utils';
import Strapi from 'strapi-sdk-js';
import { SuccessfulApplicationCard } from '@/components/cards/TechnicalError';

const ApplyJob = () => {
  const [selectedFiles, setSelectedFile] = useState<File[]>([]);
  const pathname = usePathname();
  const { t } = useTranslation();
  const [job, setJob] = useState<TJob>();
  const [errMessage, setErrMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successFull, setSuccessFull] = useState(false);
  const router = useRouter();

  const handleDeleteItem = (file: File) =>
    setSelectedFile(
      selectedFiles.filter((currItem) => {
        return currItem !== file;
      })
    );

  const handleUpdateJobProfile = (data: TDataApplyJobORUpdateProfile) => {
    setLoading(true);
    createResourceEndpointData({ data, url: `users/1` })
      .then(({ data: res, err }) => {
        if (err) {
          if (err.status === 400)
            err.details.errors.map(({ path: [field_name], message, name }) =>
              //@ts-ignore
              form.setError(field_name, {
                message: message.replace(field_name, 'This field '),
              })
            );
          else if (err.status === 401)
            router.push(
              `/?${URL_SEARCH_PARAMS.redirect}=${encodeURIComponent(pathname)}`
            );
          else if (err.status === 403) setErrMsg('Permission denied');
          else setErrMsg('Something went wrong');
        }
      })
      .finally(() => setLoading(false));
  };

  const createResourceEndpointData2 = async ({
    data,
    url,
  }: TApiHandlerProps) => {
    const auth = getCookieAsync({ name: COOKIE_KEYS.auth });
    return new Strapi({
      url: 'https://kitui-jobs-portal.up.railway.app',
      axiosOptions: {
        ...(auth
          ? {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
            }
          : {}),
      },
    })
      .create(url, data)
      .then((data: any) => ({ data, err: null }))
      .catch(({ error: { message, status, details } }: SERVER_ERROR) => ({
        err: { message, status, details },
        data: null,
      }));
  };

  const handleApply = async (data: TDataApplyJobORUpdateProfile) => {
    setLoading(true);

    const form = new FormData();
    data.files.forEach((file) => {
      form.append('file', file);
    });
    await createResourceEndpointData2({ data: form, url: 'upload' })
      .then(({ data: res, err }) => {
        if (err) {
          if (err.status === 400)
            err.details.errors.map(({ path: [field_name], message, name }) =>
              //@ts-ignore
              form.setError(field_name, {
                message: message.replace(field_name, 'This field '),
              })
            );
          else if (err.status === 401)
            router.push(
              `/?${URL_SEARCH_PARAMS.redirect}=${encodeURIComponent(pathname)}`
            );
          else if (err.status === 403) setErrMsg('Permission denied');
          else setErrMsg('Something went wrong');
        }
      })
      .then(() => {})
      .finally(() => {
        setLoading(false);
        // setSuccessFull(true);
      });
  };

  useEffect(() => {
    const job: TJob = getLocalStorageItem<TJob>({
      key: currentlySelectedJobKey,
    });
    setJob(job);
  }, []);

  return (
    <div className='w-full bg-bodyBg my-10 md:my-[60px] flex flex-col justify-center items-center'>
      {successFull && <SuccessfulApplicationCard />}
      {job && !successFull && (
        <div className='shadow-applicationFormBoxShadow bg-white p-10 md:p-[40px] gap-[32px] rounded-[20px] md:w-[819px]'>
          {/* header  */}
          <div className='flex flex-col gap-[6px] items-center justify-center'>
            <p className=' font-bold text-[20px] md:text-[30px] md:leading-[36px] md:tracking-[.75%] text-textTitle'>
              {t('Job Application')}
            </p>

            <div className='flex flex-col gap-[10px]'>
              <div className='flex w-full justify-center space-x-5 items-center'>
                <p className='font-bold leading-[24.55px] tracking-[.5%] text-[18px] text-textTitle'>
                  {/* {t('Public Health Officer')} */}
                  {job.title}
                </p>
                <div className='w-fit'>
                  <JobMinistryTag
                    {...{
                      className:
                        'bg-tag-color px-[12px] py-[4px] rounded-[40px] gap-[4px]',
                      dotClass: 'bg-mainGreen w-[6px] h-[6px]',
                      textClassName:
                        'text-mainGreen text-[12px] leading-[16.37px] font-bold',
                      ministry_name: job.ministry.name,
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
                        name: job.job_type.name,
                      }}
                    />
                  </div>

                  <div className='w-fit'>
                    <LocationLabel {...{ name: job.location }} />
                  </div>

                  <div className='w-fit'>
                    <TimeLimitLabel
                      {...{
                        name: formatDistance(new Date(), job.application_end, {
                          addSuffix: true,
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className='w-fit mx-auto text-red-700 font-normal text-[16px]'>
              {errMessage}
            </p>
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
              <button
                className='rounded-[8px] border px-[20px] py-[12px] bg-white border-jobApplicationBtnColor shadow-btnBoxShadow text-bodyText leading-[24px] text-[16px] font-semibold'
                {...{
                  ...(loading ? { disabled: true } : {}),
                  onClick: () =>
                    handleUpdateJobProfile({
                      files: selectedFiles,
                      job: job.id,
                      user: '1',
                    }),
                }}>
                {t(loading ? 'Submitting...' : 'Update Job Profile')}
              </button>

              <button
                className='rounded-[8px] bg-main-Green border px-[20px] py-[12px] border-main-Green shadow-btnBoxShadow font-semibold leading-[24px] text-[16px] text-white flex-[1]'
                {...{
                  ...(loading ? { disabled: true } : {}),
                  onClick: () =>
                    handleApply({
                      files: selectedFiles,
                      job: job.id,
                      user: '1',
                    }),
                }}>
                {t(loading ? 'Submitting...' : 'Submit Application')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyJob;

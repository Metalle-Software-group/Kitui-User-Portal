'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { currentlySelectedJobKey, URL_SEARCH_PARAMS } from '@/constants';
import {
  JobMinistryTag,
  LocationLabel,
  UploadFileCard,
  JobType,
  TimeLimitLabel,
} from '@/components/reusables/Others';
import { TDataApplyJobORUpdateProfile, TJob } from '@/types/types';
import {
  createResourceEndpointData,
  uploadResourceEndpointData,
} from '@/utils/server';
import { SuccessfulApplicationCard } from '@/components/cards/TechnicalError';
import { getLocalStorageItem } from '@/utils';
import { formatDistance } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyJob = () => {
  const [errMessage, setErrMsg] = useState<string | null>(null);
  const [selectedFiles, setSelectedFile] = useState<File[]>([]);
  const [successFull, setSuccessFull] = useState(false);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState<string[]>([]);
  const [job, setJob] = useState<TJob>();
  const pathname = usePathname();
  const { t } = useTranslation();
  const router = useRouter();

  const handleDeleteItem = (file: File) =>
    setSelectedFile(
      selectedFiles.filter((currItem) => {
        return currItem !== file;
      })
    );

  const handleUpdateJobProfile = async (data: TDataApplyJobORUpdateProfile) => {
    setUrl([]);
    setLoading(true);
    await uploadFilesSequentially(selectedFiles, data).then(() => {
      const data2 = { ...data, files: url };
      createResourceEndpointData({ data: data2, url: `users/1` })
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
                `/?${URL_SEARCH_PARAMS.redirect}=${encodeURIComponent(
                  pathname
                )}`
              );
            else if (err.status === 403) {
              setErrMsg('Permission denied');
              toast.error('Permission denied', {
                position: 'top-right',
              });
            }
          } else {
            toast.success('Profile Updated Successfully', {
              position: 'top-right',
            });
          }
        })
        .finally(() => setLoading(false));
      setSelectedFile([]);
    });
  };

  const uploadFilesSequentially = async (
    files: File[],
    data2: TDataApplyJobORUpdateProfile,
    index = 0
  ) => {
    if (index >= files.length) return;

    const frmData = new FormData();
    frmData.append('files', files[index]);

    const formDataEntries: [string, FormDataEntryValue][] = Array.from(
      frmData.entries()
    );

    formDataEntries.forEach((entry) => {
      console.log(entry[0], entry[1]);
    });

    setLoading(true);
    await uploadResourceEndpointData({ url: 'upload', data: frmData })
      .then((res) => {
        console.log(res);
        setUrl((prevState) => [...prevState, res.data[0].url]);
        uploadFilesSequentially(files, data2, index + 1);
      })
      .catch((err) => {
        console.error(`Error uploading file ${index + 1}:`, err);
        setLoading(false);
      });
  };

  const handleApply = async (data: TDataApplyJobORUpdateProfile) => {
    setUrl([]);
    await uploadFilesSequentially(selectedFiles, data).then(() => {
      UploadDetails(data);
    });
  };

  const UploadDetails = async (data2: TDataApplyJobORUpdateProfile) => {
    const data = { ...data2, files: url };
    await createResourceEndpointData({ data, url: 'applications' })
      .then(({ data: res, err }) => {
        if (err)
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
          else if (err.status === 403) {
            setErrMsg('Permission denied');
            toast.error('Permission denied', {
              position: 'top-right',
            });
          } else {
            toast.success('Job Applied Successfully...', {
              position: 'top-right',
            });
            setSuccessFull(true);
          }
      })
      .finally(() => setLoading(false));
    setSelectedFile([]);
  };

  useEffect(() => {
    const job: TJob = getLocalStorageItem<TJob>({
      key: currentlySelectedJobKey,
    });
    setJob(job);
  }, []);

  return (
    <div className='w-full bg-bodyBg my-10 md:my-[60px] flex flex-col justify-center items-center'>
      {successFull && (
        <SuccessfulApplicationCard
          {...{
            title: 'Your job application has been received.',
            sentiment:
              'Thank you for expressing your interest in joining our team. Shortlisted candidates shall be posted here. All the best.',
            link: {
              text: 'Back To Home Page',
              url: '/',
            },
          }}
        />
      )}
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
                setError={() => setErrMsg('')}
                {...{ selectedFiles, setSelectedFile, handleDeleteItem }}
              />
            </div>

            <div className='flex gap-[32px]'>
              <button
                disabled={loading || selectedFiles.length < 1}
                className='rounded-[8px] border px-[20px] py-[12px] bg-white border-jobApplicationBtnColor shadow-btnBoxShadow text-bodyText leading-[24px] text-[16px] font-semibold'
                {...{
                  ...(loading ? { disabled: true } : {}),
                  onClick: () =>
                    handleUpdateJobProfile({
                      files: selectedFiles,
                      job: job.id,
                    }),
                }}>
                {t('Update Job Profile')}
              </button>

              <button
                disabled={loading || selectedFiles.length < 1}
                className={`rounded-[8px] ${
                  loading || selectedFiles.length < 1
                    ? ''
                    : 'bg-main-Green border-main-Green text-white'
                } border px-[20px] py-[12px] font-semibold leading-[24px] text-[16px] flex-[1] shadow-btnBoxShadow`}
                {...{
                  ...(loading || selectedFiles.length < 1
                    ? { disabled: true }
                    : {}),
                  onClick: () =>
                    handleApply({
                      job: job.id.toString(),
                    }),
                }}>
                {t('Submit Application')}
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ApplyJob;

'use client';

import { Dispatch, SetStateAction } from 'react';
import {
  TAddRemoveFilter,
  AddRemoveEnum,
  TFilterTypes,
  TqueryKey,
  JobTypes,
} from '@/types/types';

export const useQueryCustomWrapper = async <dataTypeExpected>({
  queryKey,
}: {
  queryKey: any;
}) => {
  const [, { url, options, qFunc }]: TqueryKey = queryKey;

  const { data } = await qFunc<dataTypeExpected>({
    options,
    url,
  });
  return data;
};

export const getFilterUpdateFunction =
  ({ setFilters }: { setFilters: Dispatch<SetStateAction<TFilterTypes>> }) =>
  ({ type, data, action }: TAddRemoveFilter) =>
    type === 'term'
      ? setFilters((prev) => ({ ...prev, term: data }))
      : // if it's not term update
      // add
      action === AddRemoveEnum.Add
      ? type === 'department'
        ? setFilters((prev) => ({
            ...prev,
            department: [...prev.department, data],
          }))
        : type === 'jobType'
        ? setFilters((prev) => ({
            ...prev,
            jobType: [...prev.jobType, data as JobTypes],
          }))
        : null
      : // remove
      type === 'department'
      ? setFilters((prev) => ({
          ...prev,
          department: prev.department.filter(
            (currFilterValue) => currFilterValue !== data
          ),
        }))
      : type === 'jobType'
      ? setFilters((prev) => ({
          ...prev,
          jobType: prev.jobType.filter(
            (currentFilterValue) => currentFilterValue !== (data as JobTypes)
          ),
        }))
      : null;

export const getTextFromHTML = (data: string) => {
  const tmpDiv = document.createElement('div');

  tmpDiv.innerHTML = data;
  return tmpDiv.textContent || tmpDiv.innerText || '';
};

export const getLocalStorageItem = <TReturnType>({
  key,
}: {
  key: string;
}): TReturnType => {
  const localStorageData = localStorage.getItem(key);
  return JSON.parse(localStorageData!);
};

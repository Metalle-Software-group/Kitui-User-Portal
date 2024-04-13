'use client';
import {
  AddRemoveEnum,
  FeatureCategoriesTypes,
  FilterJobsTypes,
} from '@/types/types';

export const FeaturedJobsCategories = ({
  onChange,
  checked,
  name,
}: FeatureCategoriesTypes & Pick<FilterJobsTypes, 'checked'>) => {
  return (
    <button
      className={`flex w-full h-[36px] overflow-hidden px-[18px] selection:bg-inherit py-[10px] ${
        checked ? 'bg-purple-800' : 'bg-white'
      } md:border md:border-purple-300 md:rounded-[40px] justify-between items-center gap-[4px] `}
      onClick={() =>
        onChange({
          action: checked ? AddRemoveEnum.Remove : AddRemoveEnum.Add,
          type: 'department',
          data: name,
        })
      }>
      <p
        className={`w-[8px] h-[8px] rounded-full  bg-bodyBg  ml-2  ${
          checked ? '' : 'hidden'
        }`}></p>
      <p
        className={`text-bodyBg font-bold text-[12px] leading-[16.37px] line-clamp-2 ${
          checked ? 'text-bodyBg' : 'text-bodyText'
        }`}>
        {name}
      </p>
    </button>
  );
};

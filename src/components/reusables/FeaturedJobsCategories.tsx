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
			className={`flex justify-between w-fit px-[18px] selection:bg-inherit py-[10px] ${
				checked ? 'bg-purple-800' : 'bg-white'
			} md:border md:border-purple-300 md:rounded-[40px] justify-between items-center gap-[4px]`}
			onClick={() =>
				onChange({
					action: checked ? AddRemoveEnum.Remove : AddRemoveEnum.Add,
					type: 'department',
					data: name,
				})
			}>
			<div
				className={`rounded-full  bg-bodyBg w-[8px] h-[8px] ml-2 ${
					checked ? '' : 'hidden'
				}`}></div>
			<p
				className={`text-bodyBg font-bold text-[12px] leading-[16.37px] ${
					checked ? 'text-bodyBg' : 'text-bodyText'
				}`}>
				{name}
			</p>
		</button>
	);
};

'use client';
import { FeatureCategoriesTypes } from '@/types/types';
import { useState } from 'react';

export const FeaturedJobsCategories = ({
	name,
	onChange,
}: FeatureCategoriesTypes) => {
	const [selected, setSelected] = useState(false);
	return (
		<button
			className={`flex justify-between w-fit px-[18px] selection:bg-inherit py-[10px] ${
				selected ? 'bg-purple-800' : 'bg-white'
			} border border-purple-300 rounded-[40px] justify-between items-center gap-[4px]`}
			onClick={() => {
				setSelected(!selected);
				onChange;
			}}>
			<div
				className={`rounded-full  bg-bodyBg w-[8px] h-[8px] ml-2 ${
					selected ? '' : 'hidden'
				}`}></div>
			<p
				className={`text-bodyBg font-bold text-[12px] leading-[16.37px] ${
					selected ? 'text-bodyBg' : 'text-bodyText'
				}`}>
				{name}
			</p>
		</button>
	);
};

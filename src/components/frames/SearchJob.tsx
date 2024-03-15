import { SearchTypes } from '@/types/types';
import { SearchIcon } from '../icons';

export const SearchJob = ({
	placeholder,
	searchText,
	onChange,
	width,
}: SearchTypes) => {
	return (
		<div
			className={`flex ${
				width ? `w-[${width}]` : 'w-fit'
			} rounded-[12px] p-[12px] justify-between relative`}>
			<div className='flex mr-2 items-center absolute top-[calc(calc(100%-20px)/2)] left-[24px]'>
				<SearchIcon
					{...{
						// styles
						svgElementClassName:
							'stroke-search-iconColor fill-transparent w-[20px] h-[20px]',
						applyToSvgEl: true,
					}}
				/>
			</div>

			<input
				placeholder={placeholder}
				onChange={onChange}
				className='outline-none border rounded-[20px] px-[8px] pl-[50px] w-full h-[72px] shadow-searchShadow'
			/>
			<div
				role={'search'}
				className='flex font-semibold rounded-[8px] items-center absolute right-[24px] cursor-pointer selection:bg-inherit shadow-btnBoxShadow text-white  bg-main-Green px-[20px] py-[12px] border border-main-Green text-[16px] leading-[24px] top-[calc(calc(100%-50px)/2)]'>
				{searchText}
			</div>
		</div>
	);
};

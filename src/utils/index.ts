import {
	AddRemoveEnum,
	JobTypes,
	TAddRemoveFilter,
	TFilterTypes,
	TqueryKey,
} from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

export const useQueryCustomWrapper = <dataTypeExpected>({
	queryKey,
}: {
	queryKey: any;
}) => {
	const [, { url, options, qFunc }]: TqueryKey = queryKey;

	return qFunc<dataTypeExpected>({
		options,
		url,
	}).then(({ data }) => data);
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

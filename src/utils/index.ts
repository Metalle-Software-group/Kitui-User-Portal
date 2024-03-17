import { StrapiRequestParams } from 'strapi-sdk-js';
import { getStrapiConfiguredInstance } from './server';
import { TqueryKey } from '@/types/types';

export const fetchEndpointData = <dataTypeExpected = any>({
	options,
	url,
}: {
	options: StrapiRequestParams;
	url: string;
}) =>
	getStrapiConfiguredInstance().find<dataTypeExpected>(url, {
		...options,
	});

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

'use client';
import { URL_SEARCH_PARAMS } from '@/constants';
import { createResourceEndpointData } from '@/utils/server';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { Button } from '../ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../ui/form';
import { Textarea } from '../ui/textarea';
import { TCommentType, TSinglePageProps } from '@/types/types';

export const CommentForm = ({
	setChats,
	jobId,
}: Pick<TSinglePageProps, 'jobId'> & {
	setChats: Dispatch<SetStateAction<TCommentType[]>>;
}) => {
	const [errMessage, setErrMsg] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const pathname = usePathname();
	const { t } = useTranslation();
	const router = useRouter();

	const FormSchema = z.object({
		message: z
			.string()
			.min(3, {
				message: 'You must add a comment',
			})
			.max(255, {
				message: 'A comment cannot exceed 255 characters',
			})
			.optional(),
		job: z.string().optional(),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			job: jobId ? `${jobId}` : '',
			message: '',
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		setLoading(true);
		createResourceEndpointData<TCommentType>({
			data,
			url: `comments`,
			options: {
				populate: {
					user: true,
					replies: {
						populate: {
							comment: true,
							message: true,
							user: true,
							id: true,
						},
					},
				},
			},
		})
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
					else if (err.status === 403) setErrMsg('Permission denied');
					else setErrMsg('Something went wrong');

				if (res?.data) setChats((prev) => [...prev, res?.data]);
			})
			.finally(() => setLoading(false));
	}

	return (
		<div className='flex flex-col gap-[6px]'>
			<div className='space-y-5'>
				<p className='font-semibold text-[20px] leading-[28px] text-textTitle'>
					{t('Leave a comment')}
				</p>
				<p className='font-bold text-[16px] leading-[24px] text-commentsColor'>
					{t(
						'Your email address will not be published. Required fields are marked'
					)}
					*
				</p>
			</div>

			<p className='w-fit mx-auto text-red-700 font-normal text-[16px]'>
				{errMessage}
			</p>

			<div className='w-full h-fit flex flex-wrap'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='w-2/3 space-y-6'>
						<div className='flex flex-wrap gap-[24px] my-[6px]'>
							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name={'message'}
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Textarea placeholder='Your comment here' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<div className='w-full justify-end flex my-[8px] gap-[32px]'>
							<Button
								className='flex rounded-[8px] bg-mainGreen border gap-[8px] justify-center items-center px-[16px] py-[10px] border-mainGreen shadow-btnBoxShadow'
								type='submit'
								{...(loading ? { disabled: true } : {})}>
								<p className='text-white font-semibold text-[14px] leading-[20px]'>
									{t(loading ? 'Posting...' : 'Comment')}
								</p>
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};

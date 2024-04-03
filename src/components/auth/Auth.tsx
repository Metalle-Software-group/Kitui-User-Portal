'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';
import { z } from 'zod';

import {
	AuthenticateUser,
	createResourceEndpointData,
	thirdPartyProviderSubmitToken,
} from '@/utils/server';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { TAuthScreenProps, TCreateEditJobProps } from '@/types/types';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import {
	BACKEND_BASE_URL,
	THIRD_PARTY_TOKEN_NAME,
	URL_SEARCH_PARAMS,
} from '@/constants';
import {
	Loader,
	UploadFileCard,
	VerificationCodeCard,
} from '../reusables/Others';

export const AuthScreen = () => {
	const [authLoading, setAuthLoading] = useState<boolean>(false);
	const [authError, setAuthError] = useState<string | null>(null);
	const router = useRouter();

	const params = useSearchParams();
	const authToken = params.get(THIRD_PARTY_TOKEN_NAME);

	const FormSchema = z.object({
		password: z.string().min(2, {
			message: 'Password must meet the minimum requirements.',
		}),
		identifier: z
			.string()
			.email({ message: 'Email field must contain a valid email' }),
	});
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			password: '',
			identifier: '',
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		setAuthLoading(true);
		const res = AuthenticateUser({ ...data });

		res
			.then(({ err }) =>
				err
					? setAuthError(err)
					: router.push(params.get(URL_SEARCH_PARAMS.redirect) ?? '/profile')
			)
			.catch(() =>
				setAuthError("Username and password combination didn't match")
			)
			.finally(() => setAuthLoading(false));
	}
	const handleThirdPartyAuth = ({ id_token: token }: TAuthScreenProps) =>
		thirdPartyProviderSubmitToken({
			url: 'auth/google/callback',
			id_token: authToken!,
			options: {},
		})
			.then((data) => {
				console.log('response', data);
			})
			.catch((err) => console.log(err));

	const { t } = useTranslation();

	return authToken ? (
		<div
			className='flex flex-col gap-[20px]'
			onLoad={(e) => handleThirdPartyAuth({ id_token: authToken })}>
			<Loader {...{ title: 'Authenticating' }} />
		</div>
	) : (
		<div className='py-[20px] rounded-[20px] mx-auto flex flex-col gap-[40px] justify-center items-center bg-white shaow-page404Shadow w-12/12 md:w-7/12'>
			<div className='w-fit flex items-center justify-center'>
				<img
					src={'/images/logo/logo.png'}
					className='w-[100px] h-[100px]'
					alt='Logo'
				/>
			</div>

			<div className='w-full flex gap-[40px] p-[28px] flex-wrap justify-center items-center'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='w-full space-y-6 flex items-center justify-center'>
						<div className='flex flex-col gap-[24px] px-[32px] w-[450px]'>
							{/* form header  */}
							<div className='flex gap-[12px] flex-col'>
								<p className='font-bold text-[30px] leading-[36px] tracking-[.75%] text-title-text-color'>
									{t('Log In')}
								</p>
								<p className='text-gray-body-text leading-[24px] text-[16px] font-normal'>
									{t('Welcome back! Please enter your details.')}
								</p>
							</div>

							{authError ? (
								<div className='text-red-700 text-center w-fit mx-auto'>
									<p>{authError}</p>
								</div>
							) : null}

							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name='identifier'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												{t('Email')}
											</FormLabel>
											<FormControl>
												<Input
													placeholder={t('Email address')}
													{...field}
													className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-black leading-[24px] text-[14px] font-normal flex items-center'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name={'password'}
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												{t('Password')}
											</FormLabel>
											<FormControl>
												<Input
													placeholder={t('Password')}
													{...field}
													className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-black leading-[24px] text-[14px] font-normal flex items-center'
													type={'password'}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							{/* forgot pass section  */}
							<div className='flex flex-wrap gap-[24px] py-[0px] text-filter-stroke-color justify-between'>
								<div className='flex gap-[8px]'>
									<Checkbox id='remember' />
									<label
										htmlFor='remember'
										className='font-medium text-[14px] leading-[20px] text-filter-stroke-color selection:bg-inherit'>
										{t('Remember me')}
									</label>
								</div>
								<div className='w-fit'>
									<Link
										href={'/'}
										className='text-[14px] font-bold leading-[20px] text-purple-800'>
										{t('Forgot password')}
									</Link>
								</div>
							</div>

							<div className='w-full justify-center flex-col flex my-[8px] gap-[32px]'>
								<Button
									className='rounded-[8px] bg-dev-accent hover:bg-dev-accent text-white border-dev-accent border px-[10px] py-[16px] gap-[8px] shadow-btnBoxShadow items-center justify-center w-full leading-[24px] text-[16px] font-bold'
									type='submit'
									{...(authLoading ? { disabled: true } : {})}>
									{t(authLoading ? 'Submitting...' : 'Sign in')}
								</Button>

								<div
									className='rounded-[8px] bg-white hover:bg-white flex selection:bg-inherit  text-black border-dev-accent border px-[40px] py-[12px] gap-[8px] shadow-btnBoxShadow w-full items-center justify-center'
									role='button'
									{...{
										disabled: authLoading,
										onClick: (e) =>
											router.push(`${BACKEND_BASE_URL}/api/connect/google`),
									}}>
									<img
										src='/icons/google-auth.svg'
										className='w-[24px] h-[24px]'
									/>
									<p className='text-inherit leading-[20px] text-[14px] font-semibold'>
										Sign in with google
									</p>
								</div>
							</div>

							<div className='flex gap-[4px] justify-center'>
								<p className='text-title-text-color leading-[24px] text-[14px] font-bold'>
									{t('Don’t have an account?')}
								</p>

								<Link
									className='text-purple-800 text-[14px] leading-[24px] font-bold'
									href={'/auth/register'}>
									{t('Sign up')}
								</Link>
							</div>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};

export const Registration = () => {
	return (
		<form className='flex flex-col w-full h-auto rounded-[20px] space-y-[32px] justify-center items-center'>
			<p className='font-bold text-[30px] leading-[36px] text-textTitle'>
				Create an account
			</p>
			<p className='font-normal text-[16px] leading-[24px] text-bodyText'>
				Please complete the form below to create your job profile
			</p>
			<div className='w-full h-[630px]'>
				<div className='grid grid-cols-2 space-y-[32px]'>
					<div>
						<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
							Name *
						</label>
						<input
							className='w-fit rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
							placeholder='Jane Pendo'
							type='text'
							required
						/>
					</div>
					<div>
						<label className='font-bold text-[16px] leading-[24px] text-textTitle'>
							Email *
						</label>
						<input
							type='email'
							required
							placeholder='e.g jane@gmail.com'
							className='w-fit rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
						/>
					</div>
					<div>
						<label className='font-bold text-[16px] leading-[24px] text-textTitle'>
							Phone Number *
						</label>
						<input
							type='number'
							placeholder='0712345678'
							min={10}
							max={10}
							required
							className='w-fit rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
						/>
					</div>
					<div>
						<label className='font-bold text-[16px] leading-[24px] text-textTitle'>
							ID Number *
						</label>
						<input
							type='text'
							required
							className='w-fit rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
						/>
					</div>
				</div>
				<div>
					<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
						Gender *
					</label>
					<div className='space-y-3'>
						<input
							type='radio'
							value='male'
							checked={true}
							className='focus:ring-purple-500'
						/>
						<input
							type='radio'
							value='female'
							className='focus:ring-purple-500'
						/>
					</div>
				</div>
				<div>
					<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
						County Of Residence *
					</label>
					<input
						type='text'
						required
						placeholder='e.g Kitui'
						className='w-full rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
					/>
				</div>
				<div className='grid grid-cols-2'>
					<div>
						<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
							Sub County *
						</label>
						<input
							type='text'
							required
							placeholder='e.g Kitui-West'
							className='w-[350px] rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
						/>
					</div>
					<div>
						<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
							Location *
						</label>
						<input
							type='text'
							required
							placeholder='e.g Kabati'
							className='w-[350px] rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
						/>
					</div>
				</div>
				<div>
					<label className='font-[700] text-[16px] leading-[24px] text-textTitle'>
						Upload Files *
					</label>
					<input
						type='file'
						required
						placeholder='e.g Kitui-West'
						className='w-[350px] rounded-[6px] border border-[#D1D5DB] px-[12px] py-[14px] bg-bodyBg'
					/>
					<label className='font-bold text-[16px] leading-[24px] text-search-iconColor'>
						Kindly attach the following files: Resumes, cover letter.
					</label>
				</div>
				<button className='flex w-full h-[40px] rounded-[8px] bg-mainGreen border justify-center items-center'>
					<p className='text-white font-[600] text-[14px] leading-[20px] '>
						Register
					</p>
				</button>
			</div>
		</form>
	);
};

export const CreateEditUser = ({
	successBtn,
	subtitle,
	title,
}: Pick<
	TCreateEditJobProps,
	'ministries' | 'jobTypes' | 'successBtn' | 'title'
> & { subtitle: string }) => {
	const [errMessage, setErrMsg] = useState<string | null>(null);
	const [selectedFiles, setSelectedFile] = useState<File[]>([]);
	const [successFull, setSuccessFull] = useState(false);
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();
	const router = useRouter();

	const handleDeleteItem = (file: File) =>
		setSelectedFile(
			selectedFiles.filter((currItem) => {
				return currItem !== file;
			})
		);

	const pathname = usePathname();

	const FormSchema = z.object({
		username: z.string().min(2, {
			message: 'Name must be at least 2 characters.',
		}),
		phone_number: z.string().min(2, {
			message: 'Phone number must be at least 2 characters.',
		}),
		email: z
			.string()
			.email({ message: 'Email field must contain a valid email' }),
		id_number: z
			.string()
			.min(6, {
				message: 'ID must be at least 6 characters.',
			})
			.max(9, { message: 'ID mus 8 characters or less' }),
		gender: z.string().min(2, {
			message: 'Gender must be at least 2 characters.',
		}),
		location: z.string().min(2, {
			message: 'Location must be field.',
		}),
		county: z.string().min(2, {
			message: 'County of Residence must be filled',
		}),
		sub_county: z.string().min(2, {
			message: 'Sub-county must be at least 2 characters.',
		}),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			phone_number: '',
			sub_county: '',
			id_number: '',
			username: '',
			location: '',
			county: '',
			gender: '',
			email: '',
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		setLoading(true);
		createResourceEndpointData({ url: successBtn.subDetails.url, data })
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
				else setSuccessFull(true);
			})
			.finally(() => setLoading(false));
	}

	return (
		<div className=' h-fit py-[20px] rounded-[20px] mx-auto flex flex-col gap-[40px] justify-center items-center bg-white shaow-page404Shadow w-7/12'>
			{successFull ? (
				<VerificationCodeCard
					{...{
						title: 'Verify your account.',
						sentiment: `Kindly check your email, ${form
							.getValues('email')
							.substring(0, 3)}******com for a verification code.`,
						link: {
							text: 'Back To Home Page',
							url: '/',
						},
					}}
				/>
			) : (
				<div className='gap-[4px] rounded-[20px] w-[80%]'>
					<div className='flex flex-col gap-[14px] items-center justify-center my-[16px]'>
						<p className='font-bold text-[30px] leading-[36px] tracking-[-.75%] text-title-text-color w-fit'>
							{title}
						</p>
						<p className='text-gray-body-text text-[16px] leading-[24px] font-normal'>
							{subtitle}
						</p>
					</div>

					<div className='w-fit mx-auto'>
						<p className='text-red-500'>{errMessage}</p>
					</div>

					<div className='w-full h-fit flex gap-[20px] flex-wrap'>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='w-full space-y-6'>
								<div className='flex flex-wrap gap-[24px]'>
									<div className='flex-[1]'>
										<FormField
											control={form.control}
											name='username'
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-textTitle font-bold text-[16px] leading-[24px]'>
														Username
													</FormLabel>
													<FormControl>
														<Input
															placeholder='Name'
															{...field}
															className='text-bodyText font-medium text-[14px]'
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<div className='flex-[1]'>
										<FormField
											control={form.control}
											name='email'
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-textTitle font-bold text-[16px] leading-[24px]'>
														Email
													</FormLabel>
													<FormControl>
														<Input
															placeholder='Email address'
															{...field}
															className='text-bodyText font-medium text-[14px]'
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>

								<div className='flex flex-wrap gap-[24px]'>
									<div className='flex-[1]'>
										<FormField
											control={form.control}
											name='phone_number'
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-textTitle font-bold text-[16px] leading-[24px]'>
														Phone number
													</FormLabel>
													<FormControl>
														<Input
															placeholder='Phone'
															{...field}
															className='text-bodyText font-medium text-[14px]'
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<div className='flex-[1]'>
										<FormField
											control={form.control}
											name={'id_number'}
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-textTitle font-bold text-[16px] leading-[24px]'>
														ID number
													</FormLabel>
													<FormControl>
														<Input
															placeholder='3401...'
															{...field}
															className='text-bodyText font-medium text-[14px]'
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>

								<div className='flex flex-wrap gap-[24px] text-black'>
									<div className='flex-[1]'>
										<FormField
											control={form.control}
											name='gender'
											render={({ field }) => (
												<FormItem className='space-y-3'>
													<FormLabel className='text-textTitle font-bold text-[16px] leading-[24px]'>
														Gender
													</FormLabel>
													<FormControl>
														<RadioGroup
															onValueChange={field.onChange}
															defaultValue={field.value}
															className='flex flex-col space-y-1'>
															<FormItem className='flex items-center space-x-3 space-y-0'>
																<FormControl>
																	<RadioGroupItem value='female' />
																</FormControl>
																<FormLabel className='text-bodyText font-medium text-[14px]'>
																	Female
																</FormLabel>
															</FormItem>

															<FormItem className='flex items-center space-x-3 space-y-0'>
																<FormControl>
																	<RadioGroupItem value='male' />
																</FormControl>
																<FormLabel className='text-bodyText font-medium text-[14px]'>
																	Male
																</FormLabel>
															</FormItem>
														</RadioGroup>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>

								<div className='flex flex-wrap gap-[24px]'>
									<div className='flex-[1]'>
										<FormField
											control={form.control}
											name='county'
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-textTitle font-bold text-[16px] leading-[24px]'>
														County of residence
													</FormLabel>
													<FormControl>
														<Input
															placeholder='e.g Kitui'
															{...field}
															className='text-bodyText font-medium text-[14px]'
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>

								<div className='flex flex-wrap gap-[24px]'>
									<div className='flex-[1]'>
										<FormField
											control={form.control}
											name='sub_county'
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-textTitle font-bold text-[16px] leading-[24px]'>
														Sub-county
													</FormLabel>
													<FormControl>
														<Input
															placeholder='e.g Kitui West'
															{...field}
															className='text-bodyText font-medium text-[14px]'
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<div className='flex-[1]'>
										<FormField
											control={form.control}
											name='location'
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-textTitle font-bold text-[16px] leading-[24px]'>
														Location
													</FormLabel>
													<FormControl>
														<Input
															placeholder='e.g Kabati'
															{...field}
															className='text-bodyText font-medium text-[14px]'
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>

								<div className='flex flex-wrap gap-[24px]'>
									<div className='flex-[1]'>
										<p className='font-bold leading-[24px] text-[16px] text-textTitle'>
											{t('Upload files *')}
										</p>

										<UploadFileCard
											{...{ selectedFiles, setSelectedFile, handleDeleteItem }}
										/>

										<p className='font-normal text-[14px] leading-[24px] text-gray-400'>
											Kindly attach the following files: Resume, cover letter
										</p>
									</div>
								</div>

								<div className='w-full center flex my-[8px] gap-[32px]'>
									<Button
										className='rounded-[8px] bg-dev-accent hover:bg-dev-accent text-white border-dev-accent border px-[40px] py-[12px] gap-[8px] shadow-btnBoxShadow w-full items-center justify-center'
										type='submit'
										{...{
											disabled: loading,
										}}>
										<p className='text-inherit leading-[20px] text-[14px] font-semibold'>
											{loading ? 'Submitting...' : successBtn.text}
										</p>
									</Button>
								</div>
							</form>
						</Form>
					</div>
				</div>
			)}
		</div>
	);
};

export const CreateUser = () => {
	return (
		<div className=' m-[10px] flex flex-col gap-[40px] justify-center'>
			<CreateEditUser
				{...{
					subtitle: 'Please complete the form below to create your job profile',
					title: 'Create an account',
					successBtn: {
						subDetails: { method: 'POST', url: 'auth/register' },
						text: 'Register',
					},
				}}
			/>
		</div>
	);
};

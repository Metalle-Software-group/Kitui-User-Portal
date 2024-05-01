'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { z } from 'zod';

import {
	AuthenticateUser,
	ResetPasswordHandler,
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
import { Loader, VerificationCodeCard } from '../reusables/Others';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthScreen = () => {
	const [authLoading, setAuthLoading] = useState<boolean>(false);
	const [authError, setAuthError] = useState<string | null>(null);
	const [thirdPAuthError, setThirdPAuthError] = useState<string | null>(null);
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

	const handleThirdPartyAuth = ({ qParams }: TAuthScreenProps) =>
		thirdPartyProviderSubmitToken({
			url: 'auth/google/callback',
			qParams,
			options: {},
		})
			.then(({ err, data }) => {
				if (data)
					router.push(params.get(URL_SEARCH_PARAMS.redirect) ?? '/profile');
				else {
					console.log(err, data);
					if (err?.status === 400)
						setThirdPAuthError(err?.message ?? 'Missing or invalid auth token');
					else setThirdPAuthError('Something went wrong');
				}
			})
			.catch((err) => console.log(err));

	const { t } = useTranslation();

	useEffect(() => {
		if (authToken) handleThirdPartyAuth({ qParams: params.toString() });
	}, []);

	return authToken ? (
		<div className='md:py-[20px] mx-auto flex flex-col gap-[24px] justify-center items-center w-fit h-[calc(100dvh-220px)]'>
			<div className='w-fit flex items-center justify-center'>
				<img
					src={'/images/logo/logo.png'}
					className='w-[100px] h-[100px]'
					alt='Logo'
				/>
			</div>
			{thirdPAuthError ? (
				<div className='text-red-700 text-center w-fit mx-auto h-full'>
					<p>{thirdPAuthError}</p>
				</div>
			) : (
				<Loader {...{ title: 'Authenticating...' }} />
			)}
		</div>
	) : (
		<div className='md:py-[20px] mx-auto flex flex-col gap-[24px] justify-center items-center w-fit h-full'>
			<div className='w-fit flex items-center justify-center'>
				<img
					src={'/images/logo/logo.png'}
					className='w-[100px] h-[100px]'
					alt='Logo'
				/>
			</div>

			<div className='w-full flex gap-[40px] md:p-[32px] flex-wrap lg:min-w-[500px] justify-center items-center flex-col rounded-[16px] bg-white shadow-page404Shadow'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='w-full space-y-6 flex items-center justify-center'>
						<div className='flex flex-col gap-[24px] px-[32px] w-full'>
							{/* form header  */}
							<div className='flex gap-[12px] flex-col'>
								<p className='font-bold text-[30px] leading-[36px] tracking-[.75%] text-title-text-color mt-4 md:mt-0'>
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

							{authToken ? (
								<div className='flex flex-col gap-[20px] text-black w-full h-[calc(100dvh-220px)] items-center'>
									{thirdPAuthError ? (
										<div className='text-red-700 text-center w-fit mx-auto h-full'>
											<p>{thirdPAuthError}</p>
										</div>
									) : null}
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
										href={'/auth/reset-password'}
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

export const CreateEditUser = ({
	successBtn,
	subtitle,
	title,
}: Pick<
	TCreateEditJobProps,
	'ministries' | 'jobTypes' | 'successBtn' | 'title'
> & { subtitle: string }) => {
	const [agreeToTAndCs, setAgreeToTAndCs] = useState<boolean>(false);
	const [errMessage, setErrMsg] = useState<string | null>(null);
	const [successFull, setSuccessFull] = useState(false);
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();
	const router = useRouter();

	const pathname = usePathname();

	const FormSchema = z.object({
		username: z.string().min(2, {
			message: 'Name must be at least 2 characters.',
		}),

		firstname: z.string().min(2, {
			message: 'First name must be at least 2 characters.',
		}),
		lastname: z.string().min(2, {
			message: 'Last name must be at least 2 characters.',
		}),

		phone_number: z.string().min(2, {
			message: 'Phone number must be at least 2 characters.',
		}),

		password: z
			.string()
			.min(8, {
				message: 'Password be at least 8 characters.',
			})
			.max(20, {
				message: 'Password must be at most 20 characters.',
			}),

		confirmPassword: z
			.string()
			.min(8, {
				message: 'Password be at least 8 characters.',
			})
			.max(20, {
				message: 'Password must be at most 20 characters.',
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
			confirmPassword: '',
			phone_number: '',
			sub_county: '',
			id_number: '',
			firstname: '',
			lastname: '',
			username: '',
			password: '',
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
					else if (err.status === 403) {
						setErrMsg('Permission denied');
						toast.error('Permission denied', {
							position: 'top-right',
						});
					} else setErrMsg('Something went wrong');
				else setSuccessFull(true);
				toast.success('Kindly check your email', {
					position: 'top-right',
				});
			})
			.finally(() => setLoading(false));
	}

	return (
		<div className=' h-fit py-[20px] rounded-[20px] mx-auto flex flex-col gap-[40px] justify-center items-center bg-white shadow-page404Shadow px-[10px] md:px-[40px] mb-5 md:mb-0'>
			{successFull ? (
				<VerificationCodeCard
					{...{
						title: 'Verify your account.',
						sentiment: `Kindly check your email, ${form
							.getValues('email')
							.substring(0, 3)}******com for an activation link.`,
						link: {
							text: 'Back To Home Page',
							url: '/',
						},
					}}
				/>
			) : (
				<div className='gap-[4px] rounded-[20px] w-fit'>
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

					<div className='w-full h-fit lg:min-w-[500px] flex gap-[20px] flex-wrap'>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='w-full space-y-6'>
								<div className='flex flex-wrap gap-[24px]'>
									<div className='flex-[1]'>
										<FormField
											control={form.control}
											name={'firstname'}
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-title-text-color'>
														{t('First name')}
													</FormLabel>
													<FormControl>
														<Input
															placeholder='First name'
															{...field}
															className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color  text-bodyText leading-[24px] text-[14px] font-normal flex items-center'
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
											name={'lastname'}
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-title-text-color'>
														{t('Last name')}
													</FormLabel>
													<FormControl>
														<Input
															placeholder='Last name'
															{...field}
															className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-black leading-[24px] text-[14px] font-normal flex items-center'
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
															className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-bodyText leading-[24px] text-[14px] font-normal flex items-center'
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
															className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-bodyText leading-[24px] text-[14px] font-normal flex items-center'
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
															className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-bodyText leading-[24px] text-[14px] font-normal flex items-center'
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
															className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-bodyText leading-[24px] text-[14px] font-normal flex items-center'
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
															className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-bodyText leading-[24px] text-[14px] font-normal flex items-center'
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
															className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-bodyText leading-[24px] text-[14px] font-normal flex items-center'
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
															className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-bodyText leading-[24px] text-[14px] font-normal flex items-center'
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
											name='password'
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-textTitle font-bold text-[16px] leading-[24px]'>
														Password
													</FormLabel>
													<FormControl>
														<Input
															placeholder='Password'
															type='password'
															{...field}
															className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-bodyText leading-[24px] text-[14px] font-normal flex items-center'
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
											name={'confirmPassword'}
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-textTitle font-bold text-[16px] leading-[24px]'>
														Confirm Password
													</FormLabel>
													<FormControl>
														<Input
															placeholder='Password'
															{...field}
															type='password'
															className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-bodyText leading-[24px] text-[14px] font-normal flex items-center'
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>

								<div className='flex items-center justify-start'>
									<div className='flex gap-[8px] items-center'>
										<Checkbox
											id='t&C'
											{...{
												checked: agreeToTAndCs,
												onCheckedChange: (checked) =>
													setAgreeToTAndCs(checked === true ? true : false),
											}}
										/>
										<label
											htmlFor='t&C'
											className='font-medium text-[14px] leading-[20px] text-filter-stroke-color selection:bg-inherit'>
											I agree to the{' '}
											<Link
												href={'/terms-and-conditions'}
												className='text-[14px] font-bold leading-[20px] text-purple-800'>
												terms & conditions
											</Link>
										</label>
									</div>
								</div>

								<div className='w-full center flex my-[8px] gap-[32px]'>
									<Button
										className='rounded-[8px] bg-dev-accent hover:bg-dev-accent text-white border-dev-accent border px-[40px] py-[12px] gap-[8px] shadow-btnBoxShadow w-full items-center justify-center'
										type='submit'
										{...{
											disabled: loading || !agreeToTAndCs,
										}}>
										<p className='text-inherit leading-[20px] text-[14px] font-semibold'>
											{loading ? 'Submitting...' : successBtn.text}
										</p>
									</Button>
								</div>

								<div className='w-fit flex text-black items-center gap-[4px]'>
									Have an account?
									<Link
										href={'/auth/signin'}
										className='text-[14px] font-bold leading-[20px] text-purple-800'>
										Sign In instead
									</Link>
								</div>
							</form>
						</Form>
					</div>
				</div>
			)}
			<ToastContainer />
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

export const ResetPassword = () => {
	const [authLoading, setAuthLoading] = useState<boolean>(false);
	const [authError, setAuthError] = useState<string | null>(null);
	const [success, setSuccess] = useState('');

	const FormSchema = z.object({
		email: z
			.string()
			.email({ message: 'Email field must contain a valid email' }),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: '',
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		setAuthLoading(true);
		setAuthError('');

		ResetPasswordHandler({
			url: 'auth/forgot-password',
			data,
		})
			.then(({ data: res, err }) => {
				if (err)
					if (err.status === 400)
						err.details.errors.map(({ message }) =>
							form.setError('email', {
								message,
							})
						);
					else setAuthError('Something went wrong');
				if (data) setSuccess('Check your email for the reset password link');
			})
			.finally(() => setAuthLoading(false));
	}

	return (
		<div className='mx-auto flex flex-col gap-[24px] justify-center items-center w-fit h-full'>
			<div className='w-fit flex items-center justify-center'>
				<img
					src={'/images/logo/logo.png'}
					className='w-[100px] h-[100px]'
					alt='Logo'
				/>
			</div>

			<div className='w-full flex gap-[40px] p-[32px] flex-wrap justify-center items-center flex-col rounded-[16px] bg-white shadow-page404Shadow max-w-[514px]'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='w-full space-y-6 flex items-center justify-center'>
						<div className='flex flex-col gap-[24px] md:px-[32px] w-fit'>
							{/* form header  */}
							<div className='flex gap-[12px] flex-col'>
								<p className='font-bold text-[30px] leading-[36px] tracking-[.75%] text-title-text-color'>
									Reset your password
								</p>
								<p className='text-gray-body-text leading-[24px] text-[16px] font-normal text-wrap'>
									Enter your email address and we will send you a link to reset
									your password.
								</p>
							</div>

							<div className='flex flex-col gap-[24px] px-[16px] w-fit'>
								{authError ? (
									<div className='text-red-700 text-center w-fit mx-auto'>
										<p>{authError}</p>
									</div>
								) : null}
								{success ? (
									<div className='text-green-700 text-center w-fit mx-auto'>
										<p>{success}</p>
									</div>
								) : null}
							</div>

							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												Email
											</FormLabel>
											<FormControl>
												<Input
													placeholder={'Email address'}
													{...field}
													{...(success ? { disabled: true } : {})}
													className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-black leading-[24px] text-[14px] font-normal flex items-center'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							{/* forgot pass section  */}
							<div className='flex flex-wrap gap-[24px] py-[0px] text-filter-stroke-color justify-between'>
								<div className='w-fit flex gap-[2px] items-center'>
									<p className='mr-1'>Back to</p>
									<Link
										href={'/auth/signin'}
										className='text-[14px] font-bold leading-[20px] text-purple-800'>
										Sign In
									</Link>
								</div>
							</div>

							<div className='w-full justify-center flex-col flex my-[8px] gap-[32px]'>
								<Button
									className='rounded-[8px] bg-dev-accent hover:bg-dev-accent text-white border-dev-accent border px-[10px] py-[16px] gap-[8px] shadow-btnBoxShadow items-center justify-center w-full leading-[24px] text-[16px] font-bold'
									type='submit'
									{...(authLoading || success ? { disabled: true } : {})}>
									{authLoading ? 'Submitting...' : 'Reset Password'}
								</Button>
							</div>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};

export const VerifyEmail = () => {
	const [authLoading, setAuthLoading] = useState<boolean>(false);
	const [authError, setAuthError] = useState<string | null>(null);
	const [success, setSuccess] = useState('');
	const params = useSearchParams();
	const router = useRouter();

	const { resetToken, email } = {
		resetToken: params.get('resetToken'),
		email: params.get('email'),
	};

	const FormSchema = z.object({
		password: z
			.string()
			.min(6, { message: 'Password must be at least 6 characters' }),

		confirmPassword: z
			.string()
			.max(20, { message: 'Password must be at most 20 characters' }),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			confirmPassword: '',
			password: '',
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		setAuthLoading(true);
		setAuthError('');

		ResetPasswordHandler({
			url: 'auth/forgot-password',
			data: { ...data, resetToken, email },
		})
			.then(({ data: res, err }) => {
				if (err)
					if (err.status === 400)
						err.details.errors.map(({ message }) => {
							toast.error(message, {
								position: 'top-right',
							});
							setAuthError(message);
						});
					else {
						toast.error('Something went wrong', {
							position: 'top-right',
						});

						setAuthError('Something went wrong');
					}
				if (data) {
					toast.success('Password changed successfully', {
						position: 'top-right',
					});

					setSuccess('Check your email for the reset password link');
					router.push(`/auth/signin`);
				}
			})
			.finally(() => setAuthLoading(false));
	}

	return (
		<div className='mx-auto flex flex-col gap-[24px] justify-center items-center w-fit h-full'>
			<div className='w-fit flex items-center justify-center'>
				<img
					src={'/images/logo/logo.png'}
					className='w-[100px] h-[100px]'
					alt='Logo'
				/>
			</div>

			<div className='w-full flex gap-[40px] p-[12px] md:p-[32px] flex-wrap justify-center items-center flex-col rounded-[16px] bg-white shadow-page404Shadow max-w-[514px]'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='w-full space-y-6 flex items-center justify-center'>
						<div className='flex flex-col gap-[24px] px-[32px] w-fit'>
							{/* form header  */}
							<div className='flex gap-[12px] flex-col'>
								<p className='font-bold text-[30px] leading-[36px] tracking-[.75%] text-title-text-color'>
									Set your password
								</p>
								<p className='text-gray-body-text leading-[24px] text-[16px] font-normal text-wrap'>
									Enter your password below, to set a new password for your
									account
								</p>
							</div>

							<div className='flex flex-col gap-[24px] px-[16px] w-fit'>
								{authError ? (
									<div className='text-red-700 text-center w-fit mx-auto'>
										<p>{authError}</p>
									</div>
								) : null}
								{success ? (
									<div className='text-green-700 text-center w-fit mx-auto'>
										<p>{success}</p>
									</div>
								) : null}
							</div>

							<div className='flex-[1]'>
								<FormField
									control={form.control}
									name='password'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												Password
											</FormLabel>
											<FormControl>
												<Input
													placeholder={'Password'}
													{...field}
													{...(success ? { disabled: true } : {})}
													type='password'
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
									name={'confirmPassword'}
									render={({ field }) => (
										<FormItem>
											<FormLabel className='text-title-text-color'>
												Confirm Password
											</FormLabel>
											<FormControl>
												<Input
													placeholder={'Confirm Password'}
													{...field}
													{...(success ? { disabled: true } : {})}
													type={'password'}
													className='rounded-[6px] px-[12px] py-[14px] border border-gray-300 bg-login-screen-text-color text-black leading-[24px] text-[14px] font-normal flex items-center'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							{/* forgot pass section  */}
							<div className='flex flex-wrap gap-[24px] py-[0px] text-filter-stroke-color justify-between'>
								<div className='w-fit flex gap-[2px] items-center'>
									<p className='mr-1'>Back to</p>
									<Link
										href={'/auth/signin'}
										className='text-[14px] font-bold leading-[20px] text-purple-800'>
										Sign In
									</Link>
								</div>
							</div>

							<div className='w-full justify-center flex-col flex my-[8px] gap-[32px]'>
								<Button
									className='rounded-[8px] bg-dev-accent hover:bg-dev-accent text-white border-dev-accent border px-[10px] py-[16px] gap-[8px] shadow-btnBoxShadow items-center justify-center w-full leading-[24px] text-[16px] font-bold'
									type='submit'
									{...(authLoading || success ? { disabled: true } : {})}>
									{authLoading ? 'Submitting...' : 'Verify email'}
								</Button>
							</div>
						</div>
					</form>
				</Form>
			</div>
			<ToastContainer />
		</div>
	);
};

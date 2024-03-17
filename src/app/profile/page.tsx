'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Avatar } from '@/components/reusables/Others';

const Profile = () => {
	const FormSchema = z.object({
		name: z.string().min(2, {
			message: 'Name must be at least 2 characters.',
		}),

		phone: z.string().min(2, {
			message: 'Phone number must be at least 2 characters.',
		}),

		email: z
			.string()
			.email({ message: 'Email field must contain a valid email' }),

		nationalId: z
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
		countyResidence: z.string().min(2, {
			message: 'County of Residence must be filled',
		}),
		subCounty: z.string().min(2, {
			message: 'Sub-county must be at least 2 characters.',
		}),
	});
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			countyResidence: '',
			nationalId: '',
			subCounty: '',
			location: '',
			gender: '',
			phone: '',
			name: '',
			email: '',
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<div className='m-[10px] flex flex-col gap-[40px] px-[16px] py-[24px]'>
			<div className='flex gap-[24px] items-center w-fit'>
				<Avatar
					{...{
						classNames: 'w-[130px] h-[130px] font-extrabold',
						name: 'Joy Mueni',
					}}
				/>
				<div className='flex gap-[10px] flex-col'>
					<p className='text-center tracking-[-.5%] leading-[30.01px] text-[22px] font-bold text-title-text-color'>
						Joy Mueni
					</p>
					<p className='text-gray-body-text text-center leading-[24px] text-[16px] font-normal'>
						job@gmail.com
					</p>
				</div>
			</div>

			<div className='shadow-profileBoxShadow bg-white gap-[4px] p-[28px] rounded-[20px]'>
				<p className='text-title-text-color tracking-[-.5%] leading-[28px] text-[24px] font-bold'>
					Profile details
				</p>

				<div className='w-full h-fit flex gap-[40px] p-[28px] flex-wrap'>
					<Form {...form} {...{}}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='w-full space-y-6'>
							<div className='flex flex-wrap gap-[24px]'>
								<div className='flex-[1]'>
									<FormField
										control={form.control}
										name='name'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-title-text-color'>
													Name
												</FormLabel>
												<FormControl>
													<Input placeholder='Name' {...field} />
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
												<FormLabel className='text-title-text-color'>
													Email
												</FormLabel>
												<FormControl>
													<Input placeholder='Email address' {...field} />
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
										name='phone'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-title-text-color'>
													Phone
												</FormLabel>
												<FormControl>
													<Input placeholder='Phone' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<div className='flex-[1]'>
									<FormField
										control={form.control}
										name={'nationalId'}
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-title-text-color'>
													ID Number
												</FormLabel>
												<FormControl>
													<Input placeholder='' {...field} />
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
										name='gender'
										render={({ field }) => (
											<FormItem className='space-y-3'>
												<FormLabel>Gender</FormLabel>
												<FormControl>
													<RadioGroup
														onValueChange={field.onChange}
														defaultValue={field.value}
														className='flex flex-col space-y-1'>
														<FormItem className='flex items-center space-x-3 space-y-0'>
															<FormControl>
																<RadioGroupItem value='female' />
															</FormControl>
															<FormLabel className='font-normal'>
																Female
															</FormLabel>
														</FormItem>

														<FormItem className='flex items-center space-x-3 space-y-0'>
															<FormControl>
																<RadioGroupItem value='male' />
															</FormControl>
															<FormLabel className='font-normal'>
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

							<div className='flex flex-wrap gap-[24px] my-[6px]'>
								<div className='flex-[1]'>
									<FormField
										control={form.control}
										name={'countyResidence'}
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-title-text-color'>
													County of residence
												</FormLabel>
												<FormControl>
													<Input placeholder='' {...field} />
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
										name={'subCounty'}
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-title-text-color'>
													Sub county
												</FormLabel>
												<FormControl>
													<Input placeholder='Phone' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<div className='flex-[1]'>
									<FormField
										control={form.control}
										name={'location'}
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-title-text-color'>
													Location
												</FormLabel>
												<FormControl>
													<Input placeholder='' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</div>

							<div className='w-full justify-center flex my-[8px] gap-[32px]'>
								<Button
									role={'button'}
									type={'button'}
									onClick={(e) => console.log}
									className='flex gap-[6px] bg-white hover:bg-white text-black justify-between px-[16px] py-[12px] rounded-[8px] shadow-btnBoxShadow selection:bg-inherit cursor-pointer border border-border-color'>
									Back
								</Button>

								<Button
									className='rounded-[8px] bg-dev-accent hover:bg-dev-accent text-white border-dev-accent border px-[40px] py-[12px] gap-[8px] shadow-btnBoxShadow w-fit items-center justify-center'
									type='submit'>
									<p className='text-inherit'>Update details</p>
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Profile;

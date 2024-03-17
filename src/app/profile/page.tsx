'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { toast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { Avatar, Profile } from '@/components/reusables/Others';

const ProfilePage = () => {
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
		<div className='mx-[50px] my-[85px] flex flex-col gap-[40px] px-[16px] py-[24px]'>
			<div className=''>
				<p className='text-textTitle leading-[36px] font-bold text-[30px] tracking-[.75%]'>
					Welcome Joy,
				</p>
				<p className='text-bodyText leading-[24px] text-[14px] font-normal'>
					Access your past applications and profile from here
				</p>
			</div>
			<div className='flex gap-[24px] items-center w-fit'>
				<Avatar
					{...{
						classNames:
							'w-[130px] h-[130px] font-bold text-[48px] leading-[36px] bg-purple-100',
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
			<div className=''>
				<Profile {...{ form, onSubmit }} />
			</div>
		</div>
	);
};

export default ProfilePage;

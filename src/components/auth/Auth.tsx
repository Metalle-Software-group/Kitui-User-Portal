'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import React from 'react';
import { z } from 'zod';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Link from 'next/link';
import { Checkbox } from '../ui/checkbox';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { useTranslation } from 'react-i18next';

const AuthScreen = ({}) => {
	const FormSchema = z.object({
		password: z.string().min(2, {
			message: 'Password must meet the minimum requirements.',
		}),

		email: z
			.string()
			.email({ message: 'Email field must contain a valid email' }),
	});
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			password: '',
			email: '',
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(JSON.stringify(data, null, 2));
	}
	const { t } = useTranslation();
	return (
    <React.Fragment>
      <div className='w-full flex items-center justify-center'>
        <Image
          src={'/images/logo/logo.png'}
          width={100}
          height={100}
          alt='Logo'
          className='w-[100px] h-[100px]'
        />
      </div>

      <div className='w-full h-fit flex gap-[40px] p-[28px] flex-wrap justify-center items-center'>
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

              <div className='flex-[1]'>
                <FormField
                  control={form.control}
                  name='email'
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
                  type='submit'>
                  {t('Sign in')}
                </Button>
              </div>

              <div className='flex gap-[4px] justify-center'>
                <p className='text-title-text-color leading-[24px] text-[14px] font-bold'>
                  {t('Don’t have an account?')}
                </p>

                <Link
                  className='text-purple-800 text-[14px] leading-[24px] font-bold'
                  href={'/'}>
                  {t('Sign up')}
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default AuthScreen;

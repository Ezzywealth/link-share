// pages/register.js

import React from 'react';
import AuthLayout from '../components/Layouts/AuthLayout';
import PasswordIcon from '../components/svgs/login/PasswordIcon';
import EmailIcon from '../components/svgs/login/EmailIcon';
import Link from 'next/link';
import Logo from '../components/Logo';

const RegisterScreen = () => {
	return (
		<AuthLayout>
			<main className='bg-primary-bg-light flex justify-center items-center min-h-screen text-primary-text-color-light'>
				<section className='w-[420px] space-y-5'>
					<Logo />
					<div className='bg-primary-white-light px-8 py-4 rounded shadow-md w-[420px]'>
						<h2 className='text-2xl font-bold mb-1 text-dark-grey-color-light'>Create account</h2>
						<p>Let’s get you started sharing your links!</p>
						<form className='mt-8'>
							<div className='mb-5'>
								<label htmlFor='email' className='block text-xs font-normal mb-2 text-dark-grey-color-light'>
									Email Address
								</label>
								<div className='flex border rounded items-center px-2 gap-2 py-2'>
									<EmailIcon />
									<input type='email' id='email' className='w-full focus:outline-none focus:bg-none bg-none' required />
								</div>
							</div>
							<div className='mb-5'>
								<label htmlFor='password' className='block text-xs font-normal mb-2 text-dark-grey-color-light'>
									Create Password
								</label>
								<div className='flex border rounded items-center px-2 gap-2 py-2'>
									<PasswordIcon />
									<input type='password' id='password' className='w-full focus:outline-none bg-none' required />
								</div>
							</div>
							<div className='mb-6'>
								<label htmlFor='confirmPassword' className='block text-xs font-normal mb-2 text-dark-grey-color-light'>
									Confirm Password
								</label>
								<div className='flex border rounded items-center px-2 gap-2 py-2'>
									<PasswordIcon />
									<input type='password' id='confirmPassword' className='w-full focus:outline-none bg-none' required />
								</div>
							</div>
							<button type='submit' className='bg-primary-button-bg text-white py-2 px-4 rounded hover:bg-primary-button-bg focus:outline-none focus:shadow-outline-blue w-full'>
								Register
							</button>
						</form>
						<p className='mt-6 text-sm text-center'>
							Already have an account?{' '}
							<Link href='/login' className='text-primary-button-bg hover:underline'>
								Log In
							</Link>
						</p>
					</div>
				</section>
			</main>
		</AuthLayout>
	);
};

export default RegisterScreen;

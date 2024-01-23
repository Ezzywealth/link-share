import React from 'react';
import AuthLayout from '../components/Layouts/AuthLayout';
import PasswordIcon from '../components/svgs/login/PasswordIcon';
import EmailIcon from '../components/svgs/login/EmailIcon';
import Link from 'next/link';
import Logo from '../components/Logo';

const LoginScreen = () => {
	return (
		<AuthLayout>
			<main className='bg-primary-bg-light flex justify-center items-center min-h-screen text-primary-text-color-light'>
				<section className='w-[420px] space-y-7'>
					<Logo />
					<div className='bg-primary-white-light p-8 rounded shadow-md w-[420px]'>
						<h2 className='text-2xl font-bold mb-1 text-dark-grey-color-light'>Login</h2>
						<p>Add your details below to get back into the app</p>
						<form className='mt-6'>
							<div className='mb-5  '>
								<label htmlFor='email' className='block text-xs font-normal mb-2 text-dark-grey-color-light'>
									Email Address
								</label>
								<div className='flex border rounded items-center  px-2 gap-2 py-2'>
									<EmailIcon />
									<input type='email' id='' className='w-full  focus:outline-none focus:bg-none bg-none' required />
								</div>
							</div>
							<div className='mb-6'>
								<label htmlFor='password' className='block  text-xs font-normal mb-2 text-dark-grey-color-light'>
									Password
								</label>
								<div className='flex border rounded items-center  px-2 gap-2 py-2'>
									<PasswordIcon />
									<input type='password' id='' className='w-full   focus:outline-none none bg-none' required />
								</div>
							</div>
							<button type='submit' className='bg-primary-button-bg text-white py-2 px-4 rounded hover:bg-primary-button-bg focus:outline-none focus:shadow-outline-blue w-full'>
								Log In
							</button>
						</form>
						<p className='mt-6 text-sm text-center'>
							Don&apos;t have an account?{' '}
							<Link href='/register' className='text-primary-button-bg hover:underline'>
								Create account
							</Link>
						</p>
					</div>
				</section>
			</main>
		</AuthLayout>
	);
};

export default LoginScreen;

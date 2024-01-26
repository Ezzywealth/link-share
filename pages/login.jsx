import React from 'react';
import AuthLayout from '../components/Layouts/AuthLayout';
import PasswordIcon from '../components/svgs/login/PasswordIcon';
import EmailIcon from '../components/svgs/login/EmailIcon';
import Link from 'next/link';
import Logo from '../components/Logo';
import { useForm } from 'react-hook-form';
import { RotatingLines } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/slices/authSlice';

const LoginScreen = () => {
	const { loginLoading } = useSelector((state) => state.auth);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const dispatch = useDispatch();

	const handleLogin = async (data) => {
		dispatch(loginUser(data));
	};

	return (
		<AuthLayout>
			<main className=' flex justify-center px-4 items-center min-h-screen text-primary-text-color-light'>
				<section className='w-[420px] space-y-7'>
					<Logo />
					<div className='bg-primary-white-light p-4 md:p-8 rounded shadow-md w-full md:w-[420px]'>
						<h2 className='text-2xl font-bold mb-1 text-dark-grey-color-light'>Login</h2>
						<p>Add your details below to get back into the app</p>
						<form className='mt-6' onSubmit={handleSubmit(handleLogin)}>
							<div className='mb-5  '>
								<label htmlFor='email' className='block text-xs font-normal mb-2 text-dark-grey-color-light'>
									Email Address
								</label>
								<div className='flex border rounded items-center  px-2 gap-2 py-2'>
									<EmailIcon />
									<input
										disabled={loginLoading}
										{...register('email', {
											required: true,
											message: 'email is required',
											pattern: {
												value: /\S+@\S+\.\S+/,
												message: 'Entered value does not match email format',
											},
										})}
										type='email'
										id=''
										className='w-full  focus:outline-none focus:bg-none bg-none'
									/>
								</div>
								{errors?.email && <p className='text-xs text-red'>{errors?.email.message}</p>}
							</div>
							<div className='mb-6'>
								<label htmlFor='password' className='block  text-xs font-normal mb-2 text-dark-grey-color-light'>
									Password
								</label>
								<div className='flex border rounded items-center  px-2 gap-2 py-2'>
									<PasswordIcon />
									<input
										disabled={loginLoading}
										type='password'
										id='password'
										className='w-full focus:outline-none none bg-none'
										{...register('password', {
											required: 'password is required',
										})}
									/>
								</div>
								<p className='text-xs text-red-500'>{errors?.password && errors?.password?.message}</p>
							</div>
							<button disabled={loginLoading} type='submit' className='bg-primary-button-bg text-white py-2 px-4 rounded-md hover:bg-primary-button-bg focus:outline-none focus:shadow-outline-blue w-full flex justify-center items-center'>
								{loginLoading ? (
									<div>
										{' '}
										<RotatingLines visible={true} height='25' width='25' color='#fff' strokeWidth='5' animationDuration='0.75' ariaLabel='rotating-lines-loading' wrapperStyle={{}} wrapperClass='' />{' '}
									</div>
								) : (
									'Log in'
								)}
							</button>
						</form>
						<p className='mt-6 text-sm flex items-center flex-col md:flex-row justify-center text-center'>
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

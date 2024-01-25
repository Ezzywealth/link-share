import React from 'react';
import AuthLayout from '../components/Layouts/AuthLayout';
import PasswordIcon from '../components/svgs/login/PasswordIcon';
import EmailIcon from '../components/svgs/login/EmailIcon';
import Link from 'next/link';
import Logo from '../components/Logo';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Redux/slices/authSlice';
import { Bars, RotatingLines } from 'react-loader-spinner';

const RegisterScreen = () => {
	const router = useRouter();
	const { registrationLoading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const handleRegister = async (data) => {
		console.log(data);
		dispatch(registerUser(data));
		// router.push('/dashboard?page=links');
	};

	return (
		<AuthLayout>
			<main className=' flex justify-center px-4 items-center min-h-screen text-primary-text-color-light'>
				<section className='w-[420px] space-y-5'>
					<Logo />
					<div className='bg-primary-white-light md:px-8 px-4 py-4 rounded shadow-md w-full md:w-[420px]'>
						<h2 className='text-2xl font-bold mb-1 text-dark-grey-color-light'>Create account</h2>
						<p>Let’s get you started sharing your links!</p>
						<form className='mt-8' onSubmit={handleSubmit(handleRegister)}>
							<div className='mb-5'>
								<label htmlFor='email' className='block text-xs font-normal mb-2 text-dark-grey-color-light'>
									Email Address
								</label>
								<div className={`flex border rounded items-center px-2 gap-2 py-2 ${errors?.email ? 'border-red text-red' : 'border-primary-text-color-light text-dark-grey-color-light'}`}>
									<EmailIcon color={errors?.email ? '#FF3939' : '#737373'} />
									<input
										disabled={registrationLoading}
										type='email'
										id='email'
										className='w-full focus:outline-none focus:bg-none bg-none'
										{...register('email', {
											required: true,
											message: 'email is required',
											pattern: {
												value: /\S+@\S+\.\S+/,
												message: 'Entered value does not match email format',
											},
										})}
									/>
								</div>
								{errors?.email && <p className='text-xs text-red'>{errors?.email.message}</p>}
							</div>
							<div className='mb-5'>
								<label htmlFor='password' className='block text-xs font-normal mb-2 text-dark-grey-color-light'>
									Create Password
								</label>
								<div className={`flex border rounded items-center px-2 gap-2 py-2 ${errors?.password ? 'border-red text-red' : 'border-primary-text-color-light text-dark-grey-color-light'}`}>
									<PasswordIcon color={errors?.password ? '#FF3939' : '#737373'} />
									<input
										disabled={registrationLoading}
										type={showPassword ? 'text' : 'password'}
										id='password'
										className='w-full focus:outline-none bg-none'
										{...register('password', {
											required: 'password is required',
											pattern: {
												value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
												message: 'Password must be at least 8 characters long, contain at least 1 number and 1 letter',
											},
										})}
									/>
								</div>
								<p className='text-xs text-red-500'>{errors?.password && errors?.password?.message}</p>
							</div>
							<div className='mb-6'>
								<label htmlFor='confirmPassword' className='block text-xs font-normal mb-2 text-dark-grey-color-light'>
									Confirm Password
								</label>
								<div className={`flex border rounded items-center px-2 gap-2 py-2 ${errors?.confirmPassword ? 'border-red text-red' : 'border-primary-text-color-light text-dark-grey-color-light'}`}>
									<PasswordIcon color={errors?.confirmPassword ? '#FF3939' : '#737373'} />
									<input
										disabled={registrationLoading}
										type={showConfirmPassword ? 'text' : 'password'}
										id='confirmPassword'
										className='w-full focus:outline-none bg-none'
										{...register('confirmPassword', {
											required: 'confirm your password',
											validate: (value) => value === watch('password') || 'Passwords do not match',
										})}
									/>
								</div>
								<p className='text-xs text-red-500'>{errors?.confirmPassword && errors?.confirmPassword?.message}</p>
							</div>
							<button disabled={registrationLoading} type='submit' className='bg-primary-button-bg text-white py-2 px-4 rounded-md hover:bg-primary-button-bg focus:outline-none focus:shadow-outline-blue w-full flex justify-center items-center'>
								{registrationLoading ? (
									<div>
										{' '}
										<RotatingLines visible={true} height='25' width='25' color='#fff' strokeWidth='5' animationDuration='0.75' ariaLabel='rotating-lines-loading' wrapperStyle={{}} wrapperClass='' />{' '}
									</div>
								) : (
									'Register'
								)}
							</button>
						</form>
						<p className='mt-6 text-sm text-center flex flex-col md:flex-row items-center justify-center'>
							Already have an account?{' '}
							<Link href='/login' className='text-primary-button-bg hover:underline'>
								Login
							</Link>
						</p>
					</div>
				</section>
			</main>
		</AuthLayout>
	);
};

export default RegisterScreen;

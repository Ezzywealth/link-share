import { useSession } from 'next-auth/react';
import React from 'react';

const DetailsComponent = ({ register, updateUserLoading, email }) => {
	const { data: session } = useSession();
	return (
		<section className='my-8 p-4 md:p-6 bg-light-Grey space-y-4'>
			<div className=' items-center grid md:grid-cols-12  justify-between text-primary-text-color-light   gap-1  md:gap-8'>
				<p className='w-auto col-span-4'>First Name*</p>
				<input className='flex-1 col-span-8 border px-3 py-2 bg-primary-white-light rounded-md placeholder:text-xs focus:outline-none text-dark-grey-color-light focus:border-purple focus:ring-0 focus:shadow-purple focus:ring-purple' type='text' placeholder='Enter your name' {...register('firstName')} disabled={updateUserLoading} />
			</div>
			<div className='grid md:grid-cols-12 items-center  text-primary-text-color-light   gap-1  md:gap-8'>
				<p className=' w-auto col-span-4'>Last Name*</p>
				<input className='flex-1  border col-span-8 px-3 py-2 bg-primary-white-light rounded-md placeholder:text-xs focus:outline-none text-dark-grey-color-light focus:border-purple focus:ring-0 focus:shadow-purple focus:ring-purple' type='text' placeholder='Enter your bio' {...register('lastName')} disabled={updateUserLoading} />
			</div>
			<div className='items-center grid md:grid-cols-12  text-primary-text-color-light gap-1  md:gap-8'>
				<p className='w-auto col-span-4'>Email</p>
				<input className='flex-1 col-span-8 border px-3 py-2 bg-primary-white-light rounded-md placeholder:text-xs focus:outline-none text-dark-grey-color-light focus:border-purple focus:ring-0 focus:shadow-purple focus:ring-purple' type='text' placeholder='Enter your email' disabled defaultValue={email} />
			</div>
		</section>
	);
};

export default DetailsComponent;

import React from 'react';
import ImgUploader from './ImageUploader';

const ProfilePage = () => {
	return (
		<section className='col-span-4 bg-primary-white-light rounded-md p-6  overflow-auto'>
			<div>
				<h2 className='text-dark-grey-color-light font-bold text-2xl mb-2'>Profile Details</h2>
				<p className='text-primary-text-color-light mb-6'>Add your details to create a personal touch to your profile.</p>
			</div>
			<article className='flex items-center justify-between text-primary-text-color-light  bg-light-Grey p-6 gap-8'>
				<p className='w-auto'>Profile Picture</p>
				<div className='flex items-center gap-6'>
					<div className='bg-light-Purple flex flex-col rounded-lg justify-center items-center h-40 w-auto'>
						<ImgUploader />
					</div>
					<p className='text-xs w-full'>
						Image must be below 1024x1024px. <br /> Use PNG or JPG format.
					</p>
				</div>
			</article>
		</section>
	);
};

export default ProfilePage;

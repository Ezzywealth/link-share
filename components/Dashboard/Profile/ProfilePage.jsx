import React from 'react';
import ImgUploader from './ImageUploader';
import DetailsComponent from './DetailsComponent';

const ProfilePage = () => {
	return (
		<section className='col-span-7 lg:col-span-4 bg-primary-white-light rounded-md p-4 md:p-6  overflow-auto'>
			<div>
				<h2 className='text-dark-grey-color-light font-bold text-2xl mb-2'>Profile Details</h2>
				<p className='text-primary-text-color-light mb-6'>Add your details to create a personal touch to your profile.</p>
			</div>
			<article className='flex flex-col md:flex-row items-center justify-between text-primary-text-color-light  bg-light-Grey p-6 gap-8'>
				<p className='w-auto'>Profile Picture</p>
				<div className='flex flex-col md:flex-row items-center gap-6'>
					<div className='bg-light-Purple flex flex-col rounded-lg justify-center items-center  w-auto'>
						<ImgUploader />
					</div>
					<p className='text-xs w-full'>
						Image must be below 1024x1024px. <br /> Use PNG or JPG format.
					</p>
				</div>
			</article>
			<article>
				<DetailsComponent />
			</article>
			<hr />
			<section className='flex justify-end pt-4 w-full'>
				<button className={`bg-primary-button-bg w-full md:w-auto text-white px-6 py-2 rounded-md ${false ? 'opacity-100' : 'opacity-25'}`}>Save</button>
			</section>
		</section>
	);
};

export default ProfilePage;

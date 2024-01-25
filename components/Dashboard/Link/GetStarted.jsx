import React from 'react';
import GetStartedIcon from '../../svgs/Dashboard/GetStartedIcon';

const GetStarted = () => {
	return (
		<div className='bg-primary-bg-light  w-full h-[300px]'>
			<section className='flex justify-center items-center flex-col px-4 md:px-8 lg:px-10 xl:px-20 gap-4 h-full'>
				<GetStartedIcon />
				<h3 className='font-bold text-2xl text-dark-grey-color-light'>Let’s get you started</h3>
				<p className='text-primary-text-color-light text-center'>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
			</section>
		</div>
	);
};

export default GetStarted;

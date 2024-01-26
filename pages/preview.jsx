import React from 'react';
import PreviewNav from '../components/Navbar/PreviewNav';
import ProfileDisplay from '../components/Preview/ProfileDisplay';

const Preview = () => {
	return (
		<section className='relative md:bg-purple h-[35vh] max-w-screen w-full box-border md:rounded-b-[2rem] px-4 md:px-0 py-4'>
			<div className='md:px-4'>
				<PreviewNav />
			</div>
			<section className='w-full  md:absolute h-auto  flex box-border  md:top-1/2 justify-center'>
				<section className='w-[260px] py-4 mt-10 md:mt-4 rounded-xl bg-primary-white-light '>
					<ProfileDisplay />
				</section>
			</section>
		</section>
	);
};

export default Preview;

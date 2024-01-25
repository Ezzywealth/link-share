import React from 'react';
import PreviewNav from '../components/Navbar/PreviewNav';
import PhoneContent from '../components/Dashboard/PhoneBackground/PhoneContent';
import ProfileDisplay from '../components/Preview/ProfileDisplay';

const Preview = () => {
	return (
		<section className='relative md:bg-purple h-[35vh] w-full box-border md:rounded-b-[2rem] px-4 py-4'>
			<PreviewNav />
			<section className='w-full  md:absolute  flex box-border  md:top-1/2 justify-center'>
				<section className='w-[300px] py-4 mt-10 md:mt-4 rounded-lg bg-primary-white-light '>
					<ProfileDisplay />
				</section>
			</section>
		</section>
	);
};

export default Preview;

import React, { useState } from 'react';
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import Phonebg from '../../components/svgs/Dashboard/Phonebg';
import PhoneContent from '../../components/Dashboard/PhoneContent';
import GetStarted from '../../components/Dashboard/GetStarted';

const Links = () => {
	const [active, setActive] = useState(false);
	return (
		<DashboardLayout>
			<main className='grid grid-cols-7 gap-6 mt-4'>
				<section className='rounded-md col-span-3 flex justify-center py-6 px-8 items-center bg-primary-white-light'>
					<article className='border relative border-dark-border-color rounded-[40px] p-2 py-4 flex justify-center items-center'>
						<section className='relative'>
							<Phonebg />
							<PhoneContent />
						</section>
					</article>
				</section>
				<section className='col-span-4 bg-primary-white-light rounded-md p-6'>
					<h2 className='text-dark-grey-color-light font-bold text-2xl mb-2'>Customize your links</h2>
					<p className='text-primary-text-color-light mb-6'>Add/edit/remove links below and then share all your profiles with the world!</p>
					<button className='border border-primary-button-bg font-[600] rounded-md py-1 text-primary-button-bg bg-primary-white-light flex items-center justify-center w-full'>+ Add new link</button>
					<section className='mt-4 divide-y space-y-4'>
						<GetStarted />
						<section className='flex justify-end pt-4'>
							<button className={`bg-primary-button-bg text-white px-6 py-2 rounded-md ${active ? 'opacity-100' : 'opacity-25'}`}>Save</button>
						</section>
					</section>
				</section>
			</main>
		</DashboardLayout>
	);
};

export default Links;

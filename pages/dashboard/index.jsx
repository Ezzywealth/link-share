import React, { useState } from 'react';
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import Phonebg from '../../components/svgs/Dashboard/Phonebg';
import PhoneContent from '../../components/Dashboard/PhoneContent';
import useDashboardHook from '../../components/Dashboard/hooks/useDashboardHook';
import { useRouter } from 'next/router';
import LinksPage from '../../components/Dashboard/LinksPage';
import { useSearchParams } from 'next/navigation';
import ProfilePage from '../../components/Dashboard/ProfilePage';

const Dashboard = () => {
	const params = useSearchParams();
	const page = params.get('page');

	return (
		<DashboardLayout>
			<main className='grid grid-cols-7 gap-6 mt-4'>
				<section className='rounded-md col-span-3 flex justify-center py-6 px-8 items-center bg-primary-white-light '>
					<article className='border relative border-dark-border-color rounded-[40px] p-2 py-4 flex justify-center items-center'>
						<section className='relative'>
							<Phonebg />
							<PhoneContent />
						</section>
					</article>
				</section>
				{page === 'links' && <LinksPage />}
				{page === 'profile' && <ProfilePage />}
			</main>
		</DashboardLayout>
	);
};

export default Dashboard;

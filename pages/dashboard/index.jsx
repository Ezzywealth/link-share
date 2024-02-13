import React, { useState } from 'react';
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import { useSearchParams } from 'next/navigation';
import LinksPage from '../../components/Dashboard/Link/LinksPage';
import ProfilePage from '../../components/Dashboard/Profile/ProfilePage';
import PhoneContent from '../../components/Dashboard/PhoneBackground/PhoneContent';
import Phonebg from '../../components/svgs/Dashboard/Phonebg';
import Head from 'next/head';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
	const params = useSearchParams();
	const page = params.get('page');
	const { data: session } = useSession();

	console.log(session);
	return (
		<DashboardLayout>
			<Head>
				<title>Dashboard</title>
			</Head>
			<main className='grid grid-cols-7 gap-6 mt-4 overflow-auto'>
				<section className='rounded-md col-span-3 hidden  lg:flex justify-center py-1 px-8 items-center bg-primary-white-light '>
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

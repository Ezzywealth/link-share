import Head from 'next/head';
import AuthLayout from '../components/Layouts/AuthLayout';
import { useState, useEffect, useLayoutEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Home = () => {
	const router = useRouter();
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <h2>loading.....</h2>;
	}

	if (status === 'authenticated') {
		router.push('/dashboard?page=links');
	}

	if (status === 'unauthenticated') {
		router.push('/login');
	}

	return (
		<AuthLayout>
			<Head>
				<title>DevLinks</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
		</AuthLayout>
	);
};
export default Home;

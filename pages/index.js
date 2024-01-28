import Head from 'next/head';
import AuthLayout from '../components/Layouts/AuthLayout';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import SaveSpinner from '../components/LoadingSpinners/SaveSpinner';


const Home = () => {
	const router = useRouter();
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <section className='h-screen bg-primary-bg-light w-full flex justify-center items-center'>
			<SaveSpinner/>
		</section>;
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

import Head from 'next/head';
import AuthLayout from '../components/Layouts/AuthLayout';
export default function Home() {
	return (
		<AuthLayout>
			<Head>
				<title>Ezzy Links</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h2>This is the homepage</h2>
		</AuthLayout>
	);
}

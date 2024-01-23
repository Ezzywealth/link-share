import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const AuthLayout = ({ children }) => {
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		console.log(session);
		if (session?.email) {
			router.push('/dashboard');
		} else {
			router.push('/login');
		}
	}, [session]);

	return <div>{children}</div>;
};

export default AuthLayout;

import React from 'react';
import AuthLayout from './AuthLayout';
import Nav from '../Navbar/Nav';

const DashboardLayout = ({ children }) => {
	return (
		<>
			<AuthLayout>
				<Nav />
				{children}
			</AuthLayout>
		</>
	);
};

export default DashboardLayout;

// components/OfflineFallback.js
import React from 'react';

const Offline = () => {
	return (
		<div className='flex items-center justify-center h-screen bg-primary-bg-light text-dark-grey-color-light'>
			<div className='text-center'>
				<h1 className='text-4xl font-bold mb-4'>You are offline</h1>
				<p className='text-lg'>Please check your internet connection and try again.</p>
			</div>
		</div>
	);
};

export default Offline;

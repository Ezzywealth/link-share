import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
const PreviewNav = () => {
	const router = useRouter();

	return (
		<nav className='flex justify-between h-auto items-center gap-4 bg-primary-white-light w-full md:px-4 py-2 rounded-lg'>
			<button onClick={() => router.back()} className='border  border-primary-button-bg font-[600] rounded-md py-3 md:py-2 text-primary-button-bg bg-primary-white-light  md:w-auto flex items-center justify-center w-full px-4 text-sm'>
				Back to Editor
			</button>

			<button className='border border-primary-button-bg font-[600] rounded-md py-3 md:py-2 bg-primary-button-bg text-primary-white-light flex items-center justify-center w-full md:w-auto px-4 text-sm'>Share Link</button>
		</nav>
	);
};

export default PreviewNav;

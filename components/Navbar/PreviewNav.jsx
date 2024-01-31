import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toggleUpdateLink } from '../../Redux/slices/helperSlice';
const PreviewNav = () => {
	const { updatingLink } = useSelector((state) => state.helper);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleUpdate = () => {
		dispatch(toggleUpdateLink(true));
	};

	const handleSave = () => {
		dispatch(toggleUpdateLink(false));
	};

	return (
		<nav className='flex justify-between h-auto items-center gap-4 bg-primary-white-light w-full px-4 py-3 rounded-lg'>
			<button onClick={() => router.back()} className='border  border-primary-button-bg font-[600] rounded-md py-1 md:py-2 text-primary-button-bg bg-primary-white-light   flex items-center justify-center w-auto md:w-[130px] px-2.5 md:px-4 text-sm'>
				Back to Editor
			</button>
			{updatingLink ? (
				<button onClick={handleSave} className='border border-primary-button-bg font-[600] rounded-md py-1 md:py-2 bg-primary-button-bg text-primary-white-light flex items-center justify-center w-auto md:w-[130px] px-2 text-sm'>
					Save Changes
				</button>
			) : (
				<button onClick={handleUpdate} className='border border-primary-button-bg font-[600] rounded-md py-1 md:py-2 bg-primary-button-bg text-primary-white-light flex items-center justify-center w-auto md:w-[120px] px-2.5 md:px-4 text-sm'>
					Update Links
				</button>
			)}
		</nav>
	);
};

export default PreviewNav;

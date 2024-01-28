import React, { useState, useEffect } from 'react';
import ChangesIcon from './svgs/ChangesIcon';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChangesModal } from '../../Redux/slices/userSlice';

const AddLinkModal = () => {
	const dispatch = useDispatch();
	const { showAddLinkModal, saveLinkMessage } = useSelector((state) => state.helper);
	const [timer, setTimer] = useState(3);

	useEffect(() => {
		setTimeout(() => {
			if (timer === 0) {
				setTimer(2);
				dispatch(toggleChangesModal(false));
				return;
			}
			if (showChangesAlert) {
				setTimer((prev) => prev - 1);
			}
		}, 2000);
	}, [timer, showChangesAlert]);

	return (
		<section className={`fixed bottom-8 z-[10000] left-0 right-0 w-full flex justify-center ${showAddLinkModal ? 'block' : 'hidden'}`}>
			<section className='flex items-center px-4 py-2 bg-dark-grey-color-light w-auto text-light-Grey rounded-lg '>
				<ChangesIcon />
				<p className=' text-sm ml-2'>{saveLinkMessage}</p>
			</section>
		</section>
	);
};

export default AddLinkModal;

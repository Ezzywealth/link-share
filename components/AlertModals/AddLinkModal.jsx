import React, { useState, useEffect } from 'react';
import ChangesIcon from './svgs/ChangesIcon';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddLinkModal } from '../../Redux/slices/helperSlice';

const AddLinkModal = () => {
	const dispatch = useDispatch();
	const { showAddLinkModal, saveLinksMessage } = useSelector((state) => state.helper);
	const [timer, setTimer] = useState(3);

	useEffect(() => {
		setTimeout(() => {
			if (timer === 0) {
				setTimer(2);
				dispatch(toggleAddLinkModal(false));
				return;
			}
			if (showAddLinkModal) {
				setTimer((prev) => prev - 1);
			}
		}, 2000);
	}, [timer, showAddLinkModal]);

	return (
		<section className={`fixed bottom-8 z-[10000] left-0 right-0 w-full flex justify-center ${showAddLinkModal ? 'block showModal ' : 'hidden'}`}>
			<section className='flex items-center px-4 py-2 bg-dark-grey-color-light w-auto text-light-Grey rounded-lg '>
				<ChangesIcon />
				<p className=' text-sm ml-2'>{saveLinksMessage}</p>
			</section>
		</section>
	);
};

export default AddLinkModal;

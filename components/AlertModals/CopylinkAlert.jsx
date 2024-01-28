import React, { useState, useEffect } from 'react';
import LinkIcon from '../svgs/Nav/LinkIcon';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCopyModal } from '../../Redux/slices/alertSlice';

const CopylinkAlert = () => {
	const dispatch = useDispatch();
	const { showCopyAlert } = useSelector((state) => state.alert);
	const [timer, setTimer] = useState(2);

	useEffect(() => {
		setTimeout(() => {
			if (timer === 0) {
				setTimer(2);
				dispatch(toggleCopyModal(false));
				return;
			}
			if (showCopyAlert) {
				setTimer((prev) => prev - 1);
			}
		}, 2000);
	}, [timer, showCopyAlert]);

	return (
		<section className={`fixed bottom-8 z-[10000] left-0 right-0 w-full flex justify-center ${showCopyAlert ? 'block' : 'hidden'}`}>
			<section className='flex items-center px-4 py-2 bg-dark-grey-color-light w-auto text-light-Grey rounded-lg '>
				<LinkIcon />
				<p className='text-sm ml-2'>The link has been copied to your clipboard!</p>
			</section>
		</section>
	);
};

export default CopylinkAlert;

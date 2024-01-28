import React, { useState, useEffect } from 'react';
import ArrowRightIcon from '../../svgs/Dashboard/ArrowRightIcon';
import { displayLinks } from '../../../utils/linksData';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCopyModal } from '../../../Redux/slices/alertSlice';

const SingleLink = ({ link }) => {
	const [linkLabel, setLinkLabel] = useState(null);
	const dispatch = useDispatch();
	useEffect(() => {
		// a useEffect hook to set the link label from the displayLinks array in the utils folder
		const label = displayLinks.find((item) => item?.value?.toLowerCase() === link?.name?.toLowerCase());
		setLinkLabel(label);
	}, [link]);

	// handle copy to clipboard
	const handleLinkCopy = (link) => {
		navigator.clipboard.writeText(link);
		dispatch(toggleCopyModal(true));
	};

	return (
		<li onClick={() => handleLinkCopy(link.address)} className={`${link?.id ? `bg-[${link?.color}]` : 'bg-profile-image-bg'} px-2 text-primary-white-light font-semibold rounded-lg h-10 w-full border cursor-copy`} style={{ background: link?.color }}>
			<section  className='flex justify-between items-center  text-base h-full capitalize'>
				<span>{linkLabel?.label}</span>
				<ArrowRightIcon color={linkLabel?.color === '#fff' ? '#333' : '#fff'} />
			</section>
		</li>
	);
};

export default SingleLink;

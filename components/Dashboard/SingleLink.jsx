import React, { useState, useEffect } from 'react';
import ArrowRightIcon from '../svgs/Dashboard/ArrowRightIcon';
import { displayLinks } from '../../utils/linksData';
import Link from 'next/link';

const SingleLink = ({ link }) => {
	const [linkLabel, setLinkLabel] = useState(null);

	useEffect(() => {
		// a useEffect hook to set the link label from the displayLinks array in the utils folder
		const label = displayLinks.find((item) => item?.value?.toLowerCase() === link?.name?.toLowerCase());
		setLinkLabel(label);
	}, [link]);

	return (
		<li className={`${link?.id ? `bg-[${link?.color}]` : 'bg-profile-image-bg'} px-2 text-primary-white-light font-semibold rounded-lg h-8 w-full border`} style={{ background: link?.color }}>
			<Link href={link?.address} className='flex justify-between items-center  text-sm h-full capitalize'>
				<span>{linkLabel?.label}</span>
				<ArrowRightIcon color={linkLabel?.color === '#fff' ? '#333' : '#fff'} />
			</Link>
		</li>
	);
};

export default SingleLink;

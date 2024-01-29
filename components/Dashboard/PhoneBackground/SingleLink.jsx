import React, { useState, useEffect } from 'react';
import { displayLinks } from '../../../utils/linksData';
import { MdContentCopy, MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCopyModal } from '../../../Redux/slices/alertSlice';
import { deleteLinkWithId } from '../../../Redux/slices/helperSlice';
import { RotatingLines, TailSpin } from 'react-loader-spinner';
import { usePathname } from 'next/navigation';
const SingleLink = ({ link }) => {
	const pathname = usePathname();
	const [linkLabel, setLinkLabel] = useState(null);
	const [activeLinkId, setActiveLinkId] = useState(null);
	const { updatingLink, deletingLink } = useSelector((state) => state.helper);
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

	// handle delete link using the link id
	const handleDeleteLink = (id) => {
		setActiveLinkId(id);
		console.log('delete link');
		console.log(id);
		dispatch(deleteLinkWithId(id));
	};

	console.log(pathname);

	return (
		<li className={`${link?.id ? `bg-[${link?.color}]` : 'bg-profile-image-bg '} px-2 text-primary-white-light font-semibold rounded-lg h-10 w-full border`} style={{ background: link?.color }}>
			<section className='flex justify-between items-center  text-base h-full capitalize'>
				<span>{linkLabel?.label}</span>
				{updatingLink && pathname === '/preview' ? (
					deletingLink && activeLinkId === link?._id ? (
						<TailSpin visible={true} height='15' width='15' color={linkLabel?.color === '#fff' ? '#333' : '#fff'} ariaLabel='tail-spin-loading' radius='1' wrapperStyle={{}} wrapperClass='' />
					) : (
						<MdDelete onClick={() => handleDeleteLink(link?._id)} color={linkLabel?.color === '#fff' ? '#333' : '#fff'} className='cursor-pointer' />
					)
				) : (
					<MdContentCopy onClick={() => handleLinkCopy(link.address)} color={linkLabel?.color === '#fff' ? '#333' : '#fff'} className=' cursor-copy' />
				)}
			</section>
		</li>
	);
};

export default SingleLink;

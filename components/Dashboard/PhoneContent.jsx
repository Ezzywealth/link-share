import Image from 'next/image';
import React, { useState } from 'react';
import LinksContainer from './LinksContainer';

const PhoneContent = () => {
	const [imageUrl, setImageUrl] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	return (
		<div className='absolute top-0 left-0 right-0 z-50 flex justify-center items-center h-full w-full '>
			<div className='flex px-6 flex-col justify-between  gap-10 w-full'>
				<section className='space-y-4 flex w-full px-4  flex-col items-center'>
					<div className='flex flex-col justify-center items-center rounded-full h-24 w-24 bg-profile-image-bg'>{imageUrl && <Image src={imageUrl} alt='profile-image' />}</div>
					<p className='flex flex-col justify-center items-center rounded-lg h-4 w-full bg-profile-image-bg'>{name && name}</p>
					<p className='flex flex-col  justify-center items-center rounded-lg h-2 w-20 bg-profile-image-bg'>{name && email}</p>
				</section>
				<LinksContainer />
			</div>
		</div>
	);
};

export default PhoneContent;

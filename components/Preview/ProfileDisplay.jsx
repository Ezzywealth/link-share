import React, { useState } from 'react';
import LinksContainer from '../Dashboard/PhoneBackground/LinksContainer';
import Image from 'next/image';

const ProfileDisplay = () => {
	const [imageUrl, setImageUrl] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	return (
		<div className='flex md:shadow-lg px-6 flex-col justify-between  gap-10 w-full'>
			<section className='space-y-4 flex w-full px-4  flex-col items-center'>
				<div className='flex flex-col justify-center items-center rounded-full h-24 w-24 bg-profile-image-bg'>{imageUrl && <Image src={imageUrl} alt='profile-image' />}</div>
				<p className='flex flex-col justify-center items-center rounded-lg h-4 w-full bg-profile-image-bg'>{name && name}</p>
				<p className='flex flex-col  justify-center items-center rounded-lg h-2 w-20 bg-profile-image-bg'>{name && email}</p>
			</section>
			<LinksContainer />
		</div>
	);
};

export default ProfileDisplay;

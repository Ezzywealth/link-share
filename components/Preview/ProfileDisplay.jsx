import React, { useState } from 'react';
import LinksContainer from '../Dashboard/PhoneBackground/LinksContainer';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const ProfileDisplay = () => {
	const { user } = useSelector((state) => state.user);
	return (
		<div className='flex md:shadow-lg px-6 box-border py-4 rounded-xl flex-col justify-between  gap-10 w-full'>
			<section className='space-y-4 flex w-full px-4  flex-col items-center'>
				<div className={`flex flex-col justify-center items-center rounded-full h-24 w-24 ${!user?.image && 'bg-profile-image-bg'}`}>{user?.image && <Image src={user?.image} alt='profile-image' />}</div>
				<p className={`flex flex-col justify-center text-dark-grey-color-light text-xl items-center rounded-lg h-4 w-full font-bold ${!user?.firstName && 'bg-profile-image-bg'}`}>{(user?.firstName || user?.lastName) && `${user?.firstName} ${user?.lastName}`}</p>
				<p className={`flex flex-col text-primary-text-color-light text-sm  justify-center items-center rounded-lg h-3 w-20 ${!user?.email && 'bg-profile-image-bg'}`}>{user?.email && user?.email}</p>
			</section>
			<LinksContainer />
		</div>
	);
};

export default ProfileDisplay;

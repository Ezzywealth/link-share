import React, { useState } from 'react';
import LinksContainer from '../Dashboard/PhoneBackground/LinksContainer';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const ProfileDisplay = () => {
	const { user, userLoading } = useSelector((state) => state.user);
	const [loadingImage, setLoadingImage] = useState(true);

	// construct the fullname from the user firstname and lastname
	const fullName = `${user?.firstName ? user?.firstName : ''} ${user?.lastName ? user?.lastName : ''}`;
	return (
		<div className='flex md:shadow-lg px-6 box-border py-4 rounded-xl flex-col justify-between  gap-10 w-full'>
			<section className='space-y-4 flex w-full px-4  flex-col items-center'>
				<div className={`block relative rounded-full h-[100px] w-[100px]  ${!user?.image && 'bg-profile-image-bg '} ${userLoading && 'shimmer'}`}>{user?.image && <Image src={user?.image} alt='profile-image' layout='fill' className={`rounded-full ${loadingImage ? 'shimmer' : ''}`} onLoadingComplete={() => setLoadingImage(false)} />}</div>
				<p className={`flex-nowrap flex flex-col justify-center text-dark-grey-color-light text-lg items-center rounded-lg h-4 w-full font-bold ${!user?.firstName && 'bg-profile-image-bg'}  ${userLoading && 'shimmer'}`}>{fullName?.length > 20 ? `${fullName.slice(0, 14)}...` : fullName}</p>
				<p className={`flex flex-col text-primary-text-color-light text-sm  justify-center items-center rounded-lg h-2 w-20 ${!user?.email && 'bg-profile-image-bg'}  ${userLoading && 'shimmer'}`}>{user?.email && user?.email}</p>
			</section>
			<LinksContainer />
		</div>
	);
};

export default ProfileDisplay;

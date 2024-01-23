import React from 'react';

const LinksContainer = () => {
	return (
		<ul className='w-full space-y-2 h-[180px] overflow-auto'>
			{Array.from({ length: 5 }).map((link, index) => (
				<li key={index} className='bg-profile-image-bg rounded-lg h-8 w-full border'></li>
			))}
		</ul>
	);
};

export default LinksContainer;

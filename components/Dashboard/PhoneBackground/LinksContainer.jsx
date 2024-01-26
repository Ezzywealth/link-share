import React from 'react';
import { useSelector } from 'react-redux';
import SingleLink from './SingleLink';

const LinksContainer = () => {
	const { allLinks } = useSelector((state) => state.helper);
	return (
		<ul className='w-full space-y-2 h-[200px] overflow-auto'>
			<>
				{allLinks.length > 0 ? (
					<>
						{allLinks.map((link, index) => (
							<SingleLink key={index} link={link} />
						))}
					</>
				) : (
					<>
						{Array.from({ length: 4 }).map((_, index) => (
							<li key={index} className='bg-primary-bg-light py-2 px-2 text-primary-white-light font-semibold rounded-lg h-10 w-full border'></li>
						))}
					</>
				)}
			</>
			{/* <>
						{Array.from({ length: 5 }).map((_, index) => (
							<li key={index} className='bg-primary-bg-light px-2 text-primary-white-light font-semibold rounded-lg h-8 w-full border'></li>
						))}
					</> */}
		</ul>
	);
};

export default LinksContainer;

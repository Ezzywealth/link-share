import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleLink from './SingleLink';
import useModalHooks from '../hooks/useModalHooks';

const LinksContainer = () => {
	const { allLinks } = useSelector((state) => state.helper);
	const dispatch = useDispatch();

	return (
		<ul className='w-full space-y-2 h-[250px] overflow-auto'>
			<>
				{allLinks.length > 0 ? (
					<>
						{allLinks.map((link, index) => (
							<SingleLink key={index} link={link} />
						))}
						<>{allLinks.length < 5 && Array.from({ length: 5 - allLinks.length }).map((_, index) => <li key={index} className='bg-primary-bg-light py-2 px-2 text-primary-white-light font-semibold rounded-lg h-10 w-full border'></li>)}</>
					</>
				) : (
					<>
						{Array.from({ length: 5 }).map((_, index) => (
							<li  key={index} className='bg-primary-bg-light py-2 px-2 text-primary-white-light font-semibold rounded-lg h-10 w-full border cursor-copy'></li>
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

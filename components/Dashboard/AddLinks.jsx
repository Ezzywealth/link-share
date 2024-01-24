import React, { useState } from 'react';
import useDashboardHook from './hooks/useDashboardHook';
import LinkCard from './LinkCard';

const AddLinks = () => {
	const { noOfLinks, newLinks } = useDashboardHook();
	console.log(newLinks);
	return (
		<ul className='space-y-4'>
			{newLinks.map((link, i) => (
				<LinkCard key={i} i={i + 1} link={link} />
			))}
		</ul>
	);
};

export default AddLinks;

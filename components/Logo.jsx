import React from 'react';
import LogoIcon from './svgs/login/Shared/LogoIcon';
import DevLinkIcon from './svgs/login/Shared/DevLinkIcon';

const Logo = () => {
	return (
		<div className='flex gap-1  items-center justify-center'>
			<LogoIcon />
			<DevLinkIcon />
		</div>
	);
};

export default Logo;

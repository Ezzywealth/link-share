import React from 'react';
import LogoIcon from './svgs/login/Shared/LogoIcon';
import DevLinkIcon from './svgs/login/Shared/DevLinkIcon';

const Logo = ({width,height,logoWidth, logoHeight}) => {
	return (
		<div className='flex gap-1  items-center justify-center'>
			<LogoIcon  logoWidth={logoWidth} logoHeight={logoHeight}/>
			<DevLinkIcon width={width} height={height} />
		</div>
	);
};

export default Logo;

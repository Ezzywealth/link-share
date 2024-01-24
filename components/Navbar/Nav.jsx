import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import LinkIcon from '../svgs/Nav/LinkIcon';
import ProfileIcon from '../svgs/Nav/ProfileIcon';

const Nav = () => {
	return (
		<nav className='flex items-center justify-between bg-primary-white-light px-4 py-2 rounded-lg'>
			<section>
				<Logo width='70' height='15' logoWidth='25' logoHeight='25'/>
			</section>
			<ul className='flex items-center gap-4'>
				<li className='flex items-center gap-1'>
					<LinkIcon />
					<Link href='/dashboard?page=links'>Links</Link>
				</li>
				<li className='flex items-center gap-1'>
					<ProfileIcon />
					<Link href='/dashboard?page=profile'>Profile Details</Link>
				</li>
			</ul>
			<section>
				<button>Preview</button>
			</section>
		</nav>
	);
};

export default Nav;

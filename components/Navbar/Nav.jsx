import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import LinkIcon from '../svgs/Nav/LinkIcon';
import ProfileIcon from '../svgs/Nav/ProfileIcon';
import { useSearchParams } from 'next/navigation';

const Nav = () => {
	const params = useSearchParams();
	const page = params.get('page');
	return (
		<nav className='flex items-center justify-between bg-primary-white-light px-4 py-4 rounded-lg'>
			<section>
				<Logo width='70' height='15' logoWidth='25' logoHeight='25' />
			</section>
			<ul className='flex items-center gap-4 font-semibold'>
				<Link href='/dashboard?page=links'>
					<li className={`flex px-2 md:px-4 py-1 rounded-md items-center gap-1 ${page === 'links' ? 'text-primary-button-bg bg-active-nav-bg' : 'text-dark-grey-color-light'}`}>
						<LinkIcon color={page === 'links' ? '#633CFF' : '#737373'} />
						<p className='hidden md:contents'>Links</p>
					</li>
				</Link>
				<Link href='/dashboard?page=profile'>
					<li className={`flex px-2 md:px-4 py-1 rounded-md items-center gap-1 ${page === 'profile' ? 'text-primary-button-bg bg-active-nav-bg' : 'text-dark-grey-color-light'}`}>
						<ProfileIcon color={page === 'profile' ? '#633CFF' : '#737373'} />
						<p className='hidden md:contents'>Profile Details</p>
					</li>
				</Link>
			</ul>
			<section>
				<Link href='/preview'>
					<button className='border border-primary-button-bg font-[600] rounded-md py-1 text-primary-button-bg bg-primary-white-light flex items-center justify-center w-full px-4 text-sm'>Preview</button>
				</Link>
			</section>
		</nav>
	);
};

export default Nav;

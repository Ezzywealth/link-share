import CodepenIcon from '../components/svgs/Links/CodepenIcon';
import CodewarsIcon from '../components/svgs/Links/CodewarsIcon';
import DevToIcon from '../components/svgs/Links/DevToIcon';
import FacebookIcon from '../components/svgs/Links/FacebookIcon';
import FreecodeCampIcon from '../components/svgs/Links/FreecodeCampIcon';
import FrontendMentor from '../components/svgs/Links/FrontendMentor';
import GithubIcon from '../components/svgs/Links/GithubIcon';
import GitlabIcon from '../components/svgs/Links/GitlabIcon';
import HashnodeIcon from '../components/svgs/Links/HashnodeIcon';
import LinkedInIcon from '../components/svgs/Links/LinkedInIcon';
import StackoverflowIcon from '../components/svgs/Links/StackoverflowIcon';
import TwitchIcon from '../components/svgs/Links/TwitchIcon';
import TwitterIcon from '../components/svgs/Links/TwitterIcon';
import YoutubeIcon from '../components/svgs/Links/YoutubeIcon';

export const linksOptions = [
	{
		id: 1,
		color: '#1A1A1A',
		value: 'github',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<GithubIcon /> Github
			</span>
		),
	},
	{
		id: 2,
		color: '#fff',
		value: 'Frontend Mentors',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<FrontendMentor />
				Frontend Mentors
			</span>
		),
	},
	{
		id: 3,
		color: '#43B7E9',
		value: 'Twitter',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<TwitterIcon />
				Twitter
			</span>
		),
	},
	{
		id: 4,
		color: '#2D68FF',
		value: 'Linkedin',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<LinkedInIcon />
				Linkedin
			</span>
		),
	},
	{
		id: 5,
		color: '#EE3939',
		value: 'Youtube',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<YoutubeIcon />
				Youtube
			</span>
		),
	},
	{
		id: 6,
		color: '#2442AC',
		value: 'Facebook',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<FacebookIcon />
				Facebook
			</span>
		),
	},
	{
		id: 7,
		color: '#EE3FC8',
		value: 'Twitch',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<TwitchIcon /> Twitch
			</span>
		),
	},
	{
		id: 8,
		color: '#333',
		value: 'Dev.to',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<DevToIcon /> Dev.to
			</span>
		),
	},
	{
		id: 9,
		color: '#8A1A50',
		value: 'Codewars',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<CodewarsIcon /> Codewars
			</span>
		),
	},
	{
		id: 10,
		color: '#8A1A50',
		value: 'Codepen',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<CodepenIcon />
				Codepen
			</span>
		),
	},
	{
		id: 11,
		color: '#302267',
		value: 'FreeCodeCamp',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<FreecodeCampIcon />
				FreeCodeCamp
			</span>
		),
	},
	{
		id: 12,
		color: '#EB4925',
		value: 'Gitlab',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<GitlabIcon />
				Gitlab
			</span>
		),
	},
	{
		id: 13,
		color: '#0330D1',
		value: 'HashNode',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<HashnodeIcon />
				HashNode
			</span>
		),
	},
	{
		id: 14,
		color: '#EC7100',
		value: 'Stachoverflow',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<StackoverflowIcon />
				Stachoverflow
			</span>
		),
	},
];

export const displayLinks = [
	{
		id: 1,
		color: '#1A1A1A',
		value: 'github',
		label: (
			<span className='flex items-center gap-2 '>
				<GithubIcon color='#fff' /> Github
			</span>
		),
	},
	{
		id: 2,
		color: '#fff',
		value: 'Frontend Mentors',
		label: (
			<span className='flex items-center gap-2 text-dark-grey-color-light'>
				<FrontendMentor color='#333' />
				Frontend Mentors
			</span>
		),
	},
	{
		id: 3,
		color: '#43B7E9',
		value: 'Twitter',
		label: (
			<span className='flex items-center gap-2 '>
				<TwitterIcon color='#fff' />
				Twitter
			</span>
		),
	},
	{
		id: 4,
		color: '#2D68FF',
		value: 'Linkedin',
		label: (
			<span className='flex items-center gap-2 '>
				<LinkedInIcon color='#fff' />
				Linkedin
			</span>
		),
	},
	{
		id: 5,
		color: '#EE3939',
		value: 'Youtube',
		label: (
			<span className='flex items-center gap-2 '>
				<YoutubeIcon color='#fff' />
				Youtube
			</span>
		),
	},
	{
		id: 6,
		color: '#2442AC',
		value: 'Facebook',
		label: (
			<span className='flex items-center gap-2 '>
				<FacebookIcon color='#fff' />
				Facebook
			</span>
		),
	},
	{
		id: 7,
		color: '#EE3FC8',
		value: 'Twitch',
		label: (
			<span className='flex items-center gap-2 '>
				<TwitchIcon color='#fff' /> Twitch
			</span>
		),
	},
	{
		id: 8,
		color: '#333',
		value: 'Dev.to',
		label: (
			<span className='flex items-center gap-2 '>
				<DevToIcon color='#fff' /> Dev.to
			</span>
		),
	},
	{
		id: 9,
		color: '#8A1A50',
		value: 'Codewars',
		label: (
			<span className='flex items-center gap-2 '>
				<CodewarsIcon color='#fff' /> Codewars
			</span>
		),
	},
	{
		id: 10,
		color: '#8A1A50',
		value: 'Codepen',
		label: (
			<span className='flex items-center gap-2 '>
				<CodepenIcon color='#fff' />
				Codepen
			</span>
		),
	},
	{
		id: 11,
		color: '#302267',
		value: 'FreeCodeCamp',
		label: (
			<span className='flex items-center gap-2 '>
				<FreecodeCampIcon color='#fff' />
				FreeCodeCamp
			</span>
		),
	},
	{
		id: 12,
		color: '#EB4925',
		value: 'Gitlab',
		label: (
			<span className='flex items-center gap-2 '>
				<GitlabIcon color='#fff' />
				Gitlab
			</span>
		),
	},
	{
		id: 13,
		color: '#0330D1',
		value: 'HashNode',
		label: (
			<span className='flex items-center gap-2 '>
				<HashnodeIcon color='#fff' />
				HashNode
			</span>
		),
	},
	{
		id: 14,
		color: '#EC7100',
		value: 'Stachoverflow',
		label: (
			<span className='flex items-center gap-2 '>
				<StackoverflowIcon color='#fff' />
				Stachoverflow
			</span>
		),
	},
];

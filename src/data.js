import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
	links: [
		// {
		// 	text: 'About',
		// 	href: '#',
		// },
		{
			text: 'Servicii',
			href: '/#services',
		},
		{
			text: 'Componente',
			href: '/#elements',
		},
		{
			text: 'Portofoliu',
			href: '/#portofolio',
		},
		{
			text: 'Contact',
			href: '/#contact',
		},
		{
			text: 'Proiect Por 2014-2020',
			href: getPermalink('/landing/por')
		},
		// {
		// 	text: 'Blog',
		// 	href: getBlogPermalink(),
		// },
	],
	actions: [
		{ type: 'button', text: 'Action', href: 'https://github.com/onwidget/astrowind' }
	],
};

export const footerData = {
	links: [
		{
			title: 'Product',
			links: [
				{ text: 'Features', href: '#' },
				{ text: 'Security', href: '#' },
				{ text: 'Team', href: '#' },
				{ text: 'Enterprise', href: '#' },
				{ text: 'Customer stories', href: '#' },
				{ text: 'Pricing', href: '#' },
				{ text: 'Resources', href: '#' },
			],
		},
		{
			title: 'Platform',
			links: [
				{ text: 'Developer API', href: '#' },
				{ text: 'Partners', href: '#' },
				{ text: 'Atom', href: '#' },
				{ text: 'Electron', href: '#' },
				{ text: 'AstroWind Desktop', href: '#' },
			],
		},
		{
			title: 'Support',
			links: [
				{ text: 'Docs', href: '#' },
				{ text: 'Community Forum', href: '#' },
				{ text: 'Professional Services', href: '#' },
				{ text: 'Skills', href: '#' },
				{ text: 'Status', href: '#' },
			],
		},
		{
			title: 'Company',
			links: [
				{ text: 'About', href: '/' },
				{ text: 'Blog', href: '#' },
				{ text: 'Careers', href: '#' },
				{ text: 'Press', href: '#' },
				{ text: 'Inclusion', href: '#' },
				{ text: 'Social Impact', href: '#' },
				{ text: 'Shop', href: '#' },
			],
		},
	],
	secondaryLinks: [
		{ text: 'Terms', href: getPermalink('/terms') },
		{ text: 'Privacy Policy', href: getPermalink('/privacy') },
	],
	socialLinks: [
		{ ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
		{ ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
		{ ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
		{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
		{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
	],
	footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
const oldLinks = [
	{
		text: 'Landing',
		links: [
			{
				text: 'por',
				href: getPermalink('/por'),
			},
			{
				text: 'Startup',
				href: getPermalink('/landing/startup'),
			},
			{
				text: 'Mobile App',
				href: getPermalink('/landing/mobile-app'),
			},
		],
	},
	{
		text: 'Pages',
		links: [
			{
				text: 'Features',
				href: '#features',
			},
			{
				text: 'Pricing',
				href: '#',
			},
			{
				text: 'About us',
				href: '#',
			},
			{
				text: 'Contact',
				href: '#',
			},
			{
				text: 'Terms',
				href: getPermalink('/terms'),
			},
			{
				text: 'Privacy policy',
				href: getPermalink('/privacy'),
			},
		],
	}]

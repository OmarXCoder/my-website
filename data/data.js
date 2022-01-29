export const CONTACT_EMAIL = 'hi@OmarAli.dev';
export const CONTACT_PHONE = '201145525755';
export const CONTACT_PHONE_FORMATED = '+2011 455 25 755';

export const NAV_LINKS = [
    {
        label: 'About',
        url: '/about',
        hideIn: ['/', '/about'],
    },
    {
        label: 'Services',
        url: '/#services',
        hideIn: [],
    },
    {
        label: 'Skills',
        url: '/#skills',
        hideIn: [],
    },
    {
        label: 'Projects',
        url: '/#projects',
        hideIn: ['/about', '/projects'],
    },
    {
        label: 'Projects',
        url: '/projects',
        hideIn: ['/', '/projects'],
    },
];

export const SOCIAL_LINKS = [
    {
        label: 'Github',
        icon: 'fab fa-fw fa-github',
        url: 'https://github.com/OmarXCoder',
    },
    {
        label: 'Linkedin',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://linkedin.com/in/OmarXCoder',
    },
    {
        label: 'Facebook',
        icon: 'fab fa-fw fa-facebook',
        url: 'https://facebook.com/OmarXCoder',
    },
    {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter',
        url: 'https://twitter.com/OmarXCoder',
    },
];

export const SERVICES = [
    {
        heading: 'Build Website',
        icon: 'fas fa-code',
        description:
            'I will convert your design into a vivid, responsive, static or dynamic website that runs on any device.',
    },
    {
        heading: 'Create Mobile App',
        icon: 'fab fa-app-store-ios',
        description:
            'You have a great app idea? I will create a cross platform mobile app for you, using Flutter or React native.',
    },
    {
        heading: 'Join your team',
        icon: 'fas fa-users',
        description:
            "Are you working on a long-term project or gathering a team for your startup? I'll be happy to participate.",
    },
];

export const PROJECTS = [
    {
        heading: 'Portfolio Template',
        date: 'Jan 2022',
        img: '/img/demo/my-website-screenshot.png',
        link: 'https://omarali.dev/',
        sourceCodeLink: 'https://github.com/OmarXCoder/my-website',
        description: 'A personal website & portfolio template built using NextJs framework.',
        tags: ['React', 'NextJs', 'Tailwindcss'],
        featured: true,
    },
    {
        heading: 'Ejarly - Property Manager',
        date: 'Dec 2021',
        img: '/img/demo/ejarly.png',
        link: '#',
        description:
            'Property listing and management software that makes managing properties as easy as using social networks.',
        tags: ['Laravel', 'Vue', 'Inertia', 'MySQL'],
        featured: true,
        comingSoon: true,
    },
    {
        heading: 'Nefertari Dashboard',
        date: 'Jun 2020',
        img: '/img/demo/nefertari.png',
        link: 'http://spantags.net/nefertari/demo1/dashboard.ecommerce.html',
        description: 'A modern, responsive, two-layout admin dashboard and UI kit.',
        tags: ['HTML', 'Sass', 'Bootstrap'],
        featured: true,
    },
    {
        heading: 'Pubsher',
        date: 'Dec 2021',
        img: '/img/demo/pubsher.png',
        link: null,
        sourceCodeLink: 'https://github.com/OmarXCoder/pubsher',
        description: 'Pubsher is a social blogging system. almost a clone of Dev.to website.',
        tags: ['Laravel', 'Vue', 'Inertia', 'MySQL'],
        featured: false,
    },
    {
        heading: 'Infinity Dashboard',
        date: 'May 2016',
        img: '/img/demo/infinity.jpg',
        link: 'http://envato.rathemes.com/infinity/',
        description: 'Responsive admin dashboard. Features vast collection of UI components.',
        tags: ['HTML', 'JQuery', 'Bootstrap'],
        featured: false,
    },
    {
        heading: 'Sphinx Dashboard',
        date: 'Jun 2019',
        img: '/img/demo/sphinx.jpg',
        link: 'http://sphinx.spantags.net/',
        description: 'Admin dashboard built for the themeforest market using Vue & Vuetify.',
        tags: ['Javascript', 'Vue', 'Vuetify'],
        featured: false,
    },
    {
        heading: 'Infinity Landing Page',
        date: 'Jul 2016',
        img: '/img/demo/infinity-landing-page.jpg',
        link: 'http://envato.rathemes.com/infinity/landing-page.html',
        description: 'A sleek bootstrap landing page. Can be used for ad campaigns.',
        tags: ['HTML', 'JQuery', 'Bootstrap'],
        featured: true,
    },
    {
        heading: 'Luxury Dashboard',
        date: 'Nov 2017',
        img: '/img/demo/luxury.jpg',
        link: 'http://spantags.net/luxury/',
        description: 'A Feature-rich UI kit and admin dashboard for data-centric projects.',
        tags: ['HTML', 'JQuery', 'Bootstrap'],
        featured: false,
    },
];

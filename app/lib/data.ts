import { Contact, Experience, Project, Category } from './definition';

export const contact:Contact = {
    email: 'jamieluong03@gmail.com',
    github: 'https://github.com/jamieluong03',
    linkedin: 'https://www.linkedin.com/in/jamie-luong-4611b084/'
};

export const experience:Experience = [
    {
        company: 'E. Gluck Corporation',
        title: 'Web Developer',
        dates: 'August 2022 - January 2026',
        details: [
            'Architected and scaled frontend systems for 5 high-traffic e-commerce platforms serving 2M+ annual users and generating $2.5M+ in revenue',
            'Optimized Shopify and WordPress theme architectures, improving Google PageSpeed / Core Web Vitals scores to increase organic SEO traffic and user retention',
            'Engineered modular UI components and Liquid-based layouts to ensure consistency and cross-platform scalability',
            'Engineered custom client-side event tracking via JavaScript and GraphQL to pass granular data into GA4, while optimizing semantic HTML markup to support SEO metadata tracking and marketing strategies',
            'Improved user engagement by 15% by identifying UX friction points through heatmap analysis and frontend optimizations',
            'Implemented responsive email templates in Klaviyo, building custom HTML/CSS layouts and integrating dynamic product annotations for campaign personalization',
            'Collaborated cross-functionally with marketing team to translate business requirements into scalable frontend solutions',
            'Authored OpenAPI specifications to support ERP integration, reducing manual order processing by 20%'
        ],
        work: [
            {
                title: 'Armitron',
                link: 'https://www.armitron.com/'
            },
            {
                title: 'Torgoen',
                link: 'https://www.torgoen.com/'
            },
            {
                title: 'WITHit',
                link: 'https://www.withitgear.com/'
            },
            {
                title: 'Armitron Connect',
                link: 'https://armitronconnect.com/',
            },
            {
                title: 'E Gluck',
                link: 'https://egluck.com/'
            }
        ],
        active: false
    },
    {
        company: 'Freelance',
        title: 'Frontend Developer',
        dates: 'March 2024 - May 2025',
        details: [
            'Architected modular components to support evolving business logic and high-growth requirements',
            'Consulted on system architecture, providing technical roadmaps that balanced technical constraints with long-term scalability',
            'Engineered production-ready storefront interfaces from translating complex Figma design specifications',
            'Diagnosed and refactored legacy codebases, successfully reducing technical debt and optimizing system performance'
        ],
        work: [
            {
                title: 'Popfunk',
                link: 'https://www.popfunk.com/'
            },
            {
                title: 'Weldwork',
                link: 'https://www.weldwork.com/'
            },
            {
                title: 'Weldwork Design',
                link: 'https://www.weldworkdesign.com/'
            },
            {
                title: 'Camp Snap',
                link: 'https://www.campsnap.com/'
            },
            {
                title: 'Saint Jane Beauty',
                link: 'https://saintjanebeauty.com/'
            }
        ],
        active: false
    },
    {
        company: 'EverBrands, Inc.',
        title: 'Web Developer',
        dates: 'March 2021 - August 2022',
        details: [
            'Built reusable, modular frontend components for product pages to improve consistency and development efficiency',
            'Implemented automated testing scripts using Python + Selenium to validate frontend functionality and reliability',
            'Engineered serverless Node.js workflows using AWS Lambda and Secrets Manager for secure API integrations between Zoho CRM and third-party platforms',
            'Created internal automation tools to optimize operational workflows and efficiency',
            'Implemented SQL-driven BI dashboards to support data-driven strategic decisions'
        ],
        work: [
            {
                title: 'EverSmile',
                link: 'https://eversmilewhite.com/'
            }
        ],
        active: false
    },
    {
        company: 'Cydoc',
        title: 'Frontend Developer Intern',
        dates: 'September 2020 - March 2021',
        details: [
            'Developed interactive UI components using React/Redux and Typescript for an AI-driven medical notes application',
            'Enhanced UX through modular component design and state management optimization',
            'Refactored legacy components and improved code maintainability through unit testing with Jest/Enzyme'
        ],
        active: false
    }
];

export const projects:Project = [
    {
        name: 'BI Dashboard',
        image: '/analytics-dashboard-screenshot.png',
        link: 'https://github.com/jamieluong03/BI-Dashboard',
        app: 'https://bi-dashboard-nine.vercel.app/',
        details: 'Developed a custom full-stack BI dashboard with Next.js and Supabase to consolidate client tracking data and business KPIs. Implemented optimized SQL database logic and efficient API data-fetching to process large datasets instantly, delivering real-time, interactive performance visualizations.',
        technologies: ['TailwindCSS', 'Typescript', 'Next.js', 'TanStack Query', 'Supabase (PostgreSQL)', 'shadcn/ui', 'Recharts'],
        live: false
        
    },
    {
        name: 'MedBuddy',
        image: '/medbuddy.png',
        link: 'https://github.com/jamieluong03/MedBuddy-project',
        details: 'A React medication reminder app. All the data is stored in a MySQL database.',
        technologies: ['CSS', 'Bootstrap', 'Javascript', 'Node.js', 'Express.js', 'Sequelize', 'REST API', 'React', 'AJAX'],
        live: false
    },
    {
        name: 'Recipedia',
        image: '/recipedia.png',
        link: 'https://github.com/jamieluong03/Recipedia',
        details: "An online recipe book for users who are inventive and love to cook. Each of the recipes are sorted by their cuisine type. ",
        technologies: ['CSS', 'Bulma', 'Javascript', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'AJAX'],
        live: false
    },
    {
        name: 'Music Space',
        image: '/musicspace.png',
        link: 'https://github.com/jamieluong03/Music-Space',
        details: 'In this music space, the user is able to search for the latest songs, albums, and upcoming shows from their favorite artists.',
        technologies: ['CSS', 'Bulma', 'REST API', 'Fetch API', 'Javascript', 'jQuery'],
        live: false
    }
];

export const categories:Category = [
    { 
        id: 1, 
        title: 'Product Detail Pages', 
        thumb: '/pdp/watch-pdp.png', 
        count: 9,
        images: [
            '/pdp/watch-pdp.png',
            '/pdp/titanium-pdp.png',
            '/pdp/snap-pdp.png',
            '/pdp/smart-pdp.png',
            '/pdp/saint-video.png',
            '/pdp/pop-pdp.png',
            '/pdp/design-pdp.png',
            '/pdp/a-pdp.png',
            '/pdp/a-pdp-2.png'
        ]
    },
    { 
        id: 2, 
        title: 'Product Listing Pages', 
        thumb: '/plp/mens-watches.png', 
        count: 4,
        images: [
            '/plp/mens-watches.png',
            '/plp/mens-gold-watches.png',
            '/plp/mens-black-watches.png',
            '/plp/t-plp.png'
        ]
    },
    { 
        id: 3, 
        title: 'Landing Pages', 
        thumb: '/lp/pop-hp.png', 
        count: 11,
        images: [
            '/lp/pop-hp.png',
            '/lp/band-lp.png',
            '/lp/design-hp.png',
            '/lp/lee-lp.png',
            '/lp/op-lp.png',
            '/lp/peanuts-lp.png',
            '/lp/t-lp.png',
            '/lp/t-manual.png',
            '/lp/t-straps.png',
            '/lp/tilly-lp.png',
            '/lp/weld-hp.png'
        ]
    },
    { 
        id: 4,
        title: 'Navigation Menus', 
        thumb: '/menus/nav-menu.png', 
        count: 3,
        images: [
            '/menus/nav-menu.png',
            '/menus/tabs.jpg',
            '/menus/weld-nav.png'
        ]
    },
]
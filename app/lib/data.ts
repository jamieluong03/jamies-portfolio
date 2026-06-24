import { Contact, Experience, Project, Category } from './definition';

export const contact:Contact = {
    email: 'jamieluong03@gmail.com',
    github: 'https://github.com/jamieluong03',
    linkedin: 'https://www.linkedin.com/in/jamie-luong-4611b084/'
};

export const experience:Experience = [
    {
        company: 'Freelance',
        title: 'Frontend Developer',
        dates: 'March 2024 - Present',
        details: [
            'Translated Figma designs into production-ready Shopify storefronts using Shadow DOM, Flexbox, CSS Grid, and semantic HTML5 — working directly with clients from spec to launch',
            'Migrated 2 Zendesk brand instances to a new independent account, transferring 2,000+ tickets, 19 ticket fields, 6 views, 2 forms, 12 business rules, and ~30 help center articles using Python scripts and Postman.',
            'Diagnosed and resolved Google Search Console errors — including invalid structured data and crawlability issues — to improve organic search eligibility for client sites.'
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
        company: 'E. Gluck Corporation',
        title: 'Web Developer',
        dates: 'August 2022 - January 2026',
        details: [
            'Scaled frontend systems across 5 CMS and e-commerce platforms serving 2M+ annual users and generating $2.5M+ in revenue — architecting a reusable component library and Liquid-based layouts that kept things consistent and maintainable as the platforms grew',
            'Improved user engagement by 15% through heatmap analysis, accessibility improvements, and targeted UI optimizations that addressed real friction points in the user experience',
            'Built campaign landing pages and Klaviyo email templates in close collaboration with the marketing team, translating campaign requirements into responsive, on-brand frontend work',
            'Developed custom JavaScript and GraphQL tracking scripts to capture GA4 user behavior data that wasn\'t available through existing analytics tools',
            'Integrated an EDI/ERP system using JSON and OpenAPI specs to automate order fulfillment workflows, cutting manual processing time by 20%+',
            'Audited Core Web Vitals across platforms and identified third-party tracking scripts as the primary PageSpeed bottlenecks, implementing deferred and async loading strategies to improve performance'
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
        company: 'EverBrands, Inc.',
        title: 'Web Developer',
        dates: 'March 2021 - August 2022',
        details: [
            'Inherited a legacy codebase and rebuilt it as a library of accessible, reusable frontend components — improving consistency across product pages and ensuring cross-browser compatibility across Chrome, Safari, Firefox, and Edge',
            'Wrote automated test scripts with Python and Selenium and maintained unit tests with Jest to catch regressions and keep the frontend reliable',
            'Extended Shopify\'s native Zoho CRM integration by building serverless AWS Lambda functions with Secrets Manager to securely surface additional customer data on the frontend',
            'Built custom SQL dashboards in Zoho CRM to give the internal sales team real-time visibility into operational metrics that weren\'t available in the default reporting tools'
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
            'Built interactive UI components using React, Redux, and TypeScript for an AI-driven medical notes application',
            'Improved component maintainability and state management by refactoring legacy code and adding unit test coverage with Jest and Enzyme'
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
        brands: 'WITHit · Camp Snap · Saint Jane Beauty · Popfunk · Weldwork · Armitron',
        description: 'Product detail pages built across 6 brands in Shopify and WordPress — each with different design systems, product types, and conversion requirements. Work spans watch and accessory brands, a beauty label, a photography product, and a pop culture retailer. Focus on mobile-first responsive layouts, consistent component patterns, and Liquid templating within theme constraints.',
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
        brands: 'Armitron · Torgoen',
        description: 'Collection and category pages for two watch brands with distinct visual identities. Built within Shopify\'s theme architecture using Liquid and custom JavaScript — focused on filtering, grid layout consistency, and cross-browser rendering. Added SEO content sections at the top and bottom of select PLPs to support organic search visibility, and built custom media sections to enrich the browsing experience beyond standard product grids.',
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
        brands: 'Popfunk · WITHit · Weldwork Design · Armitron · Torgoen · Weldwork',
        description: 'Campaign and brand landing pages across 6 clients, built in close collaboration with marketing teams to translate campaign briefs into responsive, on-brand frontend builds. Covers promotional campaigns, product launches, and brand storytelling pages — each tailored to the brand\'s design language and conversion goals.',
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
        brands: 'Armitron · Weldwork',
        description: 'Custom navigation builds for two brands with different structural requirements — mega menu architecture for Armitron\'s broad product catalog and a streamlined nav for Weldwork\'s focused offering. Built with accessibility and mobile responsiveness as primary constraints.',
        count: 3,
        images: [
            '/menus/nav-menu.png',
            '/menus/tabs.jpg',
            '/menus/weld-nav.png'
        ]
    },
]
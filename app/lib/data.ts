
export const contact = {
    email: 'jamieluong03@gmail.com',
    github: 'https://github.com/jamieluong03',
    linkedin: 'https://www.linkedin.com/in/jamie-luong-4611b084/'
};

export const experience = [
    {
        company: 'E. Gluck Corporation',
        title: 'Web Developer',
        dates: 'August 2022 - January 2026',
        details: [
            'Led frontend development across several high-traffic e-commerce platforms on Shopify and Wordpress, serving 2M+ annual users and generating $2.5M+ in revenue',
            'Built and maintained responsive, dynamic UI components and landing pages using Javascript, HTML, CSS, and Liquid',
            'Developed custom client-side tracking integrations (Javascript + GraphQL) to enhance analytics and user behavior insights',
            'Improved user engagement by 15% by identifying UX friction points through heatmap analysis and implementing frontend optimizations',
            'Implemented responsive email templates in Klaviyo, building custom HTML/CSS layouts and integrating dynamic product annotations for campaign personalization',
            'Collaborated cross-functionally with marketing team to translate business requirements into scalable frontend solutions',
            'Authored OpenAPI documentation to support ERP integration, reducing manual order processing by 20%'
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
            'Customized and extended existing frontend architectures to align with evolving business requirements',
            'Advised clients on platform architecture decisions, balancing technical constraints with long-term scalability',
            'Developed custom storefront interfaces by translating Figma designs into responsive, production-ready implementations',
            'Diagnosed and refactored legacy theme code to improve maintainability, performance, and UX consistency'
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
            'Developed AWS Lambda functions (Node.js) to support API-driven integrations between CRM and third-party platforms',
            'Created internal tools to automate workflows and improve operational efficiency',
            'Designed SQL-powered BI dashboards to support data-driven decision-making'
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

export const projects = [
    {
        name: 'MedBuddy',
        image: '/medbuddy.png',
        link: 'https://github.com/jamieluong03/MedBuddy-project',
        details: 'A React medication reminder app. All the data is stored in a MySQL database.',
        technologies: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'Node.js', 'Express.js', 'Sequelize', 'REST API', 'React', 'AJAX']
    },
    {
        name: 'Recipedia',
        image: '/recipedia.png',
        link: 'https://github.com/jamieluong03/Recipedia',
        details: "An online recipe book for users who are inventive and love to cook. Each of the recipes are sorted by their cuisine type. ",
        technologies: ['HTML', 'CSS', 'Bulma', 'Javascript', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'AJAX']
    },
    {
        name: 'Music Space',
        image: '/musicspace.png',
        link: 'https://github.com/jamieluong03/Music-Space',
        details: 'In this music space, the user is able to search for the latest songs, albums, and upcoming shows from their favorite artists.',
        technologies: ['HTML', 'CSS', 'Bulma', 'REST API', 'Fetch API', 'Javascript', 'jQuery']
    }
];

export const categories = [
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
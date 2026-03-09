export interface BlogNavItem {
    title: string;
    tag: string;
}

export interface BlogPost {
    tag: string;
    image: string;
    title: string;
    date: string;
    slug: string;
}

export const CATEGORIES: BlogNavItem[] = [
    { title: "All", tag: "all" },
    { title: "Creative Design & UI/UX", tag: "design" },
    { title: "Web & Mobile Development", tag: "dev" },
    { title: "AI/ML Solutions", tag: "ai" },
    { title: "Web3 & Blockchain", tag: "web3" },
    { title: "Enterprise Solutions", tag: "enterprise" },
];

export const BLOG_DATA: BlogPost[] = [
    {
        slug: "developer-wishes-project-start",
        tag: "dev",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/330d52dbbcf387b814a1331a6e62b943d46fabe1_bm0po9.webp",
        title: "What Your Developer Wishes You Knew Before Starting a Project",
        date: "August 12, 2025",
    },
    {
        slug: "ui-ux-trends-2025",
        tag: "design",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/783d9c3c25202374b7b70de8da0ce6434c9fe997_twm2bw.webp",
        title: "Top 10 UI/UX Trends to Watch in 2025",
        date: "September 05, 2025",
    },
    {
        slug: "future-of-web3-digital-assets",
        tag: "web3",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/1eac1145edfdc9e8e4db30087de85e967d99eb07_uy6wai.webp",
        title: "The Future of Web3: Beyond the Hype of Digital Assets",
        date: "October 18, 2025",
    },
    {
        slug: "cybersecurity-essentials-saas",
        tag: "enterprise",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/588080367d57a53331da181b7ed1ac8b3d4889c0_hwqjmn.webp",
        title: "Cybersecurity Essentials for Modern SaaS Platforms",
        date: "November 22, 2025",
    },
    {
        slug: "ai-revolutionizing-software-lifecycle",
        tag: "ai",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/1eac1145edfdc9e8e4db30087de85e967d99eb07_uy6wai.webp",
        title: "How AI is Revolutionizing the Software Development Lifecycle",
        date: "December 10, 2025",
    },
    {
        slug: "scalable-microservices-node-docker",
        tag: "dev",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/783d9c3c25202374b7b70de8da0ce6434c9fe997_twm2bw.webp",
        title: "Building Scalable Microservices with Node.js and Docker",
        date: "January 15, 2026",
    },
    {
        slug: "advanced-prototyping-figma",
        tag: "design",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/783d9c3c25202374b7b70de8da0ce6434c9fe997_twm2bw.webp",
        title: "Advanced Prototyping in Figma",
        date: "February 01, 2026",
    },
    // Repeated items with unique slugs for frontend routing
    {
        slug: "future-of-web3-digital-assets-2",
        tag: "web3",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/1eac1145edfdc9e8e4db30087de85e967d99eb07_uy6wai.webp",
        title: "The Future of Web3: Beyond the Hype of Digital Assets",
        date: "October 18, 2025",
    },
    {
        slug: "cybersecurity-essentials-saas-2",
        tag: "enterprise",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/588080367d57a53331da181b7ed1ac8b3d4889c0_hwqjmn.webp",
        title: "Cybersecurity Essentials for Modern SaaS Platforms",
        date: "November 22, 2025",
    },
    {
        slug: "ai-revolutionizing-software-lifecycle-2",
        tag: "ai",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/1eac1145edfdc9e8e4db30087de85e967d99eb07_uy6wai.webp",
        title: "How AI is Revolutionizing the Software Development Lifecycle",
        date: "December 10, 2025",
    },
    {
        slug: "scalable-microservices-node-docker-2",
        tag: "dev",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/783d9c3c25202374b7b70de8da0ce6434c9fe997_twm2bw.webp",
        title: "Building Scalable Microservices with Node.js and Docker",
        date: "January 15, 2026",
    },
    {
        slug: "advanced-prototyping-figma-2",
        tag: "design",
        image: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183484/783d9c3c25202374b7b70de8da0ce6434c9fe997_twm2bw.webp",
        title: "Advanced Prototyping in Figma",
        date: "February 01, 2026",
    },



];
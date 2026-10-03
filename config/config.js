// Converted from config.yml — imported as a plain JS module (no yaml-loader needed).
export const config = {
    author: 'Your Name here',
    siteName: 'Your Site Name here',
    siteDescription: 'The personal blog of Your Name',
    defaultPageTitle: 'Add a default page title here',
    blogTitle: 'Blog',
    baseUrl: 'base url of your site here (e.g. www.mysite.com)',

    // For Twitter cards, this logo must be a hosted url, not a relative path.
    // Must be square. Minimum size is 144x144; maximum size 4096x4096.
    websiteLogo: 'https://cdn.auth0.com/blog/logos/nextjs-logo.png',

    twitterHandle: '@your twitter handle',
    twitterCardType: 'summary',

    // This list is used to create the links in the navigation panel
    navigation: [
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/blog' },
        { text: 'About', link: '/about' },
    ],

    css: {
        primaryColor: '#536DFE',
        accentColor: '#455A64',
        lightGray: '#eeeeee',
        backgroundColor: '#ffffff',
        black: '#333',
    },
}

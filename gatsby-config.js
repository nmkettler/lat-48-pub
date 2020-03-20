module.exports = {
  siteMetadata: {
    title: `Latitude 48`,
    description: `Latitude 48 Civil Engineering Firm offering full service consulting in Seattle, Washington`,
    author: `Noah Kettler`,
    taco: `Latitude 48`,
    menuLinks: [
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'Meet Us',
        link: '/who-we-are',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
    workTile: [
      {
        name: 'Seattle',
        number: 0,
        description: 'This is work tile 1 desc filet mignon ball tip pastrami capicola porchetta burgdoggen pig. Pastrami venison pancetta spare ribs beef hamburger ham hock jerky beef ribs meatball doner swine. Cupim corned beef ribeye burgdoggen, pig cow turkey ball tip t-bone sirloin pork belly pastrami ham.',
      },
      {
        name: 'Issaquah',
        number: 1,
        description: 'This is work tile 2 desc filet mignon ball tip pastrami capicola porchetta burgdoggen pig. Pastrami venison pancetta spare ribs beef hamburger ham hock jerky beef ribs meatball doner swine. Cupim corned beef ribeye burgdoggen, pig cow turkey ball tip t-bone sirloin pork belly pastrami ham.',
      },
      {
        name: 'Bellevue',
        number: 2,
        description: 'This is work tile 3 desc filet mignon ball tip pastrami capicola porchetta burgdoggen pig. Pastrami venison pancetta spare ribs beef hamburger ham hock jerky beef ribs meatball doner swine. Cupim corned beef ribeye burgdoggen, pig cow turkey ball tip t-bone sirloin pork belly pastrami ham.',
      },
      {
        name: 'Portland',
        number: 3,
        description: 'This is work tile 4 desc filet mignon ball tip pastrami capicola porchetta burgdoggen pig. Pastrami venison pancetta spare ribs beef hamburger ham hock jerky beef ribs meatball doner swine. Cupim corned beef ribeye burgdoggen, pig cow turkey ball tip t-bone sirloin pork belly pastrami ham.',
      },
      {
        name: 'Granite Falls',
        number: 4,
        description: 'This is work tile 5 desc filet mignon ball tip pastrami capicola porchetta burgdoggen pig. Pastrami venison pancetta spare ribs beef hamburger ham hock jerky beef ribs meatball doner swine. Cupim corned beef ribeye burgdoggen, pig cow turkey ball tip t-bone sirloin pork belly pastrami ham.',
      },
      {
        name: 'Ohio',
        number: 5,
        description: 'This is work tile 6 desc filet mignon ball tip pastrami capicola porchetta burgdoggen pig. Pastrami venison pancetta spare ribs beef hamburger ham hock jerky beef ribs meatball doner swine. Cupim corned beef ribeye burgdoggen, pig cow turkey ball tip t-bone sirloin pork belly pastrami ham.',
      },
    ],
    menuFooterLinks: [
      {
        socIcon: 'faFacebook',
        link: '/contact',
      },
      {
        socIcon: 'faTwitter',
        link: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lat-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App  Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

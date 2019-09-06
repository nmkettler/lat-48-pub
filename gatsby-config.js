module.exports = {
  siteMetadata: {
    title: `Latitude 48`,
    description: `This is the meta data for latitude 48`,
    author: `Noah Kettler`,
    taco: `Latitude 48`,
    menuLinks: [
      {
        name: 'Our Work',
        link: '/our-work',
      },
      {
        name: 'About Us',
        link: '/about',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
    workTile: [
      {
        name: 'Work Tile 1',
        number: 0,
        description: 'This is work tile 1 desc',
      },
      {
        name: 'Work Tile 2',
        number: 1,
        description: 'This is work tile 2 desc',
      },
      {
        name: 'Work Tile 3',
        number: 2,
        description: 'This is work tile 3 desc',
      },
      {
        name: 'Work Tile 4',
        number: 3,
        description: 'This is work tile 4 desc',
      },
      {
        name: 'Work Tile 5',
        number: 4,
        description: 'This is work tile 5 desc',
      },
      {
        name: 'Work Tile 6',
        number: 5,
        description: 'This is work tile 6 desc',
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

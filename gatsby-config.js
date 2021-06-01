module.exports = {
  siteMetadata: {
    title: 'CMT CS Learning Website',
  },
  plugins: [
    `gatsby-plugin-layout`,
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `./content`,
        ignore: [`**/\.*`, '**/LICENSE'], // ignore files starting with a dot
      },
    },
  ],
};

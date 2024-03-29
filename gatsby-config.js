/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Wesley De Witt',
    siteUrl: 'https://www.yourdomain.tld'
  },
  plugins: ["gatsby-plugin-sass", "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './src/_projects/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'essays',
        path: './src/_essays/',
      },
    },
  ]
};
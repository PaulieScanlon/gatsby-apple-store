module.exports = {
  siteMetadata: {
    name: `Style Guide`,
    description: `Style Guide description`,
    type: `style-guide`,
  },
  plugins: [
    `apple-store-theme`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
}

module.exports = {
  plugins: [
    `gatsby-theme-apple-store`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-mdx`,
    // This is only here to stop the style-guide from erroring
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `gatsby-apple-store-uk`,
        accessToken: `8fed51db3995e80988243f4a26874a40`,
      },
    },
  ],
}

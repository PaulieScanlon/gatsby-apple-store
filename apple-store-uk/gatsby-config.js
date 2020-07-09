module.exports = {
  plugins: [
    `gatsby-theme-apple-store`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `gatsby-apple-store-uk`,
        accessToken: `8fed51db3995e80988243f4a26874a40`,
        apiVersion: `2020-07`,
        verbose: true,
        paginationSize: 250,
        includeCollections: [`shop`, `content`],
      },
    },
  ],
}

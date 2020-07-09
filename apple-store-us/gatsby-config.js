module.exports = {
  plugins: [
    `gatsby-theme-apple-store`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `gatsby-apple-store-us`,
        accessToken: `e01120076ab3635a41455eab59b8b8c2`,
        apiVersion: `2020-07`,
        verbose: true,
        paginationSize: 250,
        includeCollections: [`shop`, `content`],
      },
    },
  ],
}

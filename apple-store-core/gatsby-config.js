module.exports = (themeOptions) => {
  const { shopName, accessToken } = themeOptions
  return {
    plugins: [
      {
        resolve: `gatsby-source-shopify`,
        options: {
          shopName: `${shopName}`,
          accessToken: `${accessToken}`,
          apiVersion: `2020-07`,
          verbose: true,
          paginationSize: 250,
          includeCollections: [`shop`, `content`],
        },
      },
    ],
  }
}

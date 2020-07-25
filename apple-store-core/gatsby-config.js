module.exports = (themeOptions) => {
  const { shopName, accessToken } = themeOptions

  return {
    siteMetadata: {
      name: ``,
      cta: ``,
      associateStores: [
        {
          name: ``,
          url: ``,
        },
      ],
    },
    plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
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
      {
        resolve: `gatsby-plugin-layout`,
        options: {
          component: require.resolve(`./src/layouts/PagesLayout.js`),
        },
      },
    ],
  }
}

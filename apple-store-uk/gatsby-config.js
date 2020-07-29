require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    name: `Apple Store UK`,
    description: `A Gatsby Cloud demo application`,
    siteUrl: `https://gatsby-apple-store-uk.netlify.app`,
    siteImage: `apple-store-open-graph-image.jpg`,
    keywords: [`Gatsby`, `Gatsby Cloud`, `Shopify`],
    lang: `en`,
    cta: `add to basket`,
    associateStores: [
      {
        name: `visit US store`,
        url: `https://gatsby-apple-store-us.netlify.app/`,
        icon:
          'https://gatsby-apple-store-style-guide.netlify.app/images/us.svg',
      },
    ],
  },
  plugins: [
    `apple-store-theme`,
    {
      resolve: `apple-store-core`,
      options: {
        shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
      },
    },
  ],
}

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    name: `apple store US`,
    cta: `add to cart`,
    associateStores: [
      {
        name: `visit UK store`,
        url: `https://gatsby-apple-store-uk.netlify.app/`,
        icon:
          'https://gatsby-apple-store-style-guide.netlify.app/images/uk.svg',
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

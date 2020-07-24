require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    name: `Apple Store US`,
    description: `Apple Store US description`,
    associateStores: [
      {
        name: `Vist UK Store`,
        url: `https://gatsby-apple-store-uk.netlify.app/`,
        icon: '',
      },
      {
        name: `Peruse the style guide`,
        url: `https://gatsby-apple-store-style-guide.netlify.app/`,
        icon: '',
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

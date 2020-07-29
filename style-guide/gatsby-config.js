module.exports = {
  siteMetadata: {
    name: `Apple Store Style Guide`,
    description: `A Theme UI demo Style Guide`,
    siteUrl: `https://gatsby-apple-store-style-guide.netlify.app`,
    siteImage: `apple-store-open-graph-image.jpg`,
    keywords: [`Gatsby`, `Theme UI`],
    lang: `en`,
    cta: ``,
    associateStores: [
      {
        name: ``,
        url: ``,
        icon: '',
      },
    ],
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
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/PagesLayout.js`),
      },
    },
  ],
}

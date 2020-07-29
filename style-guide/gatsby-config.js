module.exports = {
  siteMetadata: {
    name: `apple store US`,
    description: `A Theme UI demo Style Guide`,
    siteUrl: `https://gatsby-apple-store-uk.netlify.app`,
    siteImage: `apple-store-open-graph-image.jpg`,
    keywords: [`Gatsby`, `Theme UI`],
    lang: `en`,
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

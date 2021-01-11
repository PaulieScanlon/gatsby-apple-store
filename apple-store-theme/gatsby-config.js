module.exports = {
  siteMetadata: {
    name: ``,
    description: ``,
    siteUrl: ``,
    siteImage: ``,
    keywords: [``],
    lang: ``,
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`ruda\:500,700,900`],
        display: 'swap',
      },
    },
  ],
}

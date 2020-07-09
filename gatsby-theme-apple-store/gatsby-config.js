module.exports = {
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/PagesLayout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Ruda\:300,400,400i,700`, `Roboto Slab\:300,400,400i,700`],
        display: 'swap',
      },
    },
  ],
}

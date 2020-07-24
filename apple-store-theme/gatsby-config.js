module.exports = {
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Ruda\:300,400,400i,700`, `Roboto Slab\:300,400,400i,700`],
        display: 'swap',
      },
    },
  ],
}

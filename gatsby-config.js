module.exports = {
  siteMetadata: {
    title: `Front-End Conferences`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`source sans pro`]
      }
    }
  ],
}

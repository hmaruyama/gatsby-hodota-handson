module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://sprint-20191213-1143.ddev.site:8080/`,
        apiBase: `jsonapi`,
      },
    },
  ],
}
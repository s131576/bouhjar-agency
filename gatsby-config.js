module.exports = {
  siteMetadata: {
    title: "Bouhjar Rachad",
    description: "Artist Agency was founded in 1977 by founder, John Doe. AA continues to be at the forefront of art by establishing the careers of our talents on a holistic level -- and setting trends within the industry.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://bouhjar-agency.local/graphql",
        debug: {
          preview: true,
        },
        schema: 
        {
          perPage: 10, // currently set to 100
          requestConcurrency: 1, // currently set to 15
          previewRequestConcurrency: 1, // currently set to 5
        }
      },
    },
  ],
};
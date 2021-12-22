module.exports = {
  siteMetadata: {
    title: `Neil Italia Rambles`,
    description: `This is my coding blog where I write about my coding journey.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
  ],
}

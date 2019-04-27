module.exports = {
  // pathPrefix: "/usk",
  siteMetadata: {
    title: "Ultimate Scala Keyboard",
    description: "This is a website about coolest world keyboard : Ultimate Scala Keyboard. Buy it, enjoy it!",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data`,
        name: "data",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: "images",
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}

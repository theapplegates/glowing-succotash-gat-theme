
module.exports = {
  plugins: [`gatsby-theme-blog`, `gatsby-theme-blog-darkmode`, `gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        preset: `theme-ui-sketchy-preset`,
        prismPreset: `oceanic-next`,
        webfontURL:
          "https://fonts.googleapis.com/css?family=Architects+Daughter",
},
resolve: `gatsby-remark-images`,
options: {
  // It's important to specify the maxWidth (in pixels) of
  // the content container as this plugin uses this as the
  // base for generating different widths of each image.
  withWebp: true,
  withAvif: true,
  maxWidth: 590,
},

    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Living Life`,
    author: `Paul Applegate`,
    description: `Follow my daily hijinks here <br>
& occasionally a serious subject like cancer. Fuck cancer.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/papplegate`,
      },
      {
        name: `github`,
        url: `https://github.com/theapplegates`,
      },
    ],
  },
}

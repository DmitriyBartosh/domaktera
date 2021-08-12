require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Дом Актёра",
    siteUrl: "https://www.domaktera24.ru",
    description: "СОЮЗ ТЕАТРАЛЬНЫХ ДЕЯТЕЛЕЙ РОССИЙСКОЙ ФЕДЕРАЦИИ (ВСЕРОССИЙСКОЕ ТЕАТРАЛЬНОЕ ОБЩЕСТВО)",
    author: "@dm.bartosh"
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photointro`,
        path: `${__dirname}/src/images/photointro/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `person`,
        path: `${__dirname}/src/images/person/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `abouttext`,
        path: `${__dirname}/src/text/`,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/logo/black.png",
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `tracedSVG`,
          quality: 85,
          backgroundColor: `transparent`,
        }
      }
    },
    `gatsby-transformer-sharp`
  ],
};

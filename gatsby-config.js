module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Columbia Children's Center",
    logo: "./images/logo.png",
    icon: "./images/building-flag.png",
    socialMedia: {
      facebook: "https://www.facebook.com/Columbia-Childrens-Center-149240848454100/",
      instagram: "https://www.instagram.com/columbia.childrens.center/",
      youtube: "https://www.youtube.com/channel/UCuiYJs5_KCclYcsqL10WHYA"
    },
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-123797488-1",
      },
    },
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `documents`,
        path: "./src/documents/",
      },
      __key: "documents",
    },
  ],
};

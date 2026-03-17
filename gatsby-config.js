const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    siteUrl: "https://columbiachildrenscenter.com",
    title: "Columbia Children's Center",
    description: "Preschool and child care in Santa Maria, CA for children ages 18 months to 5 years. Columbia Children's Center has served local families since 1992.",
    image: "/columbia-childrens-center-front.png",
    business: {
      name: "Columbia Children's Center",
      email: "lisa@columbiachildrenscenter.com",
      telephone: "+1-805-922-5437",
      telephoneDisplay: "805-922-KIDS (5437)",
      foundingDate: "1992",
      priceRange: "$$",
      streetAddress: "840 E. Stowell Road",
      addressLocality: "Santa Maria",
      addressRegion: "CA",
      postalCode: "93454",
      addressCountry: "US",
      latitude: 34.93841552734375,
      longitude: -120.42646026611328,
      openingHours: {
        opens: "07:00",
        closes: "17:30",
      },
    },
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
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/404", "/404.html", "/dev-404-page", "/offline-plugin-app-shell-fallback"],
      },
    },
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
  developMiddleware: app => {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'https://live.childcarecrm.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/import/webImportReceiver.php',
        },
      })
    );
  },
};

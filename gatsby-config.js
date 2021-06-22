const activeEnv = process.env.NODE_ENV
console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env${activeEnv == "development" ? `.${activeEnv}` : ""}`,
})

module.exports = {
  pathPrefix: `/the-health-of-america/healthequity`,
  siteMetadata: {
    title: `Blue Health Equity`,
    description: `Blue Cross and Blue Shield Companies’ National Health Equity Pledge.`,
    author: `@oomphinc`,
    image: `src/images/bcbs-logo.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/shields.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -20,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MJLBST7",
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: {
          platform: "gatsby",
          algoliaIndexName: "he_plan_profiles",
        },
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "gatsby-route-change",
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://bcbs.lndo.site/`,
        concurrentFileRequests: 60, // optional, defaults to `20`
        skipFileDownloads: true,
        disallowedLinkTypes: [
          `self`,
          `describedby`,
          `node--blog_article`,
          `vote--vote`,
          `vote_result--vote_result`,
          `password_policy--password_policy`,
        ],
        filters: {
          profiles:
            "http://bcbs.lndo.site/jsonapi/node/health_equity_plan_profile",
        },
      },
    },
  ],
}

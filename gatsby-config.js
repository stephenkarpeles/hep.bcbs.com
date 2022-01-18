const { flushSync } = require("react-dom")
const fs = require("fs")

// Load the .env file for the target environment
if (process.env.DEPLOY_ENV && fs.existsSync(`.env.${process.env.DEPLOY_ENV}`)) {
  // Use the value of the DEPLOY_ENV envvar
  require("dotenv").config({
    path: `.env.${process.env.DEPLOY_ENV}`,
  })
} else if (fs.existsSync(".env.local")) {
  // Detect local environments
  require("dotenv").config({
    path: `.env.local`,
  })
} else {
  // Default to the stage environment
  require("dotenv").config({
    path: `.env.stage`,
  })
}

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
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        // include: {
        //   types: [`node__hoa_insight`]
        // },
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
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
        baseUrl: process.env.DRUPAL_BASE_URL,
        concurrentFileRequests: 60, // optional, defaults to `20`
        skipFileDownloads: false,
        disallowedLinkTypes: [
          `self`,
          `describedby`,
          `node--blog_article`,
          `vote--vote`,
          `vote_result--vote_result`,
          `password_policy--password_policy`,
          `file--file`,
        ],
        filters: {
          "node--health_equity_disparities":
            "include=field_he_dis_featured_image",
          "node--health_equity_press_kit": "include=field_he_pk_download",
          "node--health_equity_blog": "include=field_he_featured_image",
          "node--health_equity_promotion": "include=field_he_featured_image",
          "node--health_equity_plan_profile": "include=field_he_featured_image",
          "node--health_equity_advisory_panel":
            "include=field_he_ap_featured_image",
        },
      },
    },
  ],
}

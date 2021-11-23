/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import * as React from "react"

/**
 * Add the Google Optimize Script to Health Equity
 * @see https://medium.com/@pisanocaroline/optimizing-google-optimize-in-gatsby-js-e67d0a59bfa1
 */
exports.onRenderBody = ({ setHeadComponents }) => {
  //if (process.env.DEPLOY_ENV === `prod`) {
  // Add Google Optimize Script
  setHeadComponents([
    <script
      async
      src="https://www.googleoptimize.com/optimize.js?id=GTM-NM59FZ9"
    ></script>,
    <script
      dangerouslySetInnerHTML={{
        __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'UA-3312038-1', { 'optimize_id': 'GTM-NM59FZ9'});
         `,
      }}
    />,
  ])
  //}
}

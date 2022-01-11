/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react")

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    // Add MotionPoint Script
    <script
      type="text/javascript"
      key="motionpoint-script"
      src="mp_linkcode.js"
    ></script>,
    <script
      type="text/javascript"
      key="motionpoint-script-lang"
      src="mp_langcode.js"
    ></script>,
  ]),
    setPostBodyComponents([
      // MotionPoint closing script
      <script
        type="text/javascript"
        key="motionpoint-script-closing"
        id="mpelid"
        src="//bcbscom.mpeasylink.com/mpel/mpel.js"
        async
      ></script>,
    ])
}

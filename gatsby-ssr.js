/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react")

/**
 * Add the Google Optimize Script to Health Equity
 * @see https://medium.com/@pisanocaroline/optimizing-google-optimize-in-gatsby-js-e67d0a59bfa1
 */
exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  //if (process.env.DEPLOY_ENV === `prod`) {
  setHeadComponents([
    // Add Google Optimize Script
    <script
      async
      src="https://www.googleoptimize.com/optimize.js?id=GTM-NM59FZ9"
      key="google-optimize-script"
    ></script>,
    <script
      key="google-optimize-script-layer"
      dangerouslySetInnerHTML={{
        __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'UA-3312038-1', { 'optimize_id': 'GTM-NM59FZ9'});
         `,
      }}
    />,
    // Add MotionPoint Script
    <script src="/mp_linkcode.js" key="motionpoint-script"></script>,
    <script
      key="motionpoint-script-data"
      dangerouslySetInnerHTML={{
        __html: `
        MP.UrlLang='mp_js_current_lang';
        MP.SrcUrl=decodeURIComponent('mp_js_orgin_url');
        MP.oSite=decodeURIComponent('mp_js_origin_baseUrl');
        MP.tSite=decodeURIComponent('mp_js_translated_baseUrl');
        MP.init();
        var mp_langLink = function() {
	        var langlinks = document.querySelectorAll('.langLink');
	        for (var i = 0; i < langlinks.length; i++) {
		        langlinks.item(i).setAttribute('href', '');
		        langlinks.item(i).onclick = function() {
			        MP.init();
			        var lang = this.getAttribute('data-lang');
			        var url = this.getAttribute('data-href');
			        var tSite = MP.tSite.replace(/(https?:\/\/|\/?$)/g,'');
			        url = url.replace(/(https?:\/\/|\/?$)/g,'');
			        MP.switchLanguage(tSite.search(url)!=-1?MP.oSite:url, lang, true);
			        return false;
		        }
	        }
        };
        if(window.addEventListener){
	        window.addEventListener('load',mp_langLink,false);
        }else if(window.attachEvent){
	        window.attachEvent('onload',mp_langLink);
        }`,
      }}
    />,
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
  // }
}

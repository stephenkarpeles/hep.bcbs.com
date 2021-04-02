/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import NavigationFooter from "../components/NavigationFooter"
import { withTrans } from '../i18n/withTrans'

import Header from "./header"
import "./layout.css"

const Layout = ({ children, t, i18n }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer>
        <NavigationFooter />© {new Date().getFullYear()} Blue Cross Blue Shield
        Association - All Rights Reserved. The Blue Cross Blue Shield
        Association is an association of independant, locally operated Blue
        Cross and Blue Shield Companies.
      </footer>
      <AnchorLink to="/#top" title="Back to Top">
        <span>Back to Top</span>
      </AnchorLink>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)

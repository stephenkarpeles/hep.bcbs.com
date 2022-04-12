import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link, withPrefix } from "gatsby"

function Navigation() {
  const isHomepage =
    typeof window !== "undefined"
      ? window.location.pathname === withPrefix("/")
      : ""

  return (
    <div className="navigation navigation-main navigation-main-sticky">
      <div className="inner-content">
        {isHomepage ? (
          <nav>
            <Link className="he-landing" activeClassName="current" to="/">
              Health Equity
            </Link>
            <AnchorLink
              onAnchorLinkClick={() => {}}
              // onKeyDown={}
              to="/#latest"
              className="navigation__anchor-link"
              title="Latest Stories"
              stripHash
            >
              <span>Latest Stories</span>
            </AnchorLink>
            <AnchorLink
              onAnchorLinkClick={() => {}}
              // onKeyDown={}
              to="/#advisory"
              className="navigation__anchor-link"
              title="Meet our Advisory Panel"
              stripHash
            >
              <span>Meet Our Advisory Panel</span>
            </AnchorLink>
            <AnchorLink
              onAnchorLinkClick={() => {}}
              // onKeyDown={}
              to="/strategy"
              className="navigation__anchor-link"
              title="Strategy"
            >
              <span>Strategy</span>
            </AnchorLink>
            <AnchorLink
              onAnchorLinkClick={() => {}}
              // onKeyDown={}
              to="/press-kit"
              className="navigation__anchor-link"
              title="Press Kit"
            >
              <span>Press Kit</span>
            </AnchorLink>
          </nav>
        ) : (
          <nav>
            <Link className="he-landing" activeClassName="current" to="/">
              Back to Health Equity Home
            </Link>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Navigation

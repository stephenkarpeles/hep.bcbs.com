import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link, withPrefix } from "gatsby"

function Navigation() {
  const menuOpenClass = "mobile-menu-is-open"
  const isHomepage =
    typeof window !== "undefined"
      ? window.location.pathname === withPrefix("/")
      : ""

  function removeMenuOpenClass() {
    document.body.classList.remove(menuOpenClass)
  }

  function hideMobileNav() {
    document.querySelector("header").classList.remove("navigation-mobile")
    document.querySelector("header").classList.add("navigation")
  }

  return (
    <div className="navigation navigation-main">
      <div className="inner-content">
        {isHomepage ? (
          <nav>
            <Link className="he-landing" activeClassName="current" to="/">
              Health Equity
            </Link>
            <AnchorLink
              onAnchorLinkClick={() => {
                removeMenuOpenClass()
                hideMobileNav()
              }}
              onKeyDown={removeMenuOpenClass}
              to="/#latest"
              className="navigation__anchor-link"
              title="Latest Stories"
            >
              <span>Latest Stories</span>
            </AnchorLink>
            <AnchorLink
              onAnchorLinkClick={() => {
                removeMenuOpenClass()
                hideMobileNav()
              }}
              onKeyDown={removeMenuOpenClass}
              to="/#advisory"
              className="navigation__anchor-link"
              title="Meet our Advisory Panel"
            >
              <span>Meet Our Advisory Panel</span>
            </AnchorLink>
            <AnchorLink
              onAnchorLinkClick={() => {
                removeMenuOpenClass()
                hideMobileNav()
              }}
              onKeyDown={removeMenuOpenClass}
              to="/strategy"
              className="navigation__anchor-link"
              title="Strategy"
            >
              <span>Strategy</span>
            </AnchorLink>
            <AnchorLink
              onAnchorLinkClick={() => {
                removeMenuOpenClass()
                hideMobileNav()
              }}
              onKeyDown={removeMenuOpenClass}
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

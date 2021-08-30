import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

function Navigation() {
  const menuOpenClass = "mobile-menu-is-open"

  function removeMenuOpenClass() {
    document.body.classList.remove(menuOpenClass)
  }

  function hideMobileNav() {
    document.querySelector("header").classList.remove("navigation-mobile")
    document.querySelector("header").classList.add("navigation")
  }

  return (
    <div className="navigation navigation-main">
      <div className="max-container">
        <nav>
          <Link className="he-landing" to="/">
            Health Equity
          </Link>
          <AnchorLink
            onAnchorLinkClick={() => {
              removeMenuOpenClass()
              hideMobileNav()
            }}
            onKeyDown={removeMenuOpenClass}
            to="/#healthequity"
            className="navigation__anchor-link"
            title="What is Health Equity"
          >
            <span>National Health Equity Strategy</span>
          </AnchorLink>
          <AnchorLink
            onAnchorLinkClick={() => {
              removeMenuOpenClass()
              hideMobileNav()
            }}
            onKeyDown={removeMenuOpenClass}
            to="/#disparities"
            className="navigation__anchor-link"
            title="Health Disparities"
          >
            <span>Health Disparities: By the Numbers</span>
          </AnchorLink>
          <AnchorLink
            onAnchorLinkClick={() => {
              removeMenuOpenClass()
              hideMobileNav()
            }}
            onKeyDown={removeMenuOpenClass}
            to="/#commitment"
            className="navigation__anchor-link"
            title="Our Commitment"
          >
            <span>Our Goal</span>
          </AnchorLink>
          <AnchorLink
            onAnchorLinkClick={() => {
              removeMenuOpenClass()
              hideMobileNav()
            }}
            onKeyDown={removeMenuOpenClass}
            to="/#community"
            className="navigation__anchor-link"
            title="What we're doing in your community"
          >
            <span>What We're Doing in Your Community</span>
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
          {/* <AnchorLink to="/#news" title="News">
            <span>News</span>
          </AnchorLink> */}
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
      </div>
    </div>
  )
}

export default Navigation

import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"

function Navigation() {
  return (
    <div className="navigation">
      <div className="max-container">
        <nav>
          <Link to="/">Health Equity</Link>
          <AnchorLink
            to="/#what-is-health-equity"
            title="What is Health Equity"
          >
            <span>What is Health Equity</span>
          </AnchorLink>
          <AnchorLink to="/#our-commitment" title="Our Commitment">
            <span>Our Commitment</span>
          </AnchorLink>
          <AnchorLink
            to="/#what-were-doing-in-your-community"
            title="What we're doing in your community"
          >
            <span>What we're doing in your community</span>
          </AnchorLink>
          <AnchorLink
            to="/#meet-our-advisory-panel"
            title="Meet our Advisory Panel"
          >
            <span>Meet our Advisory Panel</span>
          </AnchorLink>
          <AnchorLink to="/#news" title="News">
            <span>News</span>
          </AnchorLink>
          <AnchorLink to="/#press-kit" title="Press Kit">
            <span>Press Kit</span>
          </AnchorLink>
          <AnchorLink to="/#newsletter" title="Newsletter">
            <span>Newsletter</span>
          </AnchorLink>
        </nav>
      </div>
    </div>
  )
}

export default Navigation

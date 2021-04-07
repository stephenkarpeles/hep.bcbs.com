import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

function Navigation() {
  return (
    <div className="navigation">
      <div className="max-container">
        <nav>
          <Link className="he-landing" to="/">
            Health Equity
          </Link>
          <AnchorLink to="/#healthequity" title="What is Health Equity">
            <span>What is Health Equity</span>
          </AnchorLink>
          <AnchorLink to="/#commitment" title="Our Commitment">
            <span>Our Commitment</span>
          </AnchorLink>
          <AnchorLink
            to="/#community"
            title="What we're doing in your community"
          >
            <span>What we're doing in your community</span>
          </AnchorLink>
          <AnchorLink to="/#advisory" title="Meet our Advisory Panel">
            <span>Advisory Board</span>
          </AnchorLink>
          {/* <AnchorLink to="/#news" title="News">
            <span>News</span>
          </AnchorLink> */}
          <AnchorLink to="/#presskit" title="Press Kit">
            <span>Press Kit</span>
          </AnchorLink>
          {/* <AnchorLink to="/#newsletter" title="Newsletter">
            <span>Newsletter</span>
          </AnchorLink> */}
        </nav>
      </div>
    </div>
  )
}

export default Navigation

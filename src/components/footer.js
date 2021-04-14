import React from "react"
import footerlogo from "../images/shields.svg"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

function Footer({ props, siteTitle }) {
  return (
    <>
      <footer className="footer">
        <div className="max-container">
          <div className="logo">
            <Link to="/">
              <img
                style={{ maxWidth: 160, marginBottom: 0 }}
                src={footerlogo}
                alt={siteTitle}
              />
            </Link>
          </div>
          <div className="footer-meta">
            <nav className="footer-navigation">
              <a href="https://www.bcbs.com/the-health-of-america/about">
                About
              </a>
              <a href="https://www.bcbs.com/terms-conditions">
                Terms & Conditions
              </a>
              <a href="https://www.bcbs.com/privacy-policy">Privacy Policy</a>
              <a href="https://www.bcbs.com/member-services">
                Find Your BCBS Plan
              </a>
              <a href="https://www.bcbs.com/contact-us">Contact Us</a>
              <a href="https://www.bcbs.com/">Back to BCBS.com</a>
              <a href="https://www.bcbs.com/the-health-of-america/health-index">
                BCBS Health Index
              </a>
            </nav>
            <div className="footer-copyright">
              © {new Date().getFullYear()} Blue Cross Blue Shield Association -
              All Rights Reserved. The Blue Cross Blue Shield Association is an
              association of independant, locally operated Blue Cross and Blue
              Shield Companies.
            </div>
          </div>
        </div>
      </footer>
      <AnchorLink className="backtotop" to="#top" title="Back to Top">
        <span>Back to Top</span>
      </AnchorLink>
    </>
  )
}

export default Footer

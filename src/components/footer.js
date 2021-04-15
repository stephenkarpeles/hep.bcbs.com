import React from "react"
import footerlogo from "../images/shields.svg"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"

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
            <div className="footer-social">
              <a
                href="https://www.facebook.com/BCBSAssociation"
                className="footer-social-link"
              >
                <StaticImage src="../images/icons/facebook.svg" alt="" />
              </a>
              <a
                href="https://twitter.com/BCBSAssociation"
                className="footer-social-link"
              >
                <StaticImage src="../images/icons/twitter.svg" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/blue-cross-and-blue-shield-association"
                className="footer-social-link"
              >
                <StaticImage src="../images/icons/youtube.svg" alt="" />
              </a>
              <a
                href="https://www.youtube.com/user/bluecrossblueshield"
                className="footer-social-link"
              >
                <StaticImage src="../images/icons/linkedin.svg" alt="" />
              </a>
              <a
                href="https://www.instagram.com/bcbsassociation/"
                className="footer-social-link"
              >
                <StaticImage src="../images/icons/instagram.svg" alt="" />
              </a>
            </div>
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

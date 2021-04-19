import React from "react"
import footerlogo from "../images/shields.svg"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import facebookIcon from "../images/icons/facebook.svg"
import facebookHover from "../images/icons/facebook-hover.svg"
import twitterIcon from "../images/icons/twitter.svg"
import twitterHover from "../images/icons/twitter-hover.svg"
import youtubeIcon from "../images/icons/youtube.svg"
import youtubeHover from "../images/icons/youtube-hover.svg"
import linkedinIcon from "../images/icons/linkedin.svg"
import linkedinHover from "../images/icons/linkedin-hover.svg"
import instagramIcon from "../images/icons/instagram.svg"
import instagramHover from "../images/icons/instagram-hover.svg"

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
                <img
                  src={facebookIcon}
                  alt=""
                  onMouseOver={e => (e.currentTarget.src = facebookHover)}
                  onMouseOut={e => (e.currentTarget.src = facebookIcon)}
                />
              </a>
              <a
                href="https://twitter.com/BCBSAssociation"
                className="footer-social-link"
              >
                <img
                  src={twitterIcon}
                  alt=""
                  onMouseOver={e => (e.currentTarget.src = twitterHover)}
                  onMouseOut={e => (e.currentTarget.src = twitterIcon)}
                />
              </a>
              <a
                href="https://www.youtube.com/user/bluecrossblueshield"
                className="footer-social-link"
              >
                <img
                  src={youtubeIcon}
                  alt=""
                  onMouseOver={e => (e.currentTarget.src = youtubeHover)}
                  onMouseOut={e => (e.currentTarget.src = youtubeIcon)}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/blue-cross-and-blue-shield-association"
                className="footer-social-link"
              >
                <img
                  src={linkedinIcon}
                  alt=""
                  onMouseOver={e => (e.currentTarget.src = linkedinHover)}
                  onMouseOut={e => (e.currentTarget.src = linkedinIcon)}
                />
              </a>
              <a
                href="https://www.instagram.com/bcbsassociation/"
                className="footer-social-link"
              >
                <img
                  src={instagramIcon}
                  alt=""
                  onMouseOver={e => (e.currentTarget.src = instagramHover)}
                  onMouseOut={e => (e.currentTarget.src = instagramIcon)}
                />
              </a>
            </div>
            <div className="footer-copyright">
              © {new Date().getFullYear()} Blue Cross Blue Shield Association -
              All Rights Reserved. The Blue Cross Blue Shield Association is an
              association of independent, locally operated Blue Cross and Blue
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

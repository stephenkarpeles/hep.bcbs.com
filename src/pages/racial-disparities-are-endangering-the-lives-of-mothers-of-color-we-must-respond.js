// Base Imports
import * as React from "react"
import Fade from "react-reveal/Fade"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

const WeMustRespond = props => {
  return (
    <div>
      <SEO
        title="Racial Disparities are Endangering the Lives of Mothers of
                    Color. We Must Respond."
        description="The United States is in the midst of a maternal health crisis, and new data from the Blue Cross Blue Shield Association shows that women of color continue to face a greater risk of childbirth complications compared to white women."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Racial Disparities are Endangering the Lives of Mothers of
                    Color. We Must Respond."
                url="https://aspenideas.org/articles/racial-disparities-are-endangering-the-lives-of-mothers-of-color-we-must-respond"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/blog-racial-disparities-are-endangering-the-lives-of-mothers-of-color-we-must-respond.jpg")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__date">
                  <span>Published June 1, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    Racial Disparities are Endangering the Lives of Mothers of
                    Color. We Must Respond.
                  </h1>
                </div>
                <div className="pp-hero__author">
                  <span>Kim Keck</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="pp-main">
        <Fade>
          <div className="pp-related"></div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <p>
                The United States is in the midst of a maternal health crisis,
                and new data from the Blue Cross Blue Shield Association shows
                that women of color continue to face a greater risk of
                childbirth complications compared to white women. As these
                disparities in maternal health care stem from a complex fabric
                of social, racial and economic issues, the time is now to
                confront and change the trajectory for mothers across the
                country.
              </p>
              <p>
                Read the{" "}
                <a
                  href="https://aspenideas.org/articles/racial-disparities-are-endangering-the-lives-of-mothers-of-color-we-must-respond"
                  target="_blank"
                  rel="noreferrer"
                >
                  full article
                </a>
                .
              </p>
              <p>
                <em>
                  The Blue Cross Blue Shield Association is a national
                  association of 35 independent, community-based and
                  locally operated Blue Cross and Blue Shield companies that
                  collectively provide healthcare coverage for one in three
                  Americans.
                </em>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default WeMustRespond

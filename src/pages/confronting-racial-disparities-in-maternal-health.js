// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { InstantSearch, InfiniteHits, Configure } from "react-instantsearch-dom"
import { searchClient, planResult } from "../components/Algolia"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

// Image
const mainImage =
  "https://www.bcbs.com/sites/default/files/healthequity/images/brief-confronting-racial-disparities-in-maternal-health.jpg"

const ConfrontingRacialDisparities = props => {
  return (
    <div>
      <SEO
        title="Confronting Racial Disparities in Maternal Health"
        description="Blue Cross Blue Shield Association hosted a discussion on racial health disparities, how to change their trajectory and solutions for Black maternal health."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Confronting Racial Disparities in Maternal Health"
                url="https://www.bcbs.com/the-health-of-america/healthequity/confronting-racial-disparities-in-maternal-health/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url(${mainImage})`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                {/* <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div> */}
                <div className="pp-hero__date">
                  <span>Published June 8, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    Webinar: Confronting Racial Disparities in Maternal Health
                  </h1>
                </div>
                {/* <div className="pp-hero__author">
                  <span>Carlton Houston</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="pp-main">
        <Fade>
          <div className="pp-related">
            {/* <h5 className="pp-related__title">Related</h5> */}
            <ul className="pp-related__list">
              {/* <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Press Release</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/press-releases/bcbsa-announces-national-health-equity-strategy-to-confront-nations-racial-health-disparities">
                    BCBS announces national health equity strategy to confront
                    the nation’s crisis in racial health disparities
                  </a>
                </div>
              </li> */}
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <div className="pp-video-wrapper">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/POLJCPP-2uc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p>
                During a{" "}
                <a
                  href="https://nabjonline.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  National Association of Black Journalists
                </a>{" "}
                webinar on May 19, 2021, Blue Cross Blue Shield Association
                previewed the Blue Cross Blue Shield,{" "}
                <a
                  href="https://www.bcbs.com/the-health-of-america/reports/racial-disparities-in-maternal-health"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Health of America Report®, “Racial Disparities in Maternal
                  Health”
                </a>{" "}
                and hosted a discussion with health equity leaders on the
                current state of racial disparities in healthcare, strategies to
                change the trajectory of disparities, and solutions for Black
                maternal health.
              </p>
              <p>
                Panelists included Blue Cross Blue Shield Association President
                and{" "}
                <a
                  href="https://www.bcbs.com/about-us/leadership/kim-keck"
                  target="_blank"
                  rel="noreferrer"
                >
                  CEO Kim Keck
                </a>
                , Congresswoman{" "}
                <a
                  href="https://underwood.house.gov/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lauren Underwood
                </a>{" "}
                (IL-14) and{" "}
                <a
                  href="https://directory.sph.umn.edu/bio/sph-a-z/rachel-hardeman"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rachel R. Hardeman
                </a>
                , PhD, MPH, Blue Cross Endowed Professor of Health and Racial
                Equity and founding director, Center for Antiracism Research for
                Health Equity, University of Minnesota, School of Public Health.
                The event was moderated by Cindy George, a health journalist.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* <Fade>
        <div className="pp-explore">
          <h2>Explore more stories</h2>
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles"
          >
            <Configure
              hitsPerPage={2}
              distinct
              filters="headline:'Kim Keck’s new Plan Profile' OR headline:'Eliminating food insecurity to improve maternal and fetal health'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade> */}
    </div>
  )
}

export default ConfrontingRacialDisparities

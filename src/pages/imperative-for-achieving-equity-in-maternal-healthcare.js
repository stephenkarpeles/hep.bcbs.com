// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { InstantSearch, Hits, Configure } from "react-instantsearch-dom"
import { searchClient, planResult } from "../components/Algolia"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

// Image
const mainImage =
  "https://www.bcbs.com/sites/default/files/healthequity/images/brief-imperative-for-achieving-equity-in-maternal-healthcare.jpg"

const ImperativeAcheivingEquity = props => {
  return (
    <div>
      <SEO
        title="The Imperative for Achieving Equity in Maternal Healthcare"
        description="Blue Cross Blue Shield Association, 4Kira4Moms and CareFirst BlueCross BlueShield discuss strategies employers can use to achieve equity in maternal healthcare."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="The Imperative for Achieving Equity in Maternal Healthcare"
                url="https://www.bcbs.com/the-health-of-america/healthequity/imperative-for-achieving-equity-in-maternal-healthcare/"
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
                    The Imperative for Achieving Equity in Maternal Healthcare
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
                  src="https://www.youtube.com/embed/RiWDVMfrupI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p>
                The Health of America report recently revealed Black and
                Hispanic women are more likely than white women to experience
                childbirth complications in the U.S. Watch as experts from Blue
                Cross Blue Shield Association, 4Kira4Moms and CareFirst
                BlueCross BlueShield sit down during Business Group on Health’s
                2021 Annual Conference to discuss strategies employers can use
                to help eliminate disparities and achieve equity in maternal
                healthcare.
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

            <Hits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade> */}
    </div>
  )
}

export default ImperativeAcheivingEquity

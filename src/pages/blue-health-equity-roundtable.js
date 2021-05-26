// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { InstantSearch, InfiniteHits, Configure } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "d5f4c69eedaa62952d698d108856f2a0"
)

const planResult = ({ hit }) => {
  const { headline, topic, plans, slug, teaser, img_url, read_time } = hit

  return (
    <div className="plan-result-card">
      <Link to={`/${slug}/`}></Link>
      <div className="plan-result-card-plan">
        <div className="plan-result-card-image">
          <img
            src={`https://www.bcbs.com/sites/default/files/healthequity/images/${img_url}`}
            alt=""
          />
        </div>
        <div className="plan-result-card-company">{plans}</div>
      </div>
      <div className="plan-result-card-meta">
        <div className="plan-result-card-category">{topic}</div>
        <div className="plan-result-card-title">{headline}</div>
        <div className="plan-result-card-excerpt">{teaser}</div>
        <div className="plan-result-card-read">{read_time} min read</div>
      </div>
    </div>
  )
}

const BlueHealthEquityRoundtable = props => {
  return (
    <div>
      <SEO
        title="Blue Health Equity Roundtable"
        description="An in-depth look at the current state of racial disparities in healthcare, as well as ways we can change the trajectory, and reimagine a more equitable healthcare system."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Blue Health Equity Roundtable"
                url="https://www.bcbs.com/the-health-of-america/healthequity/blue-health-equity-roundtable/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/health-equity-roundtable-alert-banner.jpg")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                {/* <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div> */}
                <div className="pp-hero__date">
                  <span>Published April 20, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>Blue Health Equity Roundtable</h1>
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
            <h5 className="pp-related__title">Related</h5>
            <ul className="pp-related__list">
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Press Release</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/press-releases/bcbsa-announces-national-health-equity-strategy-to-confront-nations-racial-health-disparities">
                    BCBS announces national health equity strategy to confront
                    the nation’s crisis in racial health disparities
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <div className="pp-video-wrapper">
                <iframe
                  loading="lazy"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/zczs34aYmiM"
                  title="Vimeo video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <p>
                The crisis in racial disparities in our country’s healthcare is
                unconscionable and unacceptable. Join Blue Cross Blue Shield
                Association President and CEO Kim Keck, Dr. Jackie Walters,
                OBGYN and cast member of Married to Medicine, March of Dimes CEO
                Stacey D. Stewart and CareFirst BlueCross BlueShield Executive
                Vice President of Health Services Stacia Cohen for an in-depth
                look at the current state of racial disparities in healthcare,
                ways we can change the trajectory of heath disparities and how
                we can reimagine a more equitable healthcare system.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <Fade>
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
      </Fade>
    </div>
  )
}

export default BlueHealthEquityRoundtable

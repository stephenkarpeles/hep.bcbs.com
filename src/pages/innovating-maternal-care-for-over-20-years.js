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

const InnovatingMaternalCare = props => {
  return (
    <div>
      <SEO
        title="Better Beginnings program supports new and expectant mothers"
        description="Since 1997, Blue Cross and Blue Shield of Vermont has been supporting new and expectant mothers with its comprehensive maternal care program Better Beginnings."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Innovating maternal care for over 20 years"
                url="https://www.bcbs.com/the-health-of-america/healthequity/innovating-maternal-care-for-over-20-years/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/brief-innovating-maternal-care-for-over-20-years.jpg")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__title">
                  <h1>Innovating maternal care for over 20 years</h1>
                </div>
                <div className="pp-hero__author">
                  <span>Brianna Keefe</span>
                </div>
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
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/bcbs-companies-support-new-and-expectant-mothers">
                    BCBS companies support new and expectant mothers
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/video-healthy-maternity-program-improves-access-care-mom-and-baby">
                    Healthy maternity program improves access to care for mom
                    and baby
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <p>
                Since 1997, Blue Cross and Blue Shield of Vermont (BCBS VT) has
                been supporting new and expectant mothers with its Better
                Beginnings program. Today, it is one of the most comprehensive
                maternal care management programs in the country, with a focus
                on maternal and child health, social connection and
                culturally-informed care. Better Beginnings boasts a nearly 70%
                engagement rate among BCBS VT’s expectant members. Participants
                benefit from wraparound support both before and after delivery.
                Enrollment begins with a comprehensive health risk assessment
                that includes mental and behavioral health factors, medical
                considerations, social connection, and language, cultural and
                religious considerations. From there, members are paired with a
                nurse case manager who can support their unique needs through
                pregnancy and beyond. Postpartum, new mothers are screened for
                depression and are encouraged to access lactation consultants to
                support mothers through the challenges they may experience with
                nursing.
              </p>
              <p>
                As part of the Blue Cross and Blue Shield National Health Equity
                commitment, BCBS VT is exploring ways to reach those mothers who
                are most in need of support.
              </p>
              <p>
                <em>
                  Blue Cross and Blue Shield of Vermont is an independent
                  licensee of the Blue Cross Blue Shield Association, an
                  association of independent, locally operated Blue Cross and
                  Blue Shield companies.
                </em>
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <Fade>
        <div className="pp-explore pp-explore-single-card">
          <h2>Explore more stories</h2>
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles"
          >
            <Configure
              hitsPerPage={2}
              distinct
              filters="headline:'Health education and culturally competent doula support for pregnant moms'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default InnovatingMaternalCare

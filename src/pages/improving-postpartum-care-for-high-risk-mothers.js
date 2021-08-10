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
  "https://www.bcbs.com/sites/default/files/healthequity/images/brief-improving-postpartum-care-for-high-risk-mothers.jpg"

const ImprovingPostpartumCare = props => {
  return (
    <div>
      <SEO
        title="Improving postpartum care for high-risk mothers"
        description="Premera Blue Cross and Blue Shield companies are committed to increasing postpartum care and improving postpartum health for their members in Washington and Alaska."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Improving postpartum care for high-risk mothers"
                url="https://www.bcbs.com/the-health-of-america/healthequity/improving-postpartum-care-for-high-risk-mothers/"
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
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__title">
                  <h1>Improving postpartum care for high-risk mothers</h1>
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
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/reports/trends-in-pregnancy-and-childbirth-complications-in-the-us">
                    Trends in Pregnancy and Childbirth Complications in the US
                  </a>
                </div>
              </li>
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
                  <span>Podcast</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/podcast/podcast-improving-maternal-health-starts-pregnancy">
                    Improving maternal health starts before pregnancy
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
                After giving birth, mothers often neglect their own needs while
                caring for their new babies. But for high-risk mothers--those
                facing significant social barriers like food insecurity or lack
                of transportation--neglecting these needs can have significant
                impacts on their health.
              </p>
              <p>
                <strong>Premera Blue Cross and Blue Shield companies</strong>{" "}
                (Premera) are committed to increasing postpartum care and
                improving health outcomes for their members in Washington and
                Alaska--especially for those members most in need. To achieve
                this goal, the company is addressing:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    Data collection and analysis -- using population health data
                    to identify and mitigate barriers to care among high-risk
                    mothers
                  </p>
                </li>
                <li>
                  <p>
                    Community and provider partnerships -- working with
                    community-based organizations and healthcare systems to
                    collect and share actionable data and to educate high-risk
                    mothers on the importance of postpartum care and remove
                    barriers to care
                  </p>
                </li>
                <li>
                  <p>
                    Member engagement -- Educating members directly about
                    recommended postpartum care and connecting them to needed
                    services and resources with and through community-based
                    organizations and healthcare systems
                  </p>
                </li>
              </ul>
              <p>
                <em>
                  Premera Blue Cross and Premera Blue Cross and Blue Shield are
                  independent licensees of the Blue Cross Blue Shield
                  Association, an association of independent, locally operated
                  Blue Cross and Blue Shield companies.
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
              filters="headline:'Using data and technology to identify and support high-risk pregnancies'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default ImprovingPostpartumCare

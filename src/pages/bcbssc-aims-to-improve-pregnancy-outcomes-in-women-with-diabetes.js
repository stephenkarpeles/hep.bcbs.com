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

const ImprovePregnancyOutcomes = props => {
  return (
    <div>
      <SEO
        title="Improving pregnancy outcomes in women with diabetes"
        description="Statewide initiative in South Carolina dedicated to addressing disparities in care including improved pregnancy outcomes in women with diabetes."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="BlueCross BlueShield of South Carolina aims to improve pregnancy outcomes in women with diabetes"
                url="https://www.bcbs.com/the-health-of-america/healthequity/bcbcs-sc-aims-to-improve-pregnancy-outcomes-in-women-with-diabetes/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/feature-bcbssc-aims-to-improve-pregnancy-outcomes-in-women-with-diabetes.jpg")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    BlueCross BlueShield of South Carolina aims to improve
                    pregnancy outcomes in women with diabetes
                  </h1>
                </div>
                <div className="pp-hero__author">
                  <span>Carlton Houston</span>
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
                BlueCross BlueShield of South Carolina and the BlueCross
                BlueShield of South Carolina Foundation launched Diabetes Free
                SC, an ambitious, long-term multi-million dollar, statewide
                initiative dedicated to addressing disparities in care in
                several strategic areas including improved pregnancy outcomes in
                women with diabetes.  According to the American Diabetes
                Association (ADA), more than 500,000 adults in the state have
                diagnosed diabetes while an additional 120,000 are unaware that
                they have the disease. African-Americans have a two times higher
                death rate from the disease than white adults.
              </p>
              <p>
                According to David Pankau, president and CEO of BlueCross
                BlueShield of South Carolina, this effort reflects the
                organization’s commitment to improving the health of South
                Carolina communities. He said, “We have a long history of
                ensuring access to care through the work of the BlueCross
                BlueShield of South Carolina Foundation. We understand that our
                organization can play a meaningful role in reducing disparities
                of care for the people of South Carolina. And, even as we build
                upon the good work already being done, our efforts to address
                disparities and assist in overcoming barriers to care continue
                to develop and mature. We are putting a stake in the ground with
                our commitment.”
              </p>
              <p>Additional Facts:</p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    26,000 people in South Carolina will be diagnosed this year
                    with diabetes.
                  </p>
                </li>
                <li>
                  <p>
                    Nearly 35% of the state’s adult population has prediabetes.
                  </p>
                </li>
                <li>
                  <p>
                    In addition to pregnancy, diabetes is also a significant
                    factor in other conditions including kidney and
                    cardiovascular disease, which disproportionately affects
                    African-Americans.
                  </p>
                </li>
                <li>
                  <p>
                    Goals of the program also include reduced lifelong risk of
                    diabetes in children; and the prevention of diabetes and its
                    complications in adults.
                  </p>
                </li>
                <li>
                  <p>
                    The annual cost of care for adult South Carolinians with
                    diagnosed diabetes is estimated at $5.89 billion (2017)
                  </p>
                </li>
              </ul>
              <p>
                <em>
                  BlueCross BlueShield of South Carolina and the BlueCross
                  BlueShield of South Carolina Foundation are independent
                  licensees of the Blue Cross Blue Shield Association, an
                  association of independent, locally operated Blue Cross and
                  Blue Shield companies.
                </em>
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
              filters="headline:'Improving postpartum care for high-risk mothers' OR headline:'Maternity coordinators help manage high risk conditions'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default ImprovePregnancyOutcomes

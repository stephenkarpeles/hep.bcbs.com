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
  "156ba268a0517559cd6a89921ae9cb5f"
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

const WrapAroundCare = props => {
  return (
    <div>
      <SEO
        title="Supporting mothers and babies most in need"
        description="To support pregnant women and their infants, Blue Cross and Blue Shield of Illinois (BCBSIL) is providing new resources to help improve health outcomes of people in underserved communities across Illinois."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Reducing disparities and expanding care for expectant mothers and babies"
                url="https://www.bcbs.com/the-health-of-america/healthequity/reducing-disparities-and-expanding-care-for-expectant-mothers-and-babies/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/brief-supporting-mothers-and-babies-most-in-need-with-wraparound-care.png")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                {/* <div className="pp-hero__date">
                  <span>Published March 3, 2021</span>
                </div> */}
                <div className="pp-hero__title">
                  <h1>
                    Reducing disparities and expanding care for expectant
                    mothers and babies
                  </h1>
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
                The United States has the{" "}
                <a
                  href="https://www.commonwealthfund.org/publications/issue-briefs/2020/nov/maternal-mortality-maternity-care-us-compared-10-countries"
                  target="_blank"
                >
                  highest maternal and infant mortality rates
                </a>{" "}
                in comparison to other developed countries, and the{" "}
                <a
                  href="https://www.cdc.gov/nchs/maternal-mortality/index.htm"
                  target="_blank"
                >
                  statistics
                </a>{" "}
                are worse for women of color. These disparities are leading to
                worsening health outcomes for pregnant and post-partum women,
                particularly in low-income and remote communities.
              </p>
              <p>
                In an effort to help improve these statistics, BCBSIL is
                supporting parents in Chicago’s South and West Side
                neighborhoods by providing funding to community-based
                organizations working to improve maternal health outcomes. The
                organizations utilize doulas, midwives and telemedicine to
                provide education, labor care, breastfeeding help and postpartum
                support within a culturally appropriate lens.
              </p>
              <p>
                BCBSIL is also teaming up with Centering Healthcare Institute, a
                non-profit focused on delivering better health outcomes and
                improving the care experience for patients and their doctors.
                Through a three-year grant, BCBSIL will be bringing CHI’s
                CenteringPregnancy program to a number of Federally Qualified
                Health Centers (FQHCs) that focus on serving underserved and
                at-risk populations.
              </p>
              <p>
                <em>
                  Blue Cross and Blue Shield of Illinois is an independent
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
        <div className="pp-explore">
          <h2>Explore more stories</h2>
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles"
          >
            <Configure
              hitsPerPage={2}
              distinct
              filters="headline:'Innovating maternal care for over 20 years' OR headline:'Health education and culturally competent doula support for pregnant moms'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default WrapAroundCare

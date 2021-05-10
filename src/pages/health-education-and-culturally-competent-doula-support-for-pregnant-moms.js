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

const HealthEducation = props => {
  return (
    <div>
      <SEO
        title="Health education and doula support for pregnant moms"
        description="Working with a doula can help counter racial disparities and lead to better health outcomes for women of color and their babies"
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Health education and doula support for pregnant moms"
                url="https://www.bcbs.com/the-health-of-america/healthequity/health-education-and-culturally-competent-doula-support-for-pregnant-moms/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/brief-health-education-and-culturally-competent-doula-support-for-pregnant-moms.jpg")`,
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
                  <h1>Health education and doula support for pregnant moms</h1>
                </div>
                <div className="pp-hero__author">
                  <span>Kristin Gourlay</span>
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
                    Trends in pregnancy and childbirth complications in the U.S.
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
                Doula care is available for Medicaid members in several of
                Anthem Blue Cross and Blue Shield (Anthem BCBS) markets based on
                benefits and eligibility. When possible, pregnant mothers of
                color are matched with doulas of color to provide culturally
                sensitive care.
              </p>
              <p>
                In addition, Anthem BCBS’s New Baby, New LifeSM and Taking Care
                of Baby and Me® are comprehensive care management programs
                focused on improving prenatal health and birth outcomes for
                pregnant Medicaid members:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    Pregnant members receive proactive, culturally appropriate
                    outreach and twice- weekly educational support for both
                    prenatal and postpartum needs through phone, apps or on a
                    website depending on a member’s preferences.
                  </p>
                </li>
                <li>
                  <p>
                    Members who consent to case management receive additional
                    support from skilled clinicians who coordinate access to
                    prenatal services, address gaps in care and social drivers
                    of health that may be impacting both mother and baby.
                  </p>
                </li>
                <li>
                  <p>
                    Case management focuses on helping mothers manage high risk
                    conditions such as preeclampsia, diabetes or gestational
                    diabetes, substance use disorder or a previous pre-term
                    delivery.
                  </p>
                </li>
              </ul>
              <p>
                <em>
                  Anthem Blue Cross and Blue Shield is an independent licensee
                  of the Blue Cross Blue Shield Association, an association of
                  independent, locally operated Blue Cross and Blue Shield
                  companies.
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
              filters="headline:'How doulas can improve the safety of childbirth for women of color' OR headline:'Culturally appropriate interventions for mothers and newborns'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default HealthEducation

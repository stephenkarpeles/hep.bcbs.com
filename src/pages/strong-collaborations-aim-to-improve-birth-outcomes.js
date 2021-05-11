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

const StrongCollaborations = props => {
  return (
    <div>
      <SEO
        title="Strong collaborations with BlueCross BlueShield of South Carolina aim to improve birth outcomes"
        description="BlueCross BlueShield of South Carolina (BlueCross SC) is improving maternal care as a leading partner of the Birth Outcomes Initiative (BOI)"
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Strong collaborations aim to improve birth outcomes"
                url="https://www.bcbs.com/the-health-of-america/healthequity/strong-collaborations-aim-to-improve-birth-outcomes/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/feature-in-new-jersey-addressing-mood-disorders-in-black-postpartum-women-a.png")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__title">
                  <h1>Strong collaborations aim to improve birth outcomes</h1>
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
                  <span>Podcast</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/podcast/podcast-improving-maternal-health-starts-pregnancy">
                    Improving maternal health starts before pregnancy
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
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <p>
                BlueCross BlueShield of South Carolina (BlueCross SC) is
                improving maternal care as a leading partner of the Birth
                Outcomes Initiative (BOI). The program is a partnership
                between the South Carolina Department of Health and Human
                Services (SCDHHS), The South Carolina Hospital Association
                (SCHA), March of Dimes, BlueCross SC and more than 100 other
                stakeholders to improve health outcomes for newborns in the
                Medicaid program and throughout the state. The goal is to unite
                private and public organizations to lower preterm birth, the
                leading cause of infant death in the state, through pledges from
                hospitals to end non-medically indicated elective inductions,
                public and private alignment on a non-payment policy and
                outreach to at-risk mothers.
              </p>
              <p>
                Launched in 2011, the BOI has three interconnected goals that
                work together to improve birth outcomes throughout the state,
                including:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>Reducing the number of low birth weight babies </p>
                </li>
                <li>
                  <p>Reducing NICU admissions and stays</p>
                </li>
                <li>
                  <p>Reducing racial disparities in birth outcomes</p>
                </li>
              </ul>
              <p>
                An early effort of the South Carolina BOI was to end elective
                inductions for non-medically indicated deliveries prior to 39
                weeks and make resources available to at-risk mothers. The State
                of South Carolina used its multi-stakeholder BOI to reduce
                early-term, elective inductions by 50 percent, improving birth
                outcomes while saving the state and the federal government $6
                million in Medicaid spending for the first quarter of fiscal
                year 2013.
              </p>
              <p>
                How it works: Partnered with leaders from key clinical
                organizations and gained agreement from all birthing hospitals
                to stop early elective deliveries. - Implemented a policy of
                non-payment for early elective deliveries without medical
                necessity, a private and public (Medicaid) solution. - Leveraged
                member maternity programs and the Centering Pregnancy model of
                care.
              </p>
              <p>
                The BOI contains a number of components, including a policy
                adopted by the South Carolina Department of Health and Human
                Services (DHHS) and BlueCross BlueShield of South Carolina
                (BlueCross SC), the state’s largest commercial insurer, to stop
                paying for early elective deliveries (elective inductions and
                cesarean deliveries prior to 39 weeks gestation). South Carolina
                was the first state in the nation where both public (Medicaid)
                and private (BlueCross SC) entities implemented the same
                non-payment policy for early elective deliveries for both
                hospitals and physicians. BlueCross SC conducted extensive
                outreach to its large employer customers so the policy change
                would not be a surprise.
              </p>
              <p>
                <em>
                  BlueCross BlueShield of South Carolina is an independent
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
              filters="headline:'How doulas can improve the safety of childbirth for women of color' OR headline:'Culturally appropriate interventions for mothers and newborns'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default StrongCollaborations

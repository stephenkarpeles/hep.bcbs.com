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

const NewJerseyHorizon = props => {
  return (
    <div>
      <SEO
        title="Addressing postpartum mood disorders in Black mothers"
        description="Horizon Blue Cross Blue Shield of New Jersey is digging into the root causes of why Black women aren’t getting the postpartum mood disorder treatment they need."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="In New Jersey, Horizon addressing postpartum depression and other mood disorders in Black mothers"
                url="https://www.bcbs.com/the-health-of-america/healthequity/in-new-jersey-horizon-addressing-postpartum-depression-and-other-mood-disorders-in-black-mothers/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/brief-in-new-jersey-horizon-addressing-postpartum-depression-and-other-mood-disorders-in-black-mothers.jpg")`,
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
                    In New Jersey, Horizon addressing postpartum depression and
                    other mood disorders in Black mothers
                  </h1>
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
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/pediatricians-screen-new-moms-postpartum-depression">
                    Pediatricians screen new moms for postpartum depression
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/lowering-chronic-disease-makes-childbirth-safer-mississippi-women">
                    Lowering chronic disease makes childbirth safer for
                    Mississippi women
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
                About one in nine mothers experiences postpartum depression or
                another mood disorder in the U.S., a condition that can be
                crippling for a new mother and affect a newborn’s development.
                For Black mothers, rates of postpartum depression may be even
                higher, but many are never diagnosed. Horizon Blue Cross and
                Blue Shield of New Jersey has forged a unique partnership with
                the state’s Medicaid agency and the state’s largest health
                system, RWJBarnabas Health. University of Chicago researchers
                are guiding the team’s work. Together, they’ve been digging into
                the root causes behind disparities in postpartum depression
                diagnosis rates and mapping out the best ways to intervene.
              </p>
              <p>
                Discussions of a pilot are underway to train clinicians in
                culturally sensitive methods of diagnosing postpartum depression
                in Black women and use community health workers to help connect
                women with follow-up appointments.
              </p>
              <p>
                <em>
                  Horizon Blue Cross Blue Shield of New Jersey is an independent
                  licensee of the Blue Cross Blue Shield Association, an
                  association of independent, locally operated Blue Cross and
                  Blue Shield companies.
                </em>
              </p>
              <p>
                <em>
                  RWJBarnabas Health is the largest, most comprehensive academic
                  health care system in New Jersey with a service area covering
                  nine counties with five million people.
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
              filters="headline:'How doulas can improve the safety of childbirth for women of color' OR headline:'Improving postpartum care for high-risk mothers'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default NewJerseyHorizon

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

const EquitableQualityCare = props => {
  return (
    <div>
      <SEO
        title="Reimagining prenatal and postpartum care for Black women"
        description="To transform the maternal care experience for Black women and their babies, Blue Shield of California is reimagining the prenatal/postpartum care experience."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Pursuing equitable, quality care for Black mothers and babies"
                url="https://www.bcbs.com/the-health-of-america/healthequity/pursuing-equitable-quality-care-for-black-mothers-and-babies/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/brief-pursuing-equitable-quality-care-for-black-mothers-and-babies.jpg")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    Pursuing equitable, quality care for Black mothers and
                    babies
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
            {/* <ul className="pp-related__list">
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Health of America</span>
                </div>
                <div className="pp-related__text">
                  <Link to="/">
                    Doulas of color can help moms of color have healthier babies
                  </Link>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <Link to="/">
                    Inclusive and equitable perinatal care for pregnant Black
                    women
                  </Link>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <Link to="/">
                    In New Jersey, addressing postpartum depression in Black
                    mothers
                  </Link>
                </div>
              </li>
            </ul> */}
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <p>
                In the U.S., Black women face significant disparities in their
                health, driven largely by systemic racism and discrimination.
                Compared to white mothers, for example,{" "}
                <a
                  href="https://www.ajmc.com/view/racial-disparities-persist-in-maternal-morbidity-mortality-and-infant-health"
                  target="_blank"
                >
                  Black mothers face
                </a>{" "}
                3x higher rates of maternal mortality and 2x higher rates of
                maternal morbidity.
              </p>
              <p>
                To transform the maternal care experience for Black women and
                their babies, Blue Shield of California is reimagining the
                prenatal and postpartum care experience. The health plan is
                piloting solutions that address community advocacy, improved
                access to medical, behavioral, mental and social care, provide
                culturally competent support systems and improve quality of
                care. Solutions may include tapping into community-based
                experts, for example trauma-informed doulas, to champion the
                needs of Black mothers and infants, including increasing access
                to critical maternal care services, increasing their maternal
                quality of care and addressing maternal behavioral health.
              </p>
              <p>
                <em>
                  Blue Shield of California is an independent licensee of the
                  Blue Cross Blue Shield Association, an association of
                  independent, locally operated Blue Cross and Blue Shield
                  companies.
                </em>
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* <Fade>
        <div className="pp-explore">
          <h2>Explore more stories</h2>
          <InstantSearch searchClient={searchClient} indexName="he_plan_profiles">
            <Configure
              hitsPerPage={2}
              distinct
              filters="headline:'Strong partnerships aim to improve birth outcomes' OR headline:'Culturally appropriate interventions for mothers and newborns'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade> */}
    </div>
  )
}

export default EquitableQualityCare

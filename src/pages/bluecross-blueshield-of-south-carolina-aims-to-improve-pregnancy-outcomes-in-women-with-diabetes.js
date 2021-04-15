// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import {
  InstantSearch,
  SearchBox,
  InfiniteHits,
  Configure,
  RefinementList,
  MenuSelect,
  ClearRefinements,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Images
import nursePatientImg from "../images/nurse-patient-1.jpg"

// Sharing
import Sharing from "../components/Sharing/sharing"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

const planResult = ({ hit }) => {
  const { title, category, plan, url, excerpt, img_url } = hit

  return (
    <div className="plan-result-card">
      <Link to={url}>
        <div className="plan-result-card-plan">
          <div className="plan-result-card-image">
            <img src={img_url} />
          </div>
          <div className="plan-result-card-company">{plan}</div>
        </div>
        <div className="plan-result-card-meta">
          <div className="plan-result-card-category">{category}</div>
          <div className="plan-result-card-title">{title}</div>
          <div className="plan-result-card-excerpt">{excerpt}</div>
        </div>
      </Link>
    </div>
  )
}

const PlanProfile4 = props => {

  return (
    <div>
      <SEO title="BlueCross BlueShield of South Carolina aims to improve pregnancy outcomes in women with diabetes" />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="BlueCross BlueShield of South Carolina aims to improve pregnancy outcomes in women with diabetes"
                url={window.location.href}
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{ backgroundImage: `url(${nursePatientImg})` }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__date">
                  <span>Published March 3, 2021</span>
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
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <p>
                BlueCross BlueShield of South Carolina and the BlueCross
                BlueShield of South Carolina Foundation launched Diabetes Free
                SC, a multi-million dollar, statewide initiative dedicated to
                addressing disparities in care in several strategic areas
                including improved pregnancy outcomes in women with diabetes.
                BCBSSC is joining with several organizations well-established in
                the trenches of diabetes care. According to the American
                Diabetes Association (ADA), more than 500,000 adults in the
                state have diagnosed diabetes while an additional 120,000 are
                unaware that they have the disease. African-Americans have a two
                times higher death rate from the disease than white adults.
              </p>
              <p>
                According to David Pankau, president and CEO of BlueCross
                BlueShield of South Carolina, this effort reflects the
                organization’s commitment to improving the health of South
                Carolina communities. He said, “We believe that we can play a
                meaningful role in reducing disparities of care. Our vision for
                making a difference in this space has been under discussion for
                a long time. There is even more urgency now as diabetes brings
                additional risk in the midst of skyrocketing COVID-19 rates. As
                we build upon the good work already being done, we are putting a
                stake in the ground with our commitment.”
              </p>
              <blockquote>
                There is even more urgency now as diabetes brings additional
                risk in the midst of skyrocketing COVID-19 rates. As we build
                upon the good work already being done, we are putting a stake in
                the ground with our commitment.
              </blockquote>
              <p>Additional facts:</p>
              <ul>
                <li>
                  26,000 people in South Carolina will be diagnosed this year
                  with diabetes.{" "}
                </li>
                <li>
                  Nearly 35% of the state’s adult population has prediabetes.{" "}
                </li>
                <li>
                  In addition to pregnancy, diabetes is also a significant
                  factor in other conditions including kidney and cardiovascular
                  disease, which disproportionately affects African-Americans.{" "}
                </li>
                <li>
                  Goals of the program also include reduced lifelong risk of
                  diabetes in children; and the prevention of diabetes and its
                  complications in adults.
                </li>
                <li>
                  The annual cost of care for adult South Carolinians with
                  diagnosed diabetes is estimated at $5.89 billion (2017).
                </li>
              </ul>
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
          <InstantSearch searchClient={searchClient} indexName="test_index">
            <Configure hitsPerPage={2} distinct />

            <InfiniteHits
              hitComponent={planResult}
              translations={{
                loadMore: "Load more",
              }}
            />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default PlanProfile4

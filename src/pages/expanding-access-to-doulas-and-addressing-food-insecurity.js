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
  "https://www.bcbs.com/sites/default/files/healthequity/images/brief-expanding-access-to-doulas-and-addressing-food-insecurity.jpg"

const ExpandingAccess = props => {
  return (
    <div>
      <SEO
        title="Expanding access to doulas and addressing food insecurity"
        description="Access to supportive, culturally sensitive prenatal care can make the difference for pregnant women at risk of birth complications."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Expanding access to doulas and addressing food insecurity"
                url="https://www.bcbs.com/the-health-of-america/healthequity/expanding-access-to-doulas-and-addressing-food-insecurity/"
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
                {/* <div className="pp-hero__date">
                  <span>Published March 3, 2021</span>
                </div> */}
                <div className="pp-hero__title">
                  <h1>
                    Expanding access to doulas and addressing food insecurity
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
                  <a href="https://www.bcbs.com/the-health-of-america/articles/standardized-screening-social-determinants-of-health-means-holistic">
                    Standardized screening for social determinants of health
                    means holistic healthcare from the first appointment
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
                <strong>Food insecurity</strong>: Limited or uncertain access to
                nutritious food can be harmful during and after pregnancy for
                both mother and baby. The burden of food insecurity is borne
                disproportionately by women of color. That’s why Blue Cross and
                Blue Shield of Minnesota is offering mothers and families in
                need clinically tailored meals and food boxes as well as
                nutritional coaching. Members can start as early as 20 weeks
                into their pregnancy and continue through the second month after
                birth. The healthy food program is a partnership with Project
                Well and Second Harvest Heartland, which will deliver the food
                and the coaching. Members can also be connected to other food
                benefits and resources to meet other needs through case
                management.
              </p>
              <p>
                <strong>Doulas</strong>: Access to supportive, culturally
                sensitive prenatal care can make the difference for pregnant
                women at risk of birth complications. A doula is a woman trained
                to support pregnant women emotionally and physically during
                pregnancy, childbirth and postpartum. There’s evidence to
                suggest that working with a doula can reduce negative health
                outcomes among women of color. The Plan is addressing the
                sustainability of the doula model, including increases in
                reimbursement, culturally appropriate access, workforce
                development scholarships and member education.
              </p>
              <p>
                <em>
                  Blue Cross and Blue Shield of Minnesota is an independent
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
              filters="headline:'How doulas can improve the safety of childbirth for women of color' OR headline:'Strong collaborations aim to improve birth outcomes'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default ExpandingAccess

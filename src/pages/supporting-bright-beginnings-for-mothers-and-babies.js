// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { InstantSearch, Hits, Configure } from "react-instantsearch-dom"
import { searchClient, planResult } from "../components/Algolia"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

// Image
const mainImage =
  "https://www.bcbs.com/sites/default/files/healthequity/images/brief-supporting-bright-beginnings-for-mothers-and-babies.jpg"

const BrightBeginnings = props => {
  return (
    <div>
      <SEO
        title="Helping expectant mothers have safer, healthier pregnancies"
        description="Pairing Black and Brown mothers with culturally competent care, delivering groceries, and providing addiction support to mothers during and after pregnancy."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Supporting bright beginnings for mothers and babies"
                url="https://www.bcbs.com/the-health-of-america/healthequity/supporting-bright-beginnings-for-mothers-and-babies/"
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
                  <h1>Supporting bright beginnings for mothers and babies</h1>
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
                In Upstate New York, Excellus BlueCross BlueShield (Excellus
                BCBS) is helping new and expectant mothers have safer, healthier
                pregnancies. The health insurer is pairing expectant women of
                color with culturally competent care, delivering groceries to
                food-insecure households, and providing addiction support to
                mothers during and after pregnancy.
              </p>
              <p>
                Doulas are nonmedical professionals who provide physical,
                emotional and educational support to mothers before, during and
                after birth. Excellus BCBS is supporting Syracuse Community
                Connections in bringing this one-on-one care to new and
                expectant mothers in Upstate New York. The program brings
                culturally competent mentorship to women in underserved Black
                and Brown communities who may need further support than they
                receive in the hospital setting. Beyond traditional support,
                participating doulas also help mothers access the care they
                need, provide breastfeeding coaching and screen for postpartum
                depression.
              </p>
              <p>
                The health insurer has also partnered with FoodLink, a local
                food bank, to pilot a nutrition program for pregnant women with
                high-risk needs and significant food insecurity. Sound
                nutritional health is critical for the health of mothers and
                babies. To make sure expectant mothers do not lose access to
                this resource through the COVID-19 pandemic, Excellus BCBS
                helped adapt this program to provide food delivery service.
              </p>
              <p>
                For women with substance use disorder (SUD), Excellus BCBS has
                adapted its traditional maternal care program for specialized
                support. The Enhanced Bright Beginnings program helps pregnant
                women in any stage of addiction--whether they are actively using
                or substance-free. The goal: to help expectant and new mothers
                avoid substance use and relapse both during and after pregnancy.
                Each woman is paired with two care managers: a registered nurse
                and a certified alcohol and substance abuse counselor (CASAC)
                specializing in addiction support. These professionals also
                monitor for additional needs mothers may have, like access to
                healthy food, and offer emotional support to the women in their
                care.
              </p>
              <p>
                <em>
                  Excellus BlueCross BlueShield is a nonprofit independent
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
              filters="headline:'Inclusive and equitable perinatal care for pregnant Black women'"
            />

            <Hits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default BrightBeginnings

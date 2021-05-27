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

const DataDrivenStrategies = props => {
  return (
    <div>
      <SEO
        title="Data-driven strategies to address disparities in maternal care"
        description="Using a data-first approach to inform better interventions in care to reduce health disparities among communities of color and support expectant mothers."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Data-driven strategies to address disparities in maternal care"
                url="https://www.bcbs.com/the-health-of-america/healthequity/data-driven-strategies-to-address-disparities-in-maternal-care/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/brief-data-driven-strategies-to-address-disparities-in-maternal-care.jpg")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    Data-driven strategies to address disparities in maternal
                    care
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
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/reports/cesarean-birth-trends-where-you-live-significantly-impacts-how-you">
                    Cesarean birth trends: Where you live significantly impacts
                    how you give birth
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/video-clinical-trials-everyone-needs-seat-the-table">
                    In clinical trials, everyone needs a seat the table
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
                To reduce health disparities among communities of color and
                support expectant mothers, Independence Blue Cross (Independence
                BC) is taking a data-driven and community-based approach to
                inform better interventions in care.
              </p>
              <p>
                Recognizing that the health needs of economically distressed
                neighborhoods cannot only be met through the doctor's office,
                Independence BC joined forces with Project HOME and AmeriHealth
                Caritas to address significant health disparities experienced in
                North Philadelphia. The area's predominantly Black and Hispanic
                residents face lower life expectancies and higher rates of
                infant mortality than their counterparts elsewhere the city.
                Through the Keystone Connection to Wellness initiative,
                expectant mothers in North Philadelphia are participating in
                Project Home’s Centering Pregnancy program − a national,
                evidence-based maternal health model.
              </p>
              <p>
                To better understand how social determinants of health impact
                high-risk maternity patients, Independence BC is also building
                predictive models into its existing maternal care program: Baby
                Blueprints. Available to all expectant members, the program
                supports women before, during and after birth. This work
                includes behavioral health screenings and social need
                assessments for factors including transportation, food security
                and financial wellbeing. By incorporating predictive
                capabilities into this program, Independence hopes to better
                understand and support the complex needs of high-risk mothers.
              </p>
              <p>
                Through the Independence Blue Cross Foundation, the health
                insurer is also participating in and helping fund a novel study
                on the impact of the COVID-19 lockdown on pre-term birth
                outcomes. The study is led by Yale University, University of
                Pennsylvania, Northwestern University, the Children's Hospital
                of Philadelphia and Nemours Children's Hospital and will use
                member data from Independence BC, Highmark Blue Shield of
                Delaware, Yale and the University of Pennsylvania Health System.
                The first study of its kind in the U.S., researchers will
                examine both spontaneous and medically indicated preterm births
                as well as stillbirth rates--especially among communities of
                color, which see disproportionate rates of preterm births.
              </p>
              <p>
                In addition, Independence BC’s subsidiary Keystone First
                operates a Bright Start Maternity Program that includes:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    Nurse care managers to facilitate access to specialists,
                    screenings and support resources;
                  </p>
                </li>
                <li>
                  <p>
                    Maternity navigators, including SDOH assessments and
                    referrals;
                  </p>
                </li>
                <li>
                  <p>
                    A cell phone program for moderate- to high-risk pregnant
                    women;
                  </p>
                </li>
                <li>
                  <p>
                    Community partnerships to support home visiting programs
                    from pregnancy through age 6;
                  </p>
                </li>
                <li>
                  <p>Lactation support;</p>
                </li>
                <li>
                  <p>Postpartum visit coordination;</p>
                </li>
                <li>
                  <p>
                    A behavioral health/substance abuse disorder integrated care
                    program; and
                  </p>
                </li>
                <li>
                  <p>Nutrition programs and services</p>
                </li>
              </ul>
              <p>
                <em>
                  Independence Blue Cross, the Independence Blue Cross
                  Foundation and Keystone First, coverage by Vista Health Plan
                  and Highmark Blue Shield of Delaware, are independent licensee
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
              filters="headline:'Breaking through bias in maternity care' OR headline:'Targeting health equity with community health workers leading the way'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default DataDrivenStrategies

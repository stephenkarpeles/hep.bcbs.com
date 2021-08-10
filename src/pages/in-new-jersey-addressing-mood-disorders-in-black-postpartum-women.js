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
  "https://www.bcbs.com/sites/default/files/healthequity/images/brief-strong-collaborations-aim-to-improve-birth-outcomes.png"

const PlanProfile2 = props => {
  return (
    <div>
      <SEO
        title="Addressing postpartum in Black women"
        description="Horizon Blue Cross Blue Shield of New Jersey is working to ensure Black mothers receive the care they need for postpartum depression and other mood disorders."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="In New Jersey, addressing mood disorders in postpartum Black women"
                url="https://www.bcbs.com/the-health-of-america/healthequity/in-new-jersey-addressing-mood-disorders-in-black-postpartum-women/"
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
                    In New Jersey, addressing mood disorders in postpartum Black
                    women
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
                About{" "}
                <a
                  href="https://www.womenshealth.gov/mental-health/mental-health-conditions/postpartum-depression#13"
                  target="_blank"
                  rel="noreferrer"
                >
                  one in nine mothers
                </a>{" "}
                experiences postpartum depression or another mood disorder in
                the U.S., a condition that can be crippling for a new mother and
                affect a newborn’s development. For Black mothers, rates of
                postpartum depression may be even higher, but many are never
                diagnosed. Horizon Blue Cross Blue Shield of New Jersey
                (Horizon) experts believe that highlights another racial
                disparity in the way Black mothers receive care, disparities
                that have led to this alarming statistic: New Jersey has the
                highest maternal mortality rate in the nation (among states that
                report this data). So the health plan is on a mission to make
                sure Black mothers and babies thrive. It’s just one part of
                Horizon’s pledge to eliminate health disparities.
              </p>
              <h4>
                Identifying the root causes and the smartest interventions
              </h4>
              <p>
                The key is a unique partnership between the state’s Medicaid
                agency, Horizon, which manages more than a million Medicaid
                members and the state’s largest health system, RWJBarnabas
                Health. University of Chicago researchers are guiding the team’s
                work, using evidence-based strategies. Together, they’ve been
                digging into the root causes behind disparities in postpartum
                depression or other mood disorder diagnosis rates and mapping
                out the best ways to intervene.
              </p>
              <blockquote>
                Postpartum depression may not be expressed the same way by Black
                women. They may experience physical symptoms. They may
                experience stigma in their own communities when it comes to
                depression.
              </blockquote>
              <h4>
                Why Black women may not be getting equitably diagnosed or
                treated{" "}
              </h4>
              <p>
                Many doctors use a standard method for screening for postpartum
                depression. But Horizon’s Valerie Harr says that method may fall
                short for Black mothers “Postpartum depression may not be
                expressed the same way by Black women,” says Harr. “They may
                experience physical symptoms. They may experience stigma in
                their own communities when it comes to depression,” which means
                they may not be as comfortable reaching out for help.
              </p>
              <p>
                Harr says the team’s analysis also found that Black mothers may
                not be able to access postpartum care as easily as their white
                counterparts. They may need transportation, child care or help
                paying out-of-pocket costs for appointments. Medicaid patients
                face the biggest barriers to care.
              </p>
              <p>
                In addition, there may be stigma associated with seeking
                behavioral healthcare.
              </p>
              <h4>
                Designing a new approach to helping Black mothers receive
                postpartum care
              </h4>
              <p>
                Harr says Horizon will pilot some solutions with Medicaid
                patients in Newark, N.J., an area with some of the most tragic
                outcomes for Black mothers and babies. In the near future, Harr
                says Horizon can:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    Tap into the expertise of community health workers and
                    doulas to address the social determinants of health that
                    affect participants
                  </p>
                </li>
                <li>
                  <p>
                    Provide culturally sensitive health education for
                    participants and healthcare providers
                  </p>
                </li>
                <li>
                  <p>
                    Help raise awareness among clinicians about how to find and
                    make effective referrals for postpartum behavioral health
                    treatment
                  </p>
                </li>
              </ul>
              <p>
                The health plan and its partners will also be piloting programs
                to:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    Educate clinicians about culturally appropriate ways to
                    diagnose postpartum mood disorders
                  </p>
                </li>
                <li>
                  <p>
                    Encourage providers to reach out proactively to Black
                    mothers for follow up visits
                  </p>
                </li>
                <li>
                  <p>Help providers make treatment referrals</p>
                </li>
                <li>
                  <p>
                    Tap into a network of trusted community health workers who
                    can help moms get to follow up appointments
                  </p>
                </li>
                <li>
                  <p>
                    Empower doulas, women trained to support and educate moms
                    through and after childbirth, to connect women with
                    postpartum care
                  </p>
                </li>
              </ul>
              <p>
                Harr says that while the initiative continues to evolve, the
                team is committed to making New Jersey a model for improving
                maternal health.
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

export default PlanProfile2

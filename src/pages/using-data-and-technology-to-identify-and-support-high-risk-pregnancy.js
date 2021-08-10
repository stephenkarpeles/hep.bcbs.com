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
  "https://www.bcbs.com/sites/default/files/healthequity/images/brief-using-data-and-technology-to-identify-and-support-high-risk-pregnancy.jpg"

const DataTechnology = props => {
  return (
    <div>
      <SEO
        title="Using technology to identify and support high-risk pregnancies"
        description="Blue Cross and Blue Shield of Louisiana supports programs and community-focused initiatives to reduce disparities and improve access to care for mother and baby."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Using technology to identify and support high-risk pregnancies"
                url="https://www.bcbs.com/the-health-of-america/healthequity/using-data-and-technology-to-identify-and-support-high-risk-pregnancies/"
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
                  <h1>
                    Using technology to identify and support high-risk
                    pregnancies
                  </h1>
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
                    Trends in pregnancy and childbirth complications in the US
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/bcbs-companies-support-new-and-expectant-mothers">
                    BCBS Companies support new and expectant mothers
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
                <a
                  href="https://www.bcbsla.com/wellness/member-programs/maternity-programs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Healthy Blue Beginnings
                </a>{" "}
                is BCBSLA’s care management program for high-risk pregnancies.
                This program offers pregnant women personalized information and
                confidential support from experienced nurses throughout their
                pregnancy. In addition to referrals from individual physicians,
                BCBSLA receives referrals to Healthy Blue Beginnings from its
                relationship with Louisiana Women’s Healthcare Associates
                (LWHA), the largest OB/GYN physician group in the state of
                Louisiana. Obstetricians at LWHA refer patients to Healthy Blue
                Beginnings if they have one or more of a list of conditions that
                includes:
              </p>
              <ul>
                <li>History of preterm labor</li>
                <li>Diabetes</li>
                <li>Hypertension</li>
                <li>Obesity</li>
                <li>History of smoking</li>
                <li>Substance use disorder</li>
              </ul>
              <p>
                In the 2020s, data is now an important healthcare partner, and
                data plays a part with high-risk pregnancy referrals, too.
                Recently, Blue Cross began receiving Admit, Discharge, Transfer
                (ADT) data from any healthcare provider that uses an electronic
                medical records system and has a capability to feed the insurer
                their data.
              </p>
              <p>
                Another pregnancy support program is a unique texting service
                called{" "}
                <a
                  href="https://www.text4baby.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  text4baby
                </a>
                . Whether or not a woman joins Healthy Blue Beginnings, BCBSLA
                encourages her to join text4baby. Moms get free text messages
                with health and safety tips for their pregnancy and baby’s first
                year. The messages are tailored based on due date or baby’s
                birth date. Just text the word BABY (BEBE for Spanish tips) to
                511411 on your cellphone.
              </p>
              <p>
                <a
                  href="https://www.bcbsla.com/stronger"
                  target="_blank"
                  rel="noreferrer"
                >
                  Stronger Than
                </a>{" "}
                is a BCBSLA care management program that can connect women to
                these services listed above as well as a wide range of free or
                low-cost community services. One of these is{" "}
                <a
                  href="https://coffective.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Coffectiv
                </a>
                , a coalition of community resources to support women before,
                during and after pregnancy. Find more at{" "}
                <a
                  href="https://supportservices.bcbsla.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  supportservices.bcbsla.com
                </a>
              </p>
              <p>
                BCBSLA employees and the{" "}
                <a
                  href="http://bcbslafoundation.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blue Cross Blue Shield Foundation
                </a>{" "}
                also support the health of babies and young children in a number
                of ways. The Foundation’s focus is on Louisiana children’s
                health and wellbeing, and many of its grants are awarded
                accordingly. One the Foundation’s most successful grantees,{" "}
                <a
                  href="https://www.facebook.com/fit.nola/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fit NOLA
                </a>
                , has recently expanded a program that lets doctors give “fruit
                and vegetable prescriptions” to pregnant women, people with
                diabetes and others, redeemable for free at local farmers’
                markets. Blue Cross and its employees also donate their time and
                money to organizations like March of Dimes, which works to
                prevent birth defects.
              </p>
              <p>
                Full release:
                <a
                  href="https://news.bcbsla.com/press-releases/2020/louisiana-pregnancy-complications"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://news/bcbsla.com/press-releases/2020/louisiana-pregnancy-complications
                </a>
              </p>
              <p>
                <em>
                  Blue Cross and Blue Shield of Louisiana is an independent
                  licensee of the Blue Cross Blue Shield Association, an as
                  sociation of independent, locally operated Blue Cross and Blue
                  Shield companies.
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
              filters="headline:'Improving postpartum care for high-risk mothers' OR headline:'Maternity coordinators help manage high risk conditions'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default DataTechnology

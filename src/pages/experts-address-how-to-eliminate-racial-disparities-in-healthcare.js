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

const EliminateRacialDisparities = props => {
  return (
    <div>
      <SEO
        title="'We can do it' Experts address how to eliminate racial disparities in healthcare"
        description="Watch this 2-part discussion on how to achieve health equity from leading national experts who explain that eliminating disparities will take leadership and collaboration among many stakeholders."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="'We can do it' Experts address how to eliminate racial disparities in healthcare"
                url="https://www.bcbs.com/the-health-of-america/healthequity/experts-address-how-to-eliminate-racial-disparities-in-healthcare/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/feature-experts-address-how-to-eliminate-racial-disparities-in-healthcare.jpg")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__date">
                  <span>Published June 24, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    'We can do it' Experts address how to eliminate racial
                    disparities in healthcare
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
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/thats-our-mission-addressing-health-equity-beyond-covid-19-strong">
                    'That's our mission' addressing health equity beyond
                    COVID-19 with strong community relationships
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/webinar-confronting-racial-disparities-maternal-health">
                    Confronting Racial Disparities in Maternal Health
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/why-covid-19-vaccine-equity-matters-and-what-were-doing-help">
                    Why COVID-19 vaccine equity matters and what we're doing to
                    help
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dc-9ZIaq_-4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                <em>
                  Addressing health inequities is a complex task that requires a
                  comprehensive strategy in addition to leadership both inside
                  and outside the healthcare industry.
                </em>
              </p>
              <p>
                Leaders in the healthcare industry are joining forces to
                dismantle systemic structures that have supported a legacy of
                inequities that continue to negatively impact the health of
                Americans, especially people of color.{" "}
                <a
                  href="https://www.cdc.gov/chronicdisease/healthequity/index.htm#:~:text=Health%20equity%20is%20achieved%20when,length%20of%20life%3B%20quality%20of%20life"
                  target="_blank"
                  rel="noreferrer"
                >
                  According to the Centers for Disease Control, health
                  inequities
                </a>{" "}
                are reflected in differences in length of life; quality of life;
                rates of disease, disability, and death; severity of disease;
                and access to treatment. To eliminate the barriers to good
                health requires partnerships between organizations to address
                the{" "}
                <Link to="/confronting-crisis-of-health-inequities-with-bold-national-strategy/">
                  impact of social determinants of health (SDOH.)
                </Link>
              </p>
              <h4>A National Strategy</h4>
              <p>
                <a
                  href="https://www.bcbs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Blue Cross Blue Shield Association
                </a>{" "}
                (BCBSA) is taking a leadership role by announcing a national
                health equity strategy. As part of this initiative, BCBSA has
                set the goal of reducing racial disparities in maternal health
                by 50% in five years. In these videos, two leading experts offer
                insight and perspective about how to overcome health inequities
                by bringing ideas and teams together from inside and outside the
                healthcare industry.
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <a
                    href="https://www.bcbst.com/about/our-company/leadership/andrea-willis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dr. Andrea Willis
                  </a>{" "}
                  - senior vice president and chief medical officer, BlueCross
                  BlueShield of Tennessee
                </li>
                <li>
                  <a
                    href="https://hub.arkansasbluecross.com/dr-creshelle-nash-named-medical-director-for-health-equity-and-public-programs/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dr. Creshelle Nash
                  </a>{" "}
                  - medical director of health equity and public programs,
                  Arkansas Blue Cross and Blue Shield
                </li>
              </ul>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0294YzTMGiY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                <Link to="/">
                  Learn more about the BCBSA health equity initiative.
                </Link>
              </p>
              <p>
                <em>
                  Blue Cross Blue Shield Association is an association of
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
              filters="headline:'Eliminating food insecurity to improve maternal and fetal
                    health' OR headline:'Strong collaborations aim to improve birth outcomes'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default EliminateRacialDisparities

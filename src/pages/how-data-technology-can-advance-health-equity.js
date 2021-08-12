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
  "https://www.bcbs.com/sites/default/files/healthequity/images/feature-how-data-technology-can-advance-health-equity.jpg"

const AdvanceHealthEquity = props => {
  return (
    <div>
      <SEO
        title="How Data and Technology Can Advance Health Equity"
        description="The past year and a half challenged us in ways we couldn’t have imagined, including a spotlight on the unconscionable health disparities across our nation."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="How Data and Technology Can Advance Health Equity"
                url="https://www.bcbs.com/the-health-of-america/healthequity/how-data-technology-can-advance-health-equity/"
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
                {/* <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div> */}
                <div className="pp-hero__date">
                  <span>Published August 12, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>How Data and Technology Can Advance Health Equity</h1>
                </div>
                <div className="pp-hero__author">
                  <span>Kim Keck, CEO, Blue Cross Blue Shield Association</span>
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
                  <span>Page</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/himss-2021">
                    Blue Cross Blue Shield (BCBS) News from HIMSS21
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/interoperability-101">
                    Interoperability 101
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Page</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/interoperability">
                    Interoperability: Why it matters – and what’s next
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
                The past year and a half challenged us in ways we couldn’t have
                imagined, including a spotlight on the unconscionable health
                disparities across our nation. We all know these disparities
                aren’t new, but right now, we have an opportunity to reimagine
                our healthcare system—to build one that is equitable, fueled by
                a seamless exchange of data and insights and built to empower
                patients to proactively manage their care.
              </p>
              <h4>Creating an interoperable healthcare system</h4>
              <p>
                Currently, our health information doesn’t move as quickly or as
                easily as we do. When we find a new doctor, they may have a
                limited view of our health history, often reliant upon what we
                remember to include on a new patient form. To receive quality
                care, providers need a comprehensive look at a patient’s care
                history, and patients deserve a more integrated, seamless
                experience.
              </p>
              <p>
                This idea of being able to move our health information with us
                and easily share it across the care system is known as{" "}
                <a
                  href="https://www.bcbs.com/the-health-of-america/articles/interoperability-101"
                  target="_blank"
                  rel="noreferrer"
                >
                  interoperability
                </a>
                . We know that when health data becomes standardized and
                shareable—safely and securely—healthcare improves. Data has to
                reflect the whole person, not just a lab result or your name and
                age. Across the industry, hundreds of organizations are already
                working together to{" "}
                <a
                  href="https://www.bcbs.com/interoperability"
                  target="_blank"
                  rel="noreferrer"
                >
                  bring this vision to life
                </a>
                .
              </p>
              <p>
                If you’re a patient, interoperability is one way to drive more
                personalized, higher quality and more affordable care. If you’re
                a provider, this is one way to help you see the bigger picture
                of a patient’s care journey and how you can help continue to
                deliver positive patient experiences. And, as I recently shared
                in my keynote address at the{" "}
                <a
                  href="https://www.bcbs.com/himss-2021"
                  target="_blank"
                  rel="noreferrer"
                >
                  2021 HIMSS Global Conference & Exhibition
                </a>
                , an interoperable healthcare system can help drive health
                equity.
              </p>
              <h4>Using data to reduce disparities</h4>
              <p>
                Communities of color today account for just 40% of the U.S.
                population, but they bear a disproportionate burden of
                preventable disease, disability and death.
              </p>
              <p>
                This unacceptable reality is the impetus for our{" "}
                <Link to="/">National Health Equity Strategy</Link>, an ongoing
                commitment to improve health outcomes for people of color. While
                Blue Cross and Blue Shield companies have made great strides in
                addressing racial health disparities in our local communities,
                there is so much more to be done.
              </p>
              <p>
                This work, as I see it, is inextricably linked to
                interoperability and the availability and appropriate exchange
                of data. To address health disparities, we need a complete and
                accurate picture of a person’s health.
              </p>
              <p>
                Having access to the right data and greater standardization will
                allow payers and providers to:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  Accurately quantify the disparities that exist, so we can
                  address them more directly
                </li>
                <li>
                  Drive the right interventions for the right people at the
                  right time
                </li>
                <li>
                  Actively lean into new and long-standing relationships with
                  community organizations to address root causes of inequities
                </li>
                <li>
                  Advocate for public policies at the state and federal level to
                  improve access to health coverage
                </li>
              </ul>
              <h4>The future of healthcare must be health equity</h4>
              <p>
                My vision for the future of healthcare is a completely
                reimagined system: one that is more integrated, affordable,
                secure and seamless for patients and providers and, above all,
                equitable. To get there, we need all players in the healthcare
                system working together, toward a lasting future that supports
                the health of all Americans.
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
              filters="headline:'Reimagining equity in healthcare, together' OR headline:'The facts: Confronting a crisis of health inequities with a
                    bold national strategy'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default AdvanceHealthEquity

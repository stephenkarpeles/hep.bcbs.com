import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Hits, Configure } from "react-instantsearch-dom"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import AdvisoryBoard from "../components/AdvisoryBoard/AdvisoryBoard"
//import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"

import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"
import PressKitBanner from "../components/PressKitBanner/PressKitBanner"
import Alert from "../components/Alert/Alert"

// TODO: Possibly add clean browser urls
// @see https://www.algolia.com/doc/guides/building-search-ui/going-further/routing-urls/react/

const searchClient = algoliasearch(
  "B604WWKJH0",
  "d5f4c69eedaa62952d698d108856f2a0"
)

const planResult = ({ hit }) => {
  const {
    headline,
    topic,
    plans,
    slug,
    teaser,
    img_url,
    video_url,
    read_time,
  } = hit

  // Since we have started adding blog posts (sigh) to the plan profiles we need to
  // check if the slug will actually be on the Health Equity site.
  let postSlug
  if (headline === "BCBS companies support new and expectant mothers") {
    postSlug = (
      <a href="https://www.bcbs.com/the-health-of-america/articles/bcbs-companies-support-new-and-expectant-mothers" />
    )
  } else if (
    headline ===
    "Racial Disparities are Endangering the Lives of Mothers of Color. We Must Respond."
  ) {
    postSlug = (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://aspenideas.org/articles/racial-disparities-are-endangering-the-lives-of-mothers-of-color-we-must-respond"
      />
    )
  } else {
    postSlug = <Link to={`/${slug}/`}></Link>
  }

  return (
    <Fade>
      <div
        data-insights-object-id={hit.objectID}
        data-insights-position={hit.__position}
        data-insights-query-id={hit.__queryID}
        className={`plan-result-card ${
          video_url ? "plan-result-card--has-video" : ""
        }`}
      >
        {postSlug}

        <div className="plan-result-card-plan">
          {hit.img_url && !hit.video_url && (
            <div className="plan-result-card-image">
              <img
                src={`https://www.bcbs.com/sites/default/files/healthequity/images/${img_url}`}
                alt=""
              />
            </div>
          )}
          {hit.video_url && (
            <div className="plan-result-card-video">
              <div className="plan-result-card-video__wrapper">
                <iframe
                  loading="lazy"
                  width="960"
                  height="640"
                  src={video_url}
                  title="Youtube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          <div className="plan-result-card-company">{plans}</div>
        </div>
        <div className="plan-result-card-meta">
          <div className="plan-result-card-category">{topic}</div>
          <div className="plan-result-card-title">{headline}</div>
          <div className="plan-result-card-read">{read_time} min read</div>
        </div>
      </div>
    </Fade>
  )
}

const StrategyPage = props => {
  const [viewPortEntered, setViewPortEntered] = useState(false)

  return (
    <>
      <SEO
        title="National Health Equity Strategy"
        description="Blue Cross Blue Shield Association announces National Health Equity Strategy to confront the nation’s crisis in racial health disparities."
      />
      <section className="intro" id="intro">
        <Fade>
          <div className="max-container">
            <h1 id="healthequity">National Health Equity Strategy</h1>
            <div className="subtitle">
              Blue Cross and Blue Shield Companies Confront the Nation’s Crisis
              in Racial Health Disparities
            </div>
            <div className="intro--video">
              <div className="intro--video-wrapper">
                <iframe
                  loading="lazy"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/KNUblC8hLPg"
                  title="Youtube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="intro--video-details">
              <div className="intro--video-quote">
                Your health shouldn’t depend on the color of your skin or the
                neighborhood you live in.
              </div>
              <div className="intro--video-content">
                The crisis in racial disparities in our country’s health care is
                unconscionable and unacceptable. While BCBS companies have made
                great strides in addressing racial health disparities in our
                local communities, there is so much more to be done."
              </div>
              <div className="intro--video-quote-attr">&mdash; Kim Keck</div>
              <div className="intro--video-quote-role">
                President and CEO, Blue Cross Blue Shield Association
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section className="lead" id="lead">
        <div className="inner-content">
          <Fade>
            <div className="lead--main">
              Blue Cross Blue Shield Association’s (BCBSA) National Health
              Equity Strategy includes:
            </div>
            <div className="lead--details">
              <div className="lead--details-points">
                <ul>
                  <li>Collecting data to measure disparities</li>
                  <li>Scaling effective programs</li>
                  <li>
                    Working with providers to improve outcomes and address
                    unconscious bias
                  </li>
                  <li>Leaning into partnerships at the community level</li>
                  <li>
                    <a
                      href="https://s3.amazonaws.com/cdn720/bcbsprogresshealth/2021/2021_Issue%20Brief_Addressing%20Health%20Disparities%20&%20Inequities_Final.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Influencing policy decisions at the state and federal
                      levels
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lead--details-summary">
                The multi-year strategy will focus on four conditions that
                disproportionately affect communities of color: maternal health,
                behavioral health, diabetes and cardiovascular conditions. BCBSA
                will first focus on maternal health, then behavioral health in
                2021.
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="disparities" id="disparities">
        <div className="inner-content">
          <Fade>
            <div className="disparities-heading">
              Health Disparities: By the Numbers
            </div>
          </Fade>
          <div className="disparities-cards-wrap">
            <Fade bottom cascade>
              <div className="disparities-cards">
                <div className="disparities-card disparities-card-cardio">
                  <div className="disparities-card-heading">
                    Cardiovascular Health
                  </div>
                  <div className="disparities-card-stat">
                    <CountUp
                      start={viewPortEntered ? null : 0}
                      end={70}
                      redraw={true}
                      duration={0.5}
                      useEasing={false}
                    >
                      {({ countUpRef }) => (
                        <VisibilitySensor
                          active={!viewPortEntered}
                          onChange={isVisible => {
                            if (isVisible) {
                              setViewPortEntered(true)
                            }
                          }}
                          delayedCall
                        >
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>%</span>
                  </div>
                  <div className="disparities-card-text">
                    Black men are 70% more likely to die from a stroke as
                    compared to non-Hispanic white men.
                  </div>
                  <div className="disparities-card-image">
                    <StaticImage
                      src="../images/illustrations/illustration-cardiovascular-health.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="disparities-card disparities-card-behavioral">
                  <div className="disparities-card-heading">
                    Behavioral Health
                  </div>
                  <div className="disparities-card-stat">
                    <CountUp
                      start={viewPortEntered ? null : 0}
                      end={55}
                      redraw={true}
                      duration={1}
                      useEasing={false}
                    >
                      {({ countUpRef }) => (
                        <VisibilitySensor
                          active={!viewPortEntered}
                          onChange={isVisible => {
                            if (isVisible) {
                              setViewPortEntered(true)
                            }
                          }}
                          delayedCall
                        >
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>% lower</span>
                  </div>
                  <div className="disparities-card-text">
                    Likely due to under-diagnosis, Millennials from majority
                    Black and Hispanic communities have lower diagnosis rates of
                    major depression, 31% and 55% lower respectively when
                    compared to white communities.
                  </div>
                  <div className="disparities-card-image">
                    <StaticImage
                      src="../images/illustrations/illustration-behavioral-health.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="disparities-card disparities-card-diabetes">
                  <div className="disparities-card-heading">Diabetes</div>
                  <div className="disparities-card-stat">
                    <CountUp
                      start={viewPortEntered ? null : 0}
                      end={60}
                      redraw={true}
                      duration={1.25}
                      useEasing={false}
                    >
                      {({ countUpRef }) => (
                        <VisibilitySensor
                          active={!viewPortEntered}
                          onChange={isVisible => {
                            if (isVisible) {
                              setViewPortEntered(true)
                            }
                          }}
                          delayedCall
                        >
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>%</span>
                  </div>
                  <div className="disparities-card-text">
                    African American adults are 60% more likely than
                    non-Hispanic white adults to be diagnosed with diabetes by a
                    physician.
                  </div>
                  <div className="disparities-card-image">
                    <StaticImage
                      src="../images/illustrations/illustration-diabetes.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="disparities-card disparities-card-maternal">
                  <div className="disparities-card-heading">
                    Maternal Health
                  </div>
                  <div className="disparities-card-stat">
                    <CountUp
                      start={viewPortEntered ? null : 0}
                      end={3}
                      redraw={true}
                      duration={0.75}
                      useEasing={false}
                    >
                      {({ countUpRef }) => (
                        <VisibilitySensor
                          active={!viewPortEntered}
                          onChange={isVisible => {
                            if (isVisible) {
                              setViewPortEntered(true)
                            }
                          }}
                          delayedCall
                        >
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>x higher</span>
                  </div>
                  <div className="disparities-card-text">
                    Black mothers have 3x higher maternal mortality and 2x
                    higher morbidity than white mothers.
                  </div>
                  <div className="disparities-card-image">
                    <StaticImage
                      src="../images/illustrations/illustration-maternal-health.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="sources">
            Sources: 1){" "}
            <u>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=28"
              >
                OMH: Stroke and African Americans
              </a>
            </u>{" "}
            2){" "}
            <u>
              <a
                href="https://www.bcbs.com/the-health-of-america/reports/millennial-health-trends-behavioral-health-conditions"
                target="_blank"
                rel="noreferrer"
              >
                Millennial Health: Trends in Behavioral Health Conditions
              </a>
            </u>{" "}
            3){" "}
            <u>
              <a
                href="https://www.cdc.gov/diabetes/pdfs/data/statistics/national-diabetes-statistics-report.pdf"
                target="_blank"
                rel="noreferrer"
              >
                CDC: National Diabetes Statistics Report
              </a>
            </u>{" "}
            4){" "}
            <u>
              <a
                href="https://www.ajmc.com/view/racial-disparities-persist-in-maternal-morbidity-mortality-and-infant-health"
                target="_blank"
                rel="noreferrer"
              >
                AJMC: Racial Disparities Persist in Maternal Morbidity,
                Mortality and Infant Health
              </a>
            </u>
          </div>
        </div>
      </section>

      <section className="profiles" id="latest">
        <Fade>
          <div className="inner-content latest">
            <div className="profiles-header">
              <div className="profiles-header-title">
                <h2 style={{ color: "#0072A7" }}>What we're doing</h2>
                <p
                  style={{
                    maxWidth: 800,
                    marginBottom: "3rem",
                    fontSize: "1.125rem",
                  }}
                >
                  Blue Cross and Blue Shield Companies Adress the Nation's
                  Crisis in Racial Health Disparities.
                </p>
              </div>
              <div className="profiles-header-link">
                <Link to="/what-were-doing">View All</Link>
              </div>
            </div>
          </div>
        </Fade>
        <div className="inner-content">
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles_latest"
          >
            <Configure
              hitsPerPage={6}
              clickAnalytics
              distinct
              filters="topic:'Maternal Health'"
            />

            <Hits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default StrategyPage

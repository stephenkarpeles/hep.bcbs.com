import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Hits, Configure } from "react-instantsearch-dom"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"

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
      <section className="intro intro-light" id="intro">
        <Fade>
          <div className="max-container">
            <h1 id="healthequity">National Health Equity Strategy</h1>
            <div className="subtitle">
              Blue Cross and Blue Shield Companies Confront the Nation’s Crisis
              in Racial Health Disparities
            </div>
            <div className="intro--video-content">
              The crisis in racial disparities in our country’s health care is
              unconscionable and unacceptable. While BCBS companies have made
              great strides in addressing racial health disparities in our local
              communities, there is so much more to be done."
            </div>
            <div className="intro--video-quote-attr">&mdash; Kim Keck</div>
            <div className="intro--video-quote-role">
              President and CEO, Blue Cross Blue Shield Association
            </div>
          </div>
        </div>
      </section>

      <section className="lead" id="lead">
        <div className="inner-content">
          <div className="lead--main">
            Blue Cross Blue Shield Association’s (BCBSA) National Health Equity
            Strategy includes:
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
                    Influencing policy decisions at the state and federal levels
                  </a>
                </li>
              </ul>
            </div>
            <div className="lead--details-summary" style={{ display: "none" }}>
              The multi-year strategy will focus on four conditions that
              disproportionately affect communities of color: maternal health,
              behavioral health, diabetes and cardiovascular conditions. BCBSA
              will first focus on maternal health, then behavioral health in
              2021.
            </div>
          </div>
        </div>
      </section>

      <section className="profiles" id="doing">
        <div className="inner-content doing">
          <div className="profiles-header">
            <div className="profiles-header-title">
              <h2 style={{ color: "#0072A7" }}>What we're doing</h2>
              <p
                style={{
                  maxWidth: 860,
                  marginBottom: "3rem",
                  fontSize: "1.125rem",
                }}
              >
                Blue Cross and Blue Shield Companies Address the Nation's Crisis
                in Racial Health Disparities.
              </p>
            </div>
            <div className="profiles-header-link">
              <Link className="view-all" to="/latest-stories">
                View All&nbsp;&nbsp;&rarr;
              </Link>
            </div>
          </div>
        </div>
        <div className="inner-content">
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles_latest"
          >
            <Configure hitsPerPage={6} clickAnalytics distinct />

            <Hits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default StrategyPage

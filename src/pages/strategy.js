import * as React from "react"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Hits, Configure } from "react-instantsearch-dom"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"
import ArticleCard from "../components/ArticleCard/ArticleCard"

// TODO: Possibly add clean browser urls
// @see https://www.algolia.com/doc/guides/building-search-ui/going-further/routing-urls/react/

const searchClient = algoliasearch(
  "B604WWKJH0",
  "d5f4c69eedaa62952d698d108856f2a0"
)

const StrategyPage = props => {
  return (
    <>
      <SEO
        title="National Health Equity Strategy"
        description="Blue Cross Blue Shield Association announces National Health Equity Strategy to confront the nation’s crisis in racial health disparities."
      />
      <section className="intro intro-light" id="intro">
        <div className="max-container">
          <h1 id="healthequity">National Health Equity Strategy</h1>
          <div className="subtitle">
            Blue Cross and Blue Shield Companies Confront the Nation’s Crisis in
            Racial Health Disparities
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

            <Hits hitComponent={ArticleCard} />
          </InstantSearch>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default StrategyPage

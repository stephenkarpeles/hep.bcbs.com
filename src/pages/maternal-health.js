import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
  MenuSelect,
  RefinementList,
  ClearRefinements,
  Hits,
  Configure,
  Stats,
  connectStats,
} from "react-instantsearch-dom"
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

const MaternalHealth = props => {
  const [viewPortEntered, setViewPortEntered] = useState(false)
  const Stats = ({ nbHits }) => <span>Displaying {nbHits} results</span>
  const CustomStats = connectStats(Stats)

  return (
    <>
      <SEO
        title="National Health Equity Strategy"
        description="Blue Cross Blue Shield Association announces National Health Equity Strategy to confront the nation’s crisis in racial health disparities."
      />

      <section className="profiles" id="community">
        <Fade>
          <div className="inner-content inner-content-filters">
            <InstantSearch
              searchClient={searchClient}
              indexName="he_plan_profiles_latest"
            >
              <Configure
                clickAnalytics
                distinct
                hitsPerPage={100}
                filters="topic:'Maternal Health'"
              />
              <div className="maternal-health-results">
                <h2 style={{ color: "#0072A7" }}>
                  Showing Results for Maternal Health
                </h2>
                <p
                  style={{
                    maxWidth: 800,
                    marginBottom: "3rem",
                    fontSize: "1.125rem",
                  }}
                >
                  <CustomStats />
                </p>
              </div>

              <div className="search-filters">
                <div className="search-filters-label-main">Filter</div>
                <div className="search-filters-refinement">
                  {/* <div className="search-filters-label">
                    What's Happening in my State
                  </div> */}
                  <MenuSelect
                    attribute="states"
                    limit={50}
                    translations={{
                      seeAllOption: "All States",
                    }}
                  />
                </div>
                {/* <div className="search-filters-refinement">
                  <MenuSelect
                    attribute="topic"
                    limit={50}
                    translations={{
                      seeAllOption: "All Topics",
                    }}
                  />
                </div> */}
                <div className="search-filters-refinement">
                  <MenuSelect
                    attribute="subtopics"
                    limit={50}
                    translations={{
                      seeAllOption: "Maternal Health Topics",
                    }}
                  />
                </div>
                {/* <div className="search-filters-refinement">
                  <div className="search-filters-label">
                    Maternal Health Topics
                  </div>
                  <div className="search-filters-topics-refinement">
                    <RefinementList attribute="subtopics" limit={50} />
                  </div>
                </div> */}
                <ClearRefinements
                  clearsQuery
                  translations={{
                    reset: "Clear Filters",
                  }}
                />
              </div>
              <Hits hitComponent={planResult} />
            </InstantSearch>
          </div>
        </Fade>
      </section>

      <Newsletter />
    </>
  )
}

export default MaternalHealth

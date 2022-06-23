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
import ArticleCard from "../components/ArticleCard/ArticleCard"

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

const LatestStories = props => {
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
        <div className="inner-content inner-content-filters">
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles_latest"
          >
            <div className="latest-stories-results">
              <h2 style={{ color: "#0072A7" }}>
                Showing Results for Latest Stories
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

            <Configure clickAnalytics distinct hitsPerPage={100} />

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

              {/* <div className="search-filters-label">
                    Maternal Health Topics
                  </div> */}

              {/* <RefinementList attribute="subtopics" limit={50} /> */}
              <div className="search-filters-refinement">
                <MenuSelect
                  attribute="topic"
                  limit={50}
                  translations={{
                    seeAllOption: "All Topics",
                  }}
                />
              </div>
              <div className="search-filters-refinement">
                <MenuSelect
                  attribute="subtopics"
                  limit={50}
                  translations={{
                    seeAllOption: "All Subtopics",
                  }}
                />
              </div>
              <ClearRefinements
                clearsQuery
                translations={{
                  reset: "Clear Filters",
                }}
              />
            </div>

            <Hits hitComponent={ArticleCard} />
          </InstantSearch>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default LatestStories

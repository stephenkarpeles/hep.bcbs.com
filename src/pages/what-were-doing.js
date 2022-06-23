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

const StrategyPage = props => {
  const [viewPortEntered, setViewPortEntered] = useState(false)

  return (
    <>
      <SEO
        title="National Health Equity Strategy"
        description="Blue Cross Blue Shield Association announces National Health Equity Strategy to confront the nation’s crisis in racial health disparities."
      />
      <section className="intro" id="intro">
        <div className="max-container">
          <h1 id="healthequity">What we're doing</h1>
          <div className="subtitle">
            Blue Cross and Blue Shield Companies Adress the Nation's Crisis in
            Racial Health Disparities.
          </div>
        </div>
      </section>

      <section className="profiles" id="community">
        <div className="inner-content community">
          <h2 style={{ color: "#0072A7" }}>What we're doing</h2>
          <p
            style={{
              maxWidth: 800,
              marginBottom: "3rem",
              fontSize: "1.125rem",
            }}
          >
            Blue Cross and Blue Shield Companies Adress the Nation's Crisis in
            Racial Health Disparities.
          </p>
        </div>
        <div className="inner-content inner-content-filters">
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles_latest"
          >
            <Configure clickAnalytics distinct />
            <div className="search-filters">
              <div className="search-filters-label-main">Filter</div>
              <SearchBox
                translations={{
                  placeholder: "Keyword",
                }}
              />
              <div className="search-filters-refinement">
                <div className="search-filters-label">
                  What's Happening in my State
                </div>
                <MenuSelect
                  attribute="states"
                  limit={50}
                  translations={{
                    seeAllOption: "All States",
                  }}
                />
              </div>
              <div className="search-filters-refinement">
                <div className="search-filters-label">
                  Maternal Health Topics
                </div>
                <div className="search-filters-topics-refinement">
                  <RefinementList attribute="subtopics" limit={50} />
                </div>
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

export default StrategyPage

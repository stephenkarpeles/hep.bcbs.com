import * as React from "react"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  MenuSelect,
  ClearRefinements,
  Hits,
  Configure,
  connectStats,
} from "react-instantsearch-dom"

import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"
import ArticleCard from "../components/ArticleCard/ArticleCard"

// TODO: Possibly add clean browser urls
// @see https://www.algolia.com/doc/guides/building-search-ui/going-further/routing-urls/react/

const searchClient = algoliasearch(
  "B604WWKJH0",
  "d5f4c69eedaa62952d698d108856f2a0"
)

const MaternalHealth = props => {
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
            <Configure
              clickAnalytics
              distinct
              hitsPerPage={100}
              filters="topic:'Maternal Health'"
            />
            <div className="maternal-health-results">
              <div id="control">
                <h2 style={{ color: "#0072A7" }}>
                  Showing Results for Maternal Health
                </h2>
              </div>

              <div id="variant1" style={{ display: "none" }}>
                <h2 style={{ color: "#0072A7" }}>
                  Showing Results for Maternal Health
                </h2>
                <p
                  style={{
                    marginBottom: "3rem",
                    fontSize: "1.125rem",
                  }}
                >
                  We are dedicated to ensuring that every mom gets the care she
                  needs and that every baby has a healthy mom. Because yor
                  health shouldn't depend on the color of yur skin or the
                  neighborhood you live in. Read more to learn what BCBS
                  companies are doing to help local communities through greater
                  access to doulas, food and nutrition services, mental health
                  resources, and more.
                </p>
              </div>

              <div id="variant2" style={{ display: "none" }}>
                <h2 style={{ color: "#0072A7" }}>
                  Showing Results for Maternal Health
                </h2>
                <p
                  style={{
                    fontSize: "1.125rem",
                  }}
                >
                  We are dedicated to ensuring that every mom gets the care she
                  needs and that every baby has a healthy mom. Because yor
                  health shouldn't depend on the color of yur skin or the
                  neighborhood you live in.
                </p>
                <img
                  src="https://www.bcbs.com/sites/default/files/uploads/inline-images/Maternal_Health_graphic.png"
                  alt=""
                />
                <p
                  style={{
                    fontSize: "1.125rem",
                  }}
                >
                  Click to download our{" "}
                  <a href="https://www.bcbs.com/sites/default/files/healthequity/presskit/2021-10/HOA_Maternal_Health_Disaparities_Factsheet-5096f98f1faa71a34e2cd7f7ab13516c.pdf">
                    Racial Disparities in Maternal Health Fact Sheet
                  </a>
                </p>
                <p
                  style={{
                    marginBottom: "3rem",
                    fontSize: "1.125rem",
                  }}
                >
                  Read more to learn what BCBS companies are doing to help local
                  communities through greater access to doulas, food and
                  nutrition services, mental health resources, and more.
                </p>
              </div>
              <p
                style={{
                  maxWidth: 800,
                  marginBottom: "1rem",
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
            <Hits hitComponent={ArticleCard} />
          </InstantSearch>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default MaternalHealth

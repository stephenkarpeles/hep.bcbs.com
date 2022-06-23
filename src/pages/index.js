import React from "react"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Hits, Configure } from "react-instantsearch-dom"
import AdvisoryBoard from "../components/AdvisoryBoard/AdvisoryBoard"
import ArticleCard from "../components/ArticleCard/ArticleCard"

import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"
import PressKitBanner from "../components/PressKitBanner/PressKitBanner"
import Hero from "../components/Hero"
import CTA from "../components/CTA/CTA"

// TODO: Possibly add clean browser urls
// @see https://www.algolia.com/doc/guides/building-search-ui/going-further/routing-urls/react/
const searchClient = algoliasearch(
  "B604WWKJH0",
  "d5f4c69eedaa62952d698d108856f2a0"
)

const IndexPage = props => {
  return (
    <>
      <SEO
        title="National Health Equity Strategy"
        description="Blue Cross Blue Shield Association announces National Health Equity Strategy to confront the nation's crisis in racial health disparities."
        image={
          "https://www.bcbs.com/sites/default/files/healthequity/images/health-equity-hero.png"
        }
      />
      <Hero />

      <CTA
        id="press-kit-banner"
        title="Top Ten Maternal Health Equity Actions"
        body="Over the last 12 months, we uncovered key insights to inform our
              work ahead and drive similar action throughout the maternal health
              ecosystem."
        linkURL="/top-ten-maternal-health-equity-actions"
        linkTitle="View the Infographic"
      />

      <section className="profiles" id="latest">
        <div className="inner-content latest">
          <div className="profiles-header">
            <div className="profiles-header-title">
              <h2 style={{ color: "#0072A7" }}>Latest Stories</h2>
              <p
                style={{
                  maxWidth: 800,
                  marginBottom: "3rem",
                  fontSize: "1.125rem",
                }}
              >
                See how we're actively working to address racial disparities.
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
            <div className="ais-Hits-wrap">
              <Hits hitComponent={ArticleCard} />
            </div>
          </InstantSearch>
        </div>
      </section>

      <section className="profiles" id="maternal">
        <div className="inner-content maternal">
          <div className="profiles-header">
            <div className="profiles-header-title">
              <h2 style={{ color: "#0072A7" }}>Maternal Health</h2>
            </div>
            <div className="profiles-header-link">
              <Link className="view-all" to="/maternal-health">
                View All&nbsp;&nbsp;&rarr;
              </Link>
            </div>
            <div
              className="profiles-header-intro"
              style={{
                marginBottom: "3rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.125rem",
                }}
              >
                We are dedicated to ensuring that every mom gets the care she
                needs and that every baby has a healthy mom. Because your health
                shouldn't depend on the color of your skin or the neighborhood
                you live in. Read more to learn what BCBS companies are doing to
                help local communities through greater access to doulas, food
                and nutrition services, mental health resources, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="inner-content">
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles_latest"
          >
            <Configure
              hitsPerPage={6}
              clickAnalytics
              distinct
              filters="topic:'Maternal Health' AND (NOT headline:'Improving Black maternal health starts with listening' AND NOT headline:'Moving from Awareness to Action for a Healthier Beginning' AND NOT headline:'Congress can help save pregnant women and mothers of color' AND NOT headline:'Data show community-based doulas improve outcomes for Black mothers' AND NOT headline:'PowerMom Diversifies Maternal Health Research' AND NOT headline: 'Setting the standard: addressing health disparities with better data')"
            />

            <Hits hitComponent={ArticleCard} />
          </InstantSearch>
        </div>
      </section>

      <Newsletter index="1" />
      <AdvisoryBoard />
      <CTA
        id="press-kit-banner"
        title="Press Kit"
        body="Access the latest press release, press tools and media contacts"
        linkURL="/press-kit"
        linkTitle="View Resources"
      />
      <Newsletter index="2" />
    </>
  )
}

export default IndexPage

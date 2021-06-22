import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import { InstantSearch, InfiniteHits, Configure } from "react-instantsearch-dom"
import { searchClient, planResult } from "../components/Algolia"
import Sharing from "../components/Sharing/sharing"

// styles
import "../components/pages.css"

// functions
const convertToSlug = text =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")

export default function PlanProfileTemplate({ data }) {
  const post = data.nodeHealthEquityPlanProfile
  const backgroundImageBase = "https://www.bcbs.com"
  const backgroundImagePath = post.relationships.field_he_featured_image.uri.url
  const slug = convertToSlug(post.title)

  return (
    <div>
      <SEO title={post.title} description={post.body.summary} />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing title={post.title} url={slug} />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url(${
                backgroundImageBase + backgroundImagePath
              })`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  {post.relationships.field_topics
                    .slice(0, 1)
                    .map((field_topics, idx) => (
                      <span key={idx}>{field_topics.name}</span>
                    ))}
                </div>
                <div className="pp-hero__date">
                  <span>Published {post.created}</span>
                </div>
                <div className="pp-hero__title">
                  <h1>{post.title}</h1>
                </div>
                <div className="pp-hero__author">
                  <span>{post.field_he_author}</span>
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
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/reports/racial-disparities-in-maternal-health">
                    Racial disparities in maternal health
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/reports/trends-in-pregnancy-and-childbirth-complications-in-the-us">
                    Trends in pregnancy and childbirth complications in the U.S.
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Story</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/coronavirus-updates/stories/telemedicine-has-silver-lining-pregnant-women-during-covid-19">
                    Telemedicine has a silver lining for pregnant women during
                    COVID-19
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.body.value,
                }}
              />
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
              filters="headline:'Culturally appropriate interventions for mothers and
                    newborns' OR headline:'How doulas can improve the safety of childbirth for women of
                    color'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    nodeHealthEquityPlanProfile(id: { eq: $id }) {
      title
      body {
        summary
        value
      }
      field_he_reading_time
      field_he_author
      created(formatString: "MMMM DD, YYYY")
      relationships {
        field_bcbs_plan {
          name
        }
        field_states {
          name
        }
        field_topics {
          name
        }
        field_he_featured_image {
          uri {
            url
          }
        }
      }
    }
  }
`

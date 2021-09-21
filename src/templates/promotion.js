import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import { InstantSearch, InfiniteHits, Configure } from "react-instantsearch-dom"
import { searchClient, planResult } from "../components/Algolia"
import Sharing from "../components/Sharing/sharing"
import { getRelatedStories } from "../components/relatedHelper"

// styles
import "../components/pages.css"

// TODOs
// confirm working algolia
// confirm working related items
// confirm working hero image path

export default function PromotionTemplate({ data }) {
  // get all the data
  const post = data.nodeHealthEquityPromotion
  const alias = post.path.alias

  // get the related stories
  const related = post.relationships.field_he_hoa_related_content.map(
    getRelatedStories
  )

  // build the background image url
  const backgroundImageBase = "https://www.bcbs.com"
  const backgroundImagePath = post.relationships.field_he_featured_image.uri.url

  return (
    <div>
      <SEO title={post.title} description={post.body.summary} />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title={post.title}
                url={`https://www.bcbs.com/the-health-of-america/healthequity/${alias}`}
              />
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
          {related.length !== 0 && (
            <div className="pp-related">
              <h5 className="pp-related__title">Related</h5>
              <ul className="pp-related__list">{related}</ul>
            </div>
          )}
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

      {post.relationships.field_he_related_content?.length >= 1 && (
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
                filters={`headline:'${post.relationships.field_he_related_content[0].title}' OR headline:'${post.relationships.field_he_related_content[1].title}'`}
              />

              <InfiniteHits hitComponent={planResult} />
            </InstantSearch>
          </div>
        </Fade>
      )}
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    nodeHealthEquityPromotion(id: { eq: $id }) {
      title
      body {
        summary
        value
      }
      field_he_reading_time
      field_he_author
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
        field_he_related_content {
          ... on node__health_equity_plan_profile {
            title
          }
        }
        field_he_hoa_related_content {
          ...RelatedHOAPage
          ...RelatedHOAReport
          ...RelatedHOAInfographic
          ...RelatedHOAArticle
          ...RelatedHOAPodcast
          ...RelatedHOAVideo
        }
      }
      created(formatString: "MMMM DD, YYYY")
      path {
        alias
      }
    }
  }
`

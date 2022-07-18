import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { InstantSearch, Hits, Configure } from "react-instantsearch-dom"
import { searchClient, planResult } from "../components/Algolia"
import { getRelatedStories } from "../components/relatedHelper"
import ArticleCard from "../components/ArticleCard/ArticleCard"
import PlanProfileHero from "../components/PlanProfileHero/PlanProfileHero"

// styles
import "../components/pages.css"
import "../components/PlanProfileHero/PlanProfileHero.css"

// TODOs
// confirm working algolia
// confirm working related items
// confirm working hero image path

export default function BlogTemplate({ data }) {
  // get all the data
  const post = data.nodeHealthEquityBlog
  const alias = post.path.alias

  // get the related stories
  const related =
    post.relationships.field_he_hoa_related_content.map(getRelatedStories)

  const filters = `headline:"${post.relationships.field_he_related_content[0]?.title}" OR headline:"${post.relationships.field_he_related_content[1]?.title}"`

  // build the background image url
  const backgroundImageBase = "https://www.bcbs.com"
  const backgroundImagePath = post.relationships.field_he_featured_image.uri.url
  const backgroundImage = backgroundImageBase + backgroundImagePath

  return (
    <div className="blog-template">
      <SEO
        title={post.title}
        description={post.body.summary}
        image={backgroundImage}
      />
      
      <PlanProfileHero data={post}/>

      <div className="pp-main">
        {related.length !== 0 && (
          <div className="pp-related">
            <h5 className="pp-related__title">Related</h5>
            <ul className="pp-related__list">{related}</ul>
          </div>
        )}

        <div className="pp-content">
          <div className="pp-content__inner">
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.value,
              }}
            />
          </div>
        </div>
      </div>

      {post.relationships.field_he_related_content?.length >= 1 && (
        <div
          className={`pp-explore ${
            post.relationships.field_he_related_content?.length === 1
              ? "pp-explore-single-card"
              : ""
          }`}
        >
          <h2>Explore more stories</h2>
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles"
          >
            <Configure hitsPerPage={2} distinct filters={filters} />

            <Hits hitComponent={ArticleCard} />
          </InstantSearch>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query ($id: String!) {
    nodeHealthEquityBlog(id: { eq: $id }) {
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
          ... on node__health_equity_promotion {
            title
          }
          ... on node__health_equity_blog {
            title
          }
        }
        field_he_hoa_related_content {
          ...RelatedHOAPage
          ...RelatedHOAReport
          ...RelatedHOAInfographic
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

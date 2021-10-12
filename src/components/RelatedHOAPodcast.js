import React from "react"
import { graphql } from "gatsby"

const RelatedHOAPodcast = ({ data }) => {
  return (
    <>
      <div className="pp-related__category">
        <span>Podcast</span>
      </div>
      <div className="pp-related__text">
        <a href={`https://www.bcbs.com/${data.path.alias}`}>{data.title}</a>
      </div>
    </>
  )
}

export default RelatedHOAPodcast

export const fragment = graphql`
  fragment RelatedHOAPodcast on node__podcast {
    title
    relationships {
      node_type {
        name
      }
    }
    path {
      alias
    }
  }
`

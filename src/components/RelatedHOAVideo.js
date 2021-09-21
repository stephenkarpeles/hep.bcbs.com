import React from "react"
import { graphql } from "gatsby"

const RelatedHOAVideo = ({ data }) => {
  return (
    <>
      <div className="pp-related__category">
        <span>Video</span>
      </div>
      <div className="pp-related__text">
        <a href={`https://www.bcbs.com/${data.path.alias}`}>{data.title}</a>
      </div>
    </>
  )
}

export default RelatedHOAVideo

export const fragment = graphql`
  fragment RelatedHOAVideo on node__video {
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

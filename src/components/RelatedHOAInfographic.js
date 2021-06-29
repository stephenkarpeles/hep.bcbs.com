import React from "react"
import { graphql } from "gatsby"

const RelatedHOAInfographic = ({ data }) => {
  return (
    <>
      <div className="pp-related__category">
        <span>Report</span>
      </div>
      <div className="pp-related__text">
        <a href="#">{data.title}</a>
      </div>
    </>
  )
}

export default RelatedHOAInfographic

export const fragment = graphql`
  fragment RelatedHOAInfographic on node__hoa_insight {
    title
    relationships {
      node_type {
        name
      }
    }
    drupal_internal__nid
  }
`

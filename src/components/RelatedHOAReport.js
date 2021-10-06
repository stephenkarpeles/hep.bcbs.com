import React from "react"
import { graphql } from "gatsby"

const RelatedHOAReport = ({ data }) => {
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

export default RelatedHOAReport

export const fragment = graphql`
  fragment RelatedHOAReport on node__health_america_page {
    title
    relationships {
      node_type {
        name
      }
    }
    drupal_internal__nid
  }
`

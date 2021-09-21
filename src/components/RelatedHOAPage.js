import React from "react"
import { graphql } from "gatsby"

const RelatedHOAPage = ({ data }) => {
  return (
    <>
      <div className="pp-related__category">
        <span>Report</span>
      </div>
      <div className="pp-related__text">
        <a href={`https://www.bcbs.com/${data.path.alias}`}>{data.title}</a>
      </div>
    </>
  )
}

export default RelatedHOAPage

export const fragment = graphql`
  fragment RelatedHOAPage on node__hoa_page {
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

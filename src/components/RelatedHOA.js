import React from "react"
import { graphql } from "gatsby"

const RelatedHOA = ({ data }) => {
  return (
    <>
      <div className="pp-related__category">
        <span>Report</span>
      </div>
      <div className="pp-related__text">
        <a href="https://www.bcbs.com/the-health-of-america/reports/racial-disparities-in-maternal-health">
          {data.title}
        </a>
      </div>
    </>
  )
}

export default RelatedHOA

export const fragment = graphql`
  fragment RelatedHOA on node__hoa_page {
    title
    relationships {
      node_type {
        name
      }
    }
  }
`

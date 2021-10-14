import React from "react"
import { graphql } from "gatsby"

const RelatedBCBSPage = ({ data }) => {
  return (
    <>
      <div className="pp-related__category">
        <span>Page</span>
      </div>
      <div className="pp-related__text">
        <a href={`https://www.bcbs.com/${data.path.alias}`}>{data.title}</a>
      </div>
    </>
  )
}

export default RelatedBCBSPage

export const fragment = graphql`
  fragment RelatedBCBSPage on node__page {
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

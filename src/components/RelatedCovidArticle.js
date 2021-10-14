import React from "react"
import { graphql } from "gatsby"

const RelatedCovidArticle = ({ data }) => {
  return (
    <>
      <div className="pp-related__category">
        <span>Covid Article</span>
      </div>
      <div className="pp-related__text">
        <a href={`https://www.bcbs.com/${data.path.alias}`}>{data.title}</a>
      </div>
    </>
  )
}

export default RelatedCovidArticle

export const fragment = graphql`
  fragment RelatedCovidArticle on node__bcbs_covid_article {
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

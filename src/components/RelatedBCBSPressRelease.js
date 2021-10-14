import React from "react"
import { graphql } from "gatsby"

const RelatedBCBSPressRelease = ({ data }) => {
  return (
    <>
      <div className="pp-related__category">
        <span>Press Release</span>
      </div>
      <div className="pp-related__text">
        <a href={`https://www.bcbs.com/${data.path.alias}`}>{data.title}</a>
      </div>
    </>
  )
}

export default RelatedBCBSPressRelease

export const fragment = graphql`
  fragment RelatedBCBSPressRelease on node__press_release {
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

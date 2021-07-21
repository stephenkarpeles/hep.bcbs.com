import React from "react"
import RelatedHOAPage from "../components/RelatedHOAPage"
import RelatedHOAReport from "../components/RelatedHOAReport"
import RelatedHOAInfographic from "../components/RelatedHOAInfographic"

const relatedStories = {
  node__hoa_page: RelatedHOAPage,
  node__health_america_page: RelatedHOAReport,
  node__hoa_insight: RelatedHOAInfographic,
}

export const getRelatedStories = node => {
  // render the display name for the Drupal node type
  let nodeType = node.relationships.node_type.name
  if (nodeType === "HoA Report") {
    nodeType = "Report"
  } else if (nodeType === "HoA Infographic") {
    nodeType = "Infographic"
  } else if (nodeType === "HoA Page") {
    nodeType = "Page"
  }

  console.log({ node })
  return (
    <li className="pp-related__list-item">
      <div className="pp-related__category">
        <span>{nodeType}</span>
      </div>
      <div className="pp-related__text">
        <a href={`https://www.bcbs.com/node/${node.drupal_internal__nid}`}>
          {node.title}
        </a>
      </div>
    </li>
  )
}

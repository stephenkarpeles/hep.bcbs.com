import React from "react"
import RelatedHOAPage from "../components/RelatedHOAPage"
import RelatedHOAReport from "../components/RelatedHOAReport"
import RelatedHOAInfographic from "../components/RelatedHOAInfographic"
// import RelatedHOAArticle from "../components/RelatedHOAArticle"
import RelatedHOAPodcast from "../components/RelatedHOAPodcast"
import RelatedHOAVideo from "../components/RelatedHOAVideo"

const relatedStories = {
  node__hoa_page: RelatedHOAPage,
  node__health_america_page: RelatedHOAReport,
  node__hoa_insight: RelatedHOAInfographic,
  // node__blog_article: RelatedHOAArticle,
  node__podcast: RelatedHOAPodcast,
  node__video: RelatedHOAVideo,
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
  } else if (nodeType === "HoA Article") {
    nodeType = "Article"
  } else if (nodeType === "HoA Podcast") {
    nodeType = "Podcast"
  } else if (nodeType === "HoA Video") {
    nodeType = "Video"
  }

  return (
    <li className="pp-related__list-item">
      <div className="pp-related__category">
        <span>{nodeType}</span>
      </div>
      <div className="pp-related__text">
        <a href={`https://www.bcbs.com/${node.path.alias}`}>{node.title}</a>
      </div>
    </li>
  )
}

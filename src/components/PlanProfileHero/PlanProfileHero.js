import React from "react"
import Sharing from "../Sharing/sharing"

const PlanProfileHero = ({ data }) => {

  const post = data;

  const alias = post.path.alias

  // build the background image url
  const backgroundImageBase = "https://www.bcbs.com"
  const backgroundImagePath = post.relationships.field_he_featured_image.uri.url
  const backgroundImage = backgroundImageBase + backgroundImagePath

  return (
    <div className="pp-hero">
      <div className="pp-hero__share">
        <div className="pp-hero__share-content">
          <h4>Share</h4>
          <Sharing
            title={post.title}
            url={`https://www.bcbs.com/the-health-of-america/healthequity${alias}`}
          />
        </div>
      </div>
      <div
        className="pp-hero__image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="pp-hero__meta">
          <div className="pp-hero__meta-content">
            <div className="pp-hero__category">
              {post.relationships.field_topics
                .slice(0, 1)
                .map((field_topics, idx) => (
                  <span key={idx}>{field_topics.name}</span>
                ))}
            </div>
            <div className="pp-hero__date">
              <span>Published {post.created}</span>
            </div>
            <div className="pp-hero__title">
              <h1>{post.title}</h1>
            </div>
            <div className="pp-hero__author">
              <span>{post.field_he_author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanProfileHero


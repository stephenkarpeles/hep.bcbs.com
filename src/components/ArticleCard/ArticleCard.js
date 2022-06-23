import * as React from "react"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Hits, Configure } from "react-instantsearch-dom"

const ArticleCard = ({ hit }) => {
  const {
    headline,
    topic,
    plans,
    slug,
    teaser,
    img_url,
    video_url,
    read_time,
  } = hit

  // Since we have started adding blog posts (sigh) to the plan profiles we need to
  // check if the slug will actually be on the Health Equity site.
  let postSlug
  if (headline === "BCBS companies support new and expectant mothers") {
    postSlug = (
      <a href="https://www.bcbs.com/the-health-of-america/articles/bcbs-companies-support-new-and-expectant-mothers" />
    )
  } else if (
    headline ===
    "Racial Disparities are Endangering the Lives of Mothers of Color. We Must Respond."
  ) {
    postSlug = (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://aspenideas.org/articles/racial-disparities-are-endangering-the-lives-of-mothers-of-color-we-must-respond"
      />
    )
  } else {
    postSlug = <Link to={`/${slug}/`} aria-labelledby={slug}></Link>
  }

  return (
    <div
      data-insights-object-id={hit.objectID}
      data-insights-position={hit.__position}
      data-insights-query-id={hit.__queryID}
      className={`plan-result-card ${
        video_url ? "plan-result-card--has-video" : ""
      }`}
    >
      {postSlug}

      <div className="plan-result-card-plan">
        {hit.img_url && !hit.video_url && (
          <div className="plan-result-card-image">
            <img
              src={`https://www.bcbs.com/sites/default/files/healthequity/images/${img_url}`}
              alt=""
            />
          </div>
        )}
        {hit.video_url && (
          <div className="plan-result-card-video">
            <div className="plan-result-card-video__wrapper">
              <iframe
                loading="lazy"
                width="960"
                height="640"
                src={video_url}
                title="Youtube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        <div className="plan-result-card-company">{plans}</div>
      </div>
      <div className="plan-result-card-meta">
        <div className="plan-result-card-category">{topic}</div>
        <div className="plan-result-card-title" id={slug}>
          {headline}
        </div>
        <div className="plan-result-card-read">{read_time} min read</div>
      </div>
    </div>
  )
}

export default ArticleCard
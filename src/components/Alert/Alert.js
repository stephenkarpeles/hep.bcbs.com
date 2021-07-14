import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./Alert.css"

const AlertBanner = () => {
  const data = useStaticQuery(graphql`
    {
      allNodeHealthEquityEmergencyAlert(
        limit: 1
        sort: { fields: changed, order: DESC }
      ) {
        edges {
          node {
            title
            field_alert_color
            field_icon
            field_he_anchor_link {
              url
            }
            field_he_link {
              url
            }
            field_he_internal_link {
              url
            }
            field_he_external_link {
              url
            }
            field_he_link_type
          }
        }
      }
      site {
        pathPrefix
      }
    }
  `)

  const alert = data.allNodeHealthEquityEmergencyAlert.edges[0].node
  const linkType = alert.field_he_link_type

  let linkDisplay
  // an anchor link within the current page
  if (linkType === "anchor") {
    linkDisplay = (
      <AnchorLink
        to={`${alert?.field_he_anchor_link?.url}`}
        className="navigation__anchor-link"
        title={`${alert?.title}`}
      >
        {alert.title}
        <span className={`icon ${alert.field_icon}`}></span>
      </AnchorLink>
    )
  }

  // an internal link within the health equity site
  if (linkType === "healthequity") {
    linkDisplay = (
      <Link
        to={`${alert?.field_he_link?.url}`}
        className=""
        title={`${alert?.title}`}
      >
        {alert.title}
        <span className={`icon ${alert.field_icon}`}></span>
      </Link>
    )
  }

  // an internal link within the bcbs domain
  if (linkType === "internal") {
    linkDisplay = (
      <a title={`${alert?.title}`} href={alert?.field_he_internal_link?.url}>
        {alert.title}
        <span className={`icon ${alert.field_icon}`}></span>
      </a>
    )
  }

  // an external link outside the bcbs domain
  if (linkType === "external") {
    linkDisplay = (
      <a
        target="_blank"
        rel="noreferrer"
        title={`${alert?.title}`}
        href={alert?.field_he_external_link?.url}
      >
        {alert.title}
        <span className={`icon ${alert.field_icon}`}></span>
      </a>
    )
  }

  return (
    <section className={`alert alert-${alert.field_alert_color}`} id="alert">
      <div className="max-container">
        <div className="alert-text">{linkDisplay}</div>
      </div>
    </section>
  )
}

export default AlertBanner

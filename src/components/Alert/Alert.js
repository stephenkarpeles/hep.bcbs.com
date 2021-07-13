import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./Alert.css"

const AlertBanner = () => {
  const data = useStaticQuery(graphql`
    {
      allNodeHealthEquityEmergencyAlert {
        edges {
          node {
            title
            field_alert_color
            field_icon
            field_he_anchor_link
            field_he_link {
              title
              uri
            }
          }
        }
      }
    }
  `)

  const alert = data.allNodeHealthEquityEmergencyAlert.edges[0].node

  return (
    <section className={`alert alert-${alert.field_alert_color}`} id="alert">
      <div className="max-container">
        <div className="alert-text">
          {console.log(alert.field_he_link)}
          {alert?.field_he_anchor_link ? (
            <>
              <AnchorLink
                to={`${alert?.field_he_link?.uri}`}
                className="navigation__anchor-link"
                title={`${alert?.field_he_link?.title}`}
              >
                {alert.title}
                <span className={`icon ${alert.field_icon}`}></span>
              </AnchorLink>
            </>
          ) : (
            <>
              <a
                title={`${alert?.field_he_link?.title}`}
                href={alert?.field_he_link?.uri}
              >
                {alert.title}
                <span className={`icon ${alert.field_icon}`}></span>
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default AlertBanner

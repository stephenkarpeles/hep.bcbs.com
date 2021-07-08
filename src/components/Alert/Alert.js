import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./Alert.css"

const AlertBanner = () => {
  return (
    <section className="alert alert-warning" id="alert">
      <div className="max-container">
        <div className="alert-text">
          <AnchorLink
            to="/#community"
            className="navigation__anchor-link"
            title="What we're doing in your community"
          >
            Read about how Blue Cross and Blue Shield companies are reimagining
            a more equitable healthcare system
          </AnchorLink>
        </div>
      </div>
    </section>
  )
}

export default AlertBanner

import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./CTA.css"

/*
  Usage:
  Can be passed title, body field, link properties, dark and vertical color
  and layout options. Use the outside prop for external links.
  <CTA
    title="Get in touch with our communcations team"
    linkURL="mailto:press@bcbsa.com"
    body="Some string of text"
    linkTitle="Contact Press"
    dark
    outside
    vertical
  />
*/

const CTA = ({
  id,
  title,
  body,
  linkURL,
  linkTitle,
  outside,
  dark,
  vertical,
}) => (
  <section
    id={id}
    className={`cta ${vertical ? "cta-vertical" : "cta-horizontal"} ${
      dark ? "cta-dark" : "cta-light"
    }`}
  >
    <div className="max-container">
      <div className="cta-box">
        <h2 className="cta-box-heading">{title}</h2>
        {!!body && <p className="cta-box-text">{body}</p>}
        {!!outside ? (
          <div class="cta-box-link">
            <a
              href={linkURL}
              target="_blank"
              rel="noreferrer"
              className="button button-basic cta-box-button"
              aria-labelledby={linkTitle}
            >
              {linkTitle}
            </a>
          </div>
        ) : (
          <div class="cta-box-link">
            <Link to={linkURL} className="button button-basic cta-box-button">
              {linkTitle}
            </Link>
          </div>
        )}
      </div>
    </div>
  </section>
)

CTA.defaultProps = {
  id: "",
  title: "",
  body: "",
  linkURL: "",
  linkTitle: "",
  outside: false,
  dark: false,
  vertical: false,
}

CTA.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  linkURL: PropTypes.string,
  linkTitle: PropTypes.string,
  outside: PropTypes.bool,
  dark: PropTypes.bool,
  vertical: PropTypes.bool,
}

export default CTA

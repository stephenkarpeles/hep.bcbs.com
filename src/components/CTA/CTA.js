import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./CTA.css"

/*
  Usage:
  Can be passed title, body field, button properties, dark and vertical color
  and layout options. Use the blank prop for external links.
  <CTA
    title="Get in touch with our communcations team"
    btnURL="mailto:press@bcbsa.com"
    body="Some string of text"
    btnTitle="Contact Press"
    dark
    blank
    vertical
  />
*/

const CTA = ({ id, title, body, btnURL, btnTitle, blank, dark, vertical }) => (
  <section
    id={id}
    className={`cta ${vertical ? "cta-vertical" : "cta-horizontal"} ${
      dark ? "cta-dark" : "cta-light"
    }`}
  >
    <div className="max-container">
      <div className="cta-box">
        <h2>{title}</h2>
        <p>{body}</p>
        {!!blank ? (
          <a
            href={btnURL}
            target="_blank"
            rel="noreferrer"
            className="button button-basic"
            aria-labelledby={btnTitle}
          >
            {btnTitle}
          </a>
        ) : (
          <Link to={btnURL} className="button button-basic">
            {btnTitle}
          </Link>
        )}
      </div>
    </div>
  </section>
)

CTA.defaultProps = {
  id: "",
  title: "",
  body: "",
  btnURL: "",
  btnTitle: "",
  blank: false,
  dark: false,
  vertical: false,
}

CTA.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  btnURL: PropTypes.string,
  btnTitle: PropTypes.string,
  blank: PropTypes.bool,
  dark: PropTypes.bool,
  vertical: PropTypes.bool,
}

export default CTA

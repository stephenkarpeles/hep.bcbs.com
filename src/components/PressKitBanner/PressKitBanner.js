import * as React from "react"
import { Link } from "gatsby"
import "./PressKitBanner.css"

const PressKitBanner = () => (
  <section className="press-kit-banner" id="press-kit-banner">
    <div className="max-container">
      <div className="press-kit-banner-box">
        <h2>Press Kit</h2>
        <p>Access press release, factsheet, FAQ, data or contact our media team</p>
        <Link to="/press-kit">
          <button type="button" className="button button-basic">View Resources</button>
        </Link>
      </div>
    </div>
  </section>
)
export default PressKitBanner

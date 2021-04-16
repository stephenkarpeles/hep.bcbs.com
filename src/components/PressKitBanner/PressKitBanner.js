import * as React from "react"
import { Link } from "gatsby"
import "./PressKitBanner.css"

const PressKitBanner = () => (
  <section className="press-kit-banner" id="press-kit-banner">
    <div className="max-container">
      <div className="press-kit-banner-box">
        <h2>Press Kit</h2>
        <p>Access the latest press release, press tools and media contacts</p>
        <Link to="/press-kit">
          <button type="button" className="button button-basic">View Resources</button>
        </Link>
      </div>
    </div>
  </section>
)
export default PressKitBanner

import * as React from "react"
import { withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import imgCloseIcon from "../../images/icons/icon-close.svg"
import "./Alert.css"

const AlertBanner = () => {
  const alertOpen = "alert-opened"
  const alertClose = "alert-closed"

  function closeAlert() {
    document.getElementById("alert").classList.remove(alertOpen)
    document.getElementById("alert").classList.add(alertClose)
  }

  return (
    <section className="alert alert-opened" id="alert">
      <div className="wide-container">
        <div className="alert-image" style={{ display: "grid" }}>
          <StaticImage
            style={{
              gridArea: "1/1",
              maxHeight: "325px",
            }}
            layout="fullWidth"
            aspectRatio={3 / 1}
            alt=""
            src="../../images/health-equity-roundtable-alert-banner-alt.jpg"
          />

          <div
            className="alert-opened-content"
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "start",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            <button
              onClick={closeAlert}
              onKeyDown={closeAlert}
              className="alert-opened__close-btn"
              title="Close Alert"
            >
              <span>Close</span> <img src={imgCloseIcon} alt="Close" />
            </button>
            <div className="alert-opened-content-heading">
              {/* <div className="alert-opened-content-heading--white">
                Read the report
              </div> */}
              <div className="alert-opened-content-heading--blue">
                Racial Disparities in
                <br />
                Maternal Health
              </div>
            </div>

            {/* <div className="alert-opened-content-date">
              April 20, 2021 until 1pm CDT
            </div> */}
            <div className="alert-opened-content-logo">
              <StaticImage
                style={{ maxWidth: 380 }}
                alt=""
                src="../../images/bcbs-logo.png"
              />
            </div>
            <div className="alert-opened-content-cta">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.bcbs.com/the-health-of-america/reports/racial-disparities-in-maternal-health"
              >
                <button className="button button-basic">Read the Report</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlertBanner

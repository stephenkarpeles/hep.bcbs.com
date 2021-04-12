import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../../components/pages.css"

// Components
import SEO from "../../components/seo"

// Images
import nursePatientImg from "../../images/nurse-patient-1.jpg"

const PlanProfile1 = () => {

  return (
    <div>
      <SEO title="How doulas can improve the safety of childbirth for BIPOC mothers" />
      <div className="pp-hero">
        <div className="pp-hero__share">
          <div className="pp-hero__share-content">
            <h4>Share</h4>
            <ul>
              <li><a href=""><StaticImage src="../../images/icons/icon-circle-twitter.svg"/></a></li>
              <li><a href=""><StaticImage src="../../images/icons/icon-circle-facebook.svg"/></a></li>
              <li><a href=""><StaticImage src="../../images/icons/icon-circle-linkedin.svg"/></a></li>
            </ul>
          </div>
        </div>
        <div className="pp-hero__image" style={{ backgroundImage: `url(${nursePatientImg})`}}>
          <div className="pp-hero__meta">
            <div className="pp-hero__meta-content">
              <div className="pp-hero__category">
                <span>Maternal health</span>
              </div>
              <div className="pp-hero__date">
                <span>Published March 3, 2021</span>
              </div>
              <div className="pp-hero__title">
                <h1>How doulas can improve the safety of childbirth for BIPOC mothers</h1>
              </div>
              <div className="pp-hero__author">
              <span>Anna Hearne</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pp-main">
        <div className="pp-related"></div>
        <div className="pp-content">
          <div className="pp-content__inner">
            <p>For every mother who dies a pregnancy- related death in the U.S., 70 experience a life threatening event. These are unexpected cases of what doctors call severe maternal morbidity (SMM) events such as cardiac arrest, hemorrhage or sepsis, events that could have been fatal or can affect a woman long after childbirth. The overall rate of these events has increased by over 200% in the past two decades. And the statistics are worse for Black, Indigenous and other women of color (BIPOC). Researchers at the University of Illinois Chicago found that Black women face a 70% higher risk of SMM than any other racial group.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanProfile1

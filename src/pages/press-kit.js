import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"
import "./press-kit.css"
import FAQs from "../components/FAQ"

import communityHighlights from "../../static/assets/files/Press-Kit_Community-Highlights.pdf"
import factSheet from "../../static/assets/files/Press-Kit_Factsheet.pdf"
import panelBios from "../../static/assets/files/Press-Kit_National-Advisory-Panel-Biographies.pdf"
import pressFull from "../../static/assets/files/Press-Kit_Full.pdf"
import hoaMaternalHealthDisparities from "../../static/assets/files/HOA_Maternal_Health_Disaparities_Factsheet.pdf"

const PressKitPage = props => {
  return (
    <>
      <SEO
        title="Press and Media"
        description="Access the latest press release, press tools and media contacts"
      />

      <section className="intro-press" id="intro">
        <div className="inner-content">
          <h1 id="press-kit">Press &amp; Media</h1>
          <div className="subtitle">
            Access the latest press release, press tools and media contacts
          </div>
          <div className="intro-press-download">
            <div className="intro-press-download-logo">
              <StaticImage src="../images/hoa-primary-logo.svg" alt="" />
            </div>
            <div className="intro-press-download-details">
              <h4>Our National Health Equity Strategy</h4>
              <p>
                Access our latest press resources to learn more about our
                National Health Equity Strategy and Maternal Health Program
              </p>
              <div className="download-link">
                <a href={pressFull} target="_blank" rel="noreferrer">
                  Download press kit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="downloads" id="downloads">
        <div className="inner-content">
          <h3>What will I get in the press kit?</h3>
          <div className="downloads-cards">
            <div className="card">
              <h4 className="card-headline">Factsheet</h4>
              <div className="card-copy">
                Review key components of the BCBSA National Health Equity
                Strategy
              </div>
              <div className="download-link">
                <a href={factSheet} target="_blank" rel="noreferrer">
                  Download
                </a>
              </div>
            </div>
            <div className="card">
              <h4 className="card-headline">Advisory Panel Biographies</h4>
              <div className="card-copy">
                Meet the members of our national advisory panel
              </div>
              <div className="download-link">
                <a href={panelBios} target="_blank" rel="noreferrer">
                  Download
                </a>
              </div>
            </div>
            <div className="card">
              <h4 className="card-headline">Community Highlights</h4>
              <div className="card-copy">
                Read about maternal health programming from across the Blue
                Cross Blue Shield (BCBS) system
              </div>
              <div className="download-link">
                <a href={communityHighlights} target="_blank" rel="noreferrer">
                  Download
                </a>
              </div>
            </div>
            <div className="card">
              <h4 className="card-headline">Factsheet</h4>
              <div className="card-copy">
                Download the Racial Disparities in Maternal Health Report
                Factsheet
              </div>
              <div className="download-link">
                <a
                  href={hoaMaternalHealthDisparities}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta cta-latest" id="cta-latest">
        <div className="inner-content">
          <h3 className="cta-latest-title">Read our latest press release</h3>
          <div className="cta-latest-description">
            Blue Cross Blue Shield Association Announces National Health Equity
            Strategy to Confront the Nation’s Crisis in Racial Health
            Disparities
          </div>
          <a
            href="https://www.bcbs.com/press-releases/bcbsa-announces-national-health-equity-strategy-to-confront-nations-racial-health-disparities"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="button button-basic">
              Read More
            </button>
          </a>
        </div>
      </section>

      <FAQs heading="National Strategy FAQ" />

      <section className="cta cta-contact" id="cta-contact">
        <div className="inner-content">
          <h3>Get in touch with our communications team</h3>
          <a href="mailto:press@bcbsca.com">
            <button type="button" className="button button-basic">
              Contact Press
            </button>
          </a>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default PressKitPage

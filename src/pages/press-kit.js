import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"
import FAQs from "../components/FAQ"
import PressKit from "../components/PressKit/PressKit"
import CTA from "../components/CTA/CTA"

// styles
import "./press-kit.css"

// files
import pressFull from "../../static/assets/files/Press-Kit_Full.pdf"

const PressKitPage = props => {
  return (
    <>
      <SEO
        title="Press and Media"
        description="Access the latest press release, press tools and media contacts"
      />

      <section className="intro intro-light intro-press" id="intro">
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
          <PressKit />
        </div>
      </section>

      <CTA
        id="press-release-banner"
        title="Read our latest press release"
        body="Blue Cross Blue Shield Association Announces National Health Equity Strategy to Confront the Nation’s Crisis in Racial Health Disparities"
        linkURL="https://www.bcbs.com/press-releases/bcbsa-announces-national-health-equity-strategy-to-confront-nations-racial-health-disparities"
        linkTitle="Read More"
        vertical
        outside
      />

      <FAQs heading="National Strategy FAQ" />

      <CTA
        id="contact-press-banner"
        title="Get in touch with our communications team"
        body=""
        linkURL="mailto:press@bcbsa.com"
        linkTitle="Contact Press"
        vertical
        outside
      />

      <Newsletter />
    </>
  )
}

export default PressKitPage

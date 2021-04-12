import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import algoliasearch from "algoliasearch/lite"
import { useTranslation } from "react-i18next"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "./press-kit.css"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

const planResult = ({ hit }) => {
  const { title, category, plan, url, excerpt, img_url } = hit

  return (
    <div className="plan-result-card">
      <Link to={url}>
        <div className="plan-result-card-plan">
          <div className="plan-result-card-image">
            <img src={img_url} />
          </div>
          <div className="plan-result-card-company">{plan}</div>
        </div>
        <div className="plan-result-card-meta">
          <div className="plan-result-card-category">{category}</div>
          <div className="plan-result-card-title">{title}</div>
          <div className="plan-result-card-excerpt">{excerpt}</div>
        </div>
      </Link>
    </div>
  )
}

const PressKitPage = props => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title="Press Kit" />

      <section className="intro-press" id="intro">
        <div className="max-container">
          <h1 id="press-kit">Press &amp; Media</h1>
          <div className="subtitle">Access the latest press releases, media contacts, and press tools</div>
          <div className="intro-press-download">
            <div className="intro-press-download-logo">
              Logo goes here
            </div>
            <div className="intro-press-download-details">
              <h4>Headline will go here</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nunc odio risus, consectetur id nisi quis,
                bibendum porttitor leo nullam vitae volutpat lorem. Aliquam eget massa faucibus, maximus nisi vitae mattis tortor.
              </p>
              <span className="download-link">
                Arrow
                <a href="">Download press kit</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="downloads" id="downloads">
        <div className="max-container">
          <h3>What will I get in the press kit?</h3>
          <div className="downloads-cards">
            <div className="card">
              <h4>National Strategy Factsheet</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nunc odio risus.</p>
              <span className="download-link">
                Arrow
                <a href="">Download</a>
              </span>
            </div>
            <div className="card">
              <h4>Advisory Panel Bios</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nunc odio risus.</p>
              <span className="download-link">
                Arrow
                <a href="">Download</a>
              </span>
            </div>
            <div className="card">
              <h4>Case Studies</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nunc odio risus.</p>
              <span className="download-link">
                Arrow
                <a href="">Download</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta cta-latest" id="cta-latest">
        <div className="max-container">
          <h3 classname="cta-latest-title">Call to action to the latest press release</h3>
          <div className="cta-latest-description">
            Blue Cross Blue Shield Association Statement on Rise in Violence Against the Asian Community
          </div>
          <Link to="/">
            <button type="button" className="button button-basic">Read More</button>
          </Link>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="max-container">
          <h3>National Strategy FAQ</h3>
          <p>Question</p>
          <p>Answer</p>
          <p>Question</p>
          <p>Answer</p>
          <p>Question</p>
          <p>Answer</p>
        </div>
      </section>

      <section className="cta cta-contact" id="cta-contact">
        <div className="max-container">
          <h3>Get in touch with our communications team</h3>
          <Link to="/">
            <button type="button" className="button button-basic">Contact Press</button>
          </Link>
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <div className="inner-content">
          <div className="eyebrow">Newsletter</div>
          <h3>Stay Connected</h3>
          <form>
            <div>
              <label>Email Address</label>
              <input type="text"></input>
              <button>Sign Up</button>
            </div>
            <div>
              <input type="checkbox" />
              <label>
                I agree to the <a href="#">BCBS.com Terms & Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default PressKitPage

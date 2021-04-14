import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import algoliasearch from "algoliasearch/lite"
import { useTranslation } from "react-i18next"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Newsletter from "../components/Newsletter/Newsletter"
import "./press-kit.css"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import pressRelease from "../../static/assets/files/Press-Kit-HE-National-Press-Release.pdf"

//import 'react-accessible-accordion/dist/fancy-example.css';

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

  const [isOpenAccordion, setOpenAccordion] = useState("false");

  const handleToggleAccordion = () => {
    setOpenAccordion(!isOpenAccordion);
  };

  return (
    <>
      <SEO title="Press Kit" />

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
                <a href="/">Download press kit</a>
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
                <a href="">Download</a>
              </div>
            </div>
            <div className="card">
              <h4 className="card-headline">Advisory Panel Biographies</h4>
              <div className="card-copy">
                Meet the members of our national advisory panel
              </div>
              <div className="download-link">
                <a href="">Download</a>
              </div>
            </div>
            <div className="card">
              <h4 className="card-headline">Community Highlights</h4>
              <div className="card-copy">
                Read about maternal health programming from across the Blue
                Cross Blue Shield (BCBS) system
              </div>
              <div className="download-link">
                <a href="">Download</a>
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
          <a href={pressRelease} target="_blank">
            <button type="button" className="button button-basic">
              Read More
            </button>
          </a>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="inner-content">
          <h3>National Strategy FAQ</h3> 

          <div className="faq-col-wrap">
            <div className="faq-col faq-col--1">
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is the National Health Equity Strategy?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      BCBSA’s National Health Equity Strategyintends to change the trajectory of heath disparities and re-imagine a more equitable healthcare system through close collaboration with providers and local community organizations. The multi-year strategy will focus on four conditions that disproportionately affect communities of color: maternal health, behavioral health, diabetes and cardiovascular conditions.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What are the key elements of this approach?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How long is this commitment for?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      This is a multi-year strategy. To start, BCBSA has set a public goal to reduce racial disparities in maternal health by 50% in five years.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Why are you launching this now?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The crisis in racial disparities in U.S health care is unconscionable and unacceptable. BCBScompanies have made great strides in confronting racial health disparities, but there is moreto be done.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Which conditions will the strategy focus on?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We’re focused on four conditions – maternal health, behavioral health, diabetes and cardiovascular conditions – starting with maternal health.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="faq-col faq-col--2">
              <Accordion allowZeroExpanded={true}>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What maternal health disparities exist?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      White women have fewer maternal health complications than women of color, and the gap is particularly significant between Black and white women.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is the maternal health goal?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We aim to reduce maternal health disparities by 50% in five years.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Is the maternal health program only focused on BCBS members?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      No. We are focusing on all women who rely on our providers and community partners.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What makes you positioned to lead this effort?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Our deep roots in local communities, combined with the scale and scope of our national reach, will enable us to drive real change.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is the BCBSA National Advisory Panel? 
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The panel of doctors, public health experts and community leaders that will provide guidance on the BCBSA National Health Equity Strategy.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="cta cta-contact" id="cta-contact">
        <div className="inner-content">
          <h3>Get in touch with our communications team</h3>
          <Link to="/">
            <button type="button" className="button button-basic">
              Contact Press
            </button>
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default PressKitPage

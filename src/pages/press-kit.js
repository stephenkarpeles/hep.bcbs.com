import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"
import "./press-kit.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

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

      <section className="faq" id="faq">
        <div className="inner-content">
          <h3>National Strategy FAQ</h3>

          <div className="faq-col-wrap">
            <div className="faq-col faq-col--1">
              <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is the National Health Equity Strategy?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      BCBSA’s National Health Equity Strategy intends to change
                      the trajectory of health disparities and reimagine a more
                      equitable healthcare system through close collaboration
                      with providers and local community organizations. The
                      multi-year strategy will focus on four conditions that
                      disproportionately affect communities of color: maternal
                      health, behavioral health, diabetes and cardiovascular
                      conditions.
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
                      The strategy includes collecting data to measure
                      disparities, scaling effective programs, working with
                      providers to improve outcomes and address unconscious
                      bias, leaning into partnerships at the community level,
                      and influencing policy decisions at the state and federal
                      levels.
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
                      This is a multi-year strategy. To start, BCBSA has set a
                      public goal to reduce racial disparities in maternal
                      health by 50% in five years.
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
                      The crisis in racial disparities in U.S health care is
                      unconscionable and unacceptable. BCBS companies have made
                      great strides in confronting racial health disparities,
                      but there is more to be done.
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
                      We’re focused on four conditions – maternal health,
                      behavioral health, diabetes and cardiovascular conditions
                      – starting with maternal health.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="faq-col faq-col--2">
              <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What maternal health disparities exist?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      White women have fewer maternal health complications than
                      women of color, and the gap is particularly significant
                      between Black and white women.
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
                      We aim to reduce maternal health disparities by 50% in
                      five years.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Is the maternal health program only focused on BCBS
                      members?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      No. We are focusing on all women who rely on our providers
                      and community partners.
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
                      Our deep roots in local communities, combined with the
                      scale and scope of our national reach, will enable us to
                      drive real change.
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
                      The panel of doctors, public health experts and community
                      leaders that will provide guidance on the BCBSA National
                      Health Equity Strategy.
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

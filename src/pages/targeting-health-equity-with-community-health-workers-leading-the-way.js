// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { InstantSearch, InfiniteHits, Configure } from "react-instantsearch-dom"
import { searchClient, planResult } from "../components/Algolia"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

const TargetingHealthEquity = props => {
  return (
    <div>
      <SEO
        title="Efforts to reduce racial disparities in prenatal care"
        description="Blue KC aims to reduce disparities in prenatal care by offering guidance and support to raise the awareness among mothers about potential health risks."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Targeting health equity with community health workers leading the way"
                url="https://www.bcbs.com/the-health-of-america/healthequity/targeting-health-equity-with-community-health-workers-leading-the-way/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url(https://www.bcbs.com/sites/default/files/healthequity/images/brief-targeting-health-equity-with-community-health-workers-leading-the-way.jpg)`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    Targeting health equity with community health workers
                    leading the way
                  </h1>
                </div>
                <div className="pp-hero__author">
                  <span>Carlton Houston</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="pp-main">
        <Fade>
          <div className="pp-related">
            <h5 className="pp-related__title">Related</h5>
            <ul className="pp-related__list">
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/one-country-every-community-bcbs-companies-work-together-make-impact">
                    One country, every community: BCBS companies work together
                    to make an impact
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <p>
                <a
                  href="https://www.bluekc.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blue Cross and Blue Shield of Kansas City
                </a>{" "}
                (Blue KC) is leading efforts to reduce racial disparities in
                prenatal care by leveraging the important role of community
                health workers (CHW) to build trust with at-risk populations.
              </p>
              <p>
                For example, Blue KC members enrolled in health plans with
                exclusive access to Spira Care Centers also benefit from CHW
                best practices in a primary care setting. At Spira Care Centers
                the member experience is simple and personal, while also
                innovative and forward-thinking. Members have access to
                integrated primary care, behavioral health consultations, health
                coaching, routine lab draws and more all in one place at low or
                no cost.
              </p>
              <p>
                Additionally, through successful community intervention, Blue KC
                aims to reduce disparities in prenatal care, by offering
                guidance and support to raise the awareness among mothers about
                potential health risks. The CHW strategy will include breast
                feeding support, lactation consultation and prenatal and
                postnatal education and support. Engagement with members will
                start prenatal and continue to one - year postpartum. Blue KC is
                also exploring innovative ways to engage CHWs in other community
                settings to further meet individuals where they are. For
                example, they could expand into schools and public libraries.
              </p>
              <p>
                This work is to level the playing field and remove barriers that
                cause unequal access to care and to health outcomes, and make
                sure education and access is offered in a way community members
                understand.
              </p>
              <p>
                <em>
                  Blue Cross and Blue Shield of Kansas City is an independent
                  licensee of the Blue Cross Blue Shield Association, an
                  association of independent, locally operated Blue Cross and
                  Blue Shield companies.
                </em>
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <Fade>
        <div className="pp-explore">
          <h2>Explore more stories</h2>
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles"
          >
            <Configure
              hitsPerPage={2}
              distinct
              filters="headline:'Breaking through bias in maternity care' OR headline:'Data-driven strategies to address disparities in maternal care'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default TargetingHealthEquity

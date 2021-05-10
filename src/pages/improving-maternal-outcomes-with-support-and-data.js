// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { InstantSearch, InfiniteHits, Configure } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

const planResult = ({ hit }) => {
  const { headline, topic, plans, slug, teaser, img_url, read_time } = hit

  return (
    <div className="plan-result-card">
      <Link to={`/${slug}/`}></Link>
      <div className="plan-result-card-plan">
        <div className="plan-result-card-image">
          <img
            src={`https://www.bcbs.com/sites/default/files/healthequity/images/${img_url}`}
            alt=""
          />
        </div>
        <div className="plan-result-card-company">{plans}</div>
      </div>
      <div className="plan-result-card-meta">
        <div className="plan-result-card-category">{topic}</div>
        <div className="plan-result-card-title">{headline}</div>
        <div className="plan-result-card-excerpt">{teaser}</div>
        <div className="plan-result-card-read">{read_time} min read</div>
      </div>
    </div>
  )
}

const ImprovingMaternalOutcomes = props => {
  return (
    <div>
      <SEO
        title="A network of doulas can identify and assist at-risk mom"
        description="The BCBSM Foundation supported a doula program to create a network of community doulas to assist at-risk women who lack support during labor and postpartum."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="A network of doulas can identify and assist at-risk mom"
                url="https://www.bcbs.com/the-health-of-america/healthequity/home-visiting-and-collaborating-with-hospitals-to-improve-birth-outcomes/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/brief-improving-maternal-outcomes-with-support-and-data.jpg")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                {/* <div className="pp-hero__date">
                  <span>Published March 3, 2021</span>
                </div> */}
                <div className="pp-hero__title">
                  <h1>Improving maternal outcomes with support and data</h1>
                </div>
                <div className="pp-hero__author">
                  <span>Kristin Gourlay</span>
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
                  <a href="https://www.bcbs.com/the-health-of-america/articles/bcbs-companies-support-new-and-expectant-mothers">
                    BCBS companies support new and expectant mothers
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Podcast</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/podcast/podcast-improving-maternal-health-starts-pregnancy">
                    Improving maternal health starts before pregnancy
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
                The Blue Cross Blue Shield of Michigan Foundation supported a
                doula support integration and coordination of care for high risk
                women in labor through a partnership with Western Michigan
                University Homer Stryker Medical School.  The program will
                create and train a network of eight community doulas to assist
                the most at risk women (low socioeconomic status, women of
                color, or prior poor birth outcome), who lack support during
                labor and postpartum, and provide coordination between doulas
                and community health workers for transition of care from
                hospital to home.
              </p>
              <p>
                Additionally, Labor and Delivery staff will be trained on the
                outcome benefits for having doulas; identify high-risk women for
                doula services through local prenatal clinics services and at
                delivery. Doulas will assist women during delivery, visit
                patient at home (first week), following covid-19 protection
                protocols and then will connect the women with a community
                health worker for post-natal/early infancy home visitation
                follow-up.
              </p>
              <p>
                The Obstetrics Initiative (OBI) is a state-wide, data-driven
                quality improvement project supported by Blue Cross Blue Shield
                of Michigan (BCBSMI)/Blue Care Network to create optimal
                maternity care experiences for Michigan families.
              </p>
              <blockquote>
                The first initiative is supporting vaginal birth and safely
                lowering the cesarean delivery rate among low-risk patients.
              </blockquote>
              <p>
                OBI is working to identify and address variation in obstetric
                driven care in the state of Michigan through collaboration,
                rapid cycle data reporting, and quality improvement initiatives.
                The first initiative is supporting vaginal birth and safely
                lowering the cesarean delivery rate among low-risk patients. OBI
                promotes collaboration and the sharing of best practices among
                participating maternity hospitals. By collecting data, analyzing
                data, and reporting data back to OBI participants, opportunities
                for improvement can be identified and quality improvement
                initiatives can be implemented.
              </p>
              <p>
                Addressing Perinatal Opioid Use Disorder-BCBSMI and BCBSMI
                Foundation partnership with the Michigan Department of Health
                &amp; Human Services to address perinatal opioid use disorder.
                Five regional health organizations across the state in
                partnership with their Regional Perinatal Quality Collaborative
                received a combined total of $300,000 in grant funding to begin
                new projects, enhance or expand existing projects to prevent and
                treat opioid use disorder among women, their children and
                infants during prenatal, pregnancy and postpartum periods.
              </p>
              <p>
                <em>
                  <a
                    href="https://www.bcbsm.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blue Cross Blue Shield of Michigan
                  </a>{" "}
                  and the Blue Cross Blue Shield of Michigan Foundation are
                  independent licensees of the Blue Cross Blue Shield
                  Association, an association of independent, locally operated
                  Blue Cross and Blue Shield companies.
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
              filters="headline:'Inclusive and equitable perinatal care for pregnant Black women' OR headline:'Strong collaborations aim to improve birth outcomes'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default ImprovingMaternalOutcomes

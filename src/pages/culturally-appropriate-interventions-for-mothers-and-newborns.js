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

const PlanProfile3 = props => {
  return (
    <div>
      <SEO
        title="Maternal health services for American Indian women in Arizona"
        description="Blue Cross Blue Shield of Arizona is helping pregnant and parenting women access education, care and treatment for SUDs in tribal communities across the state."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Maternal health services for American Indian women in Arizona"
                url="https://www.bcbs.com/the-health-of-america/healthequity/culturally-appropriate-interventions-for-mothers-and-newborns/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/feature-culturally-appropriate-interventions-for-mothers-and-newborns-a.jpg")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__date">
                  <span>Published April 20, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    Culturally appropriate interventions for mothers and
                    newborns
                  </h1>
                </div>
                <div className="pp-hero__author">
                  <span>Brianna Keefe</span>
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
                  <a href="https://www.bcbs.com/press-releases/bcbsa-announces-national-health-equity-strategy-to-confront-nations-racial-health-disparities">
                    BCBSA announces national health equity strategy
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Maternal Health</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/reports/trends-in-pregnancy-and-childbirth-complications-in-the-us">
                    Trends in pregnancy and childbirth complications in the U.S.
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/coronavirus-updates/stories/the-front-lines-of-covid-19-mass-vaccination-efforts">
                    On the front lines of COVID-19 mass vaccination efforts
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
                Arizona has the third-highest American Indian population in the
                U.S., comprised of Apache, Hopi, Navajo and many other tribes.
                One of the most significant health crises facing these
                communities is substance use disorder (SUD). Rates of SUDs are
                higher among American Indians than any other population group in
                the country, according to the Substance Abuse and Mental Health
                Services Administration's
                <a
                  href="https://www.samhsa.gov/data/report/2018-nsduh-detailed-tables"
                  target="_blank"
                  rel="noreferrer"
                >
                  2018 National Survey on Drug Use and Health
                </a>
                .
              </p>
              <p>
                A complex fabric of social and historical factors make American
                Indian populations more vulnerable to substance use and inhibit
                their access to treatment:
              </p>
              <ul>
                <li>Historical trauma</li>
                <li>Racism and discrimination</li>
                <li>High levels of poverty</li>
                <li>High unemployment rates</li>
                <li>Underfunded health services</li>
                <li>Shortages of providers in rural communities</li>
                <li>Lack of transportation</li>
              </ul>
              <p>
                These same factors contribute to devastating maternal death
                rates. In Arizona, American Indian women face rates as high as
                70.8 deaths per 100,000 births according to the CDC. The average
                maternal death rate across the U.S. is 16.7 per 100,000. Tribal
                communities throughout Arizona have identified the need for more
                education, prevention and treatment to serve pregnant and
                parenting women with a SUD.
              </p>
              <blockquote>
                In Arizona, American Indian women face rates as high as 70.8
                deaths per 100,000 births according to the CDC. The average
                maternal death rate across the U.S. is 16.7 per 100,000.
              </blockquote>
              <h4>Mobilize AZ</h4>
              <p>
                Blue Cross Blue Shield of Arizona (BCBSAZ) is the state's
                largest health insurer. Partnering with Arizona's tribal
                nations, the company is committed to supporting native mothers
                and newborns through culturally appropriate interventions. In
                part, that means investing in programs and organizations that
                already serve American Indian communities throughout the state
                and expanding their capacity.
              </p>
              <p>
                The health insurer's public health initiative, Mobilize AZ,
                focuses on key health issues impacting Arizonans - substance use
                disorder, mental health, and diabetes, as well as social
                determinants of health. The initiative earmarks millions of
                dollars each year to build statewide capacity and resources for
                substance use disorder prevention, treatment, resiliency, and
                recovery efforts. Funding priority is given to projects that
                expand resources, increase systems-level capacity, target an
                identified vulnerable population, and have a measurable impact.
                Through this initiative, BCBSAZ is supporting:
              </p>
              <ul>
                <li>Free childcare for native women receiving SUD treatment</li>
                <li>
                  Culturally appropriate education on substance use prevention
                  for young women and providers in tribal communities
                </li>
                <li>
                  Programs that build self-esteem among American Indian girls
                  and young mothers.
                </li>
                <li>
                  Education on clinically-proven interventions for newborns with
                  neonatal abstinence syndrome (NAS)
                </li>
                <li>
                  Mindfulness and stress reduction education that has been
                  culturally adapted to tribal communities to help reduce
                  unhealthy coping behaviors
                </li>
              </ul>
              <p>
                <em>
                  Blue Cross Blue Shield of Arizona is an independent licensee
                  of the Blue Cross Blue Shield Association, an association of
                  independent, locally operated Blue Cross and Blue Shield
                  companies.
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
              filters="headline:'How doulas can improve the safety of childbirth for women of color' OR headline:'In New Jersey, addressing mood disorders in postpartum Black women'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default PlanProfile3

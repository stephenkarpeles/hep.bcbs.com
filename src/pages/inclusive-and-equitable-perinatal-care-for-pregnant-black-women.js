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

const InclusivePerinatalCare = props => {
  return (
    <div>
      <SEO
        title="B’more for Healthy Babies reduced infant deaths by over 30%"
        description="A decade-long Baltimore City initiative has improved maternal health outcomes and reduced infant mortality among vulnerable communities."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Inclusive and equitable perinatal care for pregnant Black women"
                url="https://www.bcbs.com/the-health-of-america/healthequity/inclusive-and-equitable-perinatal-care-for-pregnant-black-women/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url(https://www.bcbs.com/sites/default/files/healthequity/images/brief-inclusive-and-equitable-perinatal-care-for-pregnant-black-women.jpg)`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    Inclusive and equitable perinatal care for pregnant Black
                    women
                  </h1>
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
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/video-healthy-maternity-program-improves-access-care-mom-and-baby">
                    Healthy maternity program improves access to care for mom
                    and baby
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
                The rate of pregnancy-related deaths is nearly three times
                higher for Black women in Maryland than it is for White women,
                according to the Maryland Department of Health’s annual maternal
                mortality review. Across the country, that number is not
                improving, but in Baltimore, home to the largest health plan,
                that racial disparity is narrowing.
              </p>
              <p>
                CareFirst BlueCross BlueShield, through their grantmaking
                efforts, has invested in a decade-long Baltimore City
                initiative, B’more for Healthy Babies, which has reduced infant
                deaths by more than 30%.
              </p>
              <p>
                Grantmaking efforts also support Mamatoto Village, an
                organization that makes perinatal support services more
                accessible and provides pathways to careers in maternal health
                for Black women. Services for pregnant Black women include home
                visits, community birth workers who attend to their emotional,
                educational and physical needs and lactation consultants.
                Mamatoto Village emphasizes inclusive, respectful and equitable
                care, and empowers women and communities to adopt healthy
                lifestyles.
              </p>
              <p>
                <em>
                  CareFirst BlueCross BlueShield is an independent licensee of
                  the Blue Cross Blue Shield Association, an association of
                  independent, locally operated Blue Cross and Blue Shield
                  companies.
                </em>
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <Fade>
        <div className="pp-explore pp-explore-single-card">
          <h2>Explore more stories</h2>
          <InstantSearch searchClient={searchClient} indexName="test_index">
            <Configure
              hitsPerPage={2}
              distinct
              filters="headline:'Supporting bright beginnings for mothers and babies'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default InclusivePerinatalCare

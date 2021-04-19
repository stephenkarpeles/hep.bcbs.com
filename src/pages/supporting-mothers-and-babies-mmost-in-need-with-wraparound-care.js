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

const WrapAroundCare = props => {
  return (
    <div>
      <SEO
        title="Supporting mothers and babies most in need"
        description="Health Care Service Corporation is piloting a new way to connect most in need mothers and babies to care improving prenatal and postpartum outcomes."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Supporting mothers and babies most in need with wraparound care"
                url="https://www.bcbs.com/the-health-of-america/healthequity/supporting-mothers-and-babies-mmost-in-need-with-wraparound-care/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/brief-supporting-mothers-and-babies-most-in-need-with-wraparound-care.png")`,
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
                  <h1>
                    Supporting mothers and babies most in need with wraparound
                    care
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
                Doctors spend their days immersed in hands-on care. They don't
                always get time to support patients' social needs. But factors
                like food security, educational resources and mental health can
                make big impacts in patients' overall health--especially when
                those patients are expectant mothers. To support mothers and
                babies most in need,{" "}
                <strong>Health Care Service Corporation (HCSC)</strong> is
                piloting a new way to connect them to care.
              </p>
              <p>
                With a goal of improving prenatal and postpartum health
                outcomes, the health plan is working with providers to refer
                expectant mothers to their Special Beginnings Program. Once
                signed up, mothers are connected with the support and resources
                they need keep themselves and their newborns healthy. For some,
                this means education on what to expect. For those with more
                complex needs, this support may include mental health care,
                connection to social services like WIC, car seat fittings and
                regular calls from an HCSC care manager.
              </p>
              <p>
                The plan is also connecting parents in communities across
                Chicago with doulas, who can support women with education, labor
                care, breastfeeding help and postpartum needs within a
                culturally appropriate lens. Their work is also focused on
                individuals with an income below $50,0000; persons of color;
                LGBTQ+ individuals; those with disabilities; survivors of
                violence; those who have experienced pregnancy or birth trauma,
                or postpartum depression; refugees; and those of minoritized
                religious groups.
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
              filters="headline:'Innovating maternal care for over 20 years' OR headline:'Health education and culturally competent doula support for pregnant moms'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default WrapAroundCare

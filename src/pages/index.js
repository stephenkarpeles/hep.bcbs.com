import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import algoliasearch from "algoliasearch/lite"
import { useTranslation } from "react-i18next"
import {
  InstantSearch,
  SearchBox,
  InfiniteHits,
  Configure,
  RefinementList,
  MenuSelect,
  ClearRefinements,
} from "react-instantsearch-dom"
import AdvisoryBoard from "../components/AdvisoryBoard/AdvisoryBoard"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/Newsletter"
import PressKitBanner from "../components/PressKitBanner/PressKitBanner"
import Alert from "../components/Alert/Alert"

// TODO: Possibly add clean browser urls
// @see https://www.algolia.com/doc/guides/building-search-ui/going-further/routing-urls/react/

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

const IndexPage = props => {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title="Blue Health Equity"
        description="Blue Cross Blue Shield Association announces National Health Equity Strategy to confront the nation’s crisis in racial health disparities."
      />
      {/* <Alert /> */}
      <section className="intro" id="intro">
        <div className="max-container">
          <h1 id="healthequity">{t("home.title")}</h1>
          <div className="subtitle">{t("home.subtitle")}</div>
          <div className="intro--video">
            <div className="intro--video-wrapper">
              <iframe
                loading="lazy"
                width="640"
                height="360"
                src="https://www.youtube.com/embed/KNUblC8hLPg"
                title="Youtube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="intro--video-details">
            <div className="intro--video-quote">{t("home.quote")}</div>
            <div className="intro--video-content">{t("home.content")}</div>
            <div className="intro--video-quote-attr">
              &mdash; {t("home.quote-attr")}
            </div>
            <div className="intro--video-quote-role">
              {t("home.quote-role")}
            </div>
          </div>
        </div>
      </section>

      <section className="lead" id="lead">
        <div className="inner-content">
          <div className="lead--main">{t("home.lead")}</div>
          <div className="lead--details">
            <div className="lead--details-points">
              <ul>
                <li>Collecting data to measure disparities</li>
                <li>Scaling effective programs</li>
                <li>
                  Working with providers to improve outcomes and address
                  unconscious bias
                </li>
                <li>Leaning into partnerships at the community level</li>
                <li>
                  <a
                    href="https://s3.amazonaws.com/cdn720/bcbsprogresshealth/2021/2021_Issue%20Brief_Addressing%20Health%20Disparities%20&%20Inequities_Final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Influencing policy decisions at the state and federal levels
                  </a>
                </li>
              </ul>
            </div>
            <div className="lead--details-summary">
              {t("home.lead-summary")}
            </div>
          </div>
        </div>
      </section>

      <section className="disparities" id="disparities">
        <div className="inner-content">
          <div className="disparities-heading">
            Health Disparities: By the Numbers
          </div>
          <div className="disparities-cards-wrap">
            <div className="disparities-cards">
              <div className="disparities-card disparities-card-cardio">
                <div className="disparities-card-heading">
                  Cardiovascular Health
                </div>
                <div className="disparities-card-stat">
                  70<span>%</span>
                </div>
                <div className="disparities-card-text">
                  Black men are 70% more likely to die from a stroke as compared
                  to non-Hispanic white men.
                </div>
                <div className="disparities-card-image">
                  <StaticImage
                    src="../images/illustrations/illustration-cardiovascular-health.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="disparities-card disparities-card-behavioral">
                <div className="disparities-card-heading">
                  Behavioral Health
                </div>
                <div className="disparities-card-stat">
                  55
                  <span>% lower</span>
                </div>
                <div className="disparities-card-text">
                  Likely to due to under-diagnosis, Millennials from majority
                  Black and Hispanic communities have lower diagnosis rates of
                  major depression, 31% and 55% lower respectively when compared
                  to white communities.
                </div>
                <div className="disparities-card-image">
                  <StaticImage
                    src="../images/illustrations/illustration-behavioral-health.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="disparities-card disparities-card-diabetes">
                <div className="disparities-card-heading">Diabetes</div>
                <div className="disparities-card-stat">
                  60<span>%</span>
                </div>
                <div className="disparities-card-text">
                  African American adults are 60% more likely than non-Hispanic
                  white adults to be diagnosed with diabetes by a physician.
                </div>
                <div className="disparities-card-image">
                  <StaticImage
                    src="../images/illustrations/illustration-diabetes.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="disparities-card disparities-card-maternal">
                <div className="disparities-card-heading">Maternal Health</div>
                <div className="disparities-card-stat">
                  3<span>x higher</span>
                </div>
                <div className="disparities-card-text">
                  Black mothers have 3x higher maternal mortality and 2x higher
                  morbidity than white mothers.
                </div>
                <div className="disparities-card-image">
                  <StaticImage
                    src="../images/illustrations/illustration-maternal-health.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sources">
            Sources: 1){" "}
            <u>
              <a
                target="_blank"
                href="https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=28"
              >
                OMH: Stroke and African Americans
              </a>
            </u>{" "}
            2){" "}
            <u>
              <a
                href="https://www.bcbs.com/the-health-of-america/reports/millennial-health-trends-behavioral-health-conditions"
                target="_blank"
              >
                Millennial Health: Trends in Behavioral Health Conditions
              </a>
            </u>{" "}
            3){" "}
            <u>
              <a
                href="https://www.cdc.gov/diabetes/pdfs/data/statistics/national-diabetes-statistics-report.pdf"
                target="_blank"
              >
                CDC: National Diabetes Statistics Report
              </a>
            </u>{" "}
            4){" "}
            <u>
              <a
                href="https://www.ajmc.com/view/racial-disparities-persist-in-maternal-morbidity-mortality-and-infant-health"
                target="_blank"
              >
                AJMC: Racial Disparities Persist in Maternal Morbidity,
                Mortality and Infant Health
              </a>
            </u>
          </div>
        </div>
      </section>

      <section className="goal-banner" id="commitment">
        <div className="max-container">
          <div className="goal-banner-box">
            <h6 className="goal-banner-box-title">Our Goal</h6>
            <div className="goal-banner-box-description">
              Reduce racial disparities in maternal health by
            </div>
            <div className="goal-banner-box-stat">
              50<span>%</span>
              <span className="goal-banner-box-text">in five years.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="profiles" id="community">
        <div className="inner-content community">
          <h2 style={{ color: "#0072A7" }}>
            What we're doing in your community
          </h2>
          <p
            style={{
              maxWidth: 800,
              marginBottom: "3rem",
              fontSize: "1.125rem",
            }}
          >
            BCBS companies are addressing racial disparities and improving
            health outcomes in the communities where you live and work.
          </p>
        </div>
        <div className="inner-content inner-content-filters">
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles"
          >
            <Configure hitsPerPage={5} distinct />
            <div className="search-filters">
              <div className="search-filters-label-main">Filter</div>
              <SearchBox
                translations={{
                  placeholder: "Keyword",
                }}
              />
              <div className="search-filters-refinement">
                <div className="search-filters-label">
                  What's Happening in my State
                </div>
                <MenuSelect
                  attribute="states"
                  limit={50}
                  translations={{
                    seeAllOption: "All States",
                  }}
                />
              </div>
              <div className="search-filters-refinement">
                <div className="search-filters-label">
                  Maternal Health Topics
                </div>
                <RefinementList attribute="subtopics" />
              </div>
              <ClearRefinements
                clearsQuery
                translations={{
                  reset: "Clear Filters",
                }}
              />
            </div>
            <InfiniteHits
              hitComponent={planResult}
              translations={{
                loadMore: "Load more",
              }}
            />
          </InstantSearch>
        </div>
      </section>

      <AdvisoryBoard />

      {/* <section className="news" id="news">
        <div className="inner-content">
          <h2>Plan News</h2>
          <div className="news-item">
            <div className="news-item--plan-name">BCBSRI</div>
            <div className="news-item--plan-title">
              <a href="#">This is a Title for the post abount something.</a>
            </div>
            <div className="news-item--plan-date">March 15th, 2021</div>
          </div>
          <div className="news-item">
            <div className="news-item--plan-name">BCBSRI</div>
            <div className="news-item--plan-title">
              <a href="#">This is a Title for the post abount something.</a>
            </div>
            <div className="news-item--plan-date">March 15th, 2021</div>
          </div>
          <div className="news-item">
            <div className="news-item--plan-name">BCBSRI</div>
            <div className="news-item--plan-title">
              <a href="#">This is a Title for the post abount something.</a>
            </div>
            <div className="news-item--plan-date">March 15th, 2021</div>
          </div>
        </div>
      </section> */}

      <PressKitBanner />

      <Newsletter />
    </>
  )
}

export default IndexPage

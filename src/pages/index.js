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

import cardio from "../images/illustrations/illustration-cardiovascular-health.png"
import behavioral from "../images/illustrations/illustration-behavioral-health.png"
import diabetes from "../images/illustrations/illustration-diabetes.png"
import maternal from "../images/illustrations/illustration-maternal-health.png"

// TODO: Possibly add clean browser urls
// @see https://www.algolia.com/doc/guides/building-search-ui/going-further/routing-urls/react/

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

const IndexPage = props => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title="Home" />

      <section className="intro" id="intro">
        <div className="max-container">
          <h1 id="healthequity">{t("home.title")}</h1>
          <div className="subtitle">{t("home.subtitle")}</div>
          <div className="intro--video">
            <div className="intro--video-wrapper">
              <iframe
                loading="lazy"
                width="780"
                height="438"
                src="https://www.youtube.com/embed/EngW7tLk6R8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="intro--video-details">
            <div className="intro--video-quote">{t("home.quote")}</div>
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
                <li>
                  Working with providers to improve outcomes and address
                  unconscious bias
                </li>
                <li>Leaning into partnerships at the community level</li>
                <li>
                  Influencing policy decisions at the state and federal levels
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
              <div className="disparities-card-heading">Behavioral Health</div>
              <div className="disparities-card-stat">IMG</div>
              <div className="disparities-card-text">
                Millennials from majority-Black and -Hispanic communities have
                lower diagnosis rates of behavioral health conditions compared
                to millennials from white communities.
              </div>
              <div className="disparities-card-image">
                {/* <StaticImage src={behavioral} alt="" /> */}
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
                {/* <StaticImage src={diabetes} alt="" /> */}
              </div>
            </div>
            <div className="disparities-card disparities-card-maternal">
              <div className="disparities-card-heading">Maternal Health</div>
              <div className="disparities-card-stat">
                3<span>x</span>
              </div>
              <div className="disparities-card-text">
                Black mothers have 3x higher maternal mortality and 2x higher
                morbidity than white mothers.
              </div>
              <div className="disparities-card-image">
                {/* <StaticImage src={maternal} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="profiles" id="community">
        <div className="inner-content community">
          <h2 style={{ color: "#0072A7" }}>
            What we're doing in your community
          </h2>
          <p style={{ maxWidth: 800, marginBottom: "3rem" }}>
            Discover how BCBS companies are measuring disparities, addressing
            unconscious bias and improving health outcomes in the communities
            where you live and work.
          </p>
        </div>
        <div className="inner-content inner-content-filters">
          <InstantSearch searchClient={searchClient} indexName="test_index">
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
                  What's Happeining in my State
                </div>
                <MenuSelect
                  attribute="state"
                  translations={{
                    seeAllOption: "All States",
                  }}
                />
              </div>
              <div className="search-filters-refinement">
                <div className="search-filters-label">
                  Maternal Health Topics
                </div>
                <RefinementList attribute="category" />
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

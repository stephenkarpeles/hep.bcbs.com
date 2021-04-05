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
} from "react-instantsearch-dom"

import Layout from "../components/layout"
import SEO from "../components/seo"

// TODO: Possibly add clean browser urls
// @see https://www.algolia.com/doc/guides/building-search-ui/going-further/routing-urls/react/

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

const Hit = ({ hit }) => {
  return <p>{hit.name}</p>
}

const IndexPage = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title="Home" />

      <h1>{t('home.title')}</h1>

      <section className="intro" id="intro">
        <div className="max-container">
          <h1 id="what-is-health-equity">Mission Statement</h1>
          <div className="intro--video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nFEpn_Y_KZw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="intro--video-quote">
            Position Statement or Video alternatve text
          </div>
        </div>
      </section>

      <section className="statistics" id="our-commitment">
        <div className="min-content">
          <h2>Statistics</h2>
          <div className="stat">
            <div className="stat--number">$100 million</div>
            <div className="stat--text">
              followup description of what this number means
            </div>
          </div>
          <div className="stat">
            <div className="stat--number">$100 million</div>
            <div className="stat--text">
              followup description of what this number means
            </div>
          </div>
        </div>
      </section>

      <section className="community" id="what-were-doing-in-your-community">
        <div className="inner-content">
          <h2>What we're doing in your community</h2>
          <p>lorem text</p>
        </div>
      </section>

      <section className="profiles">
        <div className="inner-content">
          <InstantSearch searchClient={searchClient} indexName="test_index">
            <Configure hitsPerPage={5} distinct />
            <SearchBox />
            <InfiniteHits
              hitComponent={Hit}
              translations={{
                loadMore: "Load more",
              }}
            />
          </InstantSearch>
        </div>
      </section>

      <section className="advisory-board" id="meet-our-advisory-panel">
        <div className="inner-content">
          <h2>Advisory Board</h2>
          <div class="advisory-board-member">
            <div class="advisory-board-member--image">
              <img src="https://via.placeholder.com/150" />
            </div>
            <div class="advisory-board-member--name">Bob Ross</div>
            <div class="advisory-board-member--title">Happy Tree Designer</div>
          </div>
          <div class="advisory-board-member">
            <div class="advisory-board-member--image">
              <img src="https://via.placeholder.com/150" />
            </div>
            <div class="advisory-board-member--name">Bob Ross</div>
            <div class="advisory-board-member--title">Happy Tree Designer</div>
          </div>
          <div class="advisory-board-member">
            <div class="advisory-board-member--image">
              <img src="https://via.placeholder.com/150" />
            </div>
            <div class="advisory-board-member--name">Bob Ross</div>
            <div class="advisory-board-member--title">Happy Tree Designer</div>
          </div>
          <div class="advisory-board-member">
            <div class="advisory-board-member--image">
              <img src="https://via.placeholder.com/150" />
            </div>
            <div class="advisory-board-member--name">Bob Ross</div>
            <div class="advisory-board-member--title">Happy Tree Designer</div>
          </div>
        </div>
      </section>

      <section className="news" id="news">
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
      </section>

      <section className="presskit" id="press-kit"></section>

      <section className="newsletter" id="newsletter">
        <div className="inner-content">
          <div className="eyebrow">Newsletter</div>
          <h2>Stay Connected</h2>
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

export default IndexPage

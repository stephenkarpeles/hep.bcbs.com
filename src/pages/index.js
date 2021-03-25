import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"

import Layout from "../components/layout"
import SEO from "../components/seo"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

const Hit = ({ hit }) => {
  return <p>{hit.name}</p>
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Mission Statement</h1>
    <section className="intro" id="intro">
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
    </section>
    <section className="statistics" id="statistics">
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
    </section>
    <section className="profiles" id="profiles">
      <InstantSearch searchClient={searchClient} indexName="test_index">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </section>
    <section className="presskit" id="presskit"></section>
    <section className="advisory-board" id="advisory-board">
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
    </section>
    <section className="videos" id="videos"></section>
    <section className="news" id="news">
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
    </section>
  </Layout>
)

export default IndexPage

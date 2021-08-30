// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { InstantSearch, Hits, Configure } from "react-instantsearch-dom"
import { searchClient, planResult } from "../components/Algolia"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

// Image
const mainImage =
  "https://www.bcbs.com/sites/default/files/healthequity/images/brief-breaking-through-bias-in-maternity-care.jpg"

const BreakingBias = props => {
  return (
    <div>
      <SEO
        title="Identifying and addressing implicit biases in maternal care"
        description="The Breaking Through Bias in Maternity Care program covers strategies to mitigate bias in maternity care and building a culture of equity."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Breaking through bias in maternity care"
                url="https://www.bcbs.com/the-health-of-america/healthequity/breaking-through-bias-in-maternity-care/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url(${mainImage})`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__date">
                  <span>Published March 3, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>Breaking through bias in maternity care</h1>
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
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <p>
                The U.S. is among the most dangerous developed nations for
                pregnant women, new moms and babies, according to data from the
                March of Dimes. Outcomes are especially concerning for women of
                color: maternal mortality rates among Black women, for example,
                are three times higher than those among white women. While these
                disparities are caused by a complex fabric of social, political
                and economic injustices, implicit bias in the healthcare system
                plays a well-documented role.
              </p>
              <p>
                To support healthcare workers in identifying and addressing
                their own implicit biases,{" "}
                <strong>Blue Cross and Blue Shield of North Carolina</strong>{" "}
                (Blue Cross NC) helped March of Dimes launch its national
                Breaking Through Bias in Maternity Care program in North
                Carolina, which was converted to a virtual experience due to the
                COVID-19 pandemic. Maternal care providers across North Carolina
                pay no fee to attend. The program’s curriculum covers structural
                racism in the U.S., strategies to mitigate bias in maternity
                care and approaches to building a culture of equity in
                workplaces and communities.
              </p>
              <p>
                <em>
                  Blue Cross and Blue Shield of North Carolina is an independent
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
              filters="headline:'Data-driven strategies to address disparities in maternal care' OR headline:'Inclusive and equitable perinatal care for pregnant Black women'"
            />

            <Hits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default BreakingBias

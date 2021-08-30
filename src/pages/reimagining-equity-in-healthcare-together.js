// Base Imports
import * as React from "react"
import Fade from "react-reveal/Fade"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

// Image
const mainImage =
  "https://www.bcbs.com/sites/default/files/healthequity/images/blog-reimagining-equity-in-healthcare-together.jpg"

const ReimaginingEquity = props => {
  return (
    <div>
      <SEO
        title="Reimagining equity in healthcare, together"
        description="Your health shouldn’t depend on the color of your skin or the neighborhood you live in, but too often it
does."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Reimagining equity in healthcare, together"
                url="https://www.bcbs.com/the-health-of-america/healthequity/reimagining-equity-in-healthcare-together/"
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
                {/* <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div> */}
                <div className="pp-hero__date">
                  <span>Published April 19, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>Reimagining equity in healthcare, together</h1>
                </div>
                <div className="pp-hero__author">
                  <span>Kim Keck</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="pp-main">
        <Fade>
          <div className="pp-related">
            {/* <h5 className="pp-related__title">Related</h5>
            <ul className="pp-related__list">
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Health of America</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/reports/trends-in-pregnancy-and-childbirth-complications-in-the-us">
                    Trends in pregnancy and childbirth complications in the U.S.
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
            </ul> */}
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <p>
                Your health shouldn’t depend on the color of your skin or the
                neighborhood you live in, but too often it does. Communities of
                color, accounting for nearly{" "}
                <a
                  href="https://www.cdc.gov/minorityhealth/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  40% of the U.S. population
                </a>
                , bear a disproportionate burden of preventable disease,
                disability and death.
              </p>
              <p>
                Today, the Blue Cross Blue Shield Association launched a{" "}
                <a
                  href="https://www.bcbs.com/press-releases/bcbsa-announces-national-health-equity-strategy-to-confront-nations-racial-health-disparities"
                  target="_blank"
                  rel="noreferrer"
                >
                  National Health Equity Strategy
                </a>{" "}
                to reimagine a more equitable system of health. This is a
                multiyear effort to address the nation’s unconscionable and
                unacceptable racial health disparities that have afflicted
                generations of Americans. This strategy builds on the{" "}
                <a
                  href="https://www.bcbs.com/press-releases/pledge-make-meaningful-change"
                  target="_blank"
                  rel="noreferrer"
                >
                  pledge
                </a>{" "}
                all Blue Cross and Blue Shield (BCBS) companies made last year
                to lead the essential work to fight systemic racism.
              </p>
              <blockquote>
                Your health shouldn’t depend on the color of your skin or the
                neighborhood you live in.
              </blockquote>
              <p>
                Health disparities are the result of a complex fabric of social,
                racial and economic injustice—a fabric we can’t unravel
                overnight. But starting here and now, the Blues are taking
                immediate and ongoing action to put an end to these inequities,
                setting bold goals and holding ourselves accountable to tangible
                results.
              </p>
              <h4>A Crisis in Maternal Health</h4>
              <p>
                Our first focus:
                <strong>
                  in the next five years, we will reduce racial disparities in
                  maternal health by 50%.
                </strong>
              </p>
              <p>
                Data from the Centers for Disease Control and Prevention tells
                us that women of color—specifically Black and Indigenous
                women—are three times more likely to die from pregnancy
                complications than their white counterparts. In fact,{" "}
                <a
                  href="https://www.commonwealthfund.org/publications/issue-briefs/2020/nov/maternal-mortality-maternity-care-us-compared-10-countries"
                  target="_blank"
                  rel="noreferrer"
                >
                  the U.S. is the most dangerous developed country
                </a>{" "}
                to have a baby. This is a crisis we must confront.
              </p>
              <p>
                Many BCBS companies have started this work and are already
                focused on preventing these dangerous outcomes. Their work to
                date includes:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    Identifying women at risk and providing one-on-one coaching
                    to manage their chronic conditions during pregnancy.
                  </p>
                </li>
                <li>
                  <p>
                    Offering “prescriptions” for healthy food delivery and
                    nutrition counseling—addressing underlying social
                    determinants that have a significant impact on health.
                  </p>
                </li>
                <li>
                  <p>
                    Providing doula support to mothers throughout their pre- and
                    postnatal journeys.
                  </p>
                </li>
              </ul>
              <p>
                We will continue taking proven initiatives—and finding the best
                new ideas—and making them available to more people and
                communities across the country.
              </p>
              <h4>An Invitation to Join Us</h4>
              <p>
                To address racial health disparities in a meaningful way, we
                must bring more people to the table to create lasting change.
                That’s why we have convened a{" "}
                <a href="https://www.bcbs.com/the-health-of-america/healthequity/#advisory">
                  national advisory panel
                </a>{" "}
                of distinguished doctors, public health experts and community
                leaders to guide this work. With their counsel, we’ll be
                focusing on specific efforts to build a more equitable future:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    Encouraging industry initiatives to develop national
                    standards for the collection of race, ethnicity and language
                    (R/E/L) data, to understand where we are today and track our
                    progress.
                  </p>
                </li>
                <li>
                  <p>
                    Partnering with providers to offer unconscious bias training
                    and incentives to ensure culturally appropriate care and
                    improve health outcomes.
                  </p>
                </li>
                <li>
                  <p>
                    Leaning into new and longstanding relationships with
                    community organizations to address root causes of
                    inequities.
                  </p>
                </li>
                <li>
                  <p>
                    Advocating for public policies at the state and federal
                    levels to improve access to health coverage and supporting
                    efforts like the CDC’s recently announced initiatives to
                    address racism as a public health threat, the White House’s
                    first-ever proclamation on Black maternal health and the
                    Momnibus package.
                  </p>
                </li>
              </ul>
              <p>
                These are just some of the steps the Blues are committed to, and
                we invite others—industry leaders, policymakers, providers,
                employers and other stakeholders—to join us in this crucial
                work. Together, I believe we can build a new model of equitable
                care. Not just for the 110 million BCBS members, but for all
                Americans.
              </p>
              <p>
                <em>
                  The Blue Cross Blue Shield Association is a national
                  association of 35 independent, community-based and
                  locally operated Blue Cross and Blue Shield companies that
                  collectively provide healthcare coverage for one in three
                  Americans.
                </em>
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* <Fade>
        <div className="pp-explore">
          <h2>Explore more stories</h2>
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles"
          >
            <Configure
              hitsPerPage={2}
              distinct
              filters="headline:'Strong collaborations aim to improve birth outcomes' OR headline:'Culturally appropriate interventions for mothers and newborns'"
            />

            <Hits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade> */}
    </div>
  )
}

export default ReimaginingEquity

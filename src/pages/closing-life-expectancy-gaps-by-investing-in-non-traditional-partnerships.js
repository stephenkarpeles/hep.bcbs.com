// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { InstantSearch, InfiniteHits, Configure } from "react-instantsearch-dom"
import { searchClient, planResult } from "../components/Algolia"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

// Image
const mainImage =
  "https://www.bcbs.com/sites/default/files/healthequity/images/feature-closing-life-expectancy-gaps-by-investing-in-non-traditional-partnerships.jpg"

const ClosingLifeExpectancy = props => {
  return (
    <div>
      <SEO
        title="Closing life expectancy gaps by investing in non-traditional partnerships"
        description="Healthcare leaders provide insight on long-term health equity strategies that focus on collaboration and financial investments to close life expectancy gaps and eliminate barriers to good health."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Closing life expectancy gaps by investing in non-traditional partnerships"
                url="https://www.bcbs.com/the-health-of-america/healthequity/closing-life-expectancy-gaps-by-investing-in-non-traditional-partnerships/"
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
                <div className="pp-hero__title">
                  <h1>
                    Closing life expectancy gaps by investing in non-traditional
                    partnerships
                  </h1>
                </div>
                <div className="pp-hero__author">
                  <span>Carlton Houston</span>
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
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/reports/millennial-health-trends-behavioral-health-conditions">
                    Millennial Health: Trends in Behavioral Health Conditions
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
                <em>
                  Healthcare leaders provide insight on long-term health equity
                  strategies that focus on collaboration and financial
                  investments to close life expectancy gaps and eliminate
                  barriers to good health.
                </em>
              </p>
              <p>
                The Chicago communities of Englewood and Streeterville are only
                10 miles apart. Despite that proximity, the difference in life
                expectancy for residents of those neighborhoods is not even
                close. A{" "}
                <a
                  href="https://nyulangone.org/news/large-life-expectancy-gaps-us-cities-linked-racial-ethnic-segregation-neighborhood"
                  target="_blank"
                  rel="noreferrer"
                >
                  2019 study
                </a>{" "}
                shows the mostly Black residents of Englewood have an average
                life expectancy of 60 years. In contrast, the mostly white
                residents of Streeterville can expect to live until the age of
                90. This 30-year difference is the{" "}
                <a
                  href="https://nyulangone.org/news/large-life-expectancy-gaps-us-cities-linked-racial-ethnic-segregation-neighborhood"
                  target="_blank"
                  rel="noreferrer"
                >
                  largest life expectancy gap between two communities within the
                  same city
                </a>{" "}
                according to researchers at the{" "}
                <a
                  href="https://med.nyu.edu/pophealth/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Department of Population Health
                </a>
                at NYU School of Medicine.
              </p>
              <p>
                Researchers rely on life expectancy statistics to measure public
                health. Like many American cities, Chicago{" "}
                <a
                  href="https://www.cdc.gov/nchs/nvss/life-expectancy.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  life expectancy snapshots
                </a>{" "}
                are directly tied to the legacy of policies and laws that
                segregated Americans based on skin color and ethnicity. The
                systemic nature of those barriers created lasting disparities
                that can be found today in air quality, level of poverty,
                quality of medical care, access to healthy food and availability
                of housing and transportation.
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    <a
                      href="https://www.cdc.gov/healthequity/racism-disparities/impact-of-racism.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CDC - The impact of racism on our nation's health
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                The impact of COVID-19 on life expectancy is an additional
                reminder of the importance of achieving health equity. Experts
                say innovation and non-traditional partnerships are the key to
                undoing decades of inequities.
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    <Link to="/confronting-crisis-of-health-inequities-with-bold-national-strategy/">
                      The facts - Confronting a crisis of health inequities
                    </Link>
                  </p>
                </li>
              </ul>
              <h4>
                Long-term health equity- 'More of a marathon than a sprint'
              </h4>
              <p>
                <img
                  style={{
                    float: "left",
                    maxWidth: "200px",
                    display: "block",
                    marginRight: "1rem",
                  }}
                  src="https://www.bcbs.com/sites/default/files/healthequity/images/dr-robinson-coat.jpg"
                  alt="Dr. Derek Robinson - BCBS Illinois Vice President, Chief Medical Officer"
                />
                The journey to health equity for all Americans is a "more of a
                marathon than a sprint," says{" "}
                <a
                  href="https://www.bcbsil.com/company-info/leadership#2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dr. Derek Robinson, vice president and chief medical officer
                  for Blue Cross and Blue Shield of Illinois (BCBS Illinois)
                </a>
                . Dr. Robinson is a practicing emergency medicine physician. He
                also leads the BCBS Illinois health equity strategy, which
                emphasizes equity as a long-term, operational priority. To
                accomplish that, Dr. Robinson talks about the importance of
                financial investments to support non-traditional community
                partnerships as a strategy to address challenges that exist
                beyond the walls of healthcare. "That's what leadership is
                about," says Dr. Robinson. "We have to ensure that we inspire
                others and serve as a catalyst to ensure that we advance health
                equity for our communities through our collective impact. This
                includes our role within health care as an insurer, where we
                have established financial incentives to prioritize equity in
                clinical quality improvement."
              </p>
              <h4>Leadership in the community</h4>
              <p>
                Under Dr. Robinson's leadership,{" "}
                <a
                  href="https://www.bcbsil.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blue Cross and Blue Shield of Illinois (BCBS Illinois)
                </a>{" "}
                has been working to improve the care of its members through
                multiple health equity initiatives that provide financial
                incentives and support:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    <a
                      href="https://www.bcbsil.com/newsroom/news-releases/2020/leading-efforts-providers-improve-health-equity"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Health Equity Hospital Quality Incentive Pilot Program
                    </a>{" "}
                    - The program’s immediate objective is to support hospitals
                    serving populations most at risk of contracting COVID-19
                    and, in the near and long terms, improving the quality of
                    care by elevating a focus on health equity and reducing
                    racial and ethnic disparities in care, including severe
                    maternal morbidity.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://ifdhe.aha.org/health-equity-grant-program"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Grant program to identify and eliminate disparities
                    </a>{" "}
                    - BCBS Illinois has partnered with the American Hospital
                    Association’s (AHA){" "}
                    <a
                      href="https://ifdhe.aha.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Institute for Diversity and Health Equity (IFDHE)
                    </a>{" "}
                    - to support new programs designed to help the awardees
                    eliminate an identified health care disparity in their local
                    communities and work toward ensuring safe, equitable and
                    high-quality health care for all of their patients.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://www.bcbsil.com/provider/clinical/health_equity_physician_diversity.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Institute for Physician Diversity® (IPD)
                    </a>{" "}
                    - This is a first-of-its kind strategic collaboration
                    between BCBS Illinois, academic medical centers, teaching
                    hospitals, and not-for-profit associations. The purpose is
                    to achieve greater racial and ethnic diversity in the
                    physician workforce; this effort includes the recent
                    creation of an IPD learning community under the{" "}
                    <a
                      href="https://www.acgme.org/Newsroom/Newsroom-Details/ArticleID/11561/New-em-ACGME-Equity-Matters-em-160-sup-style-font-size-10px-T/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ACGME’s new Equity Matters Initiative.
                    </a>
                  </p>
                </li>
              </ul>
              <h4>National Health Equity strategy</h4>
              <p>
                <a
                  href="https://www.bcbs.com/the-health-of-america?utm_source=HoA_Redirect"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Blue Cross Blue Shield Association (BCBSA)
                </a>{" "}
                is demonstrating a commitment to achieving health equity by
                announcing a national strategy to reduce racial disparities in
                healthcare starting with maternal health. The BCBSA goal is to
                reduce disparities faced by Black women by 50% in 5 years.{" "}
                <a
                  href="https://www.bcbs.com/press-releases/bcbsa-announces-national-health-equity-strategy-to-confront-nations-racial-health-disparities"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more about the strategy at BlueHealthEquity.com
                </a>
              </p>
              <p>
                In the spring of 2021,{" "}
                <a
                  href="https://news.ibx.com/hey-auntie-wins-well-city-challenge-grand-prize/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blue Cross Blue Shield Association announced its new national
                  health equity strategy
                </a>{" "}
                - starting with the goal of reducing racial disparities in
                maternal health by 50% in 5 years. The strategy is based on
                inequities
              </p>
              <p>Here's how BCBSA will support national health equity goals:</p>
              <ul className="pp-content__fancy-list">
                <li>Improving data collection</li>
                <li>Scaling effective programs</li>
                <li>Addressing bias</li>
                <li>Building partnerships</li>
                <li>Influencing policy decisions</li>
              </ul>
              <p>
                “Your health shouldn’t depend on the color of your skin or the
                neighborhood you live in,” said Kim Keck, president and CEO of
                BCBSA. “The crisis in racial disparities in our country’s health
                care is unconscionable and unacceptable. While BCBS companies
                have made great strides in addressing racial health disparities
                in our local communities, there is so much more to be done.”
              </p>
              <p>
                <Link to="/?utm_source=bluehealthequityurl">
                  Learn more about BCBSA efforts to achieve health equity.
                </Link>
              </p>
              <p>
                <em>
                  Blue Cross and Blue Shield of Illinois is an independent
                  licensee of the Blue Cross Blue Shield Association, an
                  association of independent, locally operated Blue Cross and
                  Blue Shield companies.
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
              filters="headline:'Partnering with faith communities to support pregnant women of color' OR headline:'Breaking through bias in maternity care'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade> */}
    </div>
  )
}

export default ClosingLifeExpectancy

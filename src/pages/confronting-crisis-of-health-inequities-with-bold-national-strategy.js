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

const ConfrontingCrisis = props => {
  return (
    <div>
      <SEO
        title="The facts: Confronting a crisis of health inequities with a bold national strategy"
        description="Education and understanding are the first steps to addressing health inequities and disparities according to leading health organizations."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="The facts: Confronting a crisis of health inequities with a bold national strategy"
                url="https://www.bcbs.com/the-health-of-america/healthequity/confronting-crisis-of-health-inequities-with-bold-national-strategy/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/brief-confronting-crisis-of-health-inequities-with-bold-national-strategy.jpg")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__date">
                  <span>Published June 16, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    The facts: Confronting a crisis of health inequities with a
                    bold national strategy
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
            <h5 className="pp-related__title">Related</h5>
            <ul className="pp-related__list">
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/thats-our-mission-addressing-health-equity-beyond-covid-19-strong">
                    'That's our mission' addressing health equity beyond
                    COVID-19 with strong community relationships
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/video-clinical-trials-everyone-needs-seat-the-table">
                    In clinical trials, everyone needs a seat the table
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/webinar-confronting-racial-disparities-maternal-health">
                    Confronting Racial Disparities in Maternal Health
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
                <em>
                  <a href="https://www.bcbs.com/">
                    The Blue Cross Blue Shield Association
                  </a>
                   is driving change in healthcare by launching a national
                  health equity strategy. Through this multi-faceted initiative,
                  Blue Cross and Blue Shield companies will collaborate with
                  community partners and organizations to reduce racial health
                  disparities, address systemic racism and ultimately improve
                  the health of all Americans.
                </em>
              </p>
              <h4>What are racial health inequities?</h4>
              <p>
                According to the CDC, 
                <a
                  href="https://www.cdc.gov/chronicdisease/healthequity/index.htm#:~:text=Health%20equity%20is%20achieved%20when,length%20of%20life%3B%20quality%20of%20life"
                  target="_blank"
                  rel="noreferrer"
                >
                  health inequities
                </a>
                 are reflected in differences in length of life; quality of
                life; rates of disease, disability, and death; severity of
                disease; and access to treatment.
              </p>
              <p>
                The COVID-19 health crisis continues to expose the racial
                inequities that have impacted generations of Americans.
                Researchers and public health advocates have known for decades
                that Americans from non-white, ethnic backgrounds experience 
                <a
                  href="https://www.cdc.gov/healthequity/racism-disparities/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  higher rates of illness and death across a wide range of
                  health conditions, including diabetes, hypertension, obesity,
                  asthma, and heart disease,
                </a>{" "}
                when compared to their white counterparts. 
                <a
                  href="https://www.cdc.gov/healthequity/racism-disparities/impact-of-racism.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  The way to improve the lives of all Americans is to eliminate
                  the barriers to good health which includes addressing systemic
                  racism.
                </a>
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <a
                    href="https://www.cdc.gov/healthequity/racism-disparities/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDC: Racism is a serious threat to the public's health
                  </a>
                </li>
              </ul>
              <h4>Some facts on racial health inequities in America</h4>
              <ul className="pp-content__fancy-list">
                <li>
                  <strong>
                    Black men are 70% more likely to die from a stroke
                  </strong>
                   as compared to non-Hispanic white men.
                </li>
                <li>
                  Millennials from majority Black and Hispanic communities have
                  lower diagnosis rates of major depression, 31% and 55% lower
                  respectively when compared to white communities.
                </li>
                <li>
                  Black adults are <strong>60% more likely</strong> than
                  non-Hispanic white adults to be diagnosed with diabetes by a
                  physician.
                </li>
                <li>
                  Black mothers have 
                  <strong>
                    3x higher maternal mortality and 2x higher morbidity
                  </strong>
                   than white mothers
                </li>
              </ul>
              <h4>What is health equity?</h4>
              <blockquote>
                Health equity is achieved when every person has the opportunity
                to “attain his or her full health potential” and no one is
                “disadvantaged from achieving this potential because of social
                position or other socially determined circumstances," Centers
                for Disease Control and Prevention
              </blockquote>
              <ul className="pp-content__fancy-list">
                <li>
                  <a href="https://www.bcbs.com/the-health-of-america/healthequity/?utm_source=bluehealthequityurl">
                    Health Equity Leaders: Meet the BCBSA national advisory
                    panel of doctors, public health experts and community
                    leaders
                  </a>
                </li>
              </ul>
              <h4>A new strategy to achieve health equity</h4>
              <p>
                <a href="https://www.bcbs.com/">
                  The Blue Cross Blue Shield Association (BCBSA)
                </a>
                 launched a 
                <a href="https://www.bcbs.com/the-health-of-america/healthequity/?utm_source=hoahomepage">
                  national health equity strategy
                </a>
                 to address these types of inequities with a multi-faceted, long
                term approach. The multi-year strategy will focus on four
                conditions that disproportionately affect communities of color:
                maternal health, behavioral health, diabetes and cardiovascular
                conditions. As a first step, BCBSA announced it would set a 
                <a href="https://www.bcbs.com/the-health-of-america/healthequity/?utm_source=hoahomepage">
                  goal of reducing racial health disparities in maternal health
                  by 50 percent in five years.
                </a>
              </p>
              <p>Here's how BCBSA will support national health equity goals:</p>
              <ul className="pp-content__fancy-list">
                <li>Improving data collection</li>
                <li>Scaling effective programs</li>
                <li>Addressing bias</li>
                <li>Building partnerships</li>
                <li>Influencing policy decisions</li>
              </ul>
              <blockquote>
                The crisis in racial disparities in our country’s health care is
                unconscionable and unacceptable. Our deep roots in the local
                communities we serve, combined with the scale and scope of our
                national reach, enable all of us at Blue Cross Blue Shield
                companies to drive this new strategy and bring real change." 
                <cite>
                  Kim Keck, President and CEO Blue Cross Blue Shield Association
                </cite>
              </blockquote>
              <ul className="pp-content__fancy-list">
                <li>
                  <a href="https://www.bcbs.com/the-health-of-america/healthequity/?utm_source=hoahomepage">
                    Blue Cross Blue Shield Association confronts nation's crisis
                    on racial health disparities
                  </a>
                </li>
              </ul>
              <h4>Working together for a common goal</h4>
              <p>
                Leading health organizations are currently working to eliminate
                health disparities through education. The Office of Minority
                Health offers programs on cultural and linguistic competency
                through the U.S. Department of Health and Human Services
                website. 
                <a
                  href="https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=1&lvlid=6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Training serves to bring about positive health outcomes for
                  the nation's rapidly growing percentage of Americans with
                  non-white racial and ethnic backgrounds.
                </a>
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <a
                    href="https://www.cdc.gov/healthequity/racism-disparities/impact-of-racism.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDC: The far-reaching and unacceptable truth about the
                    impact of racism on health
                  </a>
                </li>
                <li>
                  More information: 
                  <a href="https://www.bcbs.com/press-releases/bcbsa-announces-national-health-equity-strategy-to-confront-nations-racial-health-disparities">
                    BCBSA press release on health equity
                  </a>
                </li>
              </ul>
              <p>
                Blue Cross and Blue Shield companies have a long history of
                supporting community partnerships that aim to achieve health
                equity. Here are some examples:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <a
                    href="https://www.bluecrossmn.com/about-us/corporate-social-responsibility/health-equity"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blue Cross and Blue Shield of Minnesota - committed to
                    making racial and health equity our business
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mibluesperspectives.com/2021/03/04/blue-cross-strengthens-efforts-to-address-health-care-disparities/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blue Cross Blue Shield of Michigan - Office of Health and
                    Healthcare disparities
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bcbsilcommunications.com/newsletters/br/2021/april/new_programs_aim.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blue Cross and Blue Shield of Illinois - New programs aim to
                    reduce disparities
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.anthemcorporateresponsibility.com/health-equity-programs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Anthem Blue Cross and Blue Shield - Innovative strategies
                    and caring solutions
                  </a>
                </li>
              </ul>
              <p>
                <em>
                  Blue Cross Blue Shield Association is an association of
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
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles"
          >
            <Configure
              hitsPerPage={2}
              distinct
              filters="headline:'Reimagining equity in healthcare, together'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default ConfrontingCrisis

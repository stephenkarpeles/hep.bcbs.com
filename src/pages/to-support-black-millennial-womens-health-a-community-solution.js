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
  "https://www.bcbs.com/sites/default/files/healthequity/images/feature-to-support-black-millennial-womens-health-a-community-solution.jpg"

const BlackMillennialWomensHealth = props => {
  return (
    <div>
      <SEO
        title="To support Black millennial women's health, a community solution"
        description="Independence Blue Cross is supporting the launch of a new community-led venture, Hey Auntie, to connect intergenerational Black women for mentorship and well-being."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="To support Black millennial women's health, a community solution"
                url="https://www.bcbs.com/the-health-of-america/healthequity/to-support-black-millennial-womens-health-a-community-solution/"
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
                <div className="pp-hero__title">
                  <h1>
                    To support Black millennial women's health, a community
                    solution
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
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/reports/millennial-health-trends-behavioral-health-conditions">
                    Millennial Health: Trends in Behavioral Health Conditions
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
                Independence Blue Cross (Independence BC) and the Economy League
                of Greater Philadelphia (ELGP) launched the{" "}
                <a
                  href="https://news.ibx.com/economy-league-independence-blue-cross-launch-well-city-challenge/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Well City Challenge
                </a>{" "}
                to improve the health of Philadelphia's millennial population.
                Nearly a third of all millennials face{" "}
                <a href="https://www.bcbs.com/the-health-of-america/reports/millennial-health-trends-behavioral-health-conditions">
                  mental or behavioral health conditions
                </a>
                , including depression, ADHD, and substance use disorders. This
                troubling statistic is not only decreasing millennials' quality
                of life, but also is driving chronic physical conditions,
                putting them on track to become one of the{" "}
                <a href="https://www.bcbs.com/the-health-of-america/reports/the-health-of-millennials">
                  least healthy generations
                </a>
                . It could also have major{" "}
                <a href="https://www.bcbs.com/the-health-of-america/reports/how-millennials-current-and-future-health-could-affect-our-economy">
                  consequences for the U.S. economy
                </a>{" "}
                in coming years, as millennials replace older generations as
                consumers, workers, and business owners.
              </p>
              <h4>Seeking millennial health solutions</h4>
              <p>
                Inspired by these{" "}
                <a href="https://www.bcbs.com/the-health-of-america/topics/millennial-health#topic-reports">
                  Blue Cross Blue Shield Health of America report®
                </a>{" "}
                findings and the need to address this developing health crisis,
                Independence Blue Cross (Independence BC) and the Economy League
                of Greater Philadelphia (ELGP) launched the{" "}
                <a
                  href="https://news.ibx.com/economy-league-independence-blue-cross-launch-well-city-challenge/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Well City Challenge
                </a>{" "}
                to improve the health of Philadelphia's millennial population.
                Drawing on the city's rich culture of creativity and community,
                the challenge invited everyday innovators to submit their best
                ideas to improve millennials' health.
              </p>
              <p>
                The launch of the challenge held a special significance in the
                midst of the coronavirus pandemic, a time of extraordinary
                uncertainty which has exacerbated mental health crises,
                addictions, economic disruptions and health disparities. In
                light of these unique challenges, the competition sought
                solutions across three themes: Mind/Body, Food and Nutrition,
                and Community/Social Connection.
              </p>
              <p>
                The grand-prize winner, announced in July, was{" "}
                <a
                  href="https://news.ibx.com/hey-auntie-wins-well-city-challenge-grand-prize/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hey, Auntie!
                </a>
                --an app that connects Black millennial women to older mentors,
                or "aunties," in a safe space to seek and share support.
                Multi-generational users are able to connect over conversation,
                fitness, new skills and volunteerism.
              </p>
              <p>
                "There is very little data on the health of Black millennial
                women," said Hey, Auntie! founder, Nicole Kennedy. "In the next
                five years, my goal is to use the data we gathered through Hey,
                Auntie! to help inform delivery services to improve Black
                millennial women’s behavioral and physical health. I want to
                expand Hey, Auntie! to be...a model for what a culturally
                responsive support system can look like."
              </p>
              <p>
                The Well City Challenge initially received more than 100
                applications representing all five counties and 51 zip codes in
                Southeastern Pennsylvania. Out of that initial set of
                applications, 15 teams were chosen to participate in a pitch
                competition in March. Five finalists emerged from the pitch
                competition and then participated in an “impact accelerator”
                this spring. The accelerator allowed the finalists to test their
                ideas and receive resources around market validation, business
                planning, communications, and funder engagement.
              </p>
              <p>
                The finalists then made final presentations, and Kennedy and Hey
                Auntie! came away as the winning team. Independence BC and ELGP
                will support Kennnedy with a $50,000 grant to help her implement
                the community program outlined by her project. Other finalists
                included:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    <a
                      href="https://economyleague.org/driving-regional-change/impact-labs/well-city-challenge/finalists/strides"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Strides
                    </a>{" "}
                    – a running-based fitness community that helps participants
                    get in shape, improve their health and boost their mood. The
                    program combines running and circuit training for
                    well-balanced workouts that participants can follow along on
                    their app or at coach-led group workouts in Philadelphia.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://economyleague.org/driving-regional-change/impact-labs/well-city-challenge/finalists/freedom-greens-gardens"
                      target="_blank"
                      rel="noreferrer"
                    >
                      The Freedom Greens and Gardens Project
                    </a>{" "}
                    – will transform Malcolm X Park and the surrounding blocks
                    as a destination for wellness within the heart of West
                    Philadelphia by providing space, community and ongoing
                    opportunities for millennials to be well and to thrive.
                    Through plant-based cooking classes and subscription boxes
                    (providing produce grown at their community garden), the
                    program will empower the community to embrace a healthier
                    lifestyle for themselves and their families through
                    healthier eating.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://economyleague.org/driving-regional-change/impact-labs/well-city-challenge/finalists/let-s-talk-philly-conversation-circles"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lets Talk Philly Conversation Circles
                    </a>{" "}
                    – works in partnership with The Welcoming Center to offer
                    immigrant millennials a safe space to practice and improve
                    their English conversation skills, develop social capital,
                    and increase their understanding about immigrant wellness by
                    sharing their stories, breaking stereotypes and prejudice,
                    and ensuring cultural authenticity.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://economyleague.org/driving-regional-change/impact-labs/well-city-challenge/finalists/shear-balance"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Shear Balance
                    </a>{" "}
                    – provides crucial mental health training to the communities
                    that need it most, specifically targeting salons and barber
                    shops as places that community members congregate. This
                    mental health training will help stylists and barbers
                    identify and address mental health red flags in these
                    traditionally underserved communities.
                  </p>
                </li>
              </ul>
              <h4>Building health equity</h4>
              <p>
                Supporting these endeavors is part of Independence’s greater
                commitment to reduce health disparities among communities of
                color, which{" "}
                <Link to="/#disparities">face disproportionate rates</Link> of
                chronic health conditions and{" "}
                <a
                  href="https://www.phillyvoice.com/addressing-mental-health-disparities-059991-cp/#:~:text=As%20the%20region%E2%80%99s%20largest%20health%20insurance%20organization%2C%20Independence,to%20fight%20health%20disparities%3A%20%E2%80%A2%20Know%20Your%20Mind."
                  target="_blank"
                  rel="noreferrer"
                >
                  often go untreated
                </a>{" "}
                for mental and behavioral health conditions. The insurer is
                leading critical work across several domains to support the
                health and well-being of racial and ethnic minority groups:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    In collaboration with the Urban Affairs Coalition,
                    Independence co-convened the{" "}
                    <a
                      href="http://www.endingracismpartnership.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ending Racism Partnership
                    </a>
                    , a city-wide collaboration of Philadelphia residents,
                    leaders, and influencers from community, business,
                    government, and philanthropy to end racial injustice and
                    economic inequality.
                  </p>
                </li>
                <li>
                  <p>
                    Independence and the Independence Blue Cross Foundation are
                    supporting a number of initiatives to{" "}
                    <Link to="/data-driven-strategies-to-address-disparities-in-maternal-care/">
                      address disparities in maternal care
                    </Link>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    In response to the COVID-19 crisis, which exacerbated
                    existing disparities among minority communities,
                    Independence joined America’s Health Insurance Plans (AHIP)
                    and the Blue Cross Blue Shield Association in a pledge to
                    promote vaccinations for 2 million underserved, at-risk
                    Americans. As part of this work, they supported efforts to
                    vaccinate the region's most underserved, under-vaccinated
                    populations and worked with community groups to ensure
                    equitable access to vaccines for Black and Brown residents.
                  </p>
                </li>
                <li>
                  <p>
                    Independence BC partnered with Signify Health to launch the
                    <a
                      href="https://news.ibx.com/communitylink-network-launch/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      CommunityLink Network program to remove barriers between
                      social and clinical care
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    The Independence Blue Cross Foundation{" "}
                    <a
                      href="https://infocus.ibxfoundation.org/new-funding-girard-college-mental-health-services/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      funded a program with Girard College and the Children’s
                      Hospital of Philadelphia to address
                    </a>{" "}
                    youth trauma and improve access to mental health services.
                  </p>
                </li>
              </ul>
              <p>
                <em>
                  Independence Blue Cross and the Independence Blue Cross
                  Foundation are independent licensee of the Blue Cross Blue
                  Shield Association, an association of independent, locally
                  operated Blue Cross and Blue Shield companies.
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
              filters="headline:'Partnering with faith communities to support pregnant women of color' OR headline:'Breaking through bias in maternity care'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default BlackMillennialWomensHealth

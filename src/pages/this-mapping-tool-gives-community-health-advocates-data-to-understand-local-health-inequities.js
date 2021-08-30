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
  "https://www.bcbs.com/sites/default/files/healthequity/images/brief-this-mapping-tool-gives-community-health-advocates-data-to-understand-local-health-inequities.jpg"

const MappingTool = props => {
  return (
    <div>
      <SEO
        title="This mapping tool gives community health advocates data to understand local health inequities"
        description="Where you live has an outsized impact on your health. Digging into data by ZIP code reveals why. Certain neighborhoods lack enough stores with fresh produce, access to transportation, safe and affordable housing or open spaces to play and exercise—all social determinants of health linked to chronic disease or other health problems. Armed with the right data, advocates can make the case for change."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="This mapping tool gives community health advocates data to understand local health inequitiess"
                url="https://www.bcbs.com/the-health-of-america/healthequity/this-mapping-tool-gives-community-health-advocates-data-to-understand-local-health-inequities/"
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
                    This mapping tool gives community health advocates data to
                    understand local health inequities
                  </h1>
                </div>
                <div className="pp-hero__author">
                  <span>Kristin Gourlay</span>
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
                  <span>Health Equity</span>
                </div>
                <div className="pp-related__text">
                  <Link to="/targeting-health-equity-with-community-health-workers-leading-the-way/">
                    Targeting health equity with community health workers
                    leading the way
                  </Link>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/standardized-screening-social-determinants-of-health-means-holistic">
                    Standardized screening for social determinants of health
                    means holistic healthcare from the first appointment
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Health Equity</span>
                </div>
                <div className="pp-related__text">
                  <Link to="/home-visits-address-high-risk-conditions-and-social-determinants-of-health/">
                    Home visits address high risk conditions and social
                    determinants of health
                  </Link>
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
                  Where you live has an outsized impact on your health. Digging
                  into data by ZIP code reveals why. Certain neighborhoods lack
                  enough stores with fresh produce, access to transportation,
                  safe and affordable housing or open spaces to play and
                  exercise—all social determinants of health linked to chronic
                  disease or other health problems. Armed with the right data,
                  advocates can make the case for change.
                </em>
              </p>
              <p>
                When Blue Shield of California Community Health Advocates “Z”
                Tarver and Kia Wilson want a better understanding of how to help
                a patient, they can check{" "}
                <a
                  href="https://healthreimagined.blueshieldca.com/the-80"
                  target="_blank"
                  rel="noreferrer"
                >
                  the80
                </a>
                . It’s a new community mapping tool that provides more insight,
                by ZIP code and social determinant, into what might influence a
                patient’s health beyond the doctor’s office. Why the name,
                the80? Because{" "}
                <a
                  href="https://www.countyhealthrankings.org/explore-health-rankings/measures-data-sources/county-health-rankings-model"
                  target="_blank"
                  rel="noreferrer"
                >
                  80% of your health is driven by social determinants, including
                  where you live.
                </a>
              </p>
              <h4>The role of a community health advocate</h4>
              <p>
                “A Community Health Advocate (CHA) supports patients and
                physician practices,” says Tarver. “We help patients navigate
                the health system and connect them with resources, whether it’s
                financial assistance, if they need someone to take care of them
                after surgery or food from a food bank.” Essentially, she says,
                “we help them not walk alone.”
              </p>
              <p>
                Tarver and Wilson are among Blue Shield of California’s growing
                number of CHAs, a recognition of the fact that addressing social
                determinants of health helps patients get healthier. It’s also
                an acknowledgment of{" "}
                <Link to="/confronting-crisis-of-health-inequities-with-bold-national-strategy/">
                  health inequities
                </Link>
                ; many of the patients Tarver and Wilson support are people of
                color who live in ZIP codes with greater social needs.
              </p>
              <p>
                Tarver and Wilson identify members who may benefit from their
                support and reach out to get a sense of their needs. They know
                many of the resources that exist for patients in need because of
                their deep roots in the communities. They also use databases and
                other tools to identify organizations and services that can
                help.
              </p>
              <p>
                Tarver covers Sacramento. “I grew up in the Sacramento area. I’m
                familiar with what people are going through,” she says. Blue
                Shield of California focused on hiring CHAs who could connect
                with and understand the patients they serve on a deeper level.
                There’s evidence that CHAs who have shared experiences with
                their patients can help develop greater trust and better health
                outcomes.
              </p>
              <p>
                She works with patients who need, for example, food assistance
                or help getting to doctor’s appointments. But her services go
                beyond helping a single patient. She emphasizes the community in
                Community Health Advocate. That’s where the80 comes in handy.
                She can use it to educate physicians in the area about some of
                the issues facing patients in certain neighborhoods.
              </p>
              <h4>Advocating for change with the80</h4>
              <p>
                “If I need to help a cause in the community, I can use the80 to
                show the facts,” says Tarver. That might mean speaking to a
                local group about how to advocate for more resources, like a
                farmer’s market or better transportation.
              </p>
              <p>
                Kia Wilson lives in Los Angeles County. “I know a lot that goes
                on,” she says. “I know the diverse communities.” She also knows
                many of the resources that can help them. But her voice alone
                might not be loud enough to bring about the bigger changes a
                community needs to thrive.
              </p>
              <p>
                Typing in a ZIP code, selecting a topic like housing or food,
                Wilson can pull a report on the80's website and show
                neighborhood residents facts about their community and how it
                compares to the rest of the city. For example, running a report
                on housing statistics in one of LA’s lowest income ZIP codes
                reveals a big percentage of residents live in overcrowded
                housing, housing that’s likelier to have lead paint, and that
                although residents have comparable rates of diabetes and heart
                disease, more of them die from it.
              </p>
              <p>
                The tool helps Wilson ask questions about the link between
                neighborhood data and a patient’s health: for example, how might
                overcrowding affect asthma, or even safety from COVID-19?
              </p>
              <p>
                She can also show the data to residents who want to improve
                their community. “I can help members organize,” she says. “They
                may want a farmers’ market or community kitchen.”
              </p>
              <h4>
                Expanding the role of community health advocates to address the
                root causes of disparities
              </h4>
              <p>
                CHAs are becoming more common members of health insurers’ case
                management programs as well as physician practices. With the80,
                Blue Shield of California is empowering CHAs to play an even
                greater role in addressing the root causes of the health
                inequities they encounter.
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    The data can supplement what a CHA learns about a patient’s
                    lived experience, giving them more insight into what might
                    be contributing to a particular problem.
                  </p>
                </li>
                <li>
                  <p>
                    Data can give them the information they need to spark
                    discussions with healthcare providers about looking beyond a
                    patient’s medical record.
                  </p>
                </li>
                <li>
                  <p>
                    The reports also give CHAs important context around the
                    data, and the language to use when speaking with patients,
                    communities or healthcare providers who want to advocate for
                    changes that promote health equity.
                  </p>
                </li>
              </ul>
              <p>
                “It’s not a community’s fault they’re lacking a resource,” says
                Tarver. “There’s an area in Sacramento that has more liquor
                stores than places to buy fresh food. If they had other things,
                maybe more mental health clinics or places to exercise,” she
                says, the community might have a better chance of being
                healthier.
              </p>
              <p>
                Now, there’s even more urgency to advocate for communities.
                Wilson says the pandemic has driven up the need for food banks,
                rent help and more. Helping more people understand the
                complexity of a community by sharing some key statistics and
                listening to patients could help create the momentum to address
                the underlying issues that put residents at greater risk.
              </p>
              <p>
                <em>
                  Blue Shield of California is an independent licensee of the
                  Blue Cross Blue Shield Association, an association of
                  independent, locally operated Blue Cross and Blue Shield
                  companies.
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
              filters="headline:'Eliminating food insecurity to improve maternal and fetal health' OR headline:'Confronting Racial Disparities in Maternal Health'"
            />

            <Hits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default MappingTool

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
  "https://www.bcbs.com/sites/default/files/healthequity/images/feature-partnering-with-failth-communities-to-support-pregnant-women-of-color.jpg"

const PartneringFaithCommunities = props => {
  return (
    <div>
      <SEO
        title="Partnering with faith communities to support pregnant women of color."
        description="Addressing the unique needs of communities of color could help Indiana improve the health of pregnant women. Empowering faith-based communities to do just that is one way Anthem Blue Cross and Blue Shield is hoping to help women at risk."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Partnering with faith communities to support pregnant women of color."
                url="https://www.bcbs.com/the-health-of-america/healthequity/partnering-with-failth-communities-to-support-pregnant-women-of-color/"
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
                  <span>Published July 23, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    Partnering with faith communities to support pregnant women
                    of color
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
                  <a
                    href="https://www.bcbs.com/the-health-of-america/healthequity/breaking-through-bias-in-maternity-care/
"
                  >
                    Breaking through bias in maternity care
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a
                    href="https://www.bcbs.com/the-health-of-america/articles/bcbs-companies-support-new-and-expectant-mothers
"
                  >
                    BCBS companies support new and expectant mothers
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Health Equity</span>
                </div>
                <div className="pp-related__text">
                  <a
                    href="https://www.bcbs.com/the-health-of-america/healthequity/baltimore-cut-infant-mortality-and-helped-moms-thrive-too/
"
                  >
                    Baltimore cut infant mortality and helped moms thrive, too
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
                  Addressing the unique needs of individual communities could
                  help Indiana improve the health of pregnant women, especially
                  women of color. Empowering faith-based communities to play a
                  role is one way Anthem Blue Cross and Blue Shield is hoping to
                  broaden the reach of services available to women at risk.
                </em>
              </p>
              <p>
                In 2020, Indiana’s Department of Health{" "}
                <a
                  href="https://www.in.gov/health/mch/files/Women-Fact-Sheet_09.01.2020-1.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  surveyed women about their healthcare experiences
                </a>
                . Out of more than 4000 responses, the results showed major
                disparities between the care a woman receives while pregnant and
                whether her baby lives or dies.
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  For example, a third of pregnant women reported not receiving
                  prenatal care during their first trimester, a larger
                  percentage of them non-white.
                </li>
                <li>
                  Ten percent said they “felt emotionally upset as a result of
                  how they were treated based on their race (during the 12
                  months before their baby was born).”
                </li>
                <li>
                  Women reported a variety of barriers that prevented them from
                  getting prenatal care, which can detect and manage problems
                  before they worsen—and even save lives.
                </li>
                <li>
                  Two out of every five babies who died did not receive early
                  prenatal care.
                </li>
                <li>
                  The state has the highest maternal death rate in the Midwest,
                  disproportionately affecting Black and Hispanic mothers.
                </li>
              </ul>
              <h4>No single solution to a complex set of problems</h4>
              <p>
                Indiana has adopted a suite of initiatives, running the gamut
                from pregnancy care to childbirth safety to newborn health, to
                prevent these tragedies. Julie Keck, MD, board certified in
                pediatrics and neurodevelopmental disabilities, says she
                believes partnerships between community-based and healthcare or
                other advocacy organizations may show the greatest promise for
                making these initiatives work
              </p>
              <h4>Faith-based groups keep a pulse on community needs</h4>
              <p>
                Keck, who is also managing medical director for Anthem Blue
                Cross and Blue Shield’s (Anthem) Indiana and Wisconsin Medicaid
                programs, says that's because different communities have
                different needs. In some, it’s more education about pregnancy
                care. In others, it’s better access to pregnancy and childbirth
                healthcare providers. For others, there may be different
                barriers, such as money, transportation or health insurance, to
                receiving pregnancy care.
              </p>
              <p>
                Anthem has been hosting what it calls “community conversations”
                with providers as well as community and faith-based
                organizations to uncover more about those local needs. Working
                with the Indiana Minority Health Coalition, says Keck, has been
                instrumental, “because they have connections in communities we
                want to reach where we know we have significant disparities.”
              </p>
              <p>
                Tiffany Etter, who leads marketing for Anthem’s Indiana Medicaid
                program, says the conversations help community leaders “hash out
                a few key questions: what are the unique challenges? What are
                organizations in their communities already doing about it? Has
                the pandemic exacerbated any of the issues? What are the gaps in
                care that healthcare providers or insurers can help fill?”
              </p>
              <p>
                The conversations might lead to strategies about how to address
                those challenges. One finding: in some cases, faith-based
                organizations may be able to play an important role because of
                their deep ties to communities. They may be able to help women
                who are prevented from getting prenatal care because of social
                drivers of health. For example, says Etter, “if a mother can’t
                get to doctor appointments because she has other kids at home, a
                faith community could potentially wrap around her and provide
                that support.”
              </p>
              <h4>
                Empowering church leaders who are already making a difference
              </h4>
              <p>
                Recent community conversation have lead to an idea to empower
                trusted leaders in historically Black churches to provide
                pregnancy education and support.
              </p>
              <blockquote>
                “These leaders are already making a difference in their
                communities,” says Keck. “It makes sense to connect with them to
                help link our (Medicaid) members to resources.”
              </blockquote>
              <p>
                Etter says Anthem will provide a toolkit for church leaders—not
                just pastors, but laypeople, children’s ministry leaders and
                others—to help them implement solutions that fit their
                communities’ needs and culture. If some of the challenges in a
                community include high rates of smoking or diabetes during
                pregnancy, for example, Anthem can prepare church leaders to
                provide information about those conditions and women for
                services. The plan is to begin with communities where there are
                already resources for women of color, such as doula programs,
                ready to receive women who are referred for care. Anthem can
                also provide resources to help women enroll in Medicaid if they
                need healthcare coverage.
              </p>
              <p>
                <em>
                  Anthem Blue Cross and Blue Shield is an independent licensee
                  of the Blue Cross Blue Shield Association, an association of
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
              filters="headline:'Eliminating food insecurity to improve maternal and fetal
                    health'"
            />

            <Hits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default PartneringFaithCommunities

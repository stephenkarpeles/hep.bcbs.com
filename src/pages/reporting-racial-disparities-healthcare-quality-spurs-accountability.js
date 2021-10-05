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
  "https://www.bcbs.com/sites/default/files/healthequity/images/reporting-racial-disparities-healthcare-quality-spurs-accountability.jpg"

const ReportingRacialDisparities = props => {
  return (
    <div>
      <SEO
        title="Reporting racial disparities in healthcare quality spurs accountability"
        description="BCBS Massachusetts has quantified racial disparities in healthcare quality among more than 1.3 million members. Now that data can help hold people accountable for progress."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Reporting racial disparities in healthcare quality spurs accountability"
                url="https://www.bcbs.com/the-health-of-america/healthequity/reporting-racial-disparities-healthcare-quality-spurs-accountability/"
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
                  <span>Maternal Health</span>
                </div>
                <div className="pp-hero__date">
                  <span>Published October 5, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    Reporting racial disparities in healthcare quality spurs
                    accountability
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
                  <a href="https://www.bcbs.com/the-health-of-america/healthequity/partnering-with-failth-communities-to-support-pregnant-women-of-color/">
                    Partnering with faith communities to support pregnant women
                    of color
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Health Equity</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/healthequity/data-driven-strategies-to-address-disparities-in-maternal-care/">
                    Data-driven strategies to address disparities in maternal
                    care
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Health Equity</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/healthequity/confronting-crisis-of-health-inequities-with-bold-national-strategy/">
                    The facts: Confronting a crisis of health inequities with a
                    bold national strategy
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
                  Massachusetts’ largest health insurer has published the first
                  review in the state analyzing racial disparities in healthcare
                  claims for more than 1.3 million members. It found wide gaps
                  between white, Black, Asian and Hispanic patients, and will
                  use the data to make meaningful change.
                </em>
              </p>
              <p>
                Blue Cross Blue Shield of Massachusetts (BCBSMA) found racial
                disparities in the quality of care on nearly 48 measures among
                more than 1.3M members. The health plan{" "}
                <a
                  href="https://www.bluecrossma.org/myblue/equity-in-health-care/health-equity-report"
                  target="_blank"
                  rel="noreferrer"
                >
                  published the data in a first-of-its-kind health equity report
                </a>{" "}
                which it plans to update every year. Understanding where the
                gaps are can point the way toward how to close them.
              </p>
              <p>
                “These inequities{" "}
                <a
                  href="https://www.bcbs.com/the-health-of-america/healthequity/latest-stories"
                  target="_blank"
                  rel="noreferrer"
                >
                  are not unique to Blue Cross members
                </a>
                ,” Dr. Mark Friedberg, BCBSMA’s senior vice president for
                performance measurement & improvement, told{" "}
                <a
                  href="https://coverage.bluecrossma.com/article/making-inequities-visible"
                  target="_blank"
                  rel="noreferrer"
                >
                  Coverage
                </a>
                , the insurer’s health news site. “But we are making them public
                now in an effort to be transparent and to enable members,
                employers and our communities to hold us accountable for
                improving them over time.”
              </p>
              <h4>New Incentives</h4>
              <p>
                BCBSMA President and CEO Andrew Dreyfus{" "}
                <a
                  href="https://newsroom.bluecrossma.com/2021-09-23-Blue-Cross-Blue-Shield-of-Massachusetts-Becomes-First-Health-Plan-in-Market-to-Incorporate-Equity-Measures-Into-Its-Payment-Models"
                  target="_blank"
                  rel="noreferrer"
                >
                  announced
                </a>{" "}
                the health plan will work with healthcare providers and
                hospitals collaboratively and provide financial incentives for
                closing equity gaps.
              </p>
              <p>
                That will give providers a business case for changing the way
                they practice.
              </p>
              <p>
                “As a health plan, one of the most powerful tools we have to
                help guide positive change is the way we pay clinicians who care
                for our members,” says Dreyfus.
              </p>
              <h4>
                Quality covers chronic disease, women’s health, mental health,
                prevention and more
              </h4>
              <p>
                Doctors, hospitals and health plans report performance on many
                metrics to provide a consistent, objective view of the
                healthcare quality they provide. BCBSMA selected 48 of the most
                widely used measures around managing chronic diseases; mental
                health; women’s and children’s health; prevention and other
                kinds of tests and treatments.
              </p>
              <p>
                For example, when it comes to chronic disease, doctors want to
                see their patients’ blood pressure managed. They want to see
                their diabetes medication taken. They want to see their asthma
                well controlled. When it comes to mental health, it’s best
                practice to follow up with patients within 30 days of inpatient
                treatment. Good preventive medicine includes ensuring children
                receive well-child visits within the first 15 months of life.
                Quality women’s care includes regular mammograms.
              </p>
              <h4>
                What the data revealed: stark differences for women’s health and
                chronic condition management
              </h4>
              <p>
                BCBSMA found some of the starkest differences in healthcare
                quality for women. For white women, the percentage of
                childbirths with potentially life-threatening complications was
                2.2% in 2019. For Black women, 4.1%. On other health measures,
                just 65.4% of Hispanic patients received an appropriate
                screening for colorectal cancer, compared to 70% of whites.
                Seventy-three percent of whites received follow-up care within
                30 days of an emergency room visit for mental illness. That held
                true for just 50% of Black patients. About 66% of Black patients
                had their blood pressured controlled, compared to nearly 79% of
                white patients.
              </p>
              <p className="pp-content__callout">
                <a
                  href="https://www.bcbs.com/the-health-of-america/reports/racial-disparities-in-maternal-health"
                  target="_blank"
                  rel="noreferrer"
                >
                  “Racial Disparities in Maternal Health”
                </a>
                , a May 2021 Health of America report from the Blue Cross Blue
                Shield Association, found that women in majority Black
                communities have a 63% higher rate of life-threatening
                childbirth complications than white women. Women in majority
                Hispanic communities have a 32% higher rate.
              </p>
              <h4>
                What’s next: supporting physicians and hospitals, gathering
                self-reported data
              </h4>
              <p>
                Closing racial and ethnic gaps in healthcare quality won’t
                happen overnight. What underpins these gaps is decades of
                systemic racism and myriad factors that affect patients’ health.
                The health plan will help physicians and hospitals along their
                journey to improve the quality of care through a partnership
                with{" "}
                <a href="http://www.ihi.org/" target="_blank" rel="noreferrer">
                  The Institute for Healthcare Improvement
                </a>
                .
              </p>
              <p>
                Tracking progress will also depend on gathering data from health
                plan members directly. Most healthcare claims don’t include it.
                Member race and ethnicity data for BCBSMA’s initial analyses
                were imputed (or, calculated using other data sets to account
                for what was missing) using the{" "}
                <a
                  href="https://www.bluecrossma.org/myblue/equity-in-health-care/health-equity-report"
                  target="_blank"
                  rel="noreferrer"
                >
                  RAND Bayesian Improved Surname Geocoding (BISG) method
                </a>
                , which researchers commonly use when self-reported data isn’t
                available. It is likely that analyses based on imputed data
                underestimate the true magnitude of inequities. That's why{" "}
                <a
                  href="https://coverage.bluecrossma.com/article/how-one-health-plan-working-address-inequities-health-care"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blue Cross is currently engaged in a major effort to collect
                  self-reported race and ethnicity data from members directly
                </a>
                .
              </p>
              <p>
                <em>
                  Blue Cross Blue Shield of Massachusetts is an independent
                  licensee of the Blue Cross Blue Shield Association, and
                  association of independent, locally operated Blue Cross and
                  Blue Shield companies.
                </em>
              </p>
              <p>
                <em>
                  Reporter{" "}
                  <a
                    href="https://coverage.bluecrossma.com/author/lindsay-kalter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lindsay Kalter
                  </a>{" "}
                  with BCBSMA’s health news service
                  <a
                    href="https://coverage.bluecrossma.com/author/lindsay-kalter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Coverage
                  </a>
                  , contributed to this story.
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
              filters="headline:'How Data and Technology Can Advance Health Equity' OR headline:'This mapping tool gives community health advocates data to understand local health inequities'"
            />

            <Hits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default ReportingRacialDisparities

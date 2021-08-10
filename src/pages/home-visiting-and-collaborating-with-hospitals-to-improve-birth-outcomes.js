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
  "https://www.bcbs.com/sites/default/files/healthequity/images/brief-home-visiting-and-collaborating-with-hospitals-to-improve-birth-outcomes.jpg"

const HomeVisiting = props => {
  return (
    <div>
      <SEO
        title="Home visit program improves prenatal health and birth outcomes"
        description="Blue Cross and Blue Shield of Alabama collaborates with organizations focused on improving prenatal care and detecting health problems."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Home visit program improves prenatal health and birth outcomes"
                url="https://www.bcbs.com/the-health-of-america/healthequity/home-visiting-and-collaborating-with-hospitals-to-improve-birth-outcomes/"
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
                {/* <div className="pp-hero__date">
                  <span>Published March 3, 2021</span>
                </div> */}
                <div className="pp-hero__title">
                  <h1>
                    Home visiting and collaborating with hospitals to improve
                    birth outcomes
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
            {/* <h5 className="pp-related__title">Related</h5>
            <ul className="pp-related__list">
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Report</span>
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
                Helping pregnant women manage conditions like hypertension or
                substanceuse before they give birth leads to safer outcomes for
                mom and baby. Blue Cross and Blue Shield of Alabama collaborates
                with organizations focused on improving prenatal care and
                detecting health problems before they worsen.
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    The health plan supports Nurse Family Partnership, a
                    40-year-old nationalprogram that pairs pregnant women and
                    new mothers with a regular home visitor. Trained home
                    visitors provide prenatal health education, help women
                    prepare for a safe childbirth and keep connected to a family
                    after childbirth to support healthy child development.
                    Researchers find the program has prevented infant deaths and
                    reduced preterm births and hypertension.
                  </p>
                </li>
                <li>
                  <p>
                    One of the key causes of pregnancy-related complications—and
                    sometimes death—is hypertension. Blue Cross and Blue Shield
                    of Alabama has partnered with the{" "}
                    <a
                      href="https://www.alpqc.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Alabama Perinatal Quality Collaborative
                    </a>{" "}
                    to help hospitals implement programs to improve early
                    detection and treatment of hypertension, including producing
                    a toolkitfor clinicians.
                  </p>
                </li>
                <li>
                  <p>
                    Blue Cross in collaboration with the State, has implemented
                    the <em>AllBabies</em> program,which is administered by
                    Alabama's Children's Health Insurance Program (CHIP) through
                    the Alabama Department of Public Health. This program
                    identifies uninsured pregnant women who live in one of three
                    Alabama counties with the highest infant mortality rates.
                    The uninsured women who cannot afford health insurance are
                    eligible to enroll in a program that provides coverage
                    throughout their pregnancy. Prenatal care, hospitalizations
                    and delivery are covered. The health plan also provides
                    additional support to women at high risk of complications
                    and offers a wellness program that provides education on
                    having a healthy pregnancy. Women at high risk may also be
                    connected to case managers who can work closely with
                    doctors, hospitals and home health services to ensure a
                    healthy pregnancy, childbirth and postpartum recovery.
                  </p>
                </li>
              </ul>
              <p>
                <em>
                  Blue Cross and Blue Shield of Alabama is a licensee of the
                  Blue Cross Blue Shield Association, an association of
                  independent, locally owned Blue Cross and Blue Shield
                  companies.
                </em>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default HomeVisiting

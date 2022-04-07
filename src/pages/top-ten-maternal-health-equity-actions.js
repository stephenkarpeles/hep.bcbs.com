import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import SEO from "../components/seo"
import Sharing from "../components/Sharing/sharing"
import Newsletter from "../components/Newsletter/Newsletter"

// Images
import backgroundImage from "../images/mhea/iStock-1165255501.jpg"
import { StaticImage } from "gatsby-plugin-image"

const MaternalHealthActions = props => {
  const [viewPortEntered, setViewPortEntered] = useState(false)

  return (
    <div className="promotion-template">
      <SEO title="Top Ten Maternal Health Equity Actions" description="" />

      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title={"Top Ten Maternal Health Equity Actions"}
                url={
                  "https://www.bcbs.com/the-health-of-america/healthequity/top-ten-maternal-health-equity-actions"
                }
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">Maternal Health</div>
                <div className="pp-hero__date">
                  <span>Published</span>
                </div>
                <div className="pp-hero__title">
                  <h1>Top Ten Maternal Health Equity Actions</h1>
                </div>
                <div className="pp-hero__author">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <section className="mhea pp-main" id="meha">
        <Fade>
          <div className="inner-content">
            <div className="mhea-action mhea-action-one">
              <StaticImage
                className="mhea-action-img mhea-action-one-img"
                src={"../images/mhea/Two_pregnant_women.png"}
                alt=""
              />
              <div className="mhea-action-title mhea-action-one-title">1</div>
              <div className="mhea-action-content mhea-action-one-content">
                Engage maternal voices and community stakeholders to craft,
                build and sustain a holistic meaternal health program. Form
                public and private partnershipsto address root causes of
                disparities, inequalities and SODH.
              </div>
            </div>
            <div className="mhea-action mhea-action-two">
              <StaticImage
                className="mhea-action-img mhea-action-two-img"
                src={"../images/mhea/Unconscious_Bias_class.png"}
                alt=""
                width={728}
              />
              <div className="mhea-action-title mhea-action-two-title">2</div>
              <div className="mhea-action-content mhea-action-two-content">
                Provide access to cultural humility and unconscious bias
                training for everyone in the maternal care continuum.
              </div>
            </div>
            <div className="mhea-action mhea-action-three">
              <StaticImage
                className="mhea-action-img mhea-action-three-img"
                src={"../images/mhea/Birthing_class.png"}
                alt=""
                width={728}
              />
              <div className="mhea-action-title mhea-action-three-title">3</div>
              <div className="mhea-action-content mhea-action-three-content">
                Include nurse midwives and birthing centers in provider networks
                and design programs to increase education and awareness for
                members.
              </div>
            </div>
            <div className="mhea-action mhea-action-four">
              <StaticImage
                className="mhea-action-img mhea-action-four-img"
                src={"../images/mhea/Maternal_group_therapy.png"}
                alt=""
                width={728}
              />
              <div className="mhea-action-title mhea-action-four-title">4</div>
              <div className="mhea-action-content mhea-action-four-content">
                Facilitate access to doulas and community health workers for
                maternal support services.
              </div>
            </div>
            <div className="mhea-action mhea-action-five">
              <StaticImage
                className="mhea-action-img mhea-action-five-img"
                src={"../images/mhea/pregnant_woman_on_couch.png"}
                alt=""
                width={728}
              />
              <div className="mhea-action-title mhea-action-five-title">5</div>
              <div className="mhea-action-content mhea-action-five-content">
                Implement facilitated self-management or peer prenatal care
                models such as CenteringPregnancy.<sup>TM</sup>
              </div>
            </div>
            <div className="mhea-action mhea-action-six">
              <StaticImage
                className="mhea-action-img mhea-action-six-img"
                src={"../images/mhea/Pregnant_couple.png"}
                alt=""
              />
              <div className="mhea-action-title mhea-action-six-title">6</div>
              <div className="mhea-action-content mhea-action-six-content">
                Expand benefit coverage to ensure postpartum care including
                behavioral health care to 1-year post-delivery.
              </div>
            </div>
            <div className="mhea-action mhea-action-seven">
              <StaticImage
                className="mhea-action-img mhea-action-seven-img"
                src={"../images/mhea/Doctor_consultation.png"}
                alt=""
                width={728}
              />
              <div className="mhea-action-title mhea-action-seven-title">7</div>
              <div className="mhea-action-content mhea-action-seven-content">
                Align quality measurement with national standards setting
                organizations and tie back to provider quality programs.
              </div>
            </div>
            <div className="mhea-action mhea-action-eight">
              <StaticImage
                className="mhea-action-img mhea-action-eight-img"
                src={"../images/mhea/Doctor_collaborative.png"}
                alt=""
                width={728}
              />
              <div className="mhea-action-title mhea-action-eight-title">8</div>
              <div className="mhea-action-content mhea-action-eight-content">
                Join and participate in a Perinatal Quality Collaborative.
              </div>
            </div>
            <div className="mhea-action mhea-action-nine">
              <StaticImage
                className="mhea-action-img mhea-action-nine-img"
                src={"../images/mhea/Reception_area.png"}
                alt=""
              />
              <div className="mhea-action-title mhea-action-nine-title">9</div>
              <div className="mhea-action-content mhea-action-nine-content">
                Implement value-based contracts specific to maternal health.
              </div>
            </div>
            <div className="mhea-action mhea-action-ten">
              <StaticImage
                className="mhea-action-img mhea-action-ten-img"
                src={"../images/mhea/Vaccination.png"}
                alt=""
                width={728}
              />
              <div className="mhea-action-title mhea-action-ten-title">10</div>
              <div className="mhea-action-content mhea-action-ten-content">
                Amplify programs of special significance such as vaccination
                programs with a focus on COVID-19 and influenza.
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <Newsletter />
    </div>
  )
}

export default MaternalHealthActions

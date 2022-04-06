import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import SEO from "../components/seo"
import Sharing from "../components/Sharing/sharing"
import Newsletter from "../components/Newsletter/Newsletter"

const MaternalHealthActions = props => {
  const [viewPortEntered, setViewPortEntered] = useState(false)

  return (
    <div className="promotion-template">
      <SEO
        title="National Health Equity Strategy"
        description="Blue Cross Blue Shield Association announces National Health Equity Strategy to confront the nation’s crisis in racial health disparities."
      />

      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing title={""} url={""} />
            </div>
          </div>
          <div className="pp-hero__image">
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

      <section className="mhea" id="meha">
        <Fade>
          <div className="inner-content">
            <div className="mhea-action">
              <div className="mhea-action-title">1</div>
              <div className="mhea-action-content">
                <p>
                  Engage maternal voices and community stakeholders to craft,
                  build and sustain a holistic meaternal health program. Form
                  public and private partnershipsto address root causes of
                  disparities, inequalities and SODH.
                </p>
              </div>
              <div className="mhea-action-img">some image</div>
            </div>
            <div className="mhea-action">
              <div className="mhea-action-title">2</div>
              <div className="mhea-action-content">
                <p>
                  Provide access to cultural humility and unconscious bias
                  training for everyone in the maternal care continuum.
                </p>
              </div>
              <div className="mhea-action-img">some image</div>
            </div>
            <div className="mhea-action">
              <div className="mhea-action-title">3</div>
              <div className="mhea-action-content">
                <p>
                  Include nurse midwives and birthing centers in provider
                  networks and design programs to increase education and
                  awareness for members.
                </p>
              </div>
              <div className="mhea-action-img">some image</div>
            </div>
            <div className="mhea-action">
              <div className="mhea-action-title">4</div>
              <div className="mhea-action-content">
                <p>
                  Facilitate access to doulas and community health workers for
                  maternal support services.
                </p>
              </div>
              <div className="mhea-action-img">some image</div>
            </div>
            <div className="mhea-action">
              <div className="mhea-action-title">5</div>
              <div className="mhea-action-content">
                <p>
                  Implement facilitated self-management or peer prenatal care
                  models such as CenteringPregnancy.TM
                </p>
              </div>
              <div className="mhea-action-img">some image</div>
            </div>
            <div className="mhea-action">
              <div className="mhea-action-title">6</div>
              <div className="mhea-action-content">
                <p>
                  Expand benefit coverage to ensure postpartum care including
                  behavioral health care to 1-year post-delivery.
                </p>
              </div>
              <div className="mhea-action-img">some image</div>
            </div>
            <div className="mhea-action">
              <div className="mhea-action-title">7</div>
              <div className="mhea-action-content">
                <p>
                  Align quality measurement with national standards setting
                  organizations and tie back to provider quality programs.
                </p>
              </div>
              <div className="mhea-action-img">some image</div>
            </div>
            <div className="mhea-action">
              <div className="mhea-action-title">8</div>
              <div className="mhea-action-content">
                <p>
                  Join and participate in a Perinatal Quality Collaborative.
                </p>
              </div>
              <div className="mhea-action-img">some image</div>
            </div>
            <div className="mhea-action">
              <div className="mhea-action-title">9</div>
              <div className="mhea-action-content">
                <p>
                  Implement value-based contracts specific to maternal health.
                </p>
              </div>
              <div className="mhea-action-img">some image</div>
            </div>
            <div className="mhea-action">
              <div className="mhea-action-title">10</div>
              <div className="mhea-action-content">
                <p>
                  Amplify programs of special significance such as vaccination
                  programs with a focus on COVID-19 and influenza.
                </p>
              </div>
              <div className="mhea-action-img">some image</div>
            </div>
          </div>
        </Fade>
      </section>

      <Newsletter />
    </div>
  )
}

export default MaternalHealthActions

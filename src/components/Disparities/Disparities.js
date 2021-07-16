import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

const Disparities = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false)
  const data = useStaticQuery(graphql`
    {
      allNodeHealthEquityDisparities {
        edges {
          node {
            title
            field_he_statistic
            field_he_statistic_text
            field_he_dis_content_source {
              uri
            }
            field_he_dis_featured_image {
              title
            }
            relationships {
              field_topics {
                name
              }
            }
          }
        }
      }
    }
  `)

  const disparities = data.allNodeHealthEquityDisparities.edges
  console.log(data)

  return (
    <section className="disparities" id="disparities">
      <div className="inner-content">
        <Fade>
          <div className="disparities-heading">
            Health Disparities: By the Numbers
          </div>
        </Fade>
        <div className="disparities-cards-wrap">
          <Fade bottom cascade>
            <div className="disparities-cards">
              {disparities.map(
                disparity => disparity.node.relationships.field_topics.name
              )}
              <div
                className={`disparities-card disparities-card-${disparities.node.relationships.field_topics[0].name}`}
              >
                <div className="disparities-card-heading">
                  {disparities.relationships.field_topics[0].name}
                </div>
                <div className="disparities-card-stat">
                  <CountUp
                    start={viewPortEntered ? null : 0}
                    end={70}
                    redraw={true}
                    duration={0.5}
                    useEasing={false}
                  >
                    {({ countUpRef }) => (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={isVisible => {
                          if (isVisible) {
                            setViewPortEntered(true)
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <span>%</span>
                </div>
                <div className="disparities-card-text">
                  Black men are 70% more likely to die from a stroke as compared
                  to non-Hispanic white men.
                </div>
                <div className="disparities-card-image">
                  <StaticImage
                    src="../images/illustrations/illustration-cardiovascular-health.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="sources">
          Sources: 1){" "}
          <u>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=28"
            >
              OMH: Stroke and African Americans
            </a>
          </u>{" "}
          2){" "}
          <u>
            <a
              href="https://www.bcbs.com/the-health-of-america/reports/millennial-health-trends-behavioral-health-conditions"
              target="_blank"
              rel="noreferrer"
            >
              Millennial Health: Trends in Behavioral Health Conditions
            </a>
          </u>{" "}
          3){" "}
          <u>
            <a
              href="https://www.cdc.gov/diabetes/pdfs/data/statistics/national-diabetes-statistics-report.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CDC: National Diabetes Statistics Report
            </a>
          </u>{" "}
          4){" "}
          <u>
            <a
              href="https://www.ajmc.com/view/racial-disparities-persist-in-maternal-morbidity-mortality-and-infant-health"
              target="_blank"
              rel="noreferrer"
            >
              AJMC: Racial Disparities Persist in Maternal Morbidity, Mortality
              and Infant Health
            </a>
          </u>
        </div>
      </div>
    </section>
  )
}

export default Disparities

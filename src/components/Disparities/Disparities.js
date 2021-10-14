import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import "./Disparities.css"

const Disparities = ({ header }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false)
  const data = useStaticQuery(graphql`
    {
      allNodeHealthEquityDisparities {
        edges {
          node {
            title
            body {
              value
            }
            field_he_statistic
            field_he_statistic_text
            field_he_dis_content_source {
              url
              title
            }

            relationships {
              field_topics {
                name
              }
              field_he_dis_featured_image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const disparities = data.allNodeHealthEquityDisparities

  return (
    <section className="disparities" id="disparities">
      <div className="inner-content">
        <Fade>
          <div className="disparities-heading">{header}</div>
        </Fade>
        <div className="disparities-cards-wrap">
          <Fade bottom cascade>
            <div className="disparities-cards">
              {disparities.edges.map((disparity, idx) => (
                <div key={idx} className="disparities-card disparities-card">
                  {disparity.node.relationships.field_topics
                    .slice(0, 1)
                    .map((field_topics, idx) => (
                      <div key={idx} className="disparities-card-heading">
                        {field_topics.name}
                      </div>
                    ))}
                  <div className="disparities-card-stat">
                    <CountUp
                      start={viewPortEntered ? null : 0}
                      end={disparity.node.field_he_statistic}
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
                    <span>{disparity.node.field_he_statistic_text}</span>
                  </div>
                  <div
                    className="disparities-card-text"
                    dangerouslySetInnerHTML={{
                      __html: disparity.node.body.value,
                    }}
                  ></div>
                  <div className="disparities-card-image">
                    <GatsbyImage
                      image={getImage(
                        disparity.node.relationships.field_he_dis_featured_image
                          .localFile.childImageSharp.gatsbyImageData
                      )}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
        <div className="sources">
          <span>Sources:</span>{" "}
          {disparities.edges.map((source, idx) => (
            <span key={idx}>
              {idx + 1}){" "}
              <a
                target="_blank"
                rel="noreferrer"
                href={source.node.field_he_dis_content_source.url}
              >
                {source.node.field_he_dis_content_source.title}
              </a>{" "}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Disparities

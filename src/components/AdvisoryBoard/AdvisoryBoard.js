import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { withPrefix } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./AdvisoryBoard.css"
import imgCloseIcon from "../../images/icons/icon-close.svg"
import imgRightArrowBlue from "../../images/icons/arrow-long-right.svg"
import imgArrowRightWhite from "../../images/icons/arrow-long-right-white.svg"

const AdvisoryBoard = ({ header }) => {
  const data = useStaticQuery(graphql`
    {
      allNodeHealthEquityAdvisoryPanel {
        edges {
          node {
            field_he_position
            field_he_lead
            field_he_company
            title
            body {
              value
            }
            relationships {
              field_he_ap_featured_image {
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

  const advisors = data.allNodeHealthEquityAdvisoryPanel
  const [active, setActive] = useState(1)

  const advisoryPanelIsOpen = "advisory-panel-is-open"

  function closeAdvisoryPanel() {
    document.body.classList.remove(advisoryPanelIsOpen)
  }

  const TabItem = ({
    icon = "",
    id = "",
    name = "",
    company = "",
    title = "",
    image = "",
    onItemClicked = () =>
      console.error("You passed no action to the component"),
    isActive = false,
  }) => {
    const advisoryPanelIsOpen = "advisory-panel-is-open"

    function AdvisoryBoardAnalytics() {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "Advisory Board Click",
        category: "Health Equity",
        action: "health-equity-advisory-board",
        label: name,
      })
    }

    function openAdvisoryPanel() {
      document.body.classList.add(advisoryPanelIsOpen)
    }

    return (
      <div
        id={id}
        className={isActive ? "tab-item" : "tab-item tab-item--inactive"}
        onClick={() => {
          onItemClicked()
          AdvisoryBoardAnalytics()
        }}
      >
        <i className={icon}></i>
        <div
          onClick={openAdvisoryPanel}
          onKeyDown={openAdvisoryPanel}
          className="tab-item__image"
        >
          {image}

          <div className="tab-item__overlay-arrow">
            <img src={imgArrowRightWhite} alt="Arrow" />
          </div>
          <div className="tab-item__overlay-title">{title}</div>
        </div>
        <div className="tab-item__text">
          <div className="tab-item__name" data-name={name}>
            {name}
          </div>
          <div className="tab-item__company">{company}</div>
          <img src={imgRightArrowBlue} alt="Arrow" />
        </div>
      </div>
    )
  }

  return (
    <section className="tabs-wrapper" id="advisory">
      <div className="inner-content">
        <h2>Meet Our Advisory Panel</h2>
      </div>
      <div className="tab-items">
        {advisors.edges.map((advisor, idx) => (
          <TabItem
            key={idx}
            image={
              <>
                <GatsbyImage
                  image={getImage(
                    advisor.node.relationships.field_he_ap_featured_image
                      .localFile.childImageSharp.gatsbyImageData
                  )}
                  alt=""
                />
              </>
            }
            id={idx}
            name={advisor.node.title}
            company={advisor.node.field_he_company}
            title={advisor.node.field_he_position}
            onItemClicked={() => setActive(idx)}
            isActive={active === idx}
          />
        ))}
      </div>
      <div className="tab-content">
        <a
          onClick={closeAdvisoryPanel}
          onKeyDown={closeAdvisoryPanel}
          className="tab-content__close-btn"
          href={withPrefix("#advisory")}
          title="Back to Advisory Board"
        >
          <span>Close</span> <img src={imgCloseIcon} alt="Close" />
        </a>
        <div className="tab-content__grid">
          <div className="tab-content__personal-info">
            <div className="tab-content__personal-info-image">
              {advisors.edges.map((advisor, idx) => {
                return active === idx ? (
                  <>
                    <GatsbyImage
                      image={getImage(
                        advisor.node.relationships.field_he_ap_featured_image
                          .localFile.childImageSharp.gatsbyImageData
                      )}
                      alt=""
                    />
                  </>
                ) : (
                  ""
                )
              })}
            </div>
            <div className="tab-content__personal-info-company">
              {advisors.edges.map((advisor, idx) => {
                return active === idx ? advisor.node.field_he_company : ""
              })}
            </div>
            <div className="tab-content__personal-info-title">
              {advisors.edges.map((advisor, idx) => {
                return active === idx ? advisor.node.field_he_position : ""
              })}
            </div>
          </div>
          <div className="tab-content__copy">
            <h3>
              {advisors.edges.map((advisor, idx) => {
                return active === idx ? advisor.node.field_he_lead : ""
              })}
            </h3>
            {advisors.edges.map((advisor, idx) => {
              return active === idx ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: advisor.node.body.value,
                  }}
                ></div>
              ) : (
                ""
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvisoryBoard

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slide from "react-reveal/Slide"
import "./Goal.css"

const Goal = () => {
  const data = useStaticQuery(graphql`
    {
      allNodeHealthEquityGoals(
        sort: { order: DESC, fields: changed }
        limit: 1
      ) {
        edges {
          node {
            field_he_statistic_prefix {
              value
            }
            field_he_statistic_suffix {
              value
            }
            field_he_statistic
            title
          }
        }
      }
    }
  `)

  const goal = data.allNodeHealthEquityGoals.edges[0].node

  return (
    <Slide right>
      <section className="goal-banner" id="commitment">
        <div className="max-container">
          <div className="goal-banner-box">
            <h6 className="goal-banner-box-title">{goal.title}</h6>
            <div className="goal-banner-box-description">
              <span
                dangerouslySetInnerHTML={{
                  __html: goal.field_he_statistic_prefix.value,
                }}
              />
            </div>
            <div className="goal-banner-box-stat">
              <span className="goal-banner-box-stat-number">
                {goal.field_he_statistic}
              </span>
              <span className="goal-banner-box-stat-marker">%</span>
              <div
                className="goal-banner-box-text"
                dangerouslySetInnerHTML={{
                  __html: goal.field_he_statistic_suffix.value,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </Slide>
  )
}

export default Goal

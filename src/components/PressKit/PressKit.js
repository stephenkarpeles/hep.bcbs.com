import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./PressKit.css"

const PressKit = () => {
  const data = useStaticQuery(graphql`
    {
      allNodeHealthEquityPressKit(sort: { order: DESC, fields: changed }) {
        edges {
          node {
            body {
              value
            }
            field_he_title_category
            relationships {
              field_he_pk_download {
                uri {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  const kits = data.allNodeHealthEquityPressKit

  return (
    <div className="downloads-cards">
      {kits.edges.map((kit, idx) => (
        <div key={idx} className="card">
          <h4 className="card-headline">{kit.node.field_he_title_category}</h4>
          <div
            className="card-copy"
            dangerouslySetInnerHTML={{
              __html: kit.node.body?.value,
            }}
          ></div>
          <div className="download-link">
            <a
              href={kit.node.relationships.field_he_pk_download.uri.url}
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
export default PressKit

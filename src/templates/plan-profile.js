import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
  const post = data.nodeHealthEquityPlanProfile
  return (
    <Layout>
      <div>
        <h1>{ post.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    nodeHealthEquityPlanProfile(id: { eq: $id }) {
      title
      body {
        value
      }
    }
  }
`

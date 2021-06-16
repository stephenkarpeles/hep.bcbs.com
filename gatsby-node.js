/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)

// Build some pages!

/*
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
     allNodeHealthEquityPlanProfile {
       edges {
         node {
           id
         }
       }
     }
    }
  `
  ).then(result => {
    result.data.allNodeHealthEquityPlanProfile.edges.forEach(({ node }) => {
      createPage({
        path: node.id,
        component: path.resolve(`./src/templates/plan-profile.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
}
*/

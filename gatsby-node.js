/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)

const convertToSlug = (text) => text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')

// Build some pages!

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
     allNodeHealthEquityPlanProfile {
       edges {
         node {
           id
           title
         }
       }
     }
    }
  `
  ).then(result => {
    result.data.allNodeHealthEquityPlanProfile.edges.forEach(({ node }) => {
      if (node.title != null) {
        createPage({
          path: convertToSlug(node.title),
          component: path.resolve(`./src/templates/plan-profile.js`),
          context: {
            id: node.id,
          },
        })
      }
    })
  })
}

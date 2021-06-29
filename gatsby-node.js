/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)

const convertToSlug = text =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")

// Build some pages!

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allNodeHealthEquityPlanProfile {
        edges {
          node {
            id
            title
          }
        }
      }
      allNodeHealthEquityBlog {
        edges {
          node {
            id
            title
          }
        }
      }
      allNodeHealthEquityPromotion {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  result.data.allNodeHealthEquityPlanProfile.edges.forEach(({ node }) => {
    if (node.title != null) {
      createPage({
        path: convertToSlug(node.title),
        component: path.resolve(`./src/templates/profile.js`),
        context: {
          id: node.id,
        },
      })
    }
  })

  result.data.allNodeHealthEquityBlog.edges.forEach(({ node }) => {
    if (node.title != null) {
      createPage({
        path: convertToSlug(node.title),
        component: path.resolve(`./src/templates/blog.js`),
        context: {
          id: node.id,
        },
      })
    }
  })

  result.data.allNodeHealthEquityPromotion.edges.forEach(({ node }) => {
    if (node.title != null) {
      createPage({
        path: convertToSlug(node.title),
        component: path.resolve(`./src/templates/promotion.js`),
        context: {
          id: node.id,
        },
      })
    }
  })
}

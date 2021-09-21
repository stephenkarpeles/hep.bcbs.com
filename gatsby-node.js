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
            path {
              alias
            }
          }
        }
      }
      allNodeHealthEquityBlog {
        edges {
          node {
            id
            title
            path {
              alias
            }
          }
        }
      }
      allNodeHealthEquityPromotion {
        edges {
          node {
            id
            title
            path {
              alias
            }
          }
        }
      }
    }
  `)

  result.data.allNodeHealthEquityPlanProfile.edges.forEach(({ node }) => {
    if (node.title != null) {
      createPage({
        path: node.path.alias,
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
        path: node.path.alias,
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
        path: node.path.alias,
        component: path.resolve(`./src/templates/promotion.js`),
        context: {
          id: node.id,
        },
      })
    }
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    union heRelatedContentUnion = node__health_equity_plan_profile
    union hoaRelatedContentUnion =
    node__hoa_insight
    | node__hoa_page
    | node__podcast
    | node__video
    | node__health_america_page
    | node__blog_article

    type node__health_equity_promotion implements Node {
      field_he_author: String
    }

    type node__health_equity_plan_profile implements Node {
      title: String
    }

    type node__health_equity_blog implements Node {
      relationships: node__health_equity_blogRelationships
    }
    type node__health_equity_blogRelationships {
      field_he_related_content: [heRelatedContentUnion] @link(from: "field_he_related_content___NODE")
      field_he_hoa_related_content: [hoaRelatedContentUnion] @link(from: "field_he_hoa_related_content___NODE")
    }

    type node__health_equity_promotion implements Node {
      relationships: node__health_equity_promotionRelationships
    }
    type node__health_equity_promotionRelationships {
      field_he_related_content: [heRelatedContentUnion] @link(from: "field_he_related_content___NODE")
      field_he_hoa_related_content: [hoaRelatedContentUnion] @link(from: "field_he_hoa_related_content___NODE")
    }

    type node__health_equity_plan_profile implements Node {
      relationships: node__health_equity_plan_profileRelationships
    }
    type node__health_equity_plan_profileRelationships {
      field_he_related_content: [heRelatedContentUnion] @link(from: "field_he_related_content___NODE")
      field_he_hoa_related_content: [hoaRelatedContentUnion] @link(from: "field_he_hoa_related_content___NODE")
    }
  `
  createTypes(typeDefs)
}

// import React from "react"
// import { graphql } from "gatsby"

// const RelatedHOAArticle = ({ data }) => {
//   return (
//     <>
//       <div className="pp-related__category">
//         <span>Article</span>
//       </div>
//       <div className="pp-related__text">
//         <a href={`https://www.bcbs.com/${data.path.alias}`}>{data.title}</a>
//       </div>
//     </>
//   )
// }

// export default RelatedHOAArticle

// export const fragment = graphql`
//   fragment RelatedHOAArticle on node__blog_article {
//     title
//     relationships {
//       node_type {
//         name
//       }
//     }
//     path {
//       alias
//     }
//   }
// `

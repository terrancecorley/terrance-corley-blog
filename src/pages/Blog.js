import React from 'react'
import { graphql } from 'gatsby'

const Blog = ({ data }) => {
  const itemToMap = data.allMarkdownRemark.edges.find(({ node }, index) => {
      return node.frontmatter.date === "2019-02-10"
  });

  console.log(itemToMap)

  return (
    <div>
      <ul>
          <h1>{itemToMap.node.frontmatter.title}</h1>
          <p>{itemToMap.node.frontmatter.date}</p>
          {itemToMap.node.html}
      </ul>
    </div>
  )
}

export default Blog;

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    timeToRead
                    html 
                    frontmatter {
                        title
                        date
                    }
                }
            }
        }
     }
`
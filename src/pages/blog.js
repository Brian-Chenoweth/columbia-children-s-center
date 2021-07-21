import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ( {data} ) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}{node.ext}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allFile(filter: {ext: {eq: ".mdx"}}) {
    nodes {
      name
      ext
    }
  }
}
 `

export default BlogPage
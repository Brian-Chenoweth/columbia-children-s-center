import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ( {data} ) => {
  return (
    <Layout
      pageTitle="Blog"
      titleOverride="Preschool Blog | Columbia Children's Center"
      metaDesc="Articles and updates from Columbia Children's Center in Santa Maria, CA."
      pathname="/blog/"
      schemaType="CollectionPage"
    >
      <a href="https://app.tryplayground.com/X7tvoDUHwazFjm1hgbal/book/j2qKHKe4akbD4Cv9DED7" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginBottom: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '0.375rem', fontWeight: 'bold' }}>Book a Tour</a>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h3>{node.frontmatter.title}</h3>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
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
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      body
    }
  }
}

 `

export default BlogPage

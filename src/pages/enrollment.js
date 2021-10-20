import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const EnrollmentPage = () => {
  const pageTitle = "Enrollment";

  const data = useStaticQuery(graphql`
  query { allFile(filter: {relativeDirectory: {in: "enrollment"}}, sort: {fields: name}) { edges { node { id relativePath relativeDirectory publicURL extension name sourceInstanceName } } } } `)

  return (
    <Layout pageTitle={pageTitle}>
      {data.allFile.edges.map((file, index) => {
          return (
            <div>
              <h3 key={`${index}`}>{file.node.name.split('_').join(' ')}</h3>
              <a class="button primary" href={file.node.publicURL} target="_blank">Open</a>
            </div>
          )
      })}
    </Layout>
  )
}

export default EnrollmentPage
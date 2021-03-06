import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import { button, enrollmentWrap } from '../components/styles/layout.module.scss'

const EnrollmentPage = () => {
  const pageTitle = "Enrollment";

  const data = useStaticQuery(graphql`
  query { allFile(filter: {relativeDirectory: {in: "enrollment"}}, sort: {fields: name}) { edges { node { id relativePath relativeDirectory publicURL extension name sourceInstanceName } } } } `)

  return (
    <Layout pageTitle={pageTitle} metaDesc="Enrollment paperwork for parents.">
      <div className={enrollmentWrap}>
        {data.allFile.edges.map((file, index) => {
            return (
              <div>
                <h2 key={`${index}`}>{file.node.name.split('_').join(' ')}</h2>
                <a className={button} href={file.node.publicURL} target="_blank" rel="noreferrer">Open</a>
              </div>
            )
        })}
      </div>
    </Layout>
  )
}

export default EnrollmentPage
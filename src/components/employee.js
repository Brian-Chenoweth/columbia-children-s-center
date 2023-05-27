import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Employee = ({ employeeName, employeeImg, employeeTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { in: "employees" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            relativePath
            relativeDirectory
            publicURL
            extension
            name
            sourceInstanceName
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
        }
      }
    }
  `)

  const image = data.allFile.edges.find(file => file.node.name === employeeImg)
  return (
    <div className={`employee-wrap`}>
      <div className={'employee-img-wrap'}>
        {image ? (
          <GatsbyImage
            image={image.node.childImageSharp.gatsbyImageData}
            alt={employeeName}
          />
        ) : null}
      </div>

      <div className={`employee-name-title-wrap`}>
        <h2 className={employeeName}>{employeeName}</h2>
        <h3 className={`employee-title`}>{employeeTitle}</h3>
      </div>
    </div>
  )
}

export default Employee

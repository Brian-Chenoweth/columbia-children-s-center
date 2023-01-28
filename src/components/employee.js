import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Employee = ({ employeeName, employeeImg, employeeTitle }) => {

    const data = useStaticQuery(graphql`
    query {
        allFile(
            filter: { relativeDirectory: { in: "employees" } },
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
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
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
            {image ? <Image fluid={image.node.childImageSharp.fluid} alt={employeeName}/> : null}
        </div>

        <div className={`employee-name-title-wrap`}>
            <h2 className={employeeName}>{employeeName}</h2>
            <h3 className={`employee-title`}>{employeeTitle}</h3>
        </div>

    </div>
  )
}

export default Employee

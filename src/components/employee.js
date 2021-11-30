import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { employeeWrap, employeeImg, employeeName } from './styles/employee.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Employee = ({ employeeName, employeeImg, employeeTitle }) => {

    const data = useStaticQuery(graphql`
        query { allFile(filter: {relativeDirectory: {in: "employees"}}, sort: {fields: name}) { edges { node { id relativePath relativeDirectory publicURL extension name sourceInstanceName childImageSharp {
            gatsbyImageData
          } } } } } `)
      
  return (
    <div className={`${employeeImg.toLowerCase()} employee-wrap`}>

        <div className={'employee-img-wrap'}>
            {data.allFile.edges.map((file, index) => {
                const image = getImage(file.node)
                if (file.node.name == employeeImg) {
                    return (
                        <GatsbyImage image={image} />
                    )
                }
            })}
        </div>

        <div className={`${employeeImg.toLowerCase()} employee-name-title-wrap`}>
            <h2 className={`employee-name`}>{employeeName}</h2>
            <h3 className={`employee-title`}>{employeeTitle}</h3>
        </div>


    </div>
  )
}

export default Employee
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    employeeWrap,
    employeeImg,
    employeeName
  } from './employee.module.scss'

const Employee = ({ employeeName, employeeImg, children }) => {


    
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {extension: {eq: "jpeg"}, relativeDirectory: {in: "employees"}}) {
            edges {
                node {
                relativePath
                relativeDirectory
                name
                extension
                }
            }
            }
        }
    `)
      

  return (
    <div className={employeeWrap}>

        <div className={employeeImg}>
            {data.allFile.edges.map(({node}) => (
                <p>{employeeImg}</p>
            ) )}
            <h1>{employeeImg}</h1>
        </div>

        <div className={employeeName}>
            {employeeName}
        </div>


    </div>
  )
}

export default Employee
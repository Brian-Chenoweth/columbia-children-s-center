import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    employee_wrap,
    employee_img,
    employee_name,
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
    <div className={employee_wrap}>

        <div className={employee_img}>
            {data.allFile.edges.map(({node}) => (
                <p>{employeeImg}</p>
            ) )}
            <h1>{employeeImg}</h1>
        </div>

        <div className={employee_name}>
            {employeeName}
        </div>


    </div>
  )
}

export default Employee
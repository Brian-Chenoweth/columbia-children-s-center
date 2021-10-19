import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { employeeWrap, employeeImg, employeeName } from './styles/employee.module.scss'

const Employee = ({ employeeName, employeeImg, employeeTitle }) => {

    const data = useStaticQuery(graphql`
        query { allFile(filter: {relativeDirectory: {in: "employees"}}, sort: {fields: name}) { edges { node { id relativePath relativeDirectory publicURL extension name sourceInstanceName } } } } `)
      
  return (
    <div className={`${employeeImg.toLowerCase()} employee-wrap`}>

        <div className={'employee-img-wrap'}>
            {data.allFile.edges.map((file, index) => {
                if (file.node.name == employeeImg) {
                    return (
                        <img key={`${index}`} src={file.node.publicURL} className={'employee-img'}/>
                    )
                }
            })}
        </div>

        <div className={`${employeeImg.toLowerCase()} employee-name-title-wrap`}>
            <h3 className={`employee-name`}>{employeeName}</h3>
            <h4 className={`employee-title`}>{employeeTitle}</h4>
        </div>


    </div>
  )
}

export default Employee
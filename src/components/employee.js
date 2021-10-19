import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { employeeWrap, employeeImg, employeeName } from './styles/employee.module.scss'

const Employee = ({ employeeName, employeeImg, employeeTitle }) => {

    const data = useStaticQuery(graphql`
        query { allFile(filter: {relativeDirectory: {in: "employees"}}, sort: {fields: name}) { edges { node { id relativePath relativeDirectory publicURL extension name sourceInstanceName } } } } `)
      
  return (
    <div className={employeeWrap}>

        <div className={employeeImg}>
            {data.allFile.edges.map((file, index) => {
                return (
                    <div>
                        {(() => {
                        if (file.node.name == employeeImg) {
                            return (
                                <img key={`${index}`} src={file.node.publicURL}/>
                            )
                        }
                        })()}                            
                    </div>
                )
            })}
        </div>

        <div className={employeeName}>
            <h3>{employeeName}</h3>
            <h4>{employeeTitle}</h4>
        </div>


    </div>
  )
}

export default Employee
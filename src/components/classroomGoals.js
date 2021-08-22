import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { classroomGoalsWrap, classroomGoals } from './aDayin.module.scss'



const ClassroomGoals = ({ pageTitle, children }) => {


    const data = useStaticQuery(graphql`
    query  {
        allFile(filter: {relativeDirectory: {in: "icons"} name:{eq: "kid-yellow"}}) {
          edges {
            node {
              relativePath
              relativeDirectory
              name
              extension
              publicURL
              id
            }
          }
        }
      }
      
    `)

  return (
        <div className={classroomGoalsWrap}>
            <h2>{pageTitle} Classroom Goals</h2>
            <div className={classroomGoals}>
                {children}   
                    {data.allFile.edges.map((file, index) => {
                        return (
                            <div>
                                <img key={`${index}`} src={file.node.publicURL}/>
                                {/* <li key={`${index}`}> {index}</li> */}
                            </div>
                        )
                    })}
            </div>
        </div>
  )
}

export default ClassroomGoals
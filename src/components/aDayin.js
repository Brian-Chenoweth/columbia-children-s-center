import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
    a_day_in_wrap,
    a_day_in,
  } from './aDayin.module.scss'



const AdayIn = ({ pageTitle, children }) => {


    const data = useStaticQuery(graphql`
    query  {
        allFile(filter: {relativeDirectory: {in: "icons"}}) {
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
        <div className={a_day_in_wrap}>
            <h2>A Day in Our {pageTitle} Program</h2>
            <div className={a_day_in}>
                {children}
                <h2>RANDOM CHILD ICON HERE</h2>
                    {/* return all images in folder via GraphQL query */}
                    {/* {console.log(data.allFile.edges[0])} */}
                    
                    {data.allFile.edges.map((file, index) => {
            
                        // console.log(file.length)

                        return (
                            <div>
                            <img key={`${index}`} src={file.node.publicURL}/>
                            <li key={`${index}`}>{index}</li>
                            </div>
                        )
                    })}
            </div>
        </div>
  )
}

export default AdayIn
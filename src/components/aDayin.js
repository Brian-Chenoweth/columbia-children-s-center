import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    aDayInWrap,
    aDayIn,
  } from './adayin.module.scss'



const AdayIn = ({ pageTitle, children }) => {


    const data = useStaticQuery(graphql`
    query  {
        allFile(filter: {relativeDirectory: {in: "icons"} name:{eq: "kid-heart"}}) {
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
        <div className={aDayInWrap}>
            <h2>A Day in Our {pageTitle} Program</h2>
            <div className={aDayIn}>
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

export default AdayIn
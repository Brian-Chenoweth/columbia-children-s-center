import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { aDayIn, aDayInPhoto } from './styles/aDayin.module.scss'
import Img from "gatsby-image"

const AdayIn = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query  { 
            allFile(filter: {
                relativeDirectory: {
                    in: "icons"} name:{
                        eq: "kid-heart"}
                    }) { 
                        edges { 
                            node { 
                                relativePath relativeDirectory name extension publicURL id childImageSharp {
                                    fluid(maxWidth: 300) {
                                      ...GatsbyImageSharpFluid
                                    }
                                  }
                            } 
                        } 
                    } 
                } `)
    
  return (
    <div>
        <h2>A day in our {pageTitle} program</h2>
        <div className={aDayIn}>
            {children}      
                {data.allFile.edges.map((file, index) => {
                    return (
                        <div key={file.node.id} className={aDayInPhoto}>
                            <Img fluid={file.node.childImageSharp.fluid} />
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default AdayIn

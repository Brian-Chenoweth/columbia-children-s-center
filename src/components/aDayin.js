import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { aDayIn } from './styles/aDayin.module.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


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
                                    gatsbyImageData (width: 300)
                                  }
                            } 
                        } 
                    } 
                } `)

  return (
        <div>
            <h2>A Day in Our {pageTitle} Program</h2>
            <div className={aDayIn}>
                {children}      
                    {data.allFile.edges.map((file, index) => {
                        const image = getImage(file.node)
                        return (
                            <div>
                                <GatsbyImage image={image} />
                            </div>
                        )
                    })}
            </div>
        </div>
  )
}

export default AdayIn
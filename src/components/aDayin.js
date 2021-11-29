import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { aDayInWrap, aDayIn } from './styles/aDayin.module.scss'
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
                                    gatsbyImageData
                                  }
                            } 
                        } 
                    } 
                } `)

  return (
        <div className={aDayInWrap}>
            <h2>A Day in Our {pageTitle} Program</h2>
            <div className={aDayIn}>
                {children}      
                    {data.allFile.edges.map((file, index) => {
                        const image = getImage(file.node)
                        return (
                            <div>
                                <GatsbyImage image={image} />
                                {/* <li key={`${index}`}> {index}</li> */}
                            </div>
                        )
                    })}
            </div>
        </div>
  )
}

export default AdayIn
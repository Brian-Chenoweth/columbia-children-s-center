import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProgramSlider = ({ programImages, children }) => {

    const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            relativePath
            relativeDirectory
            name
            publicURL
            extension
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    
     `)

  return (
        <div>
            <div>
                {children}      
                    {data.allFile.edges.map((file, index) => {
                        return (
                        <div>
                            {(() => {
                              if (file.node.relativeDirectory.includes(programImages)) {
                                const image = getImage(file.node)
                                return (
                                  <div>
                                    <GatsbyImage image={image} />
                                  </div>
                                )
                              } 
                            })()}
                          </div>
                        )
                    })}
            </div>
        </div>
  )
}

export default ProgramSlider
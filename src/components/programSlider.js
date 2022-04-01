import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, imgClassName } from "gatsby-plugin-image"
import { programSliderWrap, imageWrap, image } from './styles/programSlider.module.scss'

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
              gatsbyImageData(width: 400)
            }
          }
        }
      }
    }
    
     `)

  return (
        <div className={programSliderWrap}>
            {children}      
                {data.allFile.edges.map((file, index) => {
                      if (file.node.relativeDirectory.includes(programImages)) {
                        const image = getImage(file.node)
                        return (
                            <GatsbyImage image={image} width={300}  className={imageWrap} imgClassName={image}/>
                        )
                      }
                })}
        </div>
  )
}

export default ProgramSlider
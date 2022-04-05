import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { programSliderWrap } from './styles/programSlider.module.scss'

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
              {data.allFile.edges.filter(file => file.node.relativeDirectory.includes(programImages)).map((file) => {
                const image = getImage(file.node)
                return (
                    <GatsbyImage image={image} />
                );
              })}
        </div>
  )
}

export default ProgramSlider
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


const ProgramSlider = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query  {
        allFile(filter: {relativeDirectory: {eq: "programs/young-toddler"}}) {
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
        <div>
            <div>
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

export default ProgramSlider
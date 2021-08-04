import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


const ProgramSlider = ({ programImages, children }) => {

    const data = useStaticQuery(graphql`
    query  {
        allFile {
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
                            {(() => {
                              // console.log({programImages});
                              // console.log(programImages);
                              if (file.node.relativeDirectory.includes(programImages)) {
                                return (
                                  <img key={`${index}`} src={file.node.publicURL}/>
                                )
                              } 
                            })()}
                                  {/* <li key={`${index}`}> {index}</li> */}
                          </div>
                        )
                    })}
            </div>
        </div>
  )
}

export default ProgramSlider
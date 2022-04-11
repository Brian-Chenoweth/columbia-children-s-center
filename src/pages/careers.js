import * as React from 'react'
import Layout from '../components/layout'
import JSONData from "../data/careers.json"

const CareersPage = () => {
  return (
    <Layout pageTitle="Careers" metaDesc="Careers available at Columbia Children's Center.">
      <p>Columbia Children's Center is a privately owned preschool established in 1992. We value the ideas and interests of the children in our care. We believe that children learn best through active participation with their environment and that the teacher's job is to provide a variety of opportunities and experiences to promote growth in all areas.</p>
      <p>We are looking for honest, caring and dedicated employees to join our team! Applicants should be passionate about early childhood education and have a love for enriching the minds of little ones while guiding them through a philosophy that fosters their creativity and curiosities. Applicants should have a minimum of 12 units in Early Childhood Education or a willingness to complete accredited college or university courses in Early Childhood Education. We also look for applicants who have experience working with young children as this provides a solid foundation and understanding of the children in our care.</p>
      {JSONData.careers.map((data, index) => {
        return (
          <div>
            <h2>Available Positions</h2> 
            <h3><strong>{data.title}</strong></h3>
            <p><strong>{data.group}</strong><br/>
            <strong>{data.description}</strong><br/>
            <strong>{data.time}</strong><br/>
            <strong><a href={`mailto:${data.email}`}>{data.email}</a></strong></p>
          </div>
        )
      })}  
    </Layout>
  )
}

export default CareersPage
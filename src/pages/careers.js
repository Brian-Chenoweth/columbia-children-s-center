import * as React from 'react'
import Layout from '../components/layout'
import { button } from '../components/styles/layout.module.scss'
// import JSONData from "../data/careers.json"

const CareersPage = () => {
  return (
    <Layout pageTitle="Careers" metaDesc="Careers available at Columbia Children's Center.">
      <p>Columbia Children's Center is a privately owned preschool established in 1992. We value the ideas and interests of the children in our care. We believe that children learn best through active participation with their environment and that the teacher's job is to provide a variety of opportunities and experiences to provide growth in all areas.</p>
      <p>We are currently seeking dedicated, compassionate and experienced individuals to join our team. Candidates should possess a passion for early childhood education and have a genuine love for nurturing young minds. A minimum of 12 units in Early Childhood Education or a willingness to complete college classes in the field is required. Prior experience working with young children is highly valued.</p>
      <p>If you share our philosophy and believe in fostering creativity and curiosity in young children, we encourage you to apply.</p>
      <a href="https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=c78a2d85-6d22-441e-ad4b-fff7c02a473a&env=na4&acct=d8bad836-3159-4bae-b582-e08465161ee0&v=2" target="_blank" className={button}>Apply Now</a>

      <h2>10 Reasons to Work at CCC</h2>
      <ol>
        <li>Competitive Salary</li>
        <li>Paid Holidays</li>
        <li>401K</li>
        <li>Birthday Celebrations</li>
        <li>Teacher Appreciation Week Celebrations</li>
        <li>Beautiful Break Room with Snacks Provided</li>
        <li>Beautiful Classrooms</li>
        <li>Outdoor Classroom Program</li>
        <li>Team Oriented</li>
        <li>Locally Owned Since 1992</li>
      </ol> 

      <h2>Career Path Opportunities</h2>

      <h3>Teacher Assistant</h3>
      <p>Assists the  teacher in all aspects of the classroom. Understands classroom operations and age group. Ability to lead groups autonomously with supervision. Eager to learn and happy to help.</p>

      <h3>Teacher</h3>
      <p>Responsible for all aspects of the classroom including curriculum, parent communication, licensing compliance, health &amp; safety, and wellness of students. Detail-oriented. Excited and confident in the lead role.</p>

      <h3>Lead Teacher</h3>
      <p>Supports director in daily operations. Responsible for staff schedules, building classroom inventory, manages Teacher Assistants and Teachers, and compliance. Mentors new teachers. Multi-tasker and able to flex to different needs.</p>

      <h3>Director</h3>
      <p>Independent, confident, and able to take the initiative of school operations. Ensures program quality and manages lead teachers. Excellent communication skills and time management. Competent in all areas of compliance, financial reporting, school policies, staff training, and hiring. Able to handle parent questions and concerns. Ability to convert tours to enrollment successfully. Leadership skills and ability to manage a team of 15+ staff.</p>


      
      
      {/* {JSONData.careers.map((data, index) => {
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
      })}   */}


    </Layout>
  )
}

export default CareersPage
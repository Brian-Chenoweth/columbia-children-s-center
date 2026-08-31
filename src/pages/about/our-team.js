import * as React from 'react'
import Layout from '../.././components/layout'
import Employee from '../../components/employee'
import { teamWrap } from './our-team.module.scss'

const OurTeamPage = () => {
  const employeeData = [
    { name: "Scott Chenoweth", title: "Director", img: "Scott" },
    { name: "Nicolle Rogers", title: "Program Manager", img: "Nicolle" },
    { name: "Cynthia Hernandez", title: "Young Toddler Teacher", img: "Cynthia" },
    { name: "Elizabeth Pantoja", title: "Preschool Teacher", img: "Elizabeth" },
    { name: "Katherine Chenoweth", title: "Preschool Teacher", img: "Katherine" },
    { name: "Hailey Fakoury", title: "Preschool Assistant", img: "Hailey" },
    { name: "Jackie Rubalcava", title: "Preschool Assistant", img: "Jackie" },
    { name: "Brigitte Ortiz-Tello", title: "Outdoor Lead Teacher", img: "Brigitte" },
    { name: "Amanda D'hoedt", title: "Kindergarten Readiness Lead Teacher", img: "Amanda" },
    { name: "Tiffany Schofield", title: "Kindergarten Readiness Teacher", img: "Tiffany" },
    { name: "Christina Tremper", title: "Floater", img: "Christina" },
  ]

  return (
    <Layout
      pageTitle="Our Team"
      titleOverride="Meet Our Preschool Team | Columbia Children's Center"
      metaDesc="Meet the teachers and leadership team at Columbia Children's Center in Santa Maria, CA."
      pathname="/about/our-team/"
      schemaType="AboutPage"
    >
      <a href="https://app.tryplayground.com/X7tvoDUHwazFjm1hgbal/book/j2qKHKe4akbD4Cv9DED7" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginBottom: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '0.375rem', fontWeight: 'bold' }}>Book a Tour</a>
      <div className={teamWrap}>
        {employeeData.map(employee => (
          <Employee
            key={employee.name}
            employeeName={employee.name}
            employeeTitle={employee.title}
            employeeImg={employee.img}
          />
        ))}
      </div>
    </Layout>
  )
}

export default OurTeamPage

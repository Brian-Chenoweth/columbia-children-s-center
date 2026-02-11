import * as React from 'react'
import Layout from '../.././components/layout'
import Employee from '../../components/employee'
import { teamWrap } from './our-team.module.scss'

const OurTeamPage = () => {
  const employeeData = [
    { name: "Scott Chenoweth", title: "Director", img: "Scott" },
    { name: "Cynthia Hernandez", title: "Young Toddler Teacher", img: "Cynthia" },
    { name: "Shirley Adelhelm", title: "Young Toddler Teacher / Breaker", img: "Shirley" },
    { name: "Vanessa Cabatan", title: "Early Year's Lead Teacher", img: "Vanessa" },
    { name: "Jackie Rubalcava", title: "Early Year's Teacher", img: "Jackie" },
    { name: "Amanda D'hoedt", title: "Preschool Lead Teacher", img: "Amanda" },
    { name: "Elizabeth Pantoja", title: "Preschool Teacher", img: "Elizabeth" },
    { name: "Katherine Chenoweth", title: "Preschool Teacher", img: "Katherine" },
    { name: "Hailey Fakoury", title: "Preschool Assistant", img: "Hailey" },
    { name: "Brigitte Ortiz-Tello", title: "Outdoor Lead Teacher", img: "Brigitte" },
    { name: "Nicolle Rogers", title: "Kindergarten Readiness Lead Teacher", img: "Nicolle" },
    { name: "Tiffany Schofield", title: "Kindergarten Readiness Teacher", img: "Tiffany" },
    { name: "Christina Tremper", title: "Floater", img: "Christina" },
    { name: "Bree Steadman", title: "Floater", img: "Bree" },
  ]

  return (
    <Layout pageTitle="Our Team" metaDesc="Meet the team of Columbia Children's Center.">
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

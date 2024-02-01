import * as React from 'react'
import Layout from '../.././components/layout'
import Employee from '../../components/employee'
import { teamWrap } from './our-team.module.scss'

const OurTeamPage = () => {
  const employeeData = [
    { name: "Cortney Dasmann", title: "Director", img: "Cortney" },
    { name: "Tiffany Schofield", title: "Young Toddler Teacher", img: "Tiffany" },
    { name: "Cynthia Hernandez", title: "Young Toddler Teacher", img: "Cynthia" },
    { name: "Shirley Adelhelm", title: "Young Toddler Teacher / Breaker", img: "Shirley" },
    { name: "Jackie Rubalcava", title: "Young Toddler Teacher Assistant", img: "Jackie" },
    { name: "Vanessa Cabatan", title: "Early Year's Lead Teacher", img: "Vanessa" },
    { name: "Sam Wise", title: "Preschool Lead Teacher", img: "Sam" },
    { name: "Litzey Dominguez", title: "Preschool Teacher", img: "Litzey" },
    { name: "Michelle Mora", title: "Preschool Teacher Assistant", img: "Michelle" },
    { name: "Lexie Martinez", title: "Preschool Teacher Assistant", img: "Lexie" },
    { name: "Brigitte Ortiz-Tello", title: "Outdoor Classroom Teacher", img: "Brigitte" },
    { name: "Veronica Trejo", title: "Outdoor Teacher Assistant", img: "Veronica" },
    { name: "Nicolle Rogers", title: "Kindergarten Readiness Lead Teacher", img: "Nicolle" },
    { name: "Amanda D'hoedt", title: "Kindergarten Readiness Teacher", img: "Amanda" },
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

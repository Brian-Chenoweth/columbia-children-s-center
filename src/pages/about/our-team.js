import * as React from 'react'
import Layout from '../.././components/layout'
import Employee from '../../components/employee'

const OurTeamPage = () => {
  const pageTitle = "Our Team";
  return (
    <Layout pageTitle={pageTitle}>
      <Employee employeeName="Cortney Dasmann" employeeTitle="Program Director" employeeImg="Cortney"/>
      <Employee employeeName="Cynthia Hernandez" employeeTitle="Young Toddler Teacher" employeeImg="Cynthia"/>
      <Employee employeeName="Danielle Gauna" employeeTitle="Young Toddler Assistant" employeeImg="Danielle"/>
      <Employee employeeName="Shirley Adelhelm" employeeTitle="Young Toddler Teacher / Breaker" employeeImg="Shirley"/>
      <Employee employeeName="Vanessa Mendoza" employeeTitle="Early Year's Teacher" employeeImg="Vanessa"/>
      <Employee employeeName="Cheyenne Perry" employeeTitle="Early Year's Assistant" employeeImg="Cheyenne"/>
      <Employee employeeName="Jackie Rubalcava" employeeTitle="Early Year's Assistant" employeeImg="Jackie"/>
      <Employee employeeName="Emily Cavin" employeeTitle="Red Group Teacher" employeeImg="Emily"/>
      <Employee employeeName="Kayla Matthews" employeeTitle="Yellow Group Teacher" employeeImg="Kayla"/>
      <Employee employeeName="Brittney Willoughby" employeeTitle="Preschool Assistant" employeeImg="Brittney"/>
      <Employee employeeName="Jessica Uribe" employeeTitle="Preschool Assistant" employeeImg="Jessica"/>
      <Employee employeeName="Luisa Guillen" employeeTitle="Preschool Assistant" employeeImg="Luisa"/>
      <Employee employeeName="Nicolle Rogers" employeeTitle="Blue Group Teacher" employeeImg="Nicolle"/>
      <Employee employeeName="Samantha Wise" employeeTitle="Green Group Teacher" employeeImg="Samantha"/>
      <Employee employeeName="Litzey Dominguez" employeeTitle="Kindergarten Readiness Assistant" employeeImg="Litzey"/>
      <Employee employeeName="Brigette Ortiz-Tello" employeeTitle="Kindergarten Readiness Assistant" employeeImg="Brigette"/>
      <Employee employeeName="Yari Trenado-Garcia" employeeTitle="Floater" employeeImg="Yari"/>
    </Layout>
  )
}

export default OurTeamPage
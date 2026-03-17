import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../.././components/layout'
import { introImage } from '../../components/styles/page.module.scss'

const AboutPage = () => {

  let currentDate = new Date()
  const openYear = 1992
  const year = currentDate.getFullYear();
  const yearsOpen = year - openYear

  return (
      <Layout
        pageTitle="About"
        titleOverride="About Our Santa Maria Preschool | Columbia Children's Center"
        metaDesc="Learn about Columbia Children's Center, a locally owned preschool and child care center in Santa Maria, CA serving children ages 18 months to 5 years since 1992."
        pathname="/about/"
      >
        <StaticImage src="../../images/kids-building.png" width={300} className={introImage} alt="Columbia Children's Center building illustration" />
        <p>We are a state-licensed early childhood program offering child care and preschool in Santa Maria for children ages 18 months through 5 years. We are conveniently located on Stowell Road near Highway 101 and Allan Hancock College. Our building was designed specifically for child care and includes secure entry, bright classrooms, child-sized facilities, fire sprinklers throughout, and convenient parking for drop-off and pick-up.</p>
        <h2>Celebrating {yearsOpen} Years</h2>
        <p>Locally owned and operated since 1992.</p>
        <h2>Serving Children 18 months thru 6 Years</h2>
        <p>We offer 4 different programs based on your child's age.</p>
        <h2>Open Enrollment</h2>
        <p>We are open 12 months a year with limited holiday closures.</p>
        <h2>Flexible Schedules</h2>
        <p>Most programs offer 2-5 day enrollment and half and full day schedules.</p>
        <h2>Safe Environment</h2>
        <p>Our building is secure. Classroom space is secured with a keypad entry.</p>
        <h2>Dedicated &amp; Educated Staff</h2>
        <p>Staff have education in Early Childhood Studies and are CPR certified.</p>
        <h2>Open Door Policy</h2>
        <p>Parents are able to come and go as they please!</p>
    </Layout>
  )
}

export default AboutPage

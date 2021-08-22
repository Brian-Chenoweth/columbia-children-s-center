import * as React from 'react'
import Layout from '../components/layout'
import Employee from '../components/employee'
import AdayIn from '../components/aDayin'
import TuitionRates from '../components/tuitionRates'
import ProgramSlider from '../components/programSlider'

const AboutPage = () => {
  const pageTitle = "About Me";
  return (
    <Layout pageTitle={pageTitle}>
        <p>We are a state licensed early childhood program. Offering childcare and preschool for children 18 months thru 6 years. We are conveniently located on Stowell Road close to the 101 freeway and Allan Hancock College. Our state of the art building was designed to be a childcare program offering many unique features including: fire sprinklers throughout, open and bright classrooms, child sized toilets, secure entry and plenty of parking for parents to drop off and pick up.</p>
        <h1>*** SINGLE IMAGE HERE ***</h1>
        <h2>Celebrating 29 Years</h2>
        <p>Locally owned and operated since 1992</p>
        <h2>Serving Children 18 months thru 6 Years</h2>
        <p>We offer 4 different programs based on your child’s age.</p>
        <h2>Open Enrollment</h2>
        <p>We are open 12 months a year with limited holiday closures.</p>
        <h2>Flexible Schedules</h2>
        <p>Most programs offer 2-5 day enrollment and half and full day schedules.</p>
        <h2>Safe Environment</h2>
        <p>Our building is secure. Parents use a finger print system to sign in and out their child. Classroom space is secured with a keypad entry.</p>
        <h2>Dedicated &amp; Educated Staff</h2>
        <p>Staff have education in Early Childhood Studies and are CPR certified.</p>
        <h2>Open Door Policy</h2>
        <p>Parents are able to come and go as they please!</p>
    </Layout>
  )
}

export default AboutPage
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
        <p>About page child of layout component.</p>
        <ProgramSlider />
        <AdayIn pageTitle={pageTitle} >
            <ul>
              <li><strong>7:00 - 8:00:</strong>lorem</li>
              <li><strong>7:00 - 8:00:</strong>lorem</li>
              <li><strong>7:00 - 8:00:</strong>lorem</li>
            </ul>
        </AdayIn>
        <TuitionRates pageTitle={pageTitle} halfDay="$229.00" fullDay="$297.00"/>
        <Employee employeeName="Name test" employeeImg="img-test.jpg"/>
    </Layout>
  )
}

export default AboutPage
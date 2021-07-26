import * as React from 'react'
import Layout from '../components/layout'
import Employee from '../components/employee'
import AdayIn from '../components/aDayin'
import TuitionRates from '../components/tuitionRates'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <p>About page child of layout component.</p>
        <AdayIn pageTitle="About Me" >
            <ul>
              <li><strong>7:00 - 8:00:</strong>lorem</li>
              <li><strong>7:00 - 8:00:</strong>lorem</li>
              <li><strong>7:00 - 8:00:</strong>lorem</li>
            </ul>
        </AdayIn>
        <TuitionRates pageTitle="About Me" halfDay="$229.00" fullDay="$297.00"/>
        <Employee employeeName="Name test" employeeImg="img-test.jpg"/>
    </Layout>
  )
}

export default AboutPage
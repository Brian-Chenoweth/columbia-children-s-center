import * as React from 'react'
import Layout from '../components/layout'
import Employee from '../components/employee'
import TuitionRates from '../components/tuitionRates'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <p>About page child of layout component.</p>
        <Employee employeeName="Name test" employeeImg="img-test.jpg"/>
        <TuitionRates pageTitle="About Me" halfDay="$229.00" fullDay="$297.00"/>
    </Layout>
  )
}

export default AboutPage
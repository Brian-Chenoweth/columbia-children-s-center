import * as React from 'react'
import Layout from '../components/layout'
import Employee from '../components/employee'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <p>About page child of layout component.</p>
        <Employee employeeName="Name test" employeeImg="img-test.jpg">
        </Employee>
    </Layout>
  )
}

export default AboutPage
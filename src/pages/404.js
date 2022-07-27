import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import { button, enrollmentWrap } from '../components/styles/layout.module.scss'

const ErrorPage = () => {
  const pageTitle = "404";

  return (
    <Layout pageTitle={pageTitle} metaDesc="Page could not be found.">
      <p>Sorry, the requested page could not be found. Please navigate our menu found above.</p>
    </Layout>
  )
}

export default ErrorPage
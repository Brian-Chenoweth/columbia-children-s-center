import * as React from 'react'
import Layout from '../components/layout'

const ErrorPage = () => {
  const pageTitle = "404";

  return (
    <Layout
      pageTitle={pageTitle}
      metaDesc="Page could not be found."
      pathname="/404/"
      noIndex
    >
      <p>Sorry, the requested page could not be found. Please navigate our menu found above.</p>
    </Layout>
  )
}

export default ErrorPage

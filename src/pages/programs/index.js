import * as React from 'react'
import HomepagePrograms from '../../components/homepagePrograms'
import Layout from '../../components/layout'
import { programs } from './programs.module.scss'

const ProgramsPage = () => {
  return (
    <Layout pageTitle="Programs" metaDesc="Read about the programs offered at Columbia Children's Center.">
      <HomepagePrograms />
    </Layout>
  )
}

export default ProgramsPage
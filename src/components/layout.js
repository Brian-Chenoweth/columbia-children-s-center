import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import { container, heading } from './styles/layout.module.scss'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Header from '../components/header'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`query { site { siteMetadata { title logo } } }`)

  return (
    <div>
      <main className={container}>
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        </Helmet>
        <Header />
        <Navigation />
          {(() => {
              if (pageTitle) {
                return ( <h1 className={heading}>{pageTitle}</h1> )
              }
            })()}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
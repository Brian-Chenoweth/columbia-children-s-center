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
          {(() => {
              if (pageTitle == "Columbia Children's Center") {
                return (  <title>{data.site.siteMetadata.title}</title> ) 
              } else {
                return (  <title>{pageTitle} | {data.site.siteMetadata.title} </title> ) 
              }
            })()}
        </Helmet>
        <Header />
        <Navigation />
          {(() => {
              if (pageTitle == "Columbia Children's Center") {
                return ( <h1 className={heading} style={{display: "none"}}>{pageTitle}</h1> )
              } else {
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
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import { container, heading, content, list } from './styles/layout.module.scss'
import Navi from '../components/navi'
import Footer from '../components/footer'
import Header from '../components/header'

const Layout = ({ pageTitle, metaDesc, children }) => {

  const data = useStaticQuery(graphql`query { site { siteMetadata { title logo icon } } }`)

  return (
    <div className={pageTitle.toLowerCase()}>
      <main className={container}>
        <Helmet htmlAttributes={{ lang: 'en' }}>
          {(() => {
              if (pageTitle === "Columbia Children's Center") {
                return (  <title>{data.site.siteMetadata.title}</title> ) 
              } else {
                return (  <title>{pageTitle} | {data.site.siteMetadata.title} </title> ) 
              }
            })()}
            <meta name="description" content={metaDesc} />
            <meta name="icon" href="../../images/favicon.ico" />
            <link rel="icon" type="image/png" href="../../images/favicon.ico" sizes="16x16" />
        </Helmet>
        <Header />
        {/* <Navigation /> */}
        <Navi />
          {(() => {
              if (pageTitle === "Columbia Children's Center") {
                return ( <h1 className={heading} style={{display: "none"}}>{pageTitle}</h1> )
              } else {
                return ( <h1 className={heading}>{pageTitle}</h1> )
              }
            })()}
            <div className={content}>{children}</div>
            <Footer />
      </main>
    </div>
  )
}

export default Layout
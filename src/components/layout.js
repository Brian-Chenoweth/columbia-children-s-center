import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import { container, heading, content, list } from './styles/layout.module.scss'
import Navi from '../components/navi'
import Footer from '../components/footer'
import Header from '../components/header'
import favicon from ".././images/favicon.ico"
import { Organization } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";

const Layout = ({ pageTitle, metaDesc, children }) => {

  const data = useStaticQuery(graphql`query { site { siteMetadata { title logo icon } } }`)

  return (
    <div className={pageTitle.toLowerCase()}>
      <main className={container}>
        <Helmet htmlAttributes={{ lang: 'en' }}
        script={[
          helmetJsonLdProp<Organization>({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Columbia Children's Center",
            url: "https://columbiachildrenscenter.com/",
            logo: "https://columbiachildrenscenter.com/static/cd84102905614be0e50a022883c578c7/d3084/logo.webp",
            description: "Columbia Children's Center offers childcare and preschool for children 18 months thru 5 years.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "840 E. Stowell Road",
              addressLocality: "Santa Maria",
              addressRegion: "CA",
              postalCode: "93454",
              addressCountry: "US"
            },
            telephone: "805-922-5437",
            sameAs: [
              "https://www.facebook.com/people/Columbia-Childrens-Center/100063793190740/",
              "https://www.instagram.com/columbia.childrens.center/"
            ],
          }),
        ]}>
          <link rel="icon" href={favicon} type="image/x-icon"/>
          <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
          {(() => {
              if (pageTitle === "Columbia Children's Center") {
                return (  <title>{data.site.siteMetadata.title}</title> ) 
              } else {
                return (  <title>{pageTitle} | {data.site.siteMetadata.title} </title> ) 
              }
            })()}
            <meta name="description" content={metaDesc} />
            <meta name="keywords" content="preschool, Columbia Children's Center, Santa Maria, California, early childhood education, childcare, 18 months to 5 years" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charset="UTF-8" />
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
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    logo
                }
            }
        }
    `)

  return (
    <main className={container}>
        <Helmet>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        </Helmet>
        <p className={siteTitle}>{data.site.siteMetadata.title}</p>
        <p className="logo">{data.site.siteMetadata.logo}</p>
         
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/programs/young-toddler" className={navLinkText}>
              Young Toddler
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/programs/early-years" className={navLinkText}>
              Early Years
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/programs/preschool" className={navLinkText}>
              Preschool
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/programs/kindergarten-readiness" className={navLinkText}>
              Kindergarten Readiness
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
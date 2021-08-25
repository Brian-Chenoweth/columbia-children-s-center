import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet';
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle, footerContent, socialIcons } from './layout.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

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
    <div>
    <main className={container}>
        <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        </Helmet>
        <StaticImage
        alt="Columbia Children's Center logo"
        src="../images/logo.png"/>
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
            <Link to="/about/history" className={navLinkText}>
              History
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about/our-team" className={navLinkText}>
              Our Team
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about/philosophy-goals" className={navLinkText}>
              Philosophy &amp; Goals 
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/programs" className={navLinkText}>
              Programs
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
          <li className={navLinkItem}>
            <Link to="/enrollment" className={navLinkText}>
              Enrollment
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/parents" className={navLinkText}>
              Parents
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/parents/covid" className={navLinkText}>
              Covid
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/careers" className={navLinkText}>
              Careers
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
    <footer>
      <div className={footerContent}>
        <div>
          <p>Hours of operation</p>
          <p>Monday-Friday: 7:00a.m. - 5:30p.m.</p>
        </div>
        <div className={socialIcons}>
          <p>Social Icon 1</p>
          <p>Social Icon 2</p>
          <p>Social Icon 3</p>
          <p>© 2021 Columbia Children's Center. All Rights Reserved. Columbia Childrens Center</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Layout
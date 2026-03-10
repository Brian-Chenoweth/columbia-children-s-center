import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { cityPhone, enrollmentBanner } from './styles/header.module.scss'

const Header = () => {
  return (
    <>
      <div className={enrollmentBanner}>
        <span>Now enrolling 18 months through 4 years old</span>
        <a href="https://schools.procareconnect.com/form/fa223adc-c95c-436e-b0bc-b2f252f5f9d9" target="_blank" rel="noreferrer">
          Contact Us
        </a>
      </div>
      <header>
        <Link to="/">
          <StaticImage alt="Columbia Children's Center logo" src="../images/logo.png"/>
        </Link>
        <div className={cityPhone}>
          <p>Santa Maria, CA</p>
          <a href="tel:1-805-922-5437">805-922-KIDS (5437)</a>
        </div>
      </header>
    </>
  )
}

export default Header

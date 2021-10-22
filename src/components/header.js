import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { cityPhone, logo } from './styles/header.module.scss'

const Header = () => {
  return (
    <header>
      <a href="/"><StaticImage alt="Columbia Children's Center logo" src="../images/logo.png" className={logo}/></a>
      <div className={cityPhone}>
        <p>Santa Maria, CA</p>
        <a href="tel:1-805-922-5437">805-922-KIDS (5437)</a>
      </div>
    </header>
  )
}

export default Header 
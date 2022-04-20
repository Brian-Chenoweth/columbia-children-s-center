import * as React from 'react'
import { useState, useEffect } from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { cityPhone, sticky } from './styles/header.module.scss'

const Header = () => {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
  }, []);
  

  return (
    <header className={`${scroll ? "sticky" : "normal"}`}>
      <Link to="/">
        <StaticImage alt="Columbia Children's Center logo" src="../images/logo.png"/>
      </Link>
      <div className={cityPhone}>
        <p>Santa Maria, CA</p>
        <a href="tel:1-805-922-5437">805-922-KIDS (5437)</a>
      </div>
    </header>
  )
}

export default Header 
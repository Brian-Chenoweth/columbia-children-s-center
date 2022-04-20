import * as React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'gatsby'
import { navLinks, subMenu, navLinkText, hasSubMenu, sticky, normal, nav } from './styles/navigation.module.scss'

const Navigation = () => {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
  }, []);

  return (
    <nav className={`${scroll ? "sticky" : "normal"} nav`}>
    <ul className={navLinks}>
      <li>
        <Link to="/" className={navLinkText}>
          Home
        </Link>
      </li>
      <li className={hasSubMenu}>
        <Link to="/about/" className={navLinkText}>
          About
        </Link>
        <ul className={subMenu}>
          <li>
            <Link to="/about/history/" className={navLinkText}>
              History
            </Link>
          </li>
          <li>
            <Link to="/about/our-team/" className={navLinkText}>
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/about/philosophy-goals/" className={navLinkText}>
              Philosophy &amp; Goals 
            </Link>
          </li>
        </ul>
      </li>
      <li className={hasSubMenu}>
        <Link to="/programs/" className={navLinkText}>
          Programs
        </Link>
        <ul className={subMenu}>
          <li>
            <Link to="/programs/young-toddler/" className={navLinkText}>
              Young Toddler
            </Link>
          </li>
          <li>
            <Link to="/programs/early-years/" className={navLinkText}>
              Early Years
            </Link>
          </li>
          <li>
            <Link to="/programs/preschool/" className={navLinkText}>
              Preschool
            </Link>
          </li>
          <li>
            <Link to="/programs/kindergarten-readiness/" className={navLinkText}>
              Kindergarten Readiness
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/enrollment/" className={navLinkText}>
          Enrollment
        </Link>
      </li>
      <li className={hasSubMenu}>
        <Link to="/parents/" className={navLinkText}>
          Parents
        </Link>
        <ul className={subMenu}>
          <li>
            <Link to="/parents/covid/" className={navLinkText}>
              Covid
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/careers/" className={navLinkText}>
          Careers
        </Link>
      </li>
      <li>
        <Link to="/contact/" className={navLinkText}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation 
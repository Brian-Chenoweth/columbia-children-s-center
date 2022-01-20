import * as React from 'react'
import { Link } from 'gatsby'
import { navLinks, subMenu, navLinkItem, navLinkText, hasSubMenu } from './styles/navigation.module.scss'

const Navigation = () => {

  return (
    <nav>
    <ul className={navLinks}>
      <li className={navLinkItem}>
        <Link to="/" className={navLinkText}>
          Home
        </Link>
      </li>
      <li className={navLinkItem, hasSubMenu}>
        <Link to="/about/" className={navLinkText}>
          About
        </Link>
        <ul className={subMenu}>
          <li className={navLinkItem}>
            <Link to="/about/history/" className={navLinkText}>
              History
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about/our-team/" className={navLinkText}>
              Our Team
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about/philosophy-goals/" className={navLinkText}>
              Philosophy &amp; Goals 
            </Link>
          </li>
        </ul>
      </li>
      <li className={navLinkItem, hasSubMenu}>
        <Link to="/programs/" className={navLinkText}>
          Programs
        </Link>
        <ul className={subMenu}>
          <li className={navLinkItem}>
            <Link to="/programs/young-toddler/" className={navLinkText}>
              Young Toddler
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/programs/early-years/" className={navLinkText}>
              Early Years
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/programs/preschool/" className={navLinkText}>
              Preschool
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/programs/kindergarten-readiness/" className={navLinkText}>
              Kindergarten Readiness
            </Link>
          </li>
        </ul>
      </li>
      <li className={navLinkItem}>
        <Link to="/enrollment/" className={navLinkText}>
          Enrollment
        </Link>
      </li>
      <li className={navLinkItem, hasSubMenu}>
        <Link to="/parents/" className={navLinkText}>
          Parents
        </Link>
        <ul className={subMenu}>
          <li className={navLinkItem}>
            <Link to="/parents/covid/" className={navLinkText}>
              Covid
            </Link>
          </li>
        </ul>
      </li>
      <li className={navLinkItem}>
        <Link to="/careers/" className={navLinkText}>
          Careers
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to="/contact/" className={navLinkText}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation 
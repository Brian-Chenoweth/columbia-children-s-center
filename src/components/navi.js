import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nav, navbar, dropdownItem, container } from './styles/navigation.module.scss'


const Navi = () => {

  return (
    <Navbar collapseOnSelect expand="md" sticky="top" variant="dark" className={navbar}>
    <Container className={container}>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={nav}>
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="About">
              <NavDropdown.Item className={dropdownItem} href="/about/">About</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="/about/history/">History</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="/about/our-team/">Our Team</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="/about/philosophy-goals/">Philosophy &amp; Goals</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Programs">
              <NavDropdown.Item className={dropdownItem} href="/programs/">Programs</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="/programs/young-toddler/">Young Toddler</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="/programs/early-years/">Early Years</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="/programs/preschool/">Preschool</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="/programs/kindergarten-readiness/">Kindergarten Readiness</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/enrollment/">Enrollment</Nav.Link>
          <Nav.Link href="/covid/">Covid</Nav.Link>
          <Nav.Link href="/careers/">Careers</Nav.Link>
          <Nav.Link href="/contact/">Contact</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Navi
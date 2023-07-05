import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nav, navbar, dropdownItem, container } from './styles/navigation.module.scss'
import ParentHandbook from '../documents/parent-handbook-2022-2023.pdf';
import IllnessPolicy from '../documents/illness-11.22.pdf';

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
              <NavDropdown.Item className={dropdownItem} href="/about/our-team/">Our Team</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="/about/philosophy-goals/">Philosophy &amp; Goals</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Programs">
              <NavDropdown.Item className={dropdownItem} href="/young-toddler/">Young Toddler</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="/early-years/">Early Years</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="/preschool/">Preschool</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="/kindergarten-readiness/">Kindergarten Readiness</NavDropdown.Item>
          </NavDropdown>


          <NavDropdown title="Parents">
              <NavDropdown.Item className={dropdownItem} href="https://docs.google.com/document/d/17W9NM5qSrtJnCoEgJqBoG0-J1uw7UAILj6L7WdlBLlo/edit?usp=sharing" target="_blank">Parent Handbook</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href={IllnessPolicy} target="_blank">Illness Policy</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Summer Camp Curriculum">
              <NavDropdown.Item className={dropdownItem} href="https://docs.google.com/document/d/1UDJaoFvkBHRf-1ruO5sKKbnDM30zDDTgEvs36itjpjc/edit?usp=sharing" target="_blank">Preschool</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="https://docs.google.com/document/d/17HD0Y8xcKPJVAJ9Kb5q4Rw8TWbpctq8czsO2A8kE2Ms/edit?usp=sharing" target="_blank">Kindergarten Readiness</NavDropdown.Item>
              <NavDropdown.Item className={dropdownItem} href="https://docs.google.com/document/d/1jyRlRTmnVzRwqI-vhiUs1lj9Aq_VKf7RDWMUV6rvS8U/edit?usp=sharing" target="_blank">Outdoor Group</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/careers/">Careers</Nav.Link>
          <Nav.Link href="/contact/">Contact</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Navi
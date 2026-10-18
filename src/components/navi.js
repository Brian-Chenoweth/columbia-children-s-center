import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nav, navbar, dropdownItem } from './styles/navigation.module.scss'

const Navi = ({ pathname }) => {
  const [expanded, setExpanded] = React.useState(false);
  const navbarRef = React.useRef(null);

  React.useEffect(() => {
    if (!expanded) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setExpanded(false);
        navbarRef.current?.querySelector('.navbar-toggler')?.focus();
      }
    };
    const closeOutside = (event) => {
      if (!navbarRef.current?.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
    };
  }, [expanded]);

  return (
    <Navbar
      ref={navbarRef}
      collapseOnSelect
      expand="md"
      expanded={expanded}
      onToggle={setExpanded}
      variant="light"
      className={navbar}
      aria-label="Main navigation"
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        aria-expanded={expanded}
        label={expanded ? 'Close menu' : 'Open menu'}
      >
        {expanded ? <CloseIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={nav}>
          <Nav.Link href="/" active={pathname === '/'}>
            Home
          </Nav.Link>
          {/* <Nav.Link href="/graduation/">Graduation</Nav.Link> */}
          <NavDropdown title="About" active={pathname.startsWith('/about/')}>
            <NavDropdown.Item className={dropdownItem} href="/about/">
              About
            </NavDropdown.Item>
            <NavDropdown.Item className={dropdownItem} href="/about/our-team/">
              Our Team
            </NavDropdown.Item>
            <NavDropdown.Item className={dropdownItem} href="/about/philosophy-goals/">
              Philosophy &amp; Goals
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Programs"
            active={pathname.startsWith('/young-toddler/')
              || pathname.startsWith('/early-years/')
              || pathname.startsWith('/preschool')
              || pathname.startsWith('/kindergarten-readiness/')
              || pathname.startsWith('/childcare-santa-maria/')}
          >
            <NavDropdown.Item className={dropdownItem} href="/young-toddler/">
              Young Toddler
            </NavDropdown.Item>
            {/* <NavDropdown.Item className={dropdownItem} href="/early-years/">Early Years</NavDropdown.Item> */}
            <NavDropdown.Item className={dropdownItem} href="/preschool/">
              Preschool
            </NavDropdown.Item>
            <NavDropdown.Item className={dropdownItem} href="/kindergarten-readiness/">
              Kindergarten Readiness
            </NavDropdown.Item>
            <NavDropdown.Item className={dropdownItem} href="/preschool-santa-maria/">
              Santa Maria Preschool
            </NavDropdown.Item>
            <NavDropdown.Item className={dropdownItem} href="/childcare-santa-maria/">
              Santa Maria Child Care
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Parents" active={pathname.startsWith('/parents/')}>
            {/* <NavDropdown.Item className={dropdownItem} href="https://docs.google.com/document/d/1lHmOCMmep3syn0HJR3P69kk7cSwGme1HGHe8MjYr7H4/edit?usp=sharing" target="_blank">Parent Handbook (PDF)</NavDropdown.Item> */}
            <NavDropdown.Item className={dropdownItem} href="/parents/parent-handbook/">
              Parent Handbook
            </NavDropdown.Item>
            {/* <NavDropdown.Item className={dropdownItem} href={IllnessPolicy} target="_blank">Illness Policy</NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link href="/careers/" active={pathname.startsWith('/careers/')}>
            Careers
          </Nav.Link>
          <Nav.Link href="/contact/" active={pathname.startsWith('/contact/')}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navi

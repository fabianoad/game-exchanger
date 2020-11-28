import {Link} from 'react-router-dom'
import Footer from './common/Footer'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
         
          
const PageWrapper = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
   
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/"><i class="fas fa-home fa-lg"></i></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink><Link className="nav-link" to="/contact">Contact</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="nav-link" to="/catalog">Catalog</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="nav-link" to="/login">Login</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="nav-link" to="/register">Register</Link></NavLink>
            </NavItem>
          </Nav>
          <NavbarText>PS4 Game Exchanger</NavbarText>
        </Collapse>
      </Navbar>
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
          
        
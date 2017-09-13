import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Welcome</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}><LinkContainer to="/">Home</LinkContainer></NavItem>
        <NavItem eventKey={2}><LinkContainer to="/portfolio">Portfolio</LinkContainer></NavItem>
        <NavDropdown eventKey={3} title="Blog" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}><LinkContainer to="/blog/tech">Tech Posts</LinkContainer></MenuItem>
          <MenuItem eventKey={3.2}><LinkContainer to="/blog/jewish">Jewish Posts</LinkContainer></MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1}><LinkContainer to="/contact">Contact</LinkContainer></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;

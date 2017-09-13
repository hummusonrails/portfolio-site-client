import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">Home</LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}><LinkContainer to="/portfolio">Portfolio</LinkContainer></NavItem>
        <NavDropdown eventKey={2} title="Blog" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1}><LinkContainer to="/blog/tech">Tech Posts</LinkContainer></MenuItem>
          <MenuItem eventKey={2.2}><LinkContainer to="/blog/jewish">Jewish Posts</LinkContainer></MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1}><LinkContainer to="/contact">Contact</LinkContainer></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Home</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/portfolio">Portfolio</NavItem>
        <NavDropdown eventKey={2} title="Blog" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1} href="/blog/tech">Tech Posts</MenuItem>
          <MenuItem eventKey={2.2} href="/blog/jewish">Jewish Posts</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="/contact">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;

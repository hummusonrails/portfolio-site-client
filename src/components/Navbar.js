import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/portfolio">
          <NavItem eventKey={2}>Portfolio</NavItem>
        </LinkContainer>
        <NavDropdown eventKey={3} title="Blog" id="basic-nav-dropdown">
          <LinkContainer to="/blog/tech">
            <MenuItem eventKey={3.1}>Tech Posts</MenuItem>
          </LinkContainer>
          <LinkContainer to="/blog/jewish">
            <MenuItem eventKey={3.2}>Jewish Posts</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/contact">
          <NavItem eventKey={1}>Contact</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;

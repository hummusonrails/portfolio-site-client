import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

var Brand = <LinkContainer to="/" className='navbar-brand'><NavItem eventKey={1}>Home</NavItem></LinkContainer>

const NavbarInstance = (
  <Navbar brand={Brand}>
      <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
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

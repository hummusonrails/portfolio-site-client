import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

var Brand = <LinkContainer to="/" className='navbar-brand'><NavItem eventKey={1}>Home</NavItem></LinkContainer>

const NavbarInstance = (
  <Navbar brand={Brand}>
      <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/spa/#welcome">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="#portfolio">
          <NavItem eventKey={2}>Portfolio</NavItem>
        </LinkContainer>
        <LinkContainer to="#blog">
          <NavItem eventKey={3}>Blog</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="#contact">
          <NavItem eventKey={4}>Contact</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;

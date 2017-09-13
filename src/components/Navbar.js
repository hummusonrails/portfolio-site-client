import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarInstance = (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <Navbar.Header>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"    aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/"></a>
        <Navbar.Toggle />
        </Navbar.Header>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><LinkContainer to="/"><a href="/">Home</a></LinkContainer></li>
            <li><LinkContainer to="/portfolio"><a href="/portfolio">Portfolio</a></LinkContainer></li>
            <NavDropdown eventKey={3} title="Blog" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><li><LinkContainer to="/blog/tech"><a href="/blog/tech">Tech Posts</a></LinkContainer></li></MenuItem>
              <MenuItem eventKey={3.2}><li><LinkContainer to="/blog/jewish"><a href="/blog/jewish">Jewish Posts</a></LinkContainer></li></MenuItem>
            </NavDropdown>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><LinkContainer to="/contact"><a href="/contact">Contact <span className="sr-only">(current)</span></a></LinkContainer></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default NavbarInstance;

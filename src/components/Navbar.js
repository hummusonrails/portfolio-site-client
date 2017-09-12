import React from 'react';
import { Navbar, Nav, NavItem, DropdownButton } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarInstance = (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"    aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/"></a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><LinkContainer to="/"><a href="/">Home</a></LinkContainer></li>
            <li><LinkContainer to="/portfolio/main"><a href="/portfolio/main">Portfolio</a></LinkContainer></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog
                <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><LinkContainer to="/blog/tech-postings/"><a href="/blog/tech-postings">Tech Posts</a></LinkContainer></li>
                <li><LinkContainer to="/blog/jewish-postings/"><a href="/blog/jewish-postings">Jewish Posts</a></LinkContainer></li>
                <li><LinkContainer to="/blog/all-postings"><a href="/blog/all-postings">All Posts</a></LinkContainer></li>
              </ul>
            </li>
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

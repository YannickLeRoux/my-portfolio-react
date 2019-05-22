import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Navigation-Clean.css';

import { Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-light navbar-expand-md navigation-clean">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Yannick Le Roux{' '}
          </Link>
          <span id="tagline" className="navbar-brand">
            <FontAwesomeIcon icon={faLaptopCode} style={{ color: 'white' }} />
            <small>{'  '} Javascript & React Developer</small>
          </span>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="nav navbar-nav ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  About me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/portfolio">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/uses">
                  I Use
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  Hire Me
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

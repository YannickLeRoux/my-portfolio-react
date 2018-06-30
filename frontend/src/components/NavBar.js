import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../assets/css/Navigation-Clean.css';
import * as Colors from '../constants/Colors';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
      <nav className="navbar navbar-light navbar-expand-md navigation-clean">
      <div className="container">
        <Link className="navbar-brand" to='/'>Yannick Le Roux </Link>
        <span id="tagline" className="navbar-brand">
          <i className="fa fa-laptop" style={{color: 'white'}}></i>
          <small>  Developer in the making</small>
        </span>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav ml-auto">

            <li className="nav-item" role="presentation">
              <NavLink className="nav-link" to='/about'>About me</NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink className="nav-link" to='/portfolio'>Portfolio</NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink className="nav-link" to='/blog'>Blog</NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink className="nav-link" to='/contact'>Hire Me</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </header>
      // <div>
      //   <Navbar style={ styles.navbarStyle } expand="md">
      //     <NavbarBrand
      //     style={styles.brandStyle}
      //     href="/">Yannick Le Roux - <small>Developer in the making</small></NavbarBrand>
      //     <NavbarToggler onClick={this.toggle} />
      //     <Collapse isOpen={this.state.isOpen} navbar>
      //       <Nav className="ml-auto" navbar>
      //         <NavItem>
      //           <NavLink style={ styles.navLinkStyle }
      //           href="/components/">About Me</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink style={ styles.navLinkStyle }
      //           href="/components/">Portfolio</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink style={ styles.navLinkStyle }
      //           href="/components/">Blog</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink style={ styles.navLinkStyle }
      //            href="https://github.com/reactstrap/reactstrap">Hire Me</NavLink>
      //         </NavItem>
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
      // </div>
    );
  }
}

// const styles = {
//   brandStyle: {
//     color: 'white'
//   },
//   navbarStyle : {
//     backgroundColor: Colors.navBlue,
//     position: 'fixed',
//     width: '100%',
//     zIndex: '1223'
//   },
//   navLinkStyle: {
//     color: 'white'
//   }
// }

export default NavBar;
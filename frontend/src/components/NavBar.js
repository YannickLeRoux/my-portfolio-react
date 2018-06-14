import React from 'react';
import {
  Navbar, Nav, MenuItem, NavItem, NavDropdown
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const NavBar = () => {
    return (
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Yannick Le Roux</a>
            <FontAwesome name="laptop" style={{ color: 'black'}} />
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
    //     <nav class="navbar navbar-light navbar-expand-md navigation-clean">
    //   <div class="container">
    //     <a class="navbar-brand" href="{% url 'portfolio:home' %}">Yannick Le Roux </a>
    //     <span id="tagline" class="navbar-brand">
    //       <i class="fa fa-laptop" style="color: white;"></i>
    //       <small> Developer in the making</small>
    //     </span>
    //     <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
    //       <span class="sr-only">Toggle navigation</span>
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navcol-1">
    //       <ul class="nav navbar-nav ml-auto">

    //         {% with url_name=request.resolver_match.url_name %}
    //         <li class="nav-item" role="presentation">
    //           <a class="nav-link {% if url_name == 'about' %}active{% endif %}" href="{% url 'portfolio:about' %}">About me</a>
    //         </li>
    //         <li class="nav-item" role="presentation">
    //           <a class="nav-link {% if url_name == 'portfolio' %}active{% endif %}" href="{% url 'portfolio:portfolio' %}">Portfolio</a>
    //         </li>
    //         <li class="nav-item" role="presentation">
    //           <a class="nav-link {% if url_name == 'blog' %}active{% endif %}" href="{% url 'blog:blog' %}">Blog</a>
    //         </li>
    //         <li class="nav-item" role="presentation">
    //           <a class="nav-link {% if url_name == 'contact' %}active{% endif %}" href="{% url 'portfolio:contact' %}">Hire Me</a>
    //         </li>

    //         {% endwith %}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    // </Nav>

    );
}

export default NavBar;

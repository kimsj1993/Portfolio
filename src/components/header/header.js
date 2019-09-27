import React from 'react';

import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import './header.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';




function Header(props) {

  function handleClick  ()  {
    
    props.history.push('/');
      
  }

  return (
        <div className="header" >
          <Navbar collapseOnSelect expand="sm" className="nav" variant="dark">
            <Navbar.Brand ><Link to="/" className="title">SEUNGJIN KIM</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Nav.Link><Link to="/projects" className="link">PROJECTS</Link></Nav.Link>
                <Nav.Link eventKey={2} ><Link to="/about" className="link">ABOUT ME</Link></Nav.Link>
                <Nav.Link eventKey={2} ><Link to="/contact" className="link">CONTACT</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </div>
  );
}

export default withRouter(Header);

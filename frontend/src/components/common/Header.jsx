import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
    <>
      <header>
        <div className='container py-3'>
          <Navbar expand="lg">
            <Navbar.Brand href="#home" className='logo'>
              <span>urbanEdge</span> construction</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>about us</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>services</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>projects</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>blog</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>contact us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>

    </>
  );
}


    
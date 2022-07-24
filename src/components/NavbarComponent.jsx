import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarComponent() {

  return (
    <Navbar className="navbar-dark navbar-expand-md" expand="lg">
    <div class="col-md-6 col-lg-4 col-xl-3">
    <div className="container-fluid">
      <Container>
      <img class="title-img" src="favicon.ico" />
        <Navbar.Brand href="/">Image Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </div>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top" className="bg-opacity-50">
      <Container>
        <Navbar.Brand href="#home">Rithik Sai</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('experience')}>Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
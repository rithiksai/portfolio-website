// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  const homeStyle = {
    backgroundImage: 'url(/bg1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(185, 185, 185, 0.2)',
  };

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center" style={homeStyle}>
      <div style={overlayStyle}></div>
      <Container className="position-relative">
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center text-white">
            <h1 className="display-3 fw-bold mb-3">Hi, I'm <span className="text-primary">Your Name</span></h1>
            <h3 className="h4 mb-4">Web Developer & Designer</h3>
            <p className="lead mb-4">
              I build responsive web applications with modern technologies,
              focusing on creating intuitive and engaging user experiences.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                About Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
// src/App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      
      
      <section id="projects" className="min-vh-100 d-flex align-items-center bg-light">
        <Container>
          <Row>
            <Col>
              <h2 className="display-4 fw-bold mb-4 text-dark">My Projects</h2>
              <hr className="w-25 mb-4 text-primary" />
              <p className="lead text-dark">This is where you'll showcase your projects.</p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section id="experience" className="min-vh-100 d-flex align-items-center bg-primary text-white">
        <Container>
          <Row>
            <Col>
              <h2 className="display-4 fw-bold mb-4">Experience</h2>
              <hr className="w-25 mb-4" />
              <p className="lead">This is where you'll list your work experience.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
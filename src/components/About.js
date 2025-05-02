// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" style={{
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="display-4 fw-bold mb-5">The Full Stack of Rithik</h2>
            <p className="lead mb-5" style={{ lineHeight: '1.8' }}>
              A tech-obsessed Computer Science student with mad skills in Python, Rust, and JavaScript! 
              When not writing fancy code or playing with blockchain wizardry, this multi-talented human smashes volleyballs, 
              designs low-poly 3D models, creates mobile games that make players rage. 
              Part coder, part artist, part athlete - 100% awesome sauce with a side of tech brilliance!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
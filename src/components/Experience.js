// src/components/Experience.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ExperienceItem = ({ title, company, period, location, description }) => {
  return (
    <div className="experience-item mb-5" style={{
      position: 'relative',
      paddingLeft: '30px',
      borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
    }}>
      {/* Timeline dot */}
      <div style={{
        position: 'absolute',
        left: '-10px',
        top: '0',
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #4ade80 0%, #60a5fa 100%)',
      }}></div>
      
      <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600' }}>{title}</h3>
      <div className="d-flex justify-content-between mb-2">
        <p style={{ color: '#60a5fa', fontWeight: '500', margin: 0 }}>{company}</p>
        <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0 }}>{period}</p>
      </div>
      <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontStyle: 'italic', marginBottom: '10px' }}>{location}</p>
      <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>{description}</p>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Internship Trainee",
      company: "cSigma Finance Inc",
      period: "Oct 2023 – Dec 2023",
      location: "Remote",
      description: "Assisted in frontend development tasks, contributing to UI components and layout enhancements. Supported integration of blockchain features into the platform, focusing on user interaction with smart contracts. Gained hands-on experience in Web3 technologies, frontend frameworks, and blockchain-based finance systems."
    }
  ];

  return (
    <section id="experience" style={{
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
      minHeight: '100vh',
      color: 'white',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container>
        <div className="position-relative" style={{ zIndex: 1 }}>
          <h2 className="display-4 fw-bold mb-5">Professional Journey</h2>
          <Row>
            <Col lg={8}>
              {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
              ))}
            </Col>
          </Row>
        </div>
        
        {/* Decorative background elements - different positions and colors from Projects */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-150px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
          opacity: '0.1',
          zIndex: 0
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '50px',
          left: '-150px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f472b6 0%, #4ade80 100%)',
          opacity: '0.1',
          zIndex: 0
        }}></div>
      </Container>
    </section>
  );
};

export default Experience;
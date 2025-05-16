// src/components/Projects.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectCard = ({ title, technologies, description, color }) => {
  return (
    <div className="project-card mb-4" style={{
      background: '#121212',
      borderRadius: '12px',
      padding: '25px',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      border: `1px solid rgba(255, 255, 255, 0.1)`,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    }}>
      {/* Gradient accent at top */}
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '100px',
        height: '4px',
        background: color,
        borderRadius: '0 12px 0 0',
      }}></div>
      
      <div style={{ marginBottom: '25px' }}>
        <span style={{
          fontSize: '0.75rem',
          color: color,
          backgroundColor: `${color}22`,
          padding: '4px 10px',
          borderRadius: '4px',
          fontWeight: '500',
        }}>
          {technologies}
        </span>
      </div>
      
      <h3 className="mb-3" style={{ 
        color: 'white', 
        fontSize: '1.5rem', 
        fontWeight: '600' 
      }}>
        {title}
      </h3>
      
      <p style={{ 
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.95rem',
        lineHeight: '1.6',
        marginBottom: '30px'
      }}>
        {description}
      </p>
      
      <a href="#" className="d-inline-flex align-items-center" style={{
        color: 'white',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '500',
      }}>
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </a>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Call Option Pricing",
      technologies: "Python & Streamlit",
      description: "An interactive web app that calculates European call option prices using the Black-Scholes model, with integrated user inputs for financial metrics.",
      color: "#4ade80" // Green
    },
    {
      title: "AI-Powered Chest X-Ray Report",
      technologies: "PyTorch & Matplotlib",
      description: "Image-to-text generation system that analyzes chest X-rays using fine-tuned GIT models to produce medical reports.",
      color: "#f472b6" // Pink
    },
    {
      title: "DeFi Copy Trading Bot",
      technologies: "Rust & Solana",
      description: "Real-time copy trading bot that monitors wallet transactions and executes trades on the Solana blockchain with optimized strategies.",
      color: "#60a5fa" // Blue
    },
    {
      title: "Skribbl.in - Real-Time Multiplayer Drawing & Guessing Game",
      technologies: "React, Node.js, Socket.io, Express, Heroku, Vercel",
      description: "Designed and implemented a full-stack multiplayer web game where users draw while others guess the word, featuring real-time canvas drawing, chat functionality, and a scoring system based on guess speed.",
      color: "#a78bfa" // Purple
    }
  ];

  return (
    <section id="projects" style={{
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
      minHeight: '100vh',
      color: 'white',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container>
        <div className="position-relative" style={{ zIndex: 1 }}>
          <h2 className="display-4 fw-bold mb-5">My Projects</h2>
          <Row>
            {projects.map((project, index) => (
              <Col key={index} md={6} className="mb-4">
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        </div>
        
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: '50px',
          right: '-150px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f472b6 0%, #a78bfa 100%)',
          opacity: '0.1',
          zIndex: 0
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4ade80 0%, #60a5fa 100%)',
          opacity: '0.1',
          zIndex: 0
        }}></div>
      </Container>
    </section>
  );
};

export default Projects;
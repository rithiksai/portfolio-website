// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home" style={{
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Text content - positioned to take only 45% of width */}
      <div style={{
        width: '45%',
        paddingLeft: '5%',
        zIndex: 1
      }}>
        <h1 className="display-3 fw-bold mb-3">Hi, I'm <span className="text-primary">Rithik Sai</span></h1>
        <p className="lead">Ai enthusiast and web developer</p>
      </div>
      
      {/* Image - positioned to take 55% of width and overlap slightly */}
      <div style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '60%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      }}>
        <img 
          src="/character.png" 
          alt="Rithik Sai" 
          style={{
            maxHeight: '90vh',
            maxWidth: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom right'
          }} 
        />
      </div>
    </section>
  );
};

export default Home;
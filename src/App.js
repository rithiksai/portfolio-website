// src/App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
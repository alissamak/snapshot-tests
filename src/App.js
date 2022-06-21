import React from 'react'
import './App.css'
import { useState, useEffect } from 'react';
import GitHubCard from './components/GitHubCard';
import Row from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App pt-5">
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <GitHubCard/>
        </Col>
      </Row>
    </div>
  );
}

export default App;

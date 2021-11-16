import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Resume from './components/Resume';
import Home from './components/Home';
import Project from './components/Project'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

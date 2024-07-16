import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route exact path="/experience" element={<ExperiencePage />} />
      <Route exact path="/projects" element={<ProjectsPage />} />
      <Route exact path="/contact" element={<ContactPage />} />
    </Routes>
    </div>
  );
}

export default App;

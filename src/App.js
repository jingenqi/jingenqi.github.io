// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './styles/globals.css';
import MainLayout from './components/common/Layout/MainLayout';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';
import NotesPage from './pages/NotesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </Router>
  );
}

export default App;

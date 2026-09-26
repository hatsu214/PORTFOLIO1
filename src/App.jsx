import React, { useState } from 'react';
import BackgroundOrbs from './components/BackgroundOrbs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <BackgroundOrbs />
      <Navbar />
      
      <main className="relative z-10 pt-28 lg:pt-36">
        <Hero />
        <About />
        <Skills />
        <Portfolio onOpenModal={handleOpenModal} />
        <Contact />
      </main>

      <Footer />
      
      <ProjectModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        project={selectedProject} 
      />
    </>
  );
}

export default App;

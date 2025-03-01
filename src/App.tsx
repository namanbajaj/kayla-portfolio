import React from 'react';
import './App.css';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Education from './Education/Education';
import Coursework from './Coursework/Coursework';
import WorkExperience from './WorkExperience/WorkExperience';
import Contact from './Contact/Contact';
import AboutMe from './AboutMe/AboutMe';
import Footer from './Footer/Footer';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Education />
      {/* <Coursework /> */}
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Education from './Education/Education';
import Coursework from './Coursework/Coursework';
import WorkExperience from './WorkExperience/WorkExperience';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Education />
      <Coursework />
      <WorkExperience />
      <Contact />
    </div>
  );
}

export default App;

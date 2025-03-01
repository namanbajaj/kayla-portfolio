import React, { useState } from 'react';
import './Navbar.css';
import { IoMdMenu } from "react-icons/io";
import Checkbox from './utils/Checkbox';

function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };
  
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains('overlay-background')) {
      closeOverlay();
    }
  };

  return (
    <nav>
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#aboutme">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#coursework">Coursework</a>
        <a href="#workexperience">Work Experience</a>
        <a href="#apo">APO</a>
        <a href="#gsapp">GSAPP</a>
        <a href="#healthcentral">Health Central</a>
        <a href="#contact">Contact</a>
      </div>

      <Checkbox isOpen={isOverlayOpen} toggleOverlay={toggleOverlay} />

      <div className={`overlay-background ${isOverlayOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
        <div className="overlay-content">
          <div className="navbar-mobile">
            <a href="#home" onClick={closeOverlay}>Home</a>
            <a href="#aboutme">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#education" onClick={closeOverlay}>Education</a>
            <a href="#coursework" onClick={closeOverlay}>Coursework</a>
            <a href="#workexperience" onClick={closeOverlay}>Work Experience</a>
            <a href="#apo" onClick={closeOverlay}>APO</a>
            <a href="#gsapp" onClick={closeOverlay}>GSAPP</a>
            <a href="#healthcentral" onClick={closeOverlay}>Health Central</a>
            <a href="#contact" onClick={closeOverlay}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
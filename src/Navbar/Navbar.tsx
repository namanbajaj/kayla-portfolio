import React, { useState } from 'react'
import './Navbar.css'

import { IoMdMenu } from "react-icons/io";


function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
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
        <a href="#education">Education</a>
        <a href="coursework">Coursework</a>
        <a href="#work-experience">Work Experience</a>
        <a href="#apo">APO</a>
        <a href="#gsapp">GSAPP</a>
        <a href="#health-central">Health Central</a>
        <a href="#contact">Contact</a>
      </div>

      <div className='hamburger'>
        <div className='hamburger-icon' onClick={openOverlay}>
          <IoMdMenu />
        </div>
      </div>

      {isOverlayOpen && (
        <div className="overlay-background" onClick={handleOverlayClick}>
          <div className="overlay-content">
            <div className="navbar-mobile">
              <a href="#home" onClick={closeOverlay}>Home</a>
              <a href="#education" onClick={closeOverlay}>Education</a>
              <a href="#coursework" onClick={closeOverlay}>Coursework</a>
              <a href="#work-experience" onClick={closeOverlay}>Work Experience</a>
              <a href="#apo" onClick={closeOverlay}>APO</a>
              <a href="#gsapp" onClick={closeOverlay}>GSAPP</a>
              <a href="#health-central" onClick={closeOverlay}>Health Central</a>
              <a href="#contact" onClick={closeOverlay}>Contact</a>
            </div>
          </div>
        </div>
      )}

    </nav>

  )
}

export default Navbar;
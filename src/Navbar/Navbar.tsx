import React, { useEffect, useState } from 'react'
import './Navbar.css'

import { IoMdMenu } from "react-icons/io";


function Navbar() {
  // Check if hamburger should be present
  const [isHamburger, setIsHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const navbarElement = document.getElementsByClassName('navbar')[0];
      if (navbarElement) {
        const navbarChildren = Array.from(navbarElement.children);
        let isOffScreen = false;

        for (let child of navbarChildren) {
          const rect = child.getBoundingClientRect();
          if (rect.right > window.innerWidth || rect.bottom > window.innerHeight) {
            isOffScreen = true;
            console.log('offscreen');
            break;
          }
        }

        setIsHamburger(isOffScreen);
      }
    };

    // Check on initial load
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // Overlay
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
        <div className='hamburger-icon'onClick={openOverlay}>
          <IoMdMenu size={35}/>
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
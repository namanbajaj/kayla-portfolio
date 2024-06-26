import React from 'react'
import './Home.css'

import curls from './assets/curls.svg'

import Headshot from './assets/headshot.png'

function Home() {
  return (
    <section id='home'>
      <div className='container'>
        <div className='intro-info'>
          <h1 className='intro-text'>Hi,<br/> I'm Kayla!</h1>
          <h3>Welcome to my portfolio</h3>
          <img src={curls} alt="" />
          <a href='#aboutme' className='btn'>About Me</a>
        </div>
        <div className='photos'>
          <img src={Headshot} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Home;
import React from 'react'
import './Home.css'

import curls from './assets/curls.svg'

import Kayla from './assets/kayla.webp'
import Phone from './assets/phone.png'
import highlights from './assets/phone_highlights.svg'

function Home() {
  return (
    <section id='home'>
      <div className='container'>
        <div className='intro-info'>
          <h1 className='intro-text'>Hi, I'm Kayla!</h1>
          <h3>Welcome to my portfolio</h3>
          <img src={curls} alt="" />
          <a href='#aboutme'>About Me</a>
        </div>
        <div className='photos'>
          <img src={Kayla} alt="" />
          <img src={Phone} alt="" />
          <img src={highlights} alt="" />
          <img src={highlights} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Home;
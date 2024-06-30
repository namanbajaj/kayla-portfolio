import React from 'react';
import './AboutMe.css';

import Typewriter from './assets/typewriter.svg';

function AboutMe() {
  return (
    <section id='aboutme'>
      <div className='flex_container'>
        <div className='aboutme_container'>
          <div className='img_container'>
            <img src={Typewriter} alt="" />
          </div>
          <div className='info_box_container'>
            <div className='info_box'>
              <h2>About Me</h2>
              <p>
                - I’m a passionate digital marketer interested in the Public Relations, Market Research, and Social Media fields. I appreciate the creative process and find it insightful to watch a project start from an idea in a conference room to a carefully crafted social media campaign. <br />

                - I work hard to stay up to date with industry trends and take note from  measurements such as ROI and KPI metrics,  to help track and improve social media engagement. I am forever growing and enjoy learning about new fields to help gain fresh perspectives on my work. <br />

                - My goal is to be able to tell a story through my work while leaving a long lasting, positive impact on others!</p>
            </div>
            <a href="#education" className='btn'>Education</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

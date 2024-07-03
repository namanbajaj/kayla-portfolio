import React, { useEffect, useRef } from 'react';
import './WorkExperience.css';
import APO from './APO/APO';
import GSAPP from './GSAPP/GSAPP';
import HealthCentral from './HealthCentral/HealthCentral';

import People from './assets/people.svg';
import Megaphone from './assets/megaphone.svg';
import Computer from './assets/computer.svg';

function WorkExperience() {
  return (
    <section id='workexperience'>
      <h1 className='slide_title'>Work Experience</h1>
      <div className='flex_container'>
        <div className='info_box_container'>
          <div className='w_e_list info_box'>
            <img className='w_e_list_img' src={People} alt="" />
            <h1>Alpha Phi Omega</h1>
            <ul className='w_e_info'>
              <li>Digital Content Strategist</li>
              <li>Administrative Assistant</li>
              <li>Director of Recruitment</li>
              <li>Member of the Service Committee</li>
            </ul>
          </div>
          <a href="#apo" className='btn'>Learn More</a>
        </div>

        <div className='info_box_container'>
          <div className='w_e_list info_box'>
            <img className='w_e_list_img m_c' src={Megaphone} alt="" />
            <h1>Marketing & Communications Intern</h1>
            <p>Rutgers Graduate School of Applied Professional Psychology</p>
          </div>
          <a href="#gsapp" className='btn'>Learn More</a>
        </div>

        <div className='info_box_container'>
          <div className='w_e_list info_box'>
            <img className='w_e_list_img m_c' src={Computer} alt="" />
            <h1>Performance Marketing Intern</h1>
            <p>HealthCentral</p>
          </div>
          <a href="#healthcentral" className='btn'>Learn More</a>
        </div>
      </div>
      <APO />
      <GSAPP />
      <HealthCentral />
    </section>
  );
};

export default WorkExperience;

import React, { useEffect, useRef } from 'react';
import './WorkExperience.css';
import APO from './APO/APO';
import GSAPP from './GSAPP/GSAPP';
import HealthCentral from './HealthCentral/HealthCentral';

function WorkExperience() {
  return (
    <section id='workexperience'>
      <h1 className='slide_title'>Work Experience</h1>
      <div className='flex_container'>
        <div className='flex_container'>
          <div className='info_box_container'>
            <div className='info_box'>
              <div className='info_box_text'>
                This paper analyzes the effectiveness of public relations in the integrated marketing campaign “The Charli” in collaboration with Dunkin in 2020.
              </div>
            </div>
            <a href="https://docs.google.com/document/d/1vU-T-Kcc8CY9UWpIVdjDeWxUgDFKv2O6aHkbLUWS0Co/edit" className='btn' target='_blank' rel='noopener noreferrer'>Learn More</a>
          </div>

          <div className='info_box_container'>
            <div className='info_box'>
              <div className='info_box_text'>
                This group project discusses the various types of competition in the workplace as well as how it effects employees in a virtual setting.
              </div>
            </div>
            <a href="https://read.bookcreator.com/NKqpj6iPPRQKvOl5X4TCJFztOq23/LaiZV9H0SOaOf-vmZopk0A/NyPpUaI2Su23Zp4DUXR1XQ" className='btn' rel='noopener noreferrer'>Learn More</a>
          </div>

          <div className='info_box_container'>
            <div className='info_box'>
              <div className='info_box_text'>
                This presentation recaps my experience crafting and conducting a professional interview with 2x TedX speaker Nadia Jagessar.
              </div>
            </div>
            <a href="https://www.canva.com/design/DAF1alLSfZ8/zO-hlJVW-a0h5CWyHX0Vxw/edit" className='btn' rel='noopener noreferrer'>Learn More</a>
          </div>
        </div>
      </div>
      <div id='workexperiencespecific'>
      </div>
      <APO />
      <GSAPP />
      <HealthCentral />
    </section>
  );
};

export default WorkExperience;

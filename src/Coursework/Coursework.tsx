import React from 'react';
import './Coursework.css';

import TextBubble from './assets/text_bubble.svg';

function Coursework() {

  return (
    <section id='coursework'>
      <h1 className='slide_title'>Relevant Coursework</h1>
      <div className='info_banner'>
        <div className='info_banner_text'>
          This spring semester, I will be participating in courses such as: PR Management, Crisis Communication,
          Audience & Market Analysis, Creative Writing, and Media, Marketing, & Communication.
          Below are some of my favorite past projects:
        </div>
      </div>
      <div className='flex_container'>
        <div className='info_box_container'>
          <div className='title_image_text'>
            <img src={TextBubble} alt="" />
            <h1>Principles of PR</h1>
          </div>
          <div className='info_box'>
            <div className='info_box_text'>
              This paper analyzes the effectiveness of public relations in the integrated marketing campaign “The Charli” in collaboration with Dunkin in 2020.
            </div>
          </div>
          <a href="https://docs.google.com/document/d/1vU-T-Kcc8CY9UWpIVdjDeWxUgDFKv2O6aHkbLUWS0Co/edit" className='btn' target='_blank' rel='noopener noreferrer'>Read Here</a>
        </div>

        <div className='info_box_container'>
          <div className='title_image_text'>
            <img src={TextBubble} alt="" />
            <h1>Virtual Team Dynamics</h1>
          </div>
          <div className='info_box'>
            <div className='info_box_text'>
              This group project discusses the various types of competition in the workplace as well as how it effects employees in a virtual setting.
            </div>
          </div>
          <a href="https://read.bookcreator.com/NKqpj6iPPRQKvOl5X4TCJFztOq23/LaiZV9H0SOaOf-vmZopk0A/NyPpUaI2Su23Zp4DUXR1XQ" className='btn' target='_blank' rel='noopener noreferrer'>Read Here</a>
        </div>

        <div className='info_box_container'>
          <div className='title_image_text'>
            <img src={TextBubble} alt="" />
            <h1>Principles of Interviewing</h1>
          </div>
          <div className='info_box'>
            <div className='info_box_text'>
              This presentation recaps my experience crafting and conducting a professional interview with 2x TedX speaker Nadia Jagessar.
            </div>
          </div>
          <a href="https://www.canva.com/design/DAF1alLSfZ8/zO-hlJVW-a0h5CWyHX0Vxw/edit" className='btn' target='_blank' rel='noopener noreferrer'>Read Here</a>
        </div>
      </div>
    </section>
  );
};

export default Coursework;

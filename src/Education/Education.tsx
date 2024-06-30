import React from 'react';
import './Education.css';

import Cap from './assets/cap.svg';
import SkillsIcon from './assets/skills_icon.svg';
import Lightbulb from './assets/lightbulb.svg';

const data = [
  'Google Ads/Analytics',
  'Canva & Capcut',
  'Trello & Buffer',
  'Adobe Suite',
  'Qualtrics',
  'HTML & JavaScript',
  'Outbrain & Taboola',
  'Microsoft Ads',
  'Microsoft/Google Suites',
  'Meta Business Suite',
  'Cision',
  'Jun Group',
  'Constant Contact, Hootsuite, & MailChimp',
  'Social Media: (Instagram, Facebook, Tiktok, Reddit, Twitter, Pinterest)'
]

function Education() {
  return (
    <section id='education'>
      <h1 className='slide_title'>Education and Skills</h1>
      <div className='flex_container'>
        <div className='education_grid'>
          <div className='education_list info_box'>
            <img className='edu_list_img' src={Cap} alt="" />
            <h1>Rutgers University</h1>
            <ul className='edu_info'>
              <li><b>Major: </b>Human Resources Management  & Communication w/ a specialization in Strategic Public Relations</li>
              <li><b>Graduation Date: </b>May 2024</li>
              <li><b>GPA: </b>3.4/4.0</li>
            </ul>
          </div>
          <div className='skills_list info_box'>
            <div className='skills_header_container'>
              <img className='edu_list_img' src={SkillsIcon} alt="" />
              <h1>Skills</h1>
            </div>
            <ul>
              {data.map((item, index) => (
                <li key={index} className='skill_item'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Education;

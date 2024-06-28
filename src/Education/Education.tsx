import React from 'react';
import './Education.css';

const data = [
  'Google Ads/Analytics',
  'Canva & Capcut',
  'Trello & Buffer',
  'Qualtrics',
  'HTML & JavaScript',
  'Outbrain & Taboola',
  'Microsoft Ads',
  'Meta Business Suite',
  'Cision',
  'Jun Group',
  'Constant Contact, Hootsuite, & MailChimp',
  'Microsoft/Google Suites',
  'Adobe Suite',
  'Social Media: (Instagram, Facebook, Tiktok, Reddit, Twitter, Pinterest)'
]

function Education() {
  return (
    <section id='education'>
      <div className='education_container'>
        <h1 className='edu_title'>Education and Skills</h1>
        <div className='education_grid'>
          <div className='education_list'>
            <p>Rutgers University</p>
            <ul>
              <li><b>Major: </b>Human Resources Management  & Communication w/ a specialization in Strategic Public Relations</li>
              <li><b>Graduation Date: </b>May 2024</li>
              <li><b>GPA: </b>3.4/4.0</li>
            </ul>
          </div>
          <div className='skills_list'>
            {data.map((item, index) => (
              <div key={index} className='skill_item'>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default Education;

import React from 'react';
import './HealthCentral.css';

import HealthCentralLogo from './assets/healthcentral.webp';

function HealthCentral() {
  return (
    <section id='healthcentral'>
      <h1 className='slide_title'>Performance Marketing Intern at Health Central</h1>
      <div className='flex_container'>
        <img src={HealthCentralLogo} alt="" />
        <div className='flex_container_row'>
          <h2>Primary Tasks</h2>
          <ul>
            <li>Screened over 6 sources of 1st and 3rd party data to optimize campaigns and support Senior Paid Ad Managers</li>
            <li>Monitored trends and provided weekly campaign reports such as Margin Callouts & Content Audits</li>
            <li>Utilized Search Engine Optimization techniques to boost ad traffic by 5%</li>
            <li>Aided internal teams in formulating strategies to align with organizational goals, improve business growth, and increase audience engagement</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HealthCentral;

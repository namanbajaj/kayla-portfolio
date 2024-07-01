import React from 'react';
import './HealthCentral.css';

import HealthCentralLogo from './assets/healthcentral.webp';

function HealthCentral() {
  return (
    <section id='healthcentral'>
      <h1 className='slide_title'>Performance Marketing Intern at Health Central</h1>
      <div className='healthcentral_grid'>
        <img src={HealthCentralLogo} alt="" />
        <div className='flex_container_row'>
          <h2>Primary Tasks</h2>
          <ul>
            <li>Screened 1st and 3rd party data to optimize HealthCentral sites and campaign performance</li>
            <li>Provided long term campaign reports that monitor trends daily for internal teams including Negative Margin Callouts Margins and Content Audits</li>
            <li>Aided the Performance Marketing team in formulating strategies to improve business growth, audience engagement, and overall efficiency.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HealthCentral;

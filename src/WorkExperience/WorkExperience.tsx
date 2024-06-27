import React, { useEffect, useRef } from 'react';
import './WorkExperience.css';
import APO from './APO/APO';
import GSAPP from './GSAPP/GSAPP';
import HealthCentral from './HealthCentral/HealthCentral';

function WorkExperience() {
  return (
    <section id='workexperience'>
      <div id='workexperiencespecific'>
        <h1>Work Experience</h1>
      </div>
      <APO />
      <GSAPP />
      <HealthCentral />
    </section>
  );
};

export default WorkExperience;

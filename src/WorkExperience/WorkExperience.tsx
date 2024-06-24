import React from 'react';
import './WorkExperience.css';
import APO from './APO/APO';
import GSAPP from './GSAPP/GSAPP';
import HealthCentral from './HealthCentral/HealthCentral';

function WorkExperience() {
  return (
    <section id='work-experience'>
      <h1>Work Experience</h1>
      <APO />
      <GSAPP />
      <HealthCentral />
    </section>
  );
};

export default WorkExperience;

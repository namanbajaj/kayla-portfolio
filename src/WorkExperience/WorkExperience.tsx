import React from 'react';
import './WorkExperience.css';
import APO from './APO/APO';
import GSAPP from './GSAPP/GSAPP';
import HealthCentral from './HealthCentral/HealthCentral';

function WorkExperience()  {
  return (
    <div>
        <h1>WorkExperience</h1>
        <APO />
        <GSAPP />
        <HealthCentral />
    </div>
  );
};

export default WorkExperience;

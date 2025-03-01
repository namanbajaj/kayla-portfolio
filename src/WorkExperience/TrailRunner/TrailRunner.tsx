import './TrailRunner.css';

import TrailRunnerLogo from './assets/trailrunner.jpg';

function TrailRunner() {
  return (
    <section id='trailrunner'>
      <h1 className='slide_title'>PR Analyst Intern at TrailRunner International</h1>
      <div className='flex_container'>
        <div className='flex_container_row'>
          <h2>Primary Tasks</h2>
          <ul>
            <li>Screened 1st and 3rd party data to optimize HealthCentral sites and campaign performance</li>
            <li>Provided long term campaign reports that monitor trends daily for internal teams including Negative Margin Callouts Margins and Content Audits</li>
            <li>Aided the Performance Marketing team in formulating strategies to improve business growth, audience engagement, and overall efficiency.</li>
          </ul>
          <img src={TrailRunnerLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TrailRunner;

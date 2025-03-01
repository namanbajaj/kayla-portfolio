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
            <li>Assisted 5 major corporation client teams in finance, technology, entertainment, and sports industries</li>
            <li>Executed high-quality research for 50+reporter briefs, RFPs, and competitor benchmarking</li>
            <li>Compiled targeted media lists, drafted press releases, and prepared 60+ pitches to journalists resulting in earned media coverage for clients</li>
            <li>Utilized Meltwater to participate in media monitoring rotations and delivered daily coverage reports</li>
            <li>Prepared plans of actions for relevant conference appearances, award submissions, and broadcast interviews</li>
            <li>Analyzed industry trends to enhance public image, support strategic brand development, and provide critical insights for client strategy</li>
          </ul>
          <img src={TrailRunnerLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TrailRunner;

import './AboutMe.css';
import Resume from './assets/Resume.pdf'

import Typewriter from './assets/typewriter.svg';

function AboutMe() {
  return (
    <section id='aboutme'>
      <div className='flex_container'>
        <div className='img_container'>
          <img src={Typewriter} alt="" />
        </div>
        <div className='info_box_container'>
          <div className='info_box'>
            <h2>About Me</h2>
            <ul>
              <li>
                Hi! I’m a communications professional passionate about crafting compelling stories
                and driving meaningful engagement. My experience in marketing, public relations,
                and social media across multiple industries allows me to apply a fresh perspective to
                my work.
              </li>
              <li>
                I appreciate creative processes and find it insightful to watch a project start from an
                idea in a conference room to a detailed campaign. I understand the importance of
                keeping updated with industry trends and current events to communicate
                effectively with others.
              </li>
              <li>
                Let’s create something impactful together!
              </li>
            </ul>
          </div>
          <a href={Resume} className='btn'>Resume</a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

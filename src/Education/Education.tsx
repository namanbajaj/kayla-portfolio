import './Education.css';

import Cap from './assets/cap.svg';
import MMC from './assets/MMC.png';
import CC from './assets/CC.png';
import PoI from './assets/PoI.png';


function Education() {
  return (
    <section id='education'>
      <h1 className='slide_title'>Relevant Education</h1>

      <div className='flex_container flex_container_has_title'>
        <div className='info_box edu_banner_box'>
          <div className='edu_banner_grid'>
            <div className='edu_banner_grid_school'>
              <h1>Rutgers University</h1>
              <img className='edu_list_img' src={Cap} alt="" />
            </div>
            <div className='edu_banner_grid_info'>
              In May 2024, I received a Bachelors of Arts in Human Resources Management and a
              Bachelors of Arts in  Communication w/ a specialization in Strategic Public Relations.
              Below are two of my favorite course projects and extracurricular leadership positions
            </div>
          </div>
        </div>
      </div>

      <div className='flex_container flex_container_has_title'>
        <div className='info_box_container'>
          <div className='info_box info_box_helper info_box_pic_title_text'>
            <div className='title_image_text'>
              <img src={MMC} alt="" />
            </div>
            <h1>Media, Marketing, & Communication</h1>
            <div className='info_box_text'>
              Responded to an RFP for General
              Plumbing Supply with detailed
              PESO recommendations
            </div>
          </div>
          <a href="https://docs.google.com/presentation/d/1nMNx3lMAU0LP4AnTWrNEq_ULsiHFvtqwbuvIqCAXc2A/edit#slide=id.g1643cd8e915_0_0" className='btn' target='_blank' rel='noopener noreferrer'>Read Here</a>
        </div>

        <div className='info_box_container'>
          <div className='info_box info_box_helper info_box_pic_title_text'>
            <div className='title_image_text'>
              <img src={CC} alt="" />
            </div>
            <h1>Crisis Communication</h1>
            <div className='info_box_text'>
              Created a sample Crisis
              Management Plan for Chipotle
              Mexican Grill
            </div>
          </div>
          <a href="https://www.canva.com/design/DAGBkBw3UAo/BOUeTBBIxsXPtb94oYd-yQ/edit" className='btn' target='_blank' rel='noopener noreferrer'>Read Here</a>
        </div>

        <div className='info_box_container'>
          <div className='info_box info_box_helper info_box_pic_title_text'>
            <div className='title_image_text'>
              <img src={PoI} alt="" />
            </div>
            <h1>Alpha Phi Omega</h1>
            <div className='info_box_text'>
              Held leadership positions:
              <ul>
                <li>
                  Digital Content Strategist
                </li>
                <li>
                  Administrative Assistant
                </li>
                <li>
                  Director of Recruitment
                </li>
              </ul>
            </div>
          </div>
          <a href="#apo" className='btn'>Sample Posts</a>
        </div>
      </div>
    </section>
  );
};

export default Education;

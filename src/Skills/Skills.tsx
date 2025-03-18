import './Skills.css';
import SkillsIcon from './assets/skills_icon.svg';
import Lightbulb from './assets/lightbulb.svg'

const data = [
  ['Canva & Capcut', 'Experienced'],
  ['Meta Business Suite', 'Experienced'],
  ['Google Ads/Analytics', 'Experienced'],
  ['Adobe Suite', 'Experienced'],
  ['Constant Contact & Hootsuite', 'Experienced'],
  ['Cision & Muckrack', 'Intermediate'],
  ['Meltwater & Critical Mention', 'Intermediate'],
  ['Microsoft Ads', 'Intermediate'],
  ['Trello & Buffer', 'Intermediate'],
  ['Outbrain & Taboola', 'Intermediate'],
  ['Qualtrics', 'Intermediate'],
  ['HTML & Java Script', 'Beginner'],
  ['Bloomberg Terminal', 'Beginner'],
  [<div>Social Media <span className='sm'>(Instagram, Facebook, Tiktok, Reddit, Twitter, Pinterest)</span></div>, 'Experienced'],
  ['Jun Group', 'Beginner']
];

function Skills() {
  return (
    <section id="skills">
      <h1 className='slide_title'>Technical Skills</h1>
      <div className='flex_container flex_container_has_title'>
        <div className='skills_list info_box'>
          <div className='skills_header_container'>
            <img className='edu_list_img' src={SkillsIcon} alt="" />
            <h1>Skills</h1>
          </div>
          <div className='skills_list_container'>
            {data.map((item, index) => (
              <div key={index} className='skill_item'>
                <img className='lightbulb' src={Lightbulb} alt="" />
                <div className='skill_item_info'>
                  <span className='skill_item_name'>
                    {item[0]}
                  </span>
                  <span className='skill_item_level'>
                    {item[1]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
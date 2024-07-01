import React from 'react';
import './APO.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import APO1 from './assets/apo 2.gif'
import APO2 from './assets/why i rushed apo.png'
import APO3 from './assets/apo rush 1.gif'
import analytics from './assets/post analytics.png'

function APO() {
  return (
    <div id='apo'>
      <section id='apodr'>
        <h1 className='slide_title'>Director of Recruitment for Alpha Phi Omega-Delta Rho Chapter</h1>
        <div className='flex_container_row'>
          <h2>Creative Process</h2>
          <ul>
            <li>Produced all “rush” social media posts, created a promotional video, and executed 2 weeks of interactive events for 50+ participants.</li>
            <li>Proposed new ideas to fellow e-board members and communicated consistently to 100+ potential new members</li>
          </ul>
          <Carousel infiniteLoop={true} autoPlay={true} interval={3000}>
                <div>
                    <img src={APO1} />
                </div>
                <div>
                    <img src={APO2} />
                </div>
                <div>
                    <img src={APO3} />
                </div>
            </Carousel>
        </div>

      </section>


      
      <section id='apodcs'>APO Digital Content Strategist</section>
    </div>
  );
};

export default APO;

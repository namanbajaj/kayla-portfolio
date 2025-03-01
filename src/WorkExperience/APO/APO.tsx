import React from 'react';
import './APO.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import APO1 from './assets/dr/apo 2.gif'
import APO2 from './assets/dr/why i rushed apo.png'
import APO3 from './assets/dr/apo rush 1.gif'

// import analytics from './assets/dr/post analytics.png'
import analytics1 from './assets/dr/post analytics 1.png'
import analytics2 from './assets/dr/post analytics 2.png'
import analytics3 from './assets/dr/post analytics 3.png'

import apodcs1 from './assets/dcs/insta post example.png'
import apodcs2 from './assets/dcs/apo 3.webp'
import apodcs3 from './assets/dcs/apo 4.webp'
import apodcs4 from './assets/dcs/apo 5.webp'
import apodcs5 from './assets/dcs/apo 6.webp'

function APO() {
  return (
    <div id='apo'>
      <section id='apodr'>
        <h1 className='slide_title'>Alpha Phi Omega-Delta Rho Chapter</h1>
        <div className='flex_container_row'>
          <h2>Creative Process</h2>
          <ul>
            <li>Produced all “rush” social media posts, created a promotional video, and executed 2 weeks of interactive events for 50+ participants.</li>
            <li>Proposed new ideas to fellow e-board members and communicated consistently to 100+ potential new members</li>
          </ul>
          <Carousel infiniteLoop={true} autoPlay={true} interval={3000}>
            <div>
              <img src={APO1} alt='' />
            </div>
            <div>
              <img src={APO2} alt='' />
            </div>
            <div>
              <img src={APO3} alt='' />
            </div>
            <div>
              <img src={apodcs1} alt='' />
            </div>
            <div>
              <img src={apodcs2} alt='' />
            </div>
            <div>
              <img src={apodcs3} alt='' />
            </div>
            <div>
              <img src={apodcs4} alt='' />
            </div>
            <div>
              <img src={apodcs5} alt='' />
            </div>
          </Carousel>

          <h2>Final results</h2>
          <ul>
            <li>Produced one of highest engaging posts on the APO Instagram</li>
            <li>Recruited 33 new members for the Fall 2022 semester!</li>
          </ul>
          <Carousel infiniteLoop={true} autoPlay={true} interval={3000}>
            <div>
              <img src={analytics1} alt='' />
            </div>
            <div>
              <img src={analytics2} alt='' />
            </div>
            <div>
              <img src={analytics3} alt='' />
            </div>
          </Carousel>
        </div>
      </section>



      {/* <section id='apodcs'>
        <h1 className='slide_title'>Digital Content Strategist for Alpha Phi Omega-Delta Rho Chapter</h1>
        <div className='flex_container_row'>
          <h2>Creative Process</h2>
          <ul>
            <li><a href="https://www.instagram.com/rutgersapo/?hl=en">Alpha Phi Omega- Delta Rho Instagram</a></li>
          </ul>
          <Carousel infiniteLoop={true} autoPlay={true} interval={3000}>
            <div>
              <img src={apodcs1} alt='' />
            </div>
            <div>
              <img src={apodcs2} alt='' />
            </div>
            <div>
              <img src={apodcs3} alt='' />
            </div>
            <div>
              <img src={apodcs4} alt='' />
            </div>
            <div>
              <img src={apodcs5} alt='' />
            </div>
          </Carousel>
        </div>
      </section> */}
    </div>
  );
};

export default APO;

import React from 'react';
import './GSAPP.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import gsapp1 from './assets/gsapp/gsapp 2.webp';
import gsapp2 from './assets/gsapp/gsapp 3.webp';

import post1 from './assets/posts/gsapp 4.webp';
import post2 from './assets/posts/gsapp 5.webp';
import post3 from './assets/posts/gsapp 6.webp';

function GSAPP() {
  return (
    <div>
      <section id='gsapp'>
        <h1 className='slide_title'>Marketing & Communication Intern at Rutgers Graduate School of Applied Professional Psychology (GSAPP)</h1>
        <div className='flex_container'>
          <div className='flex_container_row'>
            <h2>Creative Process</h2>
            <h3>Below is a complete list of posts done during my time at GSAPP (9/19/22-12/14/22)</h3>
            <ul>
              <li><a href="https://www.facebook.com/RutgersGSAPP/" target='_blank' rel='noopener noreferrer'>Facebook</a></li>
              <li><a href="https://www.instagram.com/rutgersgsapp/?hl=en" target='_blank' rel='noopener noreferrer'>Instagram</a></li>
              <li><a href="https://x.com/RutgersGSAPP" target='_blank' rel='noopener noreferrer'>Twitter</a></li>
            </ul>
            <h2>Final results</h2>
            <ul>
              <li>Increased followers by 10% and engagements between faculty, staff, and students</li>
              <li>Produced over 50 posts for the GSAPP social media channels</li>
            </ul>
          </div>
          <div className='flex_container_row gsapp_ads'>
            <h2>Some Advertisements I’ve Created:</h2>
            <Carousel infiniteLoop={true} autoPlay={true} interval={3000}>
              <div>
                <img src={gsapp1} alt='' />
              </div>
              <div>
                <img src={gsapp2} alt='' />
              </div>
            </Carousel>
          </div>
        </div>

      </section>

      <section id='gsapp-posts'>
        <h2>Some of My Favorite GSAPP Posts</h2>
        <div className='posts'>
          <img src={post1} alt="" />
          <img src={post2} alt="" />
          <img src={post3} alt="" />
        </div>
      </section>
    </div>
  );
};

export default GSAPP;

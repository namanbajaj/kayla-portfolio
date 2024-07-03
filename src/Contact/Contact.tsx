import React from 'react';
import './Contact.css';

import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

import Connect from './assets/connect.svg';

const size = 40;

function Contact() {
  return (
    <section id='contact'>
      <h1 className='slide_title'>Let’s Stay Connected!</h1>
      <div className='flex_container'>
        <div className='social_media_grid'>
          <div className='social_media_item_grid'>
            <div className='icon'><FaLinkedin size={size} /></div>
            <a href="https://www.linkedin.com/in/kayla-ramn/" className='link'>kayla-ramn</a>
          </div>
          <div className='social_media_item_grid'>
            <div className='icon'><IoMdMail size={size} /></div>
            <a href="mailto:kaylaramnarain@gmail.com" className='link'>kaylaramnarain@gmail.com</a>
            </div>
          <div className='social_media_item_grid'>
            <div className='icon'><FaPhoneVolume size={size} /></div>
            <a href="tel:7329021327" className='link'>732-902-1327</a>
            </div>
        </div>
        <img className='contact_image' src={Connect} alt="" />
      </div>
    </section>
  );
};

export default Contact;

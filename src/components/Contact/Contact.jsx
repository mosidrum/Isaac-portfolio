/* eslint-disable no-unused-vars */
import React from 'react';
import Headings from '../../shared/Headings';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Contact = () => (
  <div className='contact mx-auto mt-0 px-7' id='contact'>
      <Headings title={'CONTACT ME'} subTitle='Feel free to Contact me by submitting the form below and i will get back to you as soon as possible'/>
      <motion.div className='md:w-2/3 mx-auto bg-white md:px-8 px-3 py-3 rounded mb-32'
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true, amount:0.1}}
      >
        <form>
          <label htmlFor="">Name:</label>
          <input className='p-2' type="text" name="name" id="name" placeholder='Enter your name' />
          <label htmlFor="">Email:</label>
          <input className='p-2' type="email" name="email" id="email" placeholder='Enter your email address' />
          <label htmlFor="">Message:</label>
          <textarea className='p-2 mb-4' name="message" id="message" cols="60" rows="10" placeholder='Enter your message' />
          <button className='btn px-10 py-2 shadow-sm block'>Send</button>
        </form>
      </motion.div>
  </div>
);


export default Contact;
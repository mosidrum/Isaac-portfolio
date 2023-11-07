/* eslint-disable no-unused-vars */
import React from 'react';
import Headings from '../../shared/Headings';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
    return (
        <div className='contact mx-auto mt-0 px-7' id='contact'>
            <Headings title={'CONTACT ME'} subTitle='Feel free to Contact me by submitting the form below and i will get back to you as soon as possible'/>
            <motion.div className='md:w-2/3 mx-auto bg-white md:px-16 px-8 py-8 rounded mb-32'
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.4}}
            >
              <form>
                <label htmlFor="">Name:</label>
                <input className='p-5' type="text" name="name" id="name" placeholder='Enter your name' />
                <label htmlFor="">Email:</label>
                <input className='p-5' type="email" name="email" id="email" placeholder='Enter your email address' />
                <label htmlFor="">Message:</label>
                <textarea className='p-5 mb-8' name="message" id="message" cols="80" rows="10" placeholder='Enter your message' />
                <button className='btn px-14 py-4 shadow-sm block'>Send</button>
              </form>
            </motion.div>
        </div>
    );
};

export default Contact;
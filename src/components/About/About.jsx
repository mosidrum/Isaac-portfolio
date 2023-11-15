/* eslint-disable no-unused-vars */
import React from 'react';
import Headings from '../../shared/Headings';
import { skills } from '../../utils/skills';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const About = () => {
	return (
		<div className="max-w-7xl mx-auto mt-60 md:mt-14 md:py-8 px-7" id='about'>
			<Headings
				title={'About Me'}
				subTitle={'Here you will find more details about me.'}
			/>
			<div className="flex flex-col md:flex-row items-start justify-start">
				<motion.div className="md:w-1/2 my-8"
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount:0.1}}
        >
					<h4 className='text-2xl font-bold mb-8'>Get to know me!</h4>
					<div className='md:w-10/12 text-lg text-[#666] mb-8'>
            <p className='mb-5'>
              As a passionate <strong> frontend web developer</strong> with a flair for crafting captivating
              online experiences. My journey in the digital realm has been nothing
              short of exhilarating, as I continually push the boundaries of
              what&apos;s possible in web development. With a deep love for coding and
              an unwavering commitment to pixel-perfect design, I
              transforming ideas into visually stunning and user-friendly
              websites.
            </p>
            <p className='mb-5'>
              When I&apos;m not immersed in the world of
              web development, you can find me playing drum or in a musical concert dancing to musical beats in the great
              spirit. Life,
              like coding, is an adventure, and I&apos;m excited to embark on it with
              you. Let&apos;s collaborate to make your digital dreams a reality.
            </p>
          </div>
				</motion.div>
				<motion.div className="md:w-1/2 my-8"
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, amount:0.1}}
        >
        <h4 className='text-2xl font-bold mb-8'>My Skills</h4>
          <div className='flex flex-wrap gap-3 md:w-10/12'>
            {skills.map(skill => <p key={skill.id} className='bg-slate-300 text-light py-2 px-4 rounded'>{skill.title}</p>)}
          </div>
        </motion.div>
			</div>
		</div>
	);
};

export default About;

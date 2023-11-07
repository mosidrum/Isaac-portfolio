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
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.2}}
        >
					<h4 className='text-2xl font-bold mb-8'>Get to know me!</h4>
					<div className='md:w-10/12 text-lg text-[#666] mb-8'>
            <p className='mb-5'>
              As a passionate <strong> frontend web developer</strong> with a flair for crafting captivating
              online experiences. My journey in the digital realm has been nothing
              short of exhilarating, as I continually push the boundaries of
              what&apos;s possible in web development.
            </p>
            <p className='mb-5'>
            With a deep love for coding and
              an unwavering commitment to pixel-perfect design, I
              transforming ideas into visually stunning and user-friendly
              websites. I&apos;m your ally in the pursuit of excellence, my expertise
              lies in front-end development, blending technical prowess with
              artistic finesse, latest web trends, responsive and interactive
              interfaces, ensuring that your online presence meets its goal.
            </p>
            <p className='mb-5'>
              When I&apos;m not immersed in the world of
              web development, you can find me playig drums or in a musical concert dancing to musical beats in the great
              spirit. Life,
              like coding, is an adventure, and I&apos;m excited to embark on it with
              you. Let&apos;s collaborate to make your digital dreams a reality.
            </p>
          </div>
				</motion.div>
				<motion.div className="md:w-1/2 my-8"
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
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

/* eslint-disable no-unused-vars */
import React from 'react';
import Headings from '../../shared/Headings';
import { skills } from '../../utils/skills';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const About = () => {
	return (
		<div
			className="max-w-7xl mx-auto mt-60 md:mt-14 md:py-8 px-7"
			id="about"
		>
			<Headings
				title={'About Me'}
				subTitle={'Here you will find more details about me.'}
			/>
			<div className="flex flex-col md:flex-row items-start justify-start">
				<motion.div
					className="md:w-1/2 my-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.7 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<h4 className="text-2xl font-bold mb-8">Get to know me!</h4>
					<div className="md:w-10/12 text-lg text-[#666] mb-8 text-justify">
						<p className="mb-5">
							As a dedicated <strong>software engineer</strong> with a passion for building
							innovative and high-performing applications, my journey in the tech world has
							been both exciting and rewarding. I thrive on solving complex challenges and
							continually pushing the limits of what’s possible in software development.
							With a strong foundation in coding and a focus on creating scalable, efficient,
							and user-friendly solutions, I bring ideas to life through robust software.
						</p>
						<p className="mb-5">
							When I&apos;m not deep in code, you can find me playing drums or enjoying a live
							concert, letting the rhythm fuel my creativity. Like software development, life
							is full of rhythm and flow, and I&apos;m ready to collaborate with you to bring
							your vision to life. Let&apos;s work together to make your digital goals a reality.
						</p>
					</div>
				</motion.div>
				<motion.div
					className="md:w-1/2 my-8"
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{delay: 0.2, duration: 0.7}}
					variants={{
						hidden: {opacity: 0, x: 50},
						visible: {opacity: 1, x: 0},
					}}
				>
					<h4 className="text-2xl font-bold mb-8">My Skills</h4>
					<div className="flex flex-wrap gap-3 md:w-10/12">
						{skills.map((skill) => (
							<p
								key={skill.id}
								className="bg-slate-300 text-light py-2 px-4 rounded"
							>
								{skill.title}
							</p>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;

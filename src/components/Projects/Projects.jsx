/* eslint-disable no-unused-vars */
import React from 'react';
import Headings from '../../shared/Headings';
import { projects } from '../../utils/projects';
import { motion } from 'framer-motion';

const Projects = () => {
	return (
		<div
			className="max-w-6xl mx-auto md:py-8 px-7"
			id="projects"
		>
			<Headings
				title={'PROJECTS'}
				subTitle={
					'Here you will find some of my personal and group projects that i created or contributed to Remotely.'
				}
			/>
			<div>
				{projects.map((project) => (
					<div key={project.id}>
						<motion.div
							className="projects items-center my-20"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.7 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							<img
								src={project.image}
								alt="project-image"
							/>
							<div className="md:w-10/12 text-center md:text-left px-2">
								<h4 className="text-2xl font-bold mb-6">{project.name}</h4>
								<p className="text-lg text-[#666] leading-6 mb-6 text-justify">
									{project.description}
								</p>
								<div className="flex gap-4">
									<a
										href={project.code}
										target="_blank"
										rel="noreferrer"
									>
										<button className="btn py-1 px-5">Source code</button>
									</a>
									<a
										href={project.live}
										target="_blank"
										rel="noreferrer"
									>
										<button className="btn py-1 px-5">Live view</button>
									</a>
								</div>
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;

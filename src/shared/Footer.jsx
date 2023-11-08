/* eslint-disable no-unused-vars */
import React from 'react';
import twitter from '../assets/icons-white/twitter-ico.png';
import github from '../assets/icons-white/github-white.png';
import youtube from '../assets/icons-white/yt-ico.png';
import linkedin from '../assets/icons-white/linkedin-white.png';

const social = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mosidrum', icon: linkedin },
  { name: 'Twitter', link: 'https://twitter.com/mosidrum', icon: twitter },
  { name: 'YouTube', link: 'https://www.youtube.com/channel/UCvkH8CbLfbpaNx606anyTCA', icon: youtube },
  { name: 'GitHub', link: 'https://github.com/mosidrum', icon: github },
];

const Footer = () => {
  
	return (
		<div className="bg-black md:h-96 px-7">
			<div className='max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between'>
				<div className='md:w-2/5 my-3'>
					<h4 className='text-white text-2xl tracking-wide'>Isaac Ayodele</h4>
					<p className='mt-5 text-sm leading-7 text-[#eee]'>
						In this ever-evolving digital landscape, I&apos;m your ally in the
						pursuit of excellence. My expertise lies in front-end web
						development.
					</p>
				</div>
        <div className='my-3'>
          <h4 className='text-white text-1xl tracking-wide'>Social links</h4>
          <div className='mt-5 flex gap-3'>
          {social.map((socialItem) => (
            <a href={socialItem.link} target='_blank' rel='noreferrer' className='ml-1' key={socialItem.name}>
              <img src={socialItem.icon} alt={`social-media-icon-${socialItem.name}`} className='w-7 h-7' />
            </a>
        ))}
          </div>
        </div> 
			</div>
      <hr className='text-slate-50 opacity-30 px-7'/>
      <div>
      <p className='md:my-10 py-10 md:py-0 text-sm leading-7 text-[#eee] text-center'>© Copyright 2023. Made by <a href="" id='home' className='underline'>Isaac Ayodele</a></p>
      </div>
		</div>
	);
};

export default Footer;

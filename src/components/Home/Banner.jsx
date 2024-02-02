import { motion } from 'framer-motion';
import { FaWhatsapp, FaDownload } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import PropTypes from 'prop-types';

const LinkButton = ({ href, text, bgColor, icon }) => (
	<a
		href={href}
		className={`${bgColor} text-white px-4 py-2 rounded flex gap-1 items-center`}
		target="_blank"
		rel="noreferrer"
	>
    <div>{icon}</div>
		<div>{text}</div>
	</a>
);

LinkButton.propTypes = {
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	bgColor: PropTypes.string.isRequired,
	icon: PropTypes.elementType.isRequired
};

const Banner = () => {
  const backgroundImageURL = 'https://i.ibb.co/Gd8H6bQ/Isaac.jpg';
  const size = 30;

  return (
		<motion.div className="px-2 py-20 w-full flex justify-center mt-44 md:mt-0">
			<div className="mt-8 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
				<div className="lg:w-1/2">
					<div
						className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
						style={{ backgroundImage: `url('${backgroundImageURL}')` }}
					></div>
				</div>
				<div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
					<h2 className="text-3xl text-gray-800 font-bold">
						Elevate Your Web Projects
						<span className="text-blue-300">
							{' '}
							with me as your Frontend Developer
						</span>
					</h2>
					<p className="mt-4 text-gray-600 text-justify">
						I craft immersive digital experiences that&apos;ll leave you
						spellbound. As a web developer, I weave code and creativity to bring
						your online dreams to life. Let&apos;s embark on a digital adventure
						together!
					</p>
					<div className="flex mt-8 gap-3">
						<LinkButton
							href="https://wa.me/+2347037699314"
							text="My WhatsApp"
							bgColor="bg-green-500"
							icon={<FaWhatsapp size={size} />}
						/>
						<LinkButton
							href="https://drive.google.com/file/d/1wpHdOfy3Slu7rrgs5ZA7XQOifxF85ACn/view?usp=sharing"
							text="Download Resume"
							bgColor="bg-black"
							icon={<FaDownload size={size} />}
						/>
					</div>
					<div className="text-center w-52 mt-4">
						<LinkButton
							href="mailto:mosiokanga@gmail.com"
							text="Send Me an Email"
							bgColor="bg-red-500"
							icon={<MdOutlineMail size={size} />}
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Banner;

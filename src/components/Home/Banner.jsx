import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import myself2 from '../../assets/isaac.jpg';

const LinkButton = ({ href, text, bgColor }) => (
  <a href={href} className={`${bgColor} text-white px-4 py-2 rounded`} target='_blank' rel='noreferrer'>
    {text}
  </a>
);

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

const Banner = () => {
  const backgroundImageURL = myself2;

  return (
    <motion.div className="px-2 py-20 w-full flex justify-center mt-44 md:mt-0">
      <div className="mt-8 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        <div className="lg:w-1/2">
          <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg" style={{ backgroundImage: `url('${backgroundImageURL}')` }}></div>
        </div>
        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
          <h2 className="text-3xl text-gray-800 font-bold">
            Elevate Your Web Projects
            <span className="text-blue-300"> with me as your Frontend Developer</span>
          </h2>
          <p className="mt-4 text-gray-600">
            I craft immersive digital experiences that&apos;ll leave you spellbound. As a web developer, I weave code and creativity to bring your online dreams to life. Let&apos;s embark on a digital adventure together!
          </p>
          <div className="flex mt-8 gap-3">
            <LinkButton href="https://wa.me/+2347037699314" text="Chat on WhatsApp" bgColor="bg-green-500" />
            <LinkButton
              href="https://drive.google.com/file/d/1C8dQ-TYxwP8O5sdUzdnhpS8mL64xfmeR/view?usp=sharing"
              text="Download Resume"
              bgColor="bg-black"
            />
          </div>
          <div className="text-center mt-4">
            <LinkButton href="mailto:mosiokanga@gmail.com" text="Send Me an Email" bgColor="bg-red-500" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;

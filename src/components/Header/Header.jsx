import {useState} from 'react';
import {Link} from 'react-scroll';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import { navLinks } from '../../utils/navLinks';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isaac = 'https://i.ibb.co/Gd8H6bQ/Isaac.jpg';
  return (
    <div className="w-full relative z-[100]">
      <div className="md:flex items-center justify-between bg-white py-4 md:py-0 md:px-14 px-7 fixed top-0 left-0 right-0 shadow-sm">
          <div className="font-bold text-2x1 tracking-wide cursor-pointer flex items-center gap-1">
              <img src={isaac} alt="profile-pics" className="md:w-12 md:h-12 w-10 h-10"/>
              <span className="text-primary hover:text-gray-400 mb:ml-3 ml-2 text-lg">Ayodele Isaac</span>
          </div>
        <div onClick={() => setMenuOpen(!menuOpen)} className="w-7 h-7 text-primary cursor-pointer absolute right-8 top-6 md:hidden">
          {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
          <ul className={`md:flex md:items-center items-center md:pb-0 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 bg-white sm:bg-transparent ${menuOpen? 'top-12' : 'top-[-490px]'}`}>
            {navLinks.map( link => <li key={link.name} className="md:ml-8 md:my-8 mt-5 font-semibold text-x1 border-b-2 md:border-b-0 text-left. px-7 md:px-4 pb-4 md:pb-0 cursor-pointer">
              <Link
              to={link.link}
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-100}
              className="text-light hover:text-gray-400 duration-500">{link.name}</Link>
            </li>)}
          </ul>
      </div>
    </div>
  );
};

export default Header;
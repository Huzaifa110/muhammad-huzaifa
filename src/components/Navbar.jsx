import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    onToggle(isOpen);
  }, [isOpen, onToggle]);

  return (
    <nav className="relative flex items-center justify-between p-6 bg-gray-900 z-50">
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="Your Logo" 
          className="rounded-full w-16 h-16 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover" 
        />
      </div>
      <div className="hidden md:flex text-xl items-center space-x-4">
        <a href="#experience" className="text-white hover:text-gray-500">Experience</a>
        <a href="#education" className="text-white hover:text-gray-500">Education</a>
        <a href="#skills" className="text-white 
        hover:text-gray-500">Skills</a>
        <a href="#projects" className="text-white hover:text-gray-500">Projects</a>
        <a href="#certifications" className="text-white hover:text-gray-500">Certifications</a>
      </div>
      <div className="md:hidden z-50">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`absolute top-16 left-0 w-full bg-white shadow-lg md:hidden z-40 transition-transform duration-500 ease-in-out ${isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-4 p-4">
          <a href="#experience" className="text-white hover:text-gray-500" onClick={toggleMenu}>Experience</a>
          <a href="#education" className="text-white hover:text-gray-500" onClick={toggleMenu}>Education</a>
          <a href="#skills" className="text-white hover:text-gray-500" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="text-white hover:text-gray-500" onClick={toggleMenu}>Projects</a>
          <a href="#certifications" className="text-white hover:text-gray-500" onClick={toggleMenu}>Certifications</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

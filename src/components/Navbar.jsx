import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="text-white p-5 flex justify-between">
      <div className="flex flex-wrap space-x-16">
        <div className="text-lg font-extrabold font-serif">Katherine Hernandez</div>
        <div className="text-lg font-semibold font-mono">Software Engineer, UI/UX Designer</div>
      </div>
      
      <div className="flex font-semibold font-mono">
        <Link to="/about" className="px-4">About</Link>
        <Link to="/experience" className="px-4">Experience</Link>
        <Link to="/projects" className="px-4">Projects</Link>
        <Link to="/contact" className="px-4">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
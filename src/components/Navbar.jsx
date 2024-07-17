import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="text-black p-4 flex justify-between font-serif font-bold">
      <div className="flex space-x-16">
        <div className="text-lg">Katherine Hernandez</div>
        <div className="text-lg">Software Engineer, UI/UX Designer</div>
      </div>
      
      <div className="flex space-x-2">
        <Link to="/about" className="px-4">About</Link>
        <Link to="/experience" className="px-4">Experience</Link>
        <Link to="/projects" className="px-4">Projects</Link>
        <Link to="/contact" className="px-4">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
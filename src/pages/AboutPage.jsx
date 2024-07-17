import React from 'react';
import Navbar from '../components/Navbar';
import me_nobackground from '../assets/me_nobackground.png';

const MainPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="ml-10 flex-grow flex items-center justify-center bg-white font-serif">
        <div className="text-center">
          <h1 className="text-2xl">Hi! I'm Katherine Hernandez.</h1>
          <h2 className="text-4xl mt-4">A Software Engineer.</h2>
          <h3 className="text-2xl mt-4">I enjoy a little bit of everything from Developing Applications and Websites, to UI/UX Designing. </h3>
        </div>
        <div className="ml-1">
          <img
            src={me_nobackground}
            alt="Katherine Hernandez Portrait"
            className="png"
          />
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-7">
        <button
          className="animate-bounce"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default MainPage;

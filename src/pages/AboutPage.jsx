import React from 'react';
import Navbar from '../components/Navbar';

const MainPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl">Hi! I'm Katherine Hernandez.</h1>
          <h2 className="text-2xl mt-4">A Software Engineer</h2>
        </div>
        <div className="ml-8">
          <img
            src="/path/to/your/photo.jpg"
            alt="Katherine Hernandez"
            className="w-1/3 rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
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

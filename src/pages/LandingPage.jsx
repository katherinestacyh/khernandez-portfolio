import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-black text-white font-mono">
          <h1 className="text-6xl">Hi! I'm Katherine Hernandez!</h1>
          <button
            onClick={handleClick}
            className="mt-7 px-5 py-2 bg-indigo-100 text-black rounded animate-pulse"
          >
            Click here to get to know me
          </button>
        </div>
      );
    };

export default LandingPage;
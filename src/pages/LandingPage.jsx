import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-blue-500 text-white">
          <h1 className="text-6xl animate-bounce">Hi! I'm Katherine Hernandez!</h1>
          <button
            onClick={handleClick}
            className="mt-8 px-6 py-3 bg-white text-blue-500 rounded"
          >
            Click here to get to know me
          </button>
        </div>
      );
    };

export default LandingPage;
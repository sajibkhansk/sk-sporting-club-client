import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div
      className="flex flex-col items-center justify-end min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.pond5.com/error-404-glitch-effect-text-footage-107071501_prevstill.jpeg)',
      }}
    >
      <div className="text-center bg-black bg-opacity-75 p-8 mb-48">
        <h1 className="text-4xl font-bold text-white mt-4 mb-4">Oops! Page not found</h1>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-8 rounded"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

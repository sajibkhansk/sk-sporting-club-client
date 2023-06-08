import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
              <img src="https://i.ibb.co/fXLYjZ9/icon.jpg" alt="SK Sporting Club Logo" className="h-10" />
              <p className="mt-2">SK Sporting Club is dedicated to promoting sports and fostering talent.</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
              <h4 className="text-lg font-bold mb-2">Contact</h4>
              <p>Email:info@sksportingclub.com</p>
              <p>Phone: +1 123-456-7890</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
              <h4 className="text-lg font-bold mb-2">Address</h4>
              <p>123 Main Street</p>
              <p>City, State 12345</p>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} SK Sporting Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
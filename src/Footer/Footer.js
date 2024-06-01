import React from 'react';
import { Card } from '../components/ui/card'; // Import Shadcn UI components


function Footer() {
  return (
    <footer className="text-white bg-gray-800 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        {/* About FINDEASY Platform */}
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <div className="h-full p-4">
            <h2 className="text-lg font-bold mb-4">FINDEASY Platform</h2>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel elit at lacus lacinia lacinia. Integer hendrerit purus sit amet felis scelerisque varius.</p>
          </div>
        </div>
        {/* Useful Links */}
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <div className="h-full p-4">
            <h2 className="text-lg font-bold mb-4">Useful Links</h2>
            <ul className="list-inside ">
              <li><a href="#">Main</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Contact</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          
        </div>
        
      </div>
      {/* Copyright and Developer Section */}
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024. Sharh. All rights reserved. Developed by YourCompany</p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;

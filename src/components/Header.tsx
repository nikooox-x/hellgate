import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-imperial-100 text-white py-4 px-6 fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-imperial-500/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="h-8 w-8 text-imperial-500" />
          <h1 className="text-2xl font-bold tracking-wider">CORUSCANT GUARD</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#introduction" className="text-gray-400 hover:text-imperial-500 transition-colors">Introduction</a>
          <a href="#operations" className="text-gray-400 hover:text-imperial-500 transition-colors">Operations</a>
          <a href="#protocols" className="text-gray-400 hover:text-imperial-500 transition-colors">Protocols</a>
        </nav>
        <button className="block md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
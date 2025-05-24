import React from 'react';
import { AlertOctagon, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-imperial-100 text-white py-8 px-6 border-t border-imperial-300/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-8 w-8 text-imperial-500 mr-2" />
            <span className="text-xl font-bold tracking-wider">CORUSCANT GUARD</span>
          </div>
          <div className="flex items-center">
            <AlertOctagon className="h-5 w-5 text-imperial-500 mr-2" />
            <span className="text-sm text-gray-400">HELLGATE SECURITY DOCUMENT</span>
          </div>
        </div>
        
        <div className="border-t border-imperial-300/10 pt-6 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-imperial-500 text-sm mb-4 font-bold">REPUBLIC NOTICE</h3>
            <p className="text-gray-400 text-sm mb-4">
              This document contains classified information. Unauthorized access, 
              reproduction, or distribution is prohibited and punishable by immediate execution.
            </p>
            <p className="text-gray-500 text-xs">
              By Major Hellgate directly, nikooo.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:pl-6 md:border-l border-imperial-300/10">
            <h3 className="text-imperial-500 text-sm mb-4 font-bold">REPORTING CHANNELS</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                <span className="text-imperial-500 font-bold mr-2">Security Breaches:</span>
                # events
              </li>
              <li className="text-gray-400">
                <span className="text-imperial-500 font-bold mr-2">Protocol Updates:</span>
                # announcements
              </li>
              <li className="text-gray-400">
                <span className="text-imperial-500 font-bold mr-2">Emergency Response:</span>
                Priority Alert System Red
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            The Republic maintains order. The Republic maintains security.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
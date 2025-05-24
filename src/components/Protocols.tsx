import React from 'react';
import { FileText, Lock, AlertTriangle } from 'lucide-react';

const Protocols: React.FC = () => {
  return (
    <section id="protocols" className="py-16 px-6 bg-imperial-50">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center">
            <FileText className="mr-3 text-imperial-500" size={32} />
            Standard Protocols
          </h2>
          <p className="text-gray-400 max-w-3xl">
            The following protocols establish the standard operating procedures for all Coruscant Guard personnel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-imperial-100 rounded-lg overflow-hidden shadow-md border border-imperial-300/10">
            <div className="bg-imperial-200 p-4 text-white flex items-center border-b border-imperial-500/20">
              <Lock className="mr-3 text-imperial-500" size={20} />
              <h3 className="font-bold">Company duties</h3>
            </div>
            <div className="p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-imperial-300/10">
                    <th className="text-left py-2 text-imperial-500">Company</th>
                    <th className="text-left py-2 text-imperial-500">Duty</th>
                    <th className="text-left py-2 text-imperial-500">Placement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-imperial-300/10">
                    <td className="py-4 font-medium text-red-400">Shock Company</td>
                    <td className="py-4 text-gray-400">Administrate management of the facility</td>
                    <td className="py-4 text-gray-400">Whole prison. Crucial points: Booths, Visitation, Cell controls.</td>
                  </tr>
                  <tr className="border-b border-imperial-300/10">
                    <td className="py-4 font-medium text-red-500">Riot Company</td>
                    <td className="py-4 text-gray-400">Prison protection. Responsible for guarding the prison Manager.</td>
                    <td className="py-4 text-gray-400">Outside and inside areas.</td>
                  </tr>
                  <tr className="border-b border-imperial-300/10">
                    <td className="py-4 font-medium text-gray-400">Hound Company</td>
                    <td className="py-4 text-gray-400">Reconnaissance, information gathering.</td>
                    <td className="py-4 text-gray-400">All standard areas.</td>
                  </tr>
                  <tr className="border-b border-imperial-300/10">
                    <td className="py-4 font-medium text-blue-300">Major Hellgate</td>
                    <td className="py-4 text-gray-400">Manage the platoon, order, administrate.</td>
                    <td className="py-4 text-gray-400">All areas.</td>
                  </tr>
                  <tr className="border-b border-imperial-300/10">
                     <td className="py-4 font-medium text-blue-300"></td>
                    <td className="py-4 text-red-500">MORE ABOUT DUTIES IN THE "Regular duties" TAB.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-imperial-100 rounded-lg overflow-hidden shadow-md border border-imperial-300/10">
            <div className="bg-imperial-200 p-4 text-white flex items-center border-b border-imperial-500/20">
              <AlertTriangle className="mr-3 text-imperial-500" size={20} />
              <h3 className="font-bold">Alert Status Protocols</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="p-3 bg-imperial-200 border-l-4 border-green-500 rounded">
                  <h4 className="font-bold text-white">Green Status</h4>
                  <p className="text-sm text-gray-400">Normal operations. Standard patrol and monitoring procedures in effect.</p>
                </div>
                
                <div className="p-3 bg-imperial-200 border-l-4 border-blue-500 rounded">
                  <h4 className="font-bold text-white">Blue Status</h4>
                  <p className="text-sm text-gray-400">Elevated alert. Increased patrol frequency and additional monitoring of suspicious activity.</p>
                </div>
                
                <div className="p-3 bg-imperial-200 border-l-4 border-yellow-500 rounded">
                  <h4 className="font-bold text-white">Yellow Status</h4>
                  <p className="text-sm text-gray-400">Heightened alert. All off-duty personnel on standby. Additional security measures activated.</p>
                </div>
                
                <div className="p-3 bg-imperial-200 border-l-4 border-orange-500 rounded">
                  <h4 className="font-bold text-white">Orange Status</h4>
                  <p className="text-sm text-gray-400">High alert. Full security complement deployed. Restricted movement within facility.</p>
                </div>
                
                <div className="p-3 bg-imperial-200 border-l-4 border-imperial-500 rounded">
                  <h4 className="font-bold text-white">Red Status</h4>
                  <h4 className="text-sm text-red-500">[PRISON BREAKOUT INBOUND]</h4>
                  <p className="text-sm text-gray-400">Maximum alert. Complete lockdown. Republic reinforcements deployed. Lethal force authorized.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 bg-imperial-100 text-white p-6 rounded-lg shadow-md border border-imperial-300/10">
          <h3 className="text-xl font-bold mb-4 border-b border-imperial-500 pb-2 flex items-center">
            <AlertTriangle className="mr-2 text-imperial-500" />
            Critical Security Reminder
          </h3>
          <p className="mb-4 text-gray-400">
            All Coruscant Guard personnel are reminded that the Republic's enemies are constantly seeking weaknesses in our security systems. 
            Vigilance is your primary duty. Complacency leads to failure.
          </p>
          <p className="text-imperial-500 text-sm italic">
            "The prison that cannot be breached has not yet been built. It is the guards, not the walls, that truly secure a facility." 
            - Commander Fox
          </p>
        </div>
      </div>
    </section>
  );
};

export default Protocols;

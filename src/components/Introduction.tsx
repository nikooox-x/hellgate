import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import SECURITY_CODE from '@/config/securityCode';
import { sendBreakoutAlert } from '@/utils/sendWebhook';

const BREAKOUT_WEBHOOK_URL = 'https://discord.com/api/webhooks/1375803190032728144/2JwYwsV9vHVjf8XW6OgYNfp3-AlUKEryqhrn07YOFsqYKABH3AVTdynedqpnVcwH342s';

const BreakoutButton: React.FC = () => {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleClick = async () => {
    if (code !== SECURITY_CODE) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await sendBreakoutAlert(BREAKOUT_WEBHOOK_URL);
      setStatus("success");
    } catch (e) {
      console.error("Webhook failed", e);
      setStatus("error");
    }
  };

  return (
    <div className="mt-8 bg-imperial-100 p-6 rounded-lg shadow-md border border-imperial-300/10">
      <h3 className="text-xl font-bold text-white mb-2">Emergency Action</h3>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter security code"
          className="p-2 rounded-lg text-sm bg-imperial-50 text-white border border-imperial-300/20 w-full md:w-auto"
        />
        <button
          onClick={handleClick}
          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition"
        >
          REPORT A ONGOING BREAKOUT
        </button>
      </div>
      {status === "success" && <p className="text-green-500 mt-2">📣 Breakout alert sent!</p>}
      {status === "error" && <p className="text-red-500 mt-2">❌ Invalid code or webhook error.</p>}
      {status === "loading" && <p className="text-yellow-500 mt-2">⏳ Sending alert...</p>}
    </div>
  );
};

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="pt-24 pb-16 px-6 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-imperial-400 border-l-4 border-imperial-500 pl-4 shadow-neon">
              Coruscant Guard Prison Hellgate Operations
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Welcome to the official Coruscant Guard Prison Protection guide. This classified document outlines 
              the standard operating procedures for maintaining security at our high-value detention facility.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              As members of the elite Hellgate platoon, you are tasked with the critical responsibility of 
              ensuring that the Republic's most dangerous enemies remain contained and secure at all times.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-imperial-100 p-4 rounded-lg flex items-center border-l-4 border-imperial-500">
                <Shield className="h-10 w-10 text-imperial-500 mr-4" />
                <div>
                  <h3 className="font-bold text-imperial-400">Security Protocols</h3>
                  <p className="text-sm text-gray-400">Ensuring maximum containment efficiency.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-imperial-100 rounded-lg overflow-hidden shadow-lg h-80 flex items-center justify-center border border-imperial-300/10">
            <img
              src="https://i.imgur.com/SNIIIJ3.png"
              alt="Secure hologram transmission"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-imperial-100 text-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform border border-imperial-300/10">
            <h3 className="text-xl font-bold mb-3 border-b border-imperial-500 pb-2 text-imperial-400">OBJECTIVE</h3>
            <p className="text-gray-400">
              Maintain impenetrable security at our detention facility on Aalderan, ensuring zero escapes and minimal incidents.
            </p>
          </div>
          <div className="bg-imperial-100 text-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform border border-imperial-300/10">
            <h3 className="text-xl font-bold mb-3 border-b border-imperial-500 pb-2 text-imperial-400">AUTHORIZATION</h3>
            <p className="text-gray-400">
              These protocols are authorized by Coruscant Guard HICOM and the office of Sector Oversight directly.
            </p>
          </div>
          <div className="bg-imperial-100 text-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform border border-imperial-300/10">
            <h3 className="text-xl font-bold mb-3 border-b border-imperial-500 pb-2 text-imperial-400">ENFORCEMENT</h3>
            <p className="text-gray-400">
              All Coruscant Guard personnel are required to execute these protocols without hesitation or deviation.
            </p>
          </div>
        </div>
        <BreakoutButton />
      </div>
    </section>
  );
};

export default Introduction;
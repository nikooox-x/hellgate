import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Operations from './components/Operations';
import Protocols from './components/Protocols';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="h-16 w-16 border-4 border-imperial-500 border-t-transparent rounded-full animate-spin mb-6 shadow-neon"></div>
        <h1 className="text-imperial-500 text-2xl font-bold tracking-wider">REPUBLIC DATABASE</h1>
        <p className="text-gray-500 mt-2">Accessing classified information...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Introduction />
        <Operations />
        <Protocols />
      </main>
      <Footer />
    </div>
  );
}

export default App;
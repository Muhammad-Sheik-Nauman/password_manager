
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Manager from "./components/Manager";
import Settings from "./components/Settings";
import React, { useState, useEffect } from "react";

function App() {
  const [showSettings, setShowSettings] = useState(false);

  const handleCustomize = () => setShowSettings((v) => !v);

  
  useEffect(() => {
    window.closeSettings = () => setShowSettings(false);
    return () => { delete window.closeSettings; };
  }, []);

  return (
    <>
      <Navbar onCustomize={handleCustomize} />
      {showSettings && <Settings />}
      <div className="min-h-screen flex flex-col justify-between">
        <Manager />
        <Footer />
      </div>
    </>
  );
}

export default App;

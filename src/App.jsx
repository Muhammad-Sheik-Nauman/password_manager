import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Manager from "./components/Manager";
import Settings from "./components/Settings";

function App() {
  return (
    <>
      <Navbar />
      <Settings />
      <div className="min-h-screen flex flex-col justify-between">
        <Manager />
        <Footer />
      </div>
    </>
  );
}

export default App;

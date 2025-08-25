import React, { useEffect, useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [primary, setPrimary] = useState(localStorage.getItem("primaryColor") || "#22c55e");
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize") || "16");

  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  
  useEffect(() => {
    document.documentElement.style.setProperty("--primary", primary);
    localStorage.setItem("primaryColor", primary);
  }, [primary]);

  
  useEffect(() => {
    document.documentElement.style.setProperty("--font-size", `${fontSize}px`);
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  return (
    <div className="fixed top-3 right-3 p-3 bg-gray-200 rounded-lg shadow z-50 min-w-[220px]">
      <button
        className="absolute top-1 right-2 text-xl text-gray-500 hover:text-gray-800 font-bold"
        style={{lineHeight:1}}
        onClick={() => typeof window.closeSettings === 'function' && window.closeSettings()}
        aria-label="Close"
      >
        ×
      </button>
      <div className="mb-2 mt-2">
        <label className="mr-2 font-semibold">Theme:</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="p-1 rounded"
        >
          <option value="light">🌞 Light</option>
          <option value="dark">🌙 Dark</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="mr-2 font-semibold">Primary Color:</label>
        <input
          type="color"
          value={primary}
          onChange={(e) => setPrimary(e.target.value)}
        />
      </div>

     
      <div>
        <label className="mr-2 font-semibold">Font Size:</label>
        <input
          type="range"
          min="12"
          max="24"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
        <span className="ml-2">{fontSize}px</span>
      </div>
    </div>
  );
};

export default Settings;

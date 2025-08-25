import React from 'react'

const Navbar = ({ onCustomize }) => {
  return (
    <nav 
      className="h-12 flex justify-between items-center px-6 shadow"
      style={{ backgroundColor: "var(--secondary)", color: "var(--text)" }}
    >
      <div className="logo font-bold" style={{ color: "var(--primary)" }}>
        &lt;PassOP&gt;
      </div>
      <div className='flex items-center'>
        <button
          className="ml-4 px-3 py-1 rounded bg-[var(--primary)] text-white hover:bg-opacity-80 transition"
          onClick={onCustomize}
        >
          Customize
        </button>
      </div>
    </nav>
  )
}

export default Navbar

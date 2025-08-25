import React from 'react'

const Navbar = () => {
  return (
    <nav 
      className="h-12 flex justify-between items-center px-6 shadow"
      style={{ backgroundColor: "var(--secondary)", color: "var(--text)" }}
    >
      <div className="logo font-bold" style={{ color: "var(--primary)" }}>
        &lt;PassOP&gt;
      </div>
      <ul className='flex gap-6'>
        <a className='hover:underline' href="#">Home</a>
        <a className='hover:underline' href="#">About</a>
        <a className='hover:underline' href="#">Contact</a>
      </ul>
    </nav>
  )
}

export default Navbar

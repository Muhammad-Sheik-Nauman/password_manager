import React from 'react'

const Navbar = () => {
  return (
<>
  <nav className='h-9 bg-slate-800 text-white'>
      <ul className='flex justify-around items-center'>
        <div className="logo font-bold text-green-500">
          &lt;
          PassOP
          &gt;
          </div>
            <li className='flex gap-4'>   
              <a className='hover:font-bold' href="#">Home</a>
                <a className='hover:font-bold'href="#">About</a>
                <a className='hover:font-bold'href="#">contact</a>
                
            </li>
        </ul>
        <div>
          
        </div>

    </nav>
        
    </>
  )
}

export default Navbar
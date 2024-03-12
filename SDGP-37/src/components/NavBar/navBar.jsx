import React, { useState } from 'react';
import { Menu, X } from "heroicons-react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <nav className="bg-black text-white pt-8 flex justify-between items-center text-center m-0 p-10 font-abc overflow-hidden">
        {/* <div className=""> */}
        <div>
          <a className="text-4xl 2xl:text-5xl no-underline font-abc ">FIXMATIC</a>
        </div>
        {/* <div className="flex gap-6 text-xl text-white pl-[60%] flex-wrap"> */}
        <div>
          <ul className="hidden sm:flex  text-x  list-none m-0 p-0 text-left  ">
  
            <li className='mr-5 text-2xl hover:bg-gray-700 rounded-md px-3 py-2'><a href='/'>Home</a></li>
            <li className='mr-5 text-2xl hover:bg-gray-700 rounded-md px-3 py-2'><a href='/app'>App</a></li>
            <li className='mr-5 text-2xl hover:bg-gray-700 rounded-md px-3 py-2'><a href='/aboutUs'>About us</a></li>  
          </ul>
          <div onClick={handleNav} className='block sm:hidden'>
              {!nav ? <X size={20}/> :<Menu size={20}/> }
  
          </div>
          <div className={nav ? 'fixed left-0 top-0 w-72 h-full bg-gray-900 border-r border-r-black-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <ul className='pt-4'>
            <li><a className="text-4xl no-underline font-def mr-28 ">FIXMATIC</a></li>
            <li className='p-4 border-b border-gray-400 pt- '><a href='/'></a></li>
            <li className='p-4 border-b border-gray-400 text-lg '><a href='/'>Home</a></li>
            <li className='p-4 border-b border-gray-400 text-lg'><a href='/app'>App</a></li>
            <li className='p-4 border-b border-gray-400 text-lg'><a href='/aboutUs'>About us</a></li>
            <div>
  
          </div>
  
          </ul>
  
          </div>
        </div>
      </nav>
      
    );
};
export default Navbar;
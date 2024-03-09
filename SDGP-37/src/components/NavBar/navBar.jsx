
import {Menu, X} from "heroicons-react"
import React, {useState} from 'react';



export default function Navbar() {

  const [nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }


  // const inactiveLink = "flex gap-1 p-1";
  // const activeLink = inactiveLink + " bg-white text-gray-800 rounded-l-lg";
  // // const { pathname } = "/";

  
  return (
    <nav className="bg-gray-700 text-white pt-8 flex justify-between items-center text-center m-0 p-10 font-abc overflow-hidden">
      {/* <div className=""> */}
      <div>
        <a className="text-4xl 2xl:text-5xl no-underline font-def">FIXMATIC</a>
      </div>
      {/* <div className="flex gap-6 text-xl text-white pl-[60%] flex-wrap"> */}
      <div>
        <ul className="hidden sm:flex  text-x  list-none m-0 p-0 text-left  ">
          
          <li className='mr-5 text-lg'><a href='/'>Home</a></li>
          <li className='mr-5 text-lg'><a href='/app'>App</a></li>
          <li className='mr-5 text-lg'><a href='/aboutUs'>About us</a></li>  
        </ul>
        <div onClick={handleNav} className='block sm:hidden'>
            {!nav ? <Menu size={20}/> :<X size={20}/> }
         
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-72 h-full bg-gray-900 border-r border-r-black-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className='pt-4'>
          <li><a className="text-4xl no-underline font-def mr-28 ">FIXMATIC</a></li>
          <li className='p-4 border-b border-gray-400 pt-6 '><a href='/'></a></li>
          <li className='p-4 border-b border-gray-400 text-lg'><a href='/'>Home</a></li>
          <li className='p-4 border-b border-gray-400 text-lg'><a href='/app'>App</a></li>
          <li className='p-4 border-b border-gray-400 text-lg'><a href='/aboutUs'>About us</a></li>
          <div>
        
        </div>
         
        </ul>

        </div>
      </div>
      {/* </div> */}
      {/* </div> */}

    </nav>
  );
}

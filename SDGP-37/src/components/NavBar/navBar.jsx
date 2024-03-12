import React, { useState } from 'react';
import { Menu, X } from "heroicons-react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <>
            <nav className="bg-gray-800 overflow-hidden">
                <div className="max-w-7xl md-auto px-4 sm:px-9 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                            <div className="flex-shrink-0">
                                <a href="/" className="text-4xl no-underline font-def mr-28 text-white ">FIXMATIC</a>
                            </div>
                            <div className="hidden md:block text-left ml-20 font-medium text">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                    <a href="/app" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">App</a>
                                    <a href="/aboutUs" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About us</a>
                                </div>
                            </div>
                        <div className="md:hidden">
                            <button onClick={handleNav} className="bg-gray-800 p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {!nav ? <Menu size={20} /> : <X size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-22 h-full bg-gray-900 border-r border-r-black-900 ease-in-out duration-100' : 'fixed left-[-100%]'} >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="/" className="text-4xl no-underline font-def mr-28 text-white">FIXMATIC</a>
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="/app" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">App</a>
                        <a href="/aboutUs" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About us</a>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
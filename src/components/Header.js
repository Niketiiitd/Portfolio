import React from 'react';
import '../index.css';

function Header() {
    return (
        <header>
            <h1 className="text-4xl font-bold text-white text-center p-20 ">
                Hi!! My name is Niket Agarwal
            </h1>
            <nav className="w-full max-w-screen-lg mx-auto border-2 border-white rounded-lg py-4 px-10">
                <ul className="flex justify-between w-full">
                    <li><a href="#Home" className="text-white hover:bg-gray-800 px-3 py-2 rounded">About</a></li>
                    <li><a href="#Projects" className="text-white hover:bg-gray-800 px-3 py-2 rounded">Projects</a></li>
                    <li><a href="#Contact" className="text-white hover:bg-gray-800 px-3 py-2 rounded">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

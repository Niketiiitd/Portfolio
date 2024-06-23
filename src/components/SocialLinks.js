import React from 'react';
import logo4 from '../images/Instagram.png';
import logo1 from '../images/github.png';
import logo2 from '../images/leetcode.png';
import logo3 from '../images/linkedin.png';
import '../index.css';

function SocialLinks() {
    return (
        <div className="fixed right-0 top-1/3 w-12 bg-black border border-white rounded-l-lg flex flex-col items-center space-y-4 py-4">
            <a href="https://github.com/Niketiiitd" target="_blank" rel="noopener noreferrer">
                <img src={logo1} alt="Logo 1" className="w-8 h-8" />
            </a>
            <a href="https://leetcode.com/u/Niket_Agarwal/" target="_blank" rel="noopener noreferrer">
                <img src={logo2} alt="Logo 2" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/niket-agarwal-iiitd/" target="_blank" rel="noopener noreferrer">
                <img src={logo3} alt="Logo 3" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/niket_agarwal_/" target="_blank" rel="noopener noreferrer">
                <img src={logo4} alt="Logo 4" className="w-8 h-8" />
            </a>
        </div>
    );
}

export default SocialLinks;

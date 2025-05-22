import React from "react";
import logo from "../assets/logo_wbg2.PNG";
import github from "../assets/github_logo_media_social_icon.png";
import linkedin from "../assets/linkedin_icon.png";
import instagram from "../assets/instagram_media_online_social_icon.png";


const Navbar = () => (
  <nav className="z-50 bg-white/50 backdrop-blur flex justify-center items-center px-8 py-3 max-w-4xl mx-auto rounded-full">
    <div className="flex items-center px-8">
      <img 
        src={logo} 
        alt="Logo" 
        className="w-16 h-auto"
      />
    </div>
    <ul className="flex gap-6 text-gray-700 font-medium">
      <li><a href="#intro" className="text-xl font-bold hover:text-blue-500 transition border border-gray-300 rounded-full px-7 py-2 bg-white/70">Intro</a></li>
      <li><a href="#projects" className="text-xl font-bold hover:text-blue-500 transition border border-gray-300 rounded-full px-7 py-2 bg-white/70">Projects</a></li>
      <li><a href="#interests" className="text-xl font-bold hover:text-blue-500 transition border border-gray-300 rounded-full px-7 py-2 bg-white/70">Interests</a></li>
      <li>
        <a href="https://github.com/fabioMatosCosta" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline text-black">
          <img src={github} alt="GitHub" className="w-8 h-8 mr-2" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/fabiomatoscosta/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline text-black">
          <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mr-2" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/fabiomatoscosta/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline text-black">
          <img src={instagram} alt="Instagram" className="w-8 h-8 mr-2" />
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;

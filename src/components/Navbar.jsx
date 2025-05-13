import React from "react";

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-white/50 backdrop-blur flex justify-between items-center px-8 py-3">
    <div className="text-2xl font-bold tracking-tight text-gray-900 border border-gray-300 rounded-full px-7 py-2 bg-white/70">Fábio</div>
    <ul className="flex gap-6 text-gray-700 font-medium">
      <li><a href="#intro" className="text-xl font-bold hover:text-blue-500 transition border border-gray-300 rounded-full px-7 py-2 bg-white/70">Intro</a></li>
      <li><a href="#projects" className="text-xl font-bold hover:text-blue-500 transition border border-gray-300 rounded-full px-7 py-2 bg-white/70">Projects</a></li>
      <li><a href="#interests" className="text-xl font-bold hover:text-blue-500 transition border border-gray-300 rounded-full px-7 py-2 bg-white/70">Interests</a></li>
      <li><a href="#links" className="text-xl font-bold hover:text-blue-500 transition border border-gray-300 rounded-full px-7 py-2 bg-white/70">Links</a></li>
    </ul>
  </nav>
);

export default Navbar;

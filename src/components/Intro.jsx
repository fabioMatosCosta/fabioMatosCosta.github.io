import React from "react";
import logo from "../assets/logo_wbg2.png";

const Intro = () => (
  <section id="intro" className="min-h-screen flex flex-col justify-center items-center bg-pattern text-center px-4 md:px-8 py-16 md:py-24">
    <div className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 md:mb-10 text-gray-900 leading-tight">
        Hi there! I'm Fábio!
      </h1> 
      
      <div className="my-8 md:my-12 flex justify-center">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-48 h-48 md:w-64 md:h-64 object-contain" 
        />
      </div>
      
      <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
        <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 leading-relaxed">
          I am a former bike mechanic turned software developer.
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 leading-relaxed">
          From wrenches to code, I am always learning and challenging myself to improve.
        </p>
      </div>
    </div>
  </section>
);

export default Intro;

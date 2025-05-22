import React from "react";
import logo from "../assets/logo_wbg2.PNG";

const Intro = () => (
  <section id="intro" className="min-h-screen flex flex-col justify-center items-center bg-pattern text-center px-4 pt-24">
    <h1 className="w-full max-w-[95vw] text-[clamp(2.5rem,10vw,7rem)] font-extrabold mb-10 tracking-tighter text-gray-900 leading-tight">Hi there! I'm Fábio!</h1> 
    <img src={logo} alt="Logo" className="my-10 w-1/4" />
    <p className="w-full max-w-[95vw] md text-gray-700 mb-6 text-6xl">I am a former bike mechanic turned software developer.</p>
    <br />
    <p className="w-full max-w-[95vw] md: text-gray-700 mb-6 text-6xl">From wrenches to code, I am always learning and challenging myself to improve.</p>
  </section>
);

export default Intro;

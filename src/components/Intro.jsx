import React from "react";

const Intro = () => (
  <section id="intro" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-50 text-center px-4 pt-24">
    <h1 className="w-full max-w-[95vw] text-[clamp(2.5rem,10vw,7rem)] font-extrabold mb-10 tracking-tighter text-gray-900 leading-tight">Hi there! I'm Fábio!</h1>
    <p className="w-full max-w-[95vw] text-lg md:text-2xl text-gray-700 mb-10">I am a former bike mechanic turned software developer. From wrenches to code, I am always learning and challenging myself to improve</p>
  </section>
);

export default Intro;

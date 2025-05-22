import React from "react";
import climbing from "../assets/climbing.png";
import sports from "../assets/Sports.PNG";
import manta5 from "../assets/Manta5.jpg";
import hiking from "../assets/hiking.jpg";
import shelves from "../assets/Shelves.jpg";
import keyboard from "../assets/Keyboard.jpg";


const Interests = () => (
  <section id="interests" className="min-h-screen flex flex-col items-center bg-pattern">
    <h2 className="p-8 text-8xl font-bold text-gray-900">I have done a few cool things</h2>
    <div className="flex flex-col items-center w-full px-4">
      <div className="flex flex-row items-center w-full mt-8 px-20">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 px-8">
          <img src={climbing} alt="Climbing" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">Some climbing. 🧗‍♂️</h3>
          <p className="p-8 text-5xl text-gray-700">Look at me, trying to not look down 😨 </p>
        </div>
      </div>
      <div className="flex flex-row items-center w-full mt-8 px-20">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 px-8">
          <img src={sports} alt="Endurance sports" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">I've been doing endurance sports.</h3>
          <p className="p-8 text-5xl text-gray-700">Started with cycling, adding more stuff 🏊‍♂️ 🚴‍♂️ 🏃‍♂️</p>
        </div>
      </div>
      <div className="flex flex-row items-center w-full mt-8 px-20">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 px-8">
          <img src={manta5} alt="Reworking bikes" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">In October 2023, I went to Slovenia </h3>
          <p className="p-8 text-gray-700 text-5xl">To rework electric hydrofoiling bikes for <a href="https://manta5.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300 transform hover:scale-105">Manta5</a>. That was cool!</p>
        </div>
      </div>
      <div className="flex flex-row items-center w-full mt-8 px-20">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 px-8">
          <img src={hiking} alt="Plants" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">I have a passion for nature. </h3>
          <p className="p-8 text-5xl text-gray-700"> I enjoy hiking and gardening.🏞️ 🌱 </p>
        </div>
      </div>
      <div className="flex flex-row items-center w-full mt-8 px-20">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 px-8">
          <img src={shelves} alt="Plants" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">I like building things with my hands. </h3>
          <p className="p-8 text-5xl text-gray-700"> Yes, I actually built those shelves 😲 🪚 </p>
        </div>
      </div>
    
    <div className="flex flex-col items-center w-full mt-8 px-20">
      <div className="flex flex-row items-center w-full">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 px-8">
          <img src={computerGames} alt="Board games" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">I enjoy games and computer building.</h3>
          <p className="p-8 text-5xl text-gray-700"> I am still a nerd at heart ❤️</p>
        </div>
      </div>
      </div>
      <div className="flex flex-row items-center w-full mt-8 px-20">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 px-8">
          <img src={keyboard} alt="Board games" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">And I am trying to learn music production.</h3>
          <p className="p-8 text-5xl text-gray-700"> I am not very good at it, but it is fun!🕺</p>
        </div>
      </div>
    </div>
  </section>
);

export default Interests;
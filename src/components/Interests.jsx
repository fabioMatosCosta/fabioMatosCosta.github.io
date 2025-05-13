import React from "react";

const Interests = () => (
  <section id="interests" className="min-h-screen flex flex-col items-center bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
    <h2 className="text-4xl mb-4 p-4 text-gray-900">I have done a few cool things</h2>
    <div className="flex flex-col items-center w-full px-4">  {/* Added padding on the left and right */}
      <div className="flex flex-row items-center w-full mt-8">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 p-4">
          <img src="/src/assets/climbing.png" alt="Climbing" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">Some climbing. 🧗‍♂️</h3>
          <p className="p-8 text-5xl text-gray-700">Look at me, trying to not look down 😨 </p>
        </div>
      </div>
      <div className="flex flex-row items-center w-full mt-8">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 p-4">
          <img src="/src/assets/Manta5.jpg" alt="Endurance sports" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">I've been doing endurance sports.</h3>
          <p className="p-8 text-5xl text-gray-700">Started witj cycling, but trying more stuff 🏊‍♂️ 🚴‍♂️ 🏃‍♂️</p>
        </div>
      </div>
      <div className="flex flex-row items-center w-full mt-8">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 p-4">
          <img src="/src/assets/Manta5.jpg" alt="Reworking bikes" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">In October 2023, I went to Slovenia </h3>
          <p className="p-8 text-gray-700 text-5xl">To rework electric hydrofoiling bikes for <a href="https://manta5.com/" className="text-blue-500 hover:text-blue-700 transition duration-300 transform hover:scale-105">Manta5</a>. That was cool!</p>
        </div>
      </div>
      <div className="flex flex-row items-center w-full mt-8">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 p-4">
          <img src="/src/assets/hiking.jpg" alt="Plants" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">I have a passion for nature. </h3>
          <p className="p-8 text-5xl text-gray-700"> I enjoy hiking and gardening.🏞️ 🌱 </p>
        </div>
      </div>
      <div className="flex flex-row items-center w-full mt-8">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 p-4">
          <img src="/src/assets/Shelves.jpg" alt="Plants" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">I like building things with my hands. </h3>
          <p className="p-8 text-5xl text-gray-700"> Yes, I actually built those shelves 😲 🪚 </p>
        </div>
      </div>
    </div>
    <h3 className="text-4xl mb-4 text-gray-900">But I am still a nerd at heart</h3>
    <div className="flex flex-col items-center w-full mt-8">
      <div className="flex flex-row items-center w-full">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 p-4">
          <img src="/src/assets/boardgames.jpg" alt="Board games" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="h-[50vh] rounded-lg bg-white shadow-lg flex flex-col justify-end p-6 w-1/2">
          <h3 className="p-8 text-8xl font-bold text-gray-900">I enjoy board games and computer building.</h3>
        </div>
      </div>
      <div className="flex flex-row items-center w-full mt-8">
        <div className="h-[50vh] rounded-lg overflow-hidden w-1/2 p-4">
          <img src="/src/assets/Keyboard.jpg" alt="Board games" className="w-full h-full object-cover rounded-lg" />
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
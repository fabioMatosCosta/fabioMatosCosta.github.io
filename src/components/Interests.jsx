import React from "react";

const Interests = () => (
  <section id="interests" className="min-h-screen flex flex-col justify-center items-center bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
    <h3 className="text-4xl mb-4 text-gray-900">I have done a few cool things</h3>
    <ul className="text-lg text-gray-700 space-y-3">
      <li className="flex items-center space-x-4">
        <img src="/src/assets/Manta5.jpg" alt="Reworking bikes" className="w-16 h-16 object-cover" />
        <span>In October 2023, I went to Slovenia to rework electric hydrofoiling bikes for <a href="https://manta5.com/">Manta5</a>. That was cool!</span>
      </li>
      <li className="flex items-center space-x-4">
        <img src="/src/assets/Manta5.jpg" alt="Endurance sports" className="w-16 h-16 object-cover" />
        <span>And now I've been doing endurance sports.</span>
      </li>
      <li className="flex items-center space-x-4">
        <img src="/src/assets/climbing.png" alt="Climbing" className="w-16 h-16 object-cover" />
        <span>I have done some climbing.</span>
      </li>
      <h3 className="text-4xl mb-4 text-gray-900">But I am still a nerd</h3>
      <li className="flex items-center space-x-4">
        <img src="/src/assets/boardgames.jpg" alt="Board games" className="w-16 h-16 object-cover" />
        <span>I enjoy board games and computer building.</span>
      </li>
      <li className="flex items-center space-x-4">
        <img src="/src/assets/hiking.jpg" alt="Plants" className="w-16 h-16 object-cover" />
        <span>I have a passion for nature. I enjoy hiking and gardening.</span>
      </li>
    </ul>
  </section>
);

export default Interests;
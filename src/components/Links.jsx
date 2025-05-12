import React from "react";

const Links = () => (
  <section id="links" className="min-h-screen flex flex-col justify-center items-center bg-white px-4 py-24">
    <h2 className="text-4xl font-bold mb-8 text-gray-900">Links</h2>
    <div className="flex flex-col gap-4 text-lg text-blue-700">
      <a href="#" className="hover:underline">GitHub</a>
      <a href="#" className="hover:underline">LinkedIn</a>
      <a href="#" className="hover:underline">Twitter</a>
    </div>
  </section>
);

export default Links;

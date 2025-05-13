import React from "react";

const Links = () => (
  <section id="links" className="min-h-screen flex flex-col justify-center items-center bg-white px-4 py-24">
    <h2 className="text-4xl font-bold mb-8 text-gray-900">Find me online here: </h2>
    <div className="flex flex-row gap-4 text-lg">
      <a href="https://github.com/fabioMatosCosta" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">
        <i className="fa-brands fa-github"></i> GitHub
      </a>
      <a href="https://www.linkedin.com/in/fabiomatoscosta/" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">
        <i className="fa-brands fa-linkedin"></i> LinkedIn
      </a>
      <a href="https://www.instagram.com/fabiomatoscosta/" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">
        <i className="fa-brands fa-instagram"></i> Instagram
      </a>
    </div>
    <a href="mailto:fabiodanielmc@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-black p-4"> <h2 className="text-2xl font-bold mb-8 text-gray-900">Or send me an email</h2></a>
  </section>
);

export default Links;

import React from "react";
import github from "../assets/github_logo_media_social_icon.png";
import linkedin from "../assets/linkedin_icon.png";
import instagram from "../assets/instagram_media_online_social_icon.png";
import profilePic from "../assets/Profile_pic_turq_bg.JPG";

const Links = () => (

<section id="links" className="min-h-screen flex flex-col justify-center items-center bg-white px-4 py-24">
    <div className="relative flex flex-col items-center">
      <img 
        src={profilePic} 
        alt="Profile picture" 
        className="my-10 w-1/2 rounded-full transition duration-300 ease-in-out transform hover:blur-sm" 
      />
    </div>
    <h2 className="text-4xl font-bold mb-8 text-gray-900">Find me online here: </h2>
    <div className="flex flex-row gap-4 text-lg">
      <div className="flex flex-row gap-4 text-lg">
        <a href="https://github.com/fabioMatosCosta" target="_blank" rel="noopener noreferrer" className="hover:underline text-black p-4">
          <img src={github} alt="GitHub" className="w-12 h-12" />
        </a>
        <a href="https://www.linkedin.com/in/fabiomatoscosta/" target="_blank" rel="noopener noreferrer" className="hover:underline text-black p-4">
          <img src={linkedin} alt="LinkedIn" className="w-12 h-12" />
        </a>
        <a href="https://www.instagram.com/fabiomatoscosta/" target="_blank" rel="noopener noreferrer" className="hover:underline text-black p-4">
          <img src={instagram} alt="Instagram" className="w-12 h-12" />
        </a>
      </div>
    </div>
    <a href="mailto:fabiodanielmc@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-black p-4"> 
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Or send me an email to fabiodanielmc@gmail.com</h2>
    </a>
  </section>
);

export default Links;

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import jobMemory from "../assets/jobMemory.png";
import pupperHop from "../assets/pupperhop.png";
import tattoo from "../assets/Tattoo2.png";


const projects = [
  {
    title: "Jobbing Memory",
    period: "March 2024 - December 2024, Amsterdam",
    description:
      "Full stack app to keep track of job applications, contacts, and replies. NodeJS/ExpressJS backend with MongoDB, React & MaterialUI frontend.",
    links: [
      { label: "API GitHub", url: "https://github.com/fabioMatosCosta/JobTrackerApp" },
      { label: "Client GitHub", url: "https://github.com/fabioMatosCosta/JobTrackerAppFrontEnd" },
    ],
    image: jobMemory,
  },
  {
    title: "Tattoo Underground",
    period: "Web Development Bootcamp, Feb 2020 - Apr 2020, Amsterdam",
    description:
      "Full stack app created in pair programming. REST API with NodeJS/ExpressJS, MongoDB, dual authentication (users & artists), image uploads to Cloudinary, deployed on Heroku/Netlify. ReactJS frontend.",
    links: [
      { label: "API GitHub", url: "https://github.com/fabioMatosCosta/Project3-tattoo-api" },
      { label: "Client GitHub", url: "https://github.com/fabioMatosCosta/Project3-tattoo-client" },
    ],
    image: tattoo,
  },
  {
    title: "LulaBazooka",
    period: "Web Development Bootcamp, Feb 2020 - Apr 2020, Amsterdam",
    description:
      "Full stack app with REST API (NodeJS/ExpressJS, MongoDB, authentication). Users can create bands and add other users. Deployed on Heroku.",
    links: [
      { label: "GitHub", url: "https://github.com/fabioMatosCosta/LulaBazooka" },
    ],
    image: pupperHop,
  },
  {
    title: "PupperHop",
    period: "Web Development Bootcamp, Feb 2020 - Apr 2020, Amsterdam",
    description:
      "Pupper Hop is a 2D endless runner game using DOM manipulation for rendering and movement. Built during bootcamp.",
    links: [
      { label: "Demo", url: "https://pupperhop.netlify.app/" },
      { label: "GitHub", url: "https://github.com/fabioMatosCosta/Project_1_Ironhack_EndlessRunner" },
    ],
    image: pupperHop,
  },
];

export default function HorizontalProjects() {
  const ref = useRef(null);
  const numProjects = projects.length -1;
  // Height of the section = viewport height * number of projects
  // This gives enough vertical scroll space to move horizontally through all projects
  const sectionHeight = `${numProjects * 100}vh`;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Horizontal translation: from 0 to -100vw * (numProjects - 1)
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${100 * (numProjects - 2)}vw`]
  );


  return (
    <>
      <h2 className="text-6xl font-bold mb-16 text-center text-gray-800 w-full pt-16">Projects</h2>
      <section
        id="projects"
        ref={ref}
        style={{ height: sectionHeight, position: "relative" }}
        className="w-full bg-white flex"
      >
      {/* Sticky Image Container (Left) */}
      <div className="sticky top-0 left-0 h-screen w-[65vw] flex items-center justify-center z-20 overflow-hidden">
        {Array.from({ length: projects.length }).map((_, idx) => {
          const start = idx / numProjects;
          const end = (idx + 1) / numProjects;
          const yOffsets = projects.map((_, idx) =>
            useTransform(scrollYProgress, [idx / projects.length, (idx + 1) / projects.length], [0, -100])
          );
          const opacities = projects.map((_, idx) =>
            useTransform(scrollYProgress, [idx / projects.length, (idx + 1) / projects.length], [1, 0])
          );

          // Ensure the first image is fully visible at the start
          const firstOpacity = useTransform(scrollYProgress, [0, 1 / projects.length], [1, 0]);

          const y = idx === 0
            ? useTransform(scrollYProgress, [0, end], [0, 80])
            : useTransform(scrollYProgress, [start, end], [80, 0]);

          return (
            <motion.div
              key={projects[idx].title}
              className="absolute w-[80%] h-[80%] flex items-center justify-center"
              style={{ opacity: idx === 0 ? firstOpacity : opacities[idx], y: yOffsets[idx], zIndex: projects.length - idx }}
            >
              {projects[idx].image ? (
                <img
                  src={projects[idx].image}
                  alt={projects[idx].title}
                  className="object-cover w-full h-full bg-yellow-100"
                />
              ) : (
                <div className="w-full h-full bg-yellow-100 flex items-center justify-center text-gray-300 text-2xl">
                  Image
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      {/* Horizontally Scrolling Text Container (Right) */}
      <div className="sticky top-0 h-screen w-[35vw] flex items-center z-10 overflow-hidden">
        <motion.div
          style={{ x, width: `calc(${numProjects} * 35vw)` }}
          className="flex h-full"
        >
          {projects.map((proj, idx) => {
            const start = idx / numProjects;
            const end = (idx + 1) / numProjects;
            // Keep last card visible until end
            const opacity = idx === projects.length - 1
              ? useTransform(scrollYProgress, [start, 1], [1, 1])
              : undefined;
            return (
              <motion.div
                key={proj.title}
                className="w-[35vw] h-full flex flex-col justify-center px-16 py-10 bg-white/80 mx-2 gap-8"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                {...(opacity ? { style: { opacity } } : {})}
              >
              
                <h3 className="py-8 text-6xl font-bold text-gray-900">{proj.title}</h3>
                <div className="text-2xl text-gray-500">{proj.period}</div>
                <p className="mt-2 text-gray-700 text-4xl py-4">{proj.description}</p>
                <div className="flex gap-4 flex-wrap">
                  {proj.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-black text-2xl"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}

        </motion.div>
      </div>
      <div className="h-[20vh]"></div>
      </section>
    </>
  );
}

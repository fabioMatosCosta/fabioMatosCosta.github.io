import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PROJECTS = [
  {
    title: "Jobbing Memory",
    date: "March 2024 - December 2024, Amsterdam",
    desc: "Full stack app to keep track of job applications, contacts, and replies. NodeJS/ExpressJS backend with MongoDB, React & MaterialUI frontend.",
    image: "https://placehold.co/600x800?text=Jobbing+Memory",
    links: [
      { href: "https://github.com/fabioMatosCosta/JobTrackerApp", label: "API GitHub", target: "_blank", rel: "noopener noreferrer" },
      { href: "https://github.com/fabioMatosCosta/JobTrackerAppFrontEnd", label: "Client GitHub", target: "_blank", rel: "noopener noreferrer" }
    ]
  },
  {
    title: "Tattoo Underground",
    date: "Web Development Bootcamp, Feb 2020 - Apr 2020, Amsterdam",
    desc: "Full stack app created in pair programming. REST API with NodeJS/ExpressJS, MongoDB, dual authentication (users & artists), image uploads to Cloudinary, deployed on Heroku/Netlify. ReactJS frontend.",
    image: "https://placehold.co/600x800?text=Tattoo+Underground",
    links: [
      { href: "https://github.com/fabioMatosCosta/Project3-tattoo-api", label: "API GitHub", target: "_blank", rel: "noopener noreferrer" },
      { href: "https://github.com/fabioMatosCosta/Project3-tattoo-client", label: "Client GitHub", target: "_blank", rel: "noopener noreferrer" }
    ]
  },
  {
    title: "LulaBazooka",
    date: "Web Development Bootcamp, Feb 2020 - Apr 2020, Amsterdam",
    desc: "Full stack app with REST API (NodeJS/ExpressJS, MongoDB, authentication). Users can create bands and add other users. Deployed on Heroku.",
    image: "https://placehold.co/600x800?text=LulaBazooka",
    links: [
      { href: "https://github.com/fabioMatosCosta/LulaBazooka", label: "GitHub", target: "_blank", rel: "noopener noreferrer" }
    ]
  },
  {
    title: "PupperHop",
    date: "Web Development Bootcamp, Feb 2020 - Apr 2020, Amsterdam",
    desc: "Pupper Hop is a 2D endless runner game using DOM manipulation for rendering and movement. Built during bootcamp.",
    image: "https://placehold.co/600x800?text=PupperHop",
    links: [
      { href: "https://pupperhop.netlify.com/", label: "Demo", target: "_blank", rel: "noopener noreferrer" },
      { href: "https://github.com/fabioMatosCosta/Project_1_Ironhack_EndlessRunner", label: "GitHub", target: "_blank", rel: "noopener noreferrer" }
    ]
  }
];


const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Set up transforms for each project
  const yOffsets = PROJECTS.map((_, idx) =>
    useTransform(scrollYProgress, [idx / PROJECTS.length, (idx + 1) / PROJECTS.length], [100, 0])
  );
  const opacities = PROJECTS.map((_, idx) =>
    useTransform(scrollYProgress, [idx / PROJECTS.length, (idx + 1) / PROJECTS.length], [0, 1])
  );

  return (
    <section id="projects" ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center bg-white px-4 py-24">
      <h2 className="text-4xl font-bold mb-8 text-gray-900">Projects</h2>
      <div className="relative w-full max-w-5xl min-h-[80vh]" style={{ height: `calc(${PROJECTS.length} * 100vh)` }}>
        {/* Sticky Image Container */}
        <div className="sticky top-24 left-0 h-[70vh] w-3/5 float-left">
          {PROJECTS.map((project, idx) => (
            <motion.img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-md border border-blue-100 bg-yellow-100"
              style={{
                y: yOffsets[idx],
                opacity: opacities[idx],
                zIndex: PROJECTS.length - idx
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          ))}
        </div>
        {/* Text Container */}
        <div className="absolute right-0 top-0 h-[70vh] w-2/5 flex flex-col justify-center">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-8 bg-white/80 rounded-xl shadow-md"
              style={{
                x: yOffsets[idx],
                opacity: opacities[idx],
                zIndex: PROJECTS.length - idx
              }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3 className="p-8 text-8xl font-bold text-gray-900 mb-1">{project.title}</h3>
              <div className="text-sm text-gray-500 mb-2">{project.date}</div>
              <p className="text-gray-700 mb-4">{project.desc}</p>
              <div className="flex gap-4 flex-wrap">
                {project.links.map(link => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{link.label}</a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Set up transforms for each project
  const yOffsets = PROJECTS.map((_, idx) =>
    useTransform(scrollYProgress, [idx / PROJECTS.length, (idx + 1) / PROJECTS.length], [100, 0])
  );
  const opacities = PROJECTS.map((_, idx) =>
    useTransform(scrollYProgress, [idx / PROJECTS.length, (idx + 1) / PROJECTS.length], [0, 1])
  );

  return (
    <section id="projects" ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center bg-white px-4 py-24">
      <h2 className="text-8xl font-bold mb-8 text-gray-900">Projects</h2>
      <div className="relative w-full max-w-5xl min-h-[80vh]" style={{ height: `calc(${PROJECTS.length} * 100vh)` }}>
        {/* Sticky Image Container */}
        <div className="sticky top-24 left-0 h-[70vh] w-3/5 float-left">
          {PROJECTS.map((project, idx) => (
            <motion.img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-md border border-blue-100 bg-yellow-100"
              style={{
                y: yOffsets[idx],
                opacity: opacities[idx],
                zIndex: PROJECTS.length - idx
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          ))}
        </div>
        {/* Text Container */}
        <div className="absolute right-0 top-0 h-[70vh] w-2/5 flex flex-col justify-center">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-8 bg-white/80 rounded-xl shadow-md"
              style={{
                x: yOffsets[idx],
                opacity: opacities[idx],
                zIndex: PROJECTS.length - idx
              }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3 className="p-8 text-8xl font-bold text-gray-900 mb-1">{project.title}</h3>
              <div className="text-sm text-gray-500 mb-2">{project.date}</div>
              <p className="text-gray-700 mb-4">{project.desc}</p>
              <div className="flex gap-4 flex-wrap">
                {project.links.map(link => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{link.label}</a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );


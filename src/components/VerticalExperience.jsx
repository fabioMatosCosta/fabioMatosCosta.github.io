import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    company: "E-BIKE TO GO / NOORD",
    role: "Stock Manager",
    period: "October 2024 – Present, Amsterdam",
    description: "Inventory tracking, order fulfilment for stores and partners. Created communication channels and procedures to improve fulfilment operations."
  },
  {
    company: "E-BIKE TO GO / NOORD",
    role: "E-bike Mechanic",
    period: "February 2024 – September 2024, Amsterdam",
    description: "Responsible for maintenance and repair of e-bikes, supporting daily operations."
  },
  {
    company: "E-BIKE TO GO / NOORD",
    role: "Operational Management Trainee",
    period: "November 2023 – January 2024, Amsterdam",
    description: "Traineeship focused on cross-functional exposure, project management, and process improvement."
  },
  {
    company: "VANMOOF",
    role: "Team Lead in Hubs and Service",
    period: "April 2023 – August 2023, Amsterdam",
    description: "E-bike service manager in Amsterdam. Managed a large team of mechanics, strategised, innovated, and improved processes to boost efficiency based on data and customer feedback. Ensured seamless coordination and customer satisfaction."
  },
  {
    company: "VANMOOF",
    role: "Assistant Team Lead in Hubs and Service",
    period: "April 2022 – April 2023, Amsterdam",
    description: "Serviced e-bikes, supported repair operations, and provided training for new employees with an emphasis on safety and proper technique."
  },
  {
    company: "VANMOOF",
    role: "E-bike Mechanic",
    period: "October 2021 – April 2022, Utrecht",
    description: "Performed e-bike repairs and routine maintenance."
  },
  {
    company: "ST. CHRISTOPHER'S HOSTEL",
    role: "Housekeeping Supervisor",
    period: "August 2020 – September 2021, Amsterdam",
    description: "Coordinated the housekeeping team's cleaning efforts, ensuring work met required standards."
  },
  {
    company: "IRONHACK",
    role: "Web Development Bootcamp (Education)",
    period: "February 2020 – April 2020, Amsterdam",
    description: "9-week intensive bootcamp in Fullstack web development. Worked on projects with the MERN stack (JavaScript, HTML, CSS, ReactJS, NodeJS, Express, and MongoDB)."
  }
];

export default function VerticalExperience() {
  const ref = useRef(null);
  const numExp = experiences.length;
  const sectionHeight = `${numExp * 100}vh`;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", `-${100 * (numExp - 1)}vh`] );

  return (
    <section
      id="experience"
      ref={ref}
      style={{ height: sectionHeight, position: "relative" }}
      className="w-full bg-white"
    >
      <div className="sticky top-0 left-0 w-full h-screen flex items-center z-10">
        <motion.div style={{ y }} className="flex flex-col h-full w-full">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 h-screen w-full flex items-center justify-center"
            >
              <div className="w-11/12 md:w-3/4 h-4/5 bg-blue-50 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center justify-center p-12">
                <span className="font-semibold text-3xl md:text-4xl text-blue-700 mb-4 text-center">{exp.role}</span>
                <span className="text-lg text-gray-500 mb-2 text-center">{exp.period}</span>
                <span className="font-bold text-2xl text-gray-900 mb-3 text-center">{exp.company}</span>
                <span className="mt-2 text-gray-700 text-lg text-center">{exp.description}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

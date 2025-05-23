import React from "react";
import VanmoofLogo from "../assets/VanmoofLogo.png";
import NoordLogo from "../assets/NoordLogo.png";
import hostelLogo from "../assets/hostelLogo.png";
import IronhackLogo from "../assets/Ironhack.png";

const experiences = [
  {

    company: "E-BIKE TO GO / NOORD",
    role: "Stock Manager",
    period: "October 2024 – Present, Amsterdam",
    description: "Inventory tracking, order fulfilment for stores and partners. Created communication channels and procedures to improve fulfilment operations.",
    image: NoordLogo
  },
  {
    company: "E-BIKE TO GO / NOORD",
    role: "E-bike Mechanic",
    period: "February 2024 – September 2024, Amsterdam",
    description: "Responsible for maintenance and repair of e-bikes, supporting daily operations.",
    image: NoordLogo
  },
  {
    company: "E-BIKE TO GO / NOORD",
    role: "Operational Management Trainee",
    period: "November 2023 – January 2024, Amsterdam",
    description: "Traineeship focused on cross-functional exposure, project management, and process improvement.",
    image: NoordLogo
  },
  {
    company: "VANMOOF",
    role: "Team Lead ",
    period: "April 2023 – August 2023, Amsterdam",
    description: "E-bike service manager in Amsterdam. Managed a large team of mechanics, strategised, innovated, and improved processes to boost efficiency based on data and customer feedback. Ensured seamless coordination and customer satisfaction.",
    image: VanmoofLogo
  },
  {
    company: "VANMOOF",
    role: "Assistant Team Lead",
    period: "April 2022 – April 2023, Amsterdam",
    description: "Serviced e-bikes, supported repair operations, and provided training for new employees with an emphasis on safety and proper technique.",
    image: VanmoofLogo
  },
  {
    company: "VANMOOF",
    role: "E-bike Mechanic",
    period: "October 2021 – April 2022, Utrecht",
    description: "Performed e-bike repairs and routine maintenance.",
    image: VanmoofLogo
  },
  {
    company: "ST. CHRISTOPHER'S HOSTEL",
    role: "Housekeeping Supervisor",
    period: "August 2020 – September 2021, Amsterdam",
    description: "Coordinated the housekeeping team's cleaning efforts, ensuring work met required standards.",
    image: hostelLogo
  },
  {
    company: "IRONHACK",
    role: "Web Development Bootcamp",
    period: "February 2020 – April 2020, Amsterdam",
    description: "9-week intensive bootcamp in Fullstack web development. Worked on projects with the MERN stack (JavaScript, HTML, CSS, ReactJS, NodeJS, Express, and MongoDB).",
    image: IronhackLogo
  }
];

export default function Experience() {
  return (
    <section className="min-h-screen py-16 px-4 mb-16 bg-white overflow-auto relative" id="experience">
      <h2 className="font-bold mb-16 text-center p-8 text-8xl text-gray-900">Experience</h2>
      <div className="relative flex flex-col items-center h-full min-h-full">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 w-1 bg-blue-200 h-full -translate-x-1/2 z-10 rounded" />
        <div className="w-full flex flex-col gap-16 z-10 h-full">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="flex w-full justify-between items-center relative">
                {/* Left side (block or image) */}
                {isLeft ? (
                  <>
                    <div className="w-2/5 flex justify-end">
                      <div className="p-6 max-w-md text-right" >
                        <div className="flex flex-col items-end mb-2">
                          <span className="p-8 text-6xl font-bold text-gray-900">{exp.role}</span>
                          <span className="text-2xl text-gray-500">{exp.period}</span>
                        </div>
                        <div className="p-8 text-gray-700 text-5xl">{exp.company}</div>
                        <div className="mt-2 text-gray-700 text-2xl sm:text-3xl md:text-4xl">{exp.description}</div>
                      </div>
                    </div>
                    <div className="w-1/5 flex justify-center">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-blue-200 bg-white flex items-center justify-center">
                        <img src={exp.image} alt="Experience logo" className="w-full h-full object-cover rounded-full" />
                      </div>
                    </div>
                    <div className="w-2/5" />
                  </>
                ) : (
                  <>
                    <div className="w-2/5" />
                    <div className="w-1/5 flex justify-center">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-blue-200 bg-white flex items-center justify-center">
                        <img src={exp.image} alt="Experience logo" className="w-full h-full object-cover rounded-full" />
                      </div>
                    </div>
                    <div className="w-2/5 flex justify-start">
                      <div className="p-6 max-w-md text-left">
                        <div className="flex flex-col items-start mb-2">
                          <span className="p-8 text-6xl font-bold text-gray-900">{exp.role}</span>
                          <span className="text-2xl text-gray-500">{exp.period}</span>
                        </div>
                        <div className="p-8 text-gray-700 text-5xl">{exp.company}</div>
                        <div className="mt-2 text-gray-700 text-2xl sm:text-3xl md:text-4xl">{exp.description}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


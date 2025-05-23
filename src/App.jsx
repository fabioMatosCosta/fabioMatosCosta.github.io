import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import HorizontalProjects from "./components/HorizontalProjects.jsx";
import Experience from "./components/Experience.jsx";
import Interests from "./components/Interests.jsx";
import Links from "./components/Links.jsx";
import AnimatedSection from "./components/AnimatedSection.jsx";
import "./index.css";
import "./styles.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!introRef.current) return;
      const rect = introRef.current.getBoundingClientRect();
      // Show navbar when scrolled past halfway through the Intro section
      const halfway = rect.top + rect.height / 2;
      setShowNavbar(halfway <= 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans w-full">
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full z-50"
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>
      <main className="w-full">
        <div ref={introRef} id="intro-section" className="w-full">
          <AnimatedSection><Intro /></AnimatedSection>
        </div>
        <div className="w-full">
        <HorizontalProjects />
        </div>
        <div className="w-full">
        <Experience />
        </div>
        <div className="w-full">
        <AnimatedSection><Interests /></AnimatedSection>
        </div>
        <div className="w-full">
        <AnimatedSection><Links /></AnimatedSection>
        </div>
      </main>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Hero from "./components/hero/Hero";
import WorkSection from "./components/work-section/WorkSection";
import SkillsSection from "./components/skills-section/SkillsSection";
import ContactSection from "./components/contact/ContactSection";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        {activeSection !== "hero" && (
          <motion.div
            key="navbar"
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            exit={{ y: -50, opacity: 0, transition: { duration: 0.3 } }}
          >
            <Navbar scrollToSection={scrollToSection} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {activeSection === "hero" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Hero scrollToSection={scrollToSection} />
          </motion.div>
        )}

        {activeSection === "work" && (
          <motion.div
            key="work"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <WorkSection scrollToSection={scrollToSection} />
          </motion.div>
        )}

        {activeSection === "skills" && (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <SkillsSection scrollToSection={scrollToSection} />
          </motion.div>
        )}

        {activeSection === "contact" && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <ContactSection scrollToSection={scrollToSection} />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  );
};

export default App;

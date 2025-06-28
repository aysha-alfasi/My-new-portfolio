import React, { useState } from "react";
import { motion } from "framer-motion";
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
      {activeSection !== "hero" && <Navbar scrollToSection={scrollToSection} />}
      {activeSection === "hero" && <Hero scrollToSection={scrollToSection} />}

      {activeSection === "work" && (
        <div key="work">
          <WorkSection scrollToSection={scrollToSection} />
        </div>
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
    </div>
  );
};

export default App;

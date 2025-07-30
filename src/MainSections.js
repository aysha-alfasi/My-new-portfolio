import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Hero from "./components/hero/Hero.js";
import WorkSection from "./components/work-section/WorkSection.js";
import SkillsSection from "./components/skills-section/SkillsSection.js";
import ContactSection from "./components/contact/ContactSection.js";
import Navbar from "./components/navbar/Navbar.js";

const MainSections = () => {
  const [activeSection, setActiveSection] = useState("hero");


  useEffect(() => {
    document.body.classList.add("portfolio-bg");
    document.body.classList.remove("blog-bg");

    return () => {
      document.body.classList.remove("portfolio-bg");
    };
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
  };

  return (
    
    <div
    className={`App purple-scrollbar ${
      activeSection === "hero" || activeSection === "contact" ? "hide-scrollbar" : ""
    }`}
    style={{
      overflowY: activeSection === "hero" || activeSection === "contact" ? "hidden" : "scroll",
      height: "100vh",
      overflowX: "hidden",
    }}
  >
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
         
          transition={{ duration: 0.5 }}
        >
          <SkillsSection scrollToSection={scrollToSection} />
        </motion.div>
      )}

      {activeSection === "contact" && (
        <motion.div
          key="contact"
        >
          <ContactSection scrollToSection={scrollToSection} />
        </motion.div>
      )}
    </div>
  );
};

export default MainSections;

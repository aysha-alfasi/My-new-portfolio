import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

import Hero from "./components/hero/Hero.js";
import WorkSection from "./components/work-section/WorkSection.js";
import SkillsSection from "./components/skills-section/SkillsSection.js";
import ContactSection from "./components/contact/ContactSection.js";
import Navbar from "./components/navbar/Navbar.js";

const MainSections = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const section = location.pathname === "/" ? "hero" : location.pathname.slice(1);

  const scrollToSection = (sectionName) => {
    navigate(sectionName === "hero" ? "/" : `/${sectionName}`);
  };

  useEffect(() => {
    document.body.classList.add("portfolio-bg");
    document.body.classList.remove("blog-bg");

    return () => {
      document.body.classList.remove("portfolio-bg");
    };
  }, []);

  return (
    <div
      className={`App purple-scrollbar ${
        section === "hero" ? "hide-scrollbar" : ""
      }`}
      style={{
        overflowY: section === "hero" ? "hidden" : "scroll",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
     
     {section !== "hero" && <Navbar />}
     {section === "hero" && <Hero scrollToSection={scrollToSection} />}
      {section === "work" && <WorkSection scrollToSection={scrollToSection} />}
      {section === "skills" && (
        <motion.div key="skills" transition={{ duration: 0.5 }}>
          <SkillsSection scrollToSection={scrollToSection} />
        </motion.div>
      )}
      {section === "contact" && (
        <motion.div key="contact">
          <ContactSection scrollToSection={scrollToSection} />
        </motion.div>
      )}
    </div>
  );
};

export default MainSections;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SkillsSection.css";
import react from "../../imgs/icons/reactNoBorder.png";
import redux from "../../imgs/icons/reduxiconNoBorder.png";
import framerMotion from "../../imgs/icons/motion-new.png";
import miro from "../../imgs/icons/miroNoBorder.png";
import figma from "../../imgs/icons/figmaNoBorder.png";
import inkscape from "../../imgs/icons/inkscapeNoBorder.png";
import motoko from "../../imgs/icons/moLogo.png";
import postgre from "../../imgs/icons/postgreLogo.png";
import node from "../../imgs/icons/nodeLogoLarge.png";
import express from "../../imgs/icons/expressLogo.png";
import gitHub from "../../imgs/icons/gitHub.png";
import mongoose from "../../imgs/icons/mongoose1NoBorder.png";
import hidden from "../../imgs/icons/hidden.png";

const skills = [
  { name: "React", level: "advanced", icon: [react] },
  { name: "Redux", level: "intermediate", icon: [redux] },
  { name: "NodeJs", level: "intermediate", icon: [node] },
  { name: "Express", level: "intermediate", icon: [express] },
  { name: "Motion", level: "intermediate", icon: [framerMotion] },
  { name: "Miro", level: "intermediate", icon: [miro] },
  { name: "Figma", level: "intermediate", icon: [figma] },
  { name: "Inkscape", level: "advanced", icon: [inkscape] },
  { name: "GitHub", level: "intermediate", icon: [gitHub] },
  { name: "PostgreSQL", level: "beginner", icon: [postgre] },
  { name: "Motoko", level: "beginner", icon: [motoko] },
  { name: "MongoDB", level: "beginner", icon: [mongoose] },
  { name: "", icon: [hidden] },
  { name: "", icon: [hidden] },
  { name: "", icon: [hidden] },
  { name: "", icon: [hidden] },
  { name: "", icon: [hidden] },
  { name: "", icon: [hidden] },
  { name: "", icon: [hidden] },
  { name: "", icon: [hidden] },
  { name: "", icon: [hidden] },
];

const SkillsSection = () => {
  const [showLevels, setShowLevels] = useState(false);

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill.name}>
            <motion.img
              src={skill.icon}
              alt={skill.name}
              className={skill.name === "" ? "hidden-icon" : "skill-icon"}
              initial={
                skill.name === "" ? {} : { opacity: 0, y: -40, scale: 1 }
              }
              animate={
                skill.name === ""
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                      scale: [1, 1.15, 0.95, 1],
                      boxShadow: [
                        "0 0 0px rgba(255, 255, 255, 0)",
                        "0 0 20px rgb(255, 255, 255)",
                        "0 0 0px rgba(255, 255, 255, 0)",
                      ],
                    }
              }
              transition={
                skill.name === ""
                  ? {}
                  : {
                      opacity: { duration: 0.6 },
                      y: { duration: 0.6 },
                      scale: {
                        delay: 0.6,
                        duration: 1.3,
                        times: [0, 0.3, 0.6, 1],
                        ease: "easeOut",
                      },
                      boxShadow: {
                        delay: 0.6,
                        duration: 1.5,
                        times: [0, 0.3, 0.7, 1],
                        ease: "easeOut",
                      },
                    }
              }
            />

            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>

      <div className="skill-levels-wrapper">
        <button
          className="toggle-levels-btn"
          onClick={() => setShowLevels(!showLevels)}
        >
          {showLevels ? "Hide Levels" : "Show Levels💡"}
        </button>
        <AnimatePresence>
          {showLevels && (
            <motion.div
              className="skill-levels"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ul>
                {skills
                  .filter((skill) => skill.name)
                  .map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: "easeOut",
                      }}
                      className="skill-level-item"
                    >
                      <motion.img
                        src={skill.icon}
                        alt={skill.name}
                        className="level-icon"
                        drag
                        dragElastic={0.5}
                        dragSnapToOrigin={true}
                        dragTransition={{
                          type: "spring",
                          stiffness: 50,
                          damping: 10,
                        }}
                        whileHover={{
                          rotate: [0, 15, -10, 10, -5, 0],
                          scale: 1.1,
                        }}
                        transition={{
                          rotate: { duration: 1.2, ease: "easeInOut" },
                          scale: { duration: 0.4, ease: "easeOut" },
                        }}
                      />

                      <div className="level-info">
                        <div className={`progress-bar ${skill.level}`}>
                          <motion.div
                            className="progress-fill"
                            initial={{ width: 0 }}
                            whileInView={{
                              width:
                                skill.level === "beginner"
                                  ? "15%"
                                  : skill.level === "intermediate"
                                  ? "50%"
                                  : "80%",
                            }}
                            transition={{
                              duration: 1.2,
                              ease: "easeOut",
                              delay: index * 0.25,
                            }}
                          ></motion.div>
                        </div>
                        <span className="level-tag">
                          {skill.level === "beginner"
                            ? "🍼 Just Getting Started"
                            : skill.level === "intermediate"
                            ? "🌱 Getting Comfortable"
                            : "🔧 Actively Using"}
                        </span>
                      </div>
                    </motion.li>
                  ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;

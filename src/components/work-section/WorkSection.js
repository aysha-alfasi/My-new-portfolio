import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WorkSection.css";
import ProjectModal from "../UI/ProjectModal";
import journalApp from "../../imgs/g28.png";
import purple from "../../imgs/path1.png";
import purpleUI from "../../imgs/path2.png";
import missTasks from "../../imgs/g2.png";
import Beary from "../../imgs/image1.png";
import todo from "../../imgs/g1311.png";
import bookingApp from "../../imgs/g36.png";
import react from "../../imgs/icons/reactNoBorder.png";
import redux from "../../imgs/icons/reduxiconNoBorder.png";
import framerMotion from "../../imgs/icons/motion-new.png";
import miro from "../../imgs/icons/miroNoBorder.png";
import figma from "../../imgs/icons/figmaNoBorder.png";
import inkscape from "../../imgs/icons/inkscapeNoBorder.png";
import motoko from "../../imgs/icons/moLogo.png";
import postgre from "../../imgs/icons/postgreLogo.png";
import definity from "../../imgs/icons/definity.png";
import node from "../../imgs/icons/nodeLogoLarge.png";
import express from "../../imgs/icons/expressLogo.png";

const projects = [
  {
    id: 1,
    title: "Booking App UX",
    description: "infos later",
    longDescription: "",
    techIcons: [miro],
    link: "#",
    githubLink: "https://github.com/your-repo",
    imageUrl: bookingApp,
    category: "uiux",
  },
  {
    id: 2,
    title: "The Purple Card UI",
    description: "with Figma",
    longDescription: "",
    techIcons: [figma],
    link: "#",
    githubLink: "https://github.com/your-repo",
    imageUrl: purpleUI,
    category: "uiux",
  },
  {
    id: 3,
    title: "Miss Tasks UI",
    description: "infos later",
    longDescription: "",
    techIcons: [figma, inkscape],
    link: "#",
    githubLink: "https://github.com/your-repo",
    imageUrl: missTasks,
    category: "uiux",
  },
  {
    id: 4,
    title: "Todo List",
    description: "Cute Todo project",
    longDescription:
      "This is my simple yet super cute Todo React project. With this Project we can add a new task🌼, set a task as completed⭐, Delete a task🤍 and sort completed and active tasks or view them all✨. I used redux-toolkit for the state managing and I used Framer-Motion for some animations. The cute github icon below will take to the README.md of the project, you can have a look to the code there as well😊",
    techIcons: [react, redux, framerMotion],
    link: "#",
    githubLink: "https://github.com/aysha-alfasi/my-todo-app",
    imageUrl: todo,
    category: "web",
  },
  {
    id: 5,
    title: "Journaling App",
    description: "infos later",
    longDescription: "",
    techIcons: [react, redux, node, express, postgre],
    link: "#",
    githubLink: "https://github.com/your-repo",
    imageUrl: journalApp,
    category: "web",
  },
  {
    id: 6,
    title: "Miss Tasks App!",
    description: "infos later",
    longDescription: "",
    techIcons: [react, node, express],
    link: "#",
    githubLink: "https://github.com/your-repo",
    imageUrl: missTasks,
    category: "web",
  },
  {
    id: 7,
    title: "The Purple Card",
    description: "infos later",
    longDescription: "",
    techIcons: [react, definity, motoko],
    link: "#",
    githubLink: "https://github.com/your-repo",
    imageUrl: purple,
    category: "web",
  },
  {
    id: 8,
    title: "daily performance",
    description: "infos later",
    longDescription: "",
    techIcons: [inkscape],
    link: "#",
    githubLink: "https://github.com/your-repo",
    imageUrl: Beary,
    category: "graphic",
  },
  {
    id: 9,
    title: "Miss Tasks super three pages!",
    description: "infos later",
    longDescription: "",
    techIcons: [inkscape],
    link: "#",
    githubLink: "https://github.com/your-repo",
    imageUrl: missTasks,
    category: "graphic",
  },
];

const WorkSection = () => {
  const [filter, setFilter] = useState("web");
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (project) => setSelectedProject(project);

  const filteredProjects = projects.filter(
    (project) => project.category === filter
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="section work-section"
    >
      <h2>My Projects</h2>

      <div className="filter-buttons">
        <button
          onClick={() => setFilter("web")}
          className={filter === "web" ? "active" : ""}
        >
          Web Dev
        </button>
        <button
          onClick={() => setFilter("uiux")}
          className={filter === "uiux" ? "active" : ""}
        >
          UI/UX
        </button>
        <button
          onClick={() => setFilter("graphic")}
          className={filter === "graphic" ? "active" : ""}
        >
          Graphic
        </button>
      </div>

      <div className="projects-grid">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { type: "spring", stiffness: 150, damping: 12 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={() => openModal(project)}
            >
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
};

export default WorkSection;

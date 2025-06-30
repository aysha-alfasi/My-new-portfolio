import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WorkSection.css";
import ProjectModal from "../UI/ProjectModal.js";
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
    link: "https://www.figma.com/proto/3A5RCZ4FeBeNpLI2CbJOv1/The-Purple-Card-%F0%9F%9B%B8?node-id=4-69&t=SC3eNmcSWr3vM56L-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    imageUrl: purpleUI,
    category: "uiux",
  },
  {
    id: 3,
    title: "Miss Tasks UI",
    description: "infos later",
    longDescription: "",
    techIcons: [figma, inkscape],
    link: "https://www.figma.com/proto/BNQigaKaZWRfORE3MyEtnk/Miss-Tasks?node-id=4-50&p=f&t=CguGXD7XApzPuM1w-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A50",
    imageUrl: missTasks,
    category: "uiux",
  },
  {
    id: 4,
    title: "Todo List",
    description: "Cute Todo project",
    longDescription:
      "A cute and simple Todo app built with React 🌼. Users can add, complete, delete, and filter tasks ✨. It uses Redux Toolkit for state and Framer Motion for smooth animations. The GitHub button links to the project’s README 💻⭐.",
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
    longDescription:
      "A cozy personal journal app built with React, Ant Design, and PostgreSQL. Users can write, edit, and explore their entries with moods 🌿💭. It includes mood stats 📊, secure login, and smooth UX powered by custom hooks and Redux Toolkit.",
    techIcons: [react, redux, node, express, postgre],
    githubLink: "https://github.com/aysha-alfasi/personal-journal-app",
    imageUrl: journalApp,
    category: "web",
  },
  {
    id: 6,
    title: "Miss Tasks App!",
    description: "Simple full-stack app",
    longDescription:
      "Miss Tasks is a gentle productivity app that chats with you about your day 🌸💬. It responds to your mood using sentiment analysis and offers kind, supportive replies. Built with React, Bootstrap, and a Node.js backend with custom emotional logic 💡📝.",
    techIcons: [react, node, express],
    link: "https://miss-tasks-app.onrender.com/",
    githubLink: "https://github.com/aysha-alfasi/Miss-tasks-app-",
    imageUrl: missTasks,
    category: "web",
  },
  {
    id: 7,
    title: "The Purple Card",
    description: "Fun DApp",
    longDescription:
      "A playful idea-tracking app where users can manage idea cards 💭✨. Built with React and sound/alert effects for a fun UX. The backend runs on Motoko via DFINITY’s Internet Computer 💻🎉 — and there’s room for future magic! 🌈",
    techIcons: [react, definity, motoko],
    link: "https://early-rocket-whispering.on-fleek.app/",
    githubLink:
      "https://github.com/aysha-alfasi/The-purple-card-full-DApp-project",
    imageUrl: purple,
    category: "web",
  },
  {
    id: 8,
    title: "daily performance",
    description: "infos later",
    longDescription: "",
    techIcons: [inkscape],
    link: "https://my-portfolio-one-neon-21.vercel.app/graphics/Beary.jpg",
    imageUrl: Beary,
    category: "graphic",
  },
  {
    id: 9,
    title: "Productivity Collection",
    description: "infos later",
    longDescription: "",
    techIcons: [inkscape],
    link: "https://my-portfolio-one-neon-21.vercel.app/graphics/collection.pdf",
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
    <section className="section-work">
      <h2 className="work-section-title">My Projects</h2>

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
    </section>
  );
};

export default WorkSection;

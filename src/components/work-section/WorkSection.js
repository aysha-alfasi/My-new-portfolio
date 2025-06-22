import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WorkSection.css";
import journalApp from "../../imgs/g28.png";
import purple from "../../imgs/path1.png";
import purpleUI from "../../imgs/path2.png";
import missTasks from "../../imgs/g2.png";
import Beary from "../../imgs/image1.png";
import todo from "../../imgs/g1311.png";
import bookingApp from "../../imgs/g36.png";

const projects = [
  {
    id: 1,
    title: "Booking App UX",
    description: "infos later",
    imageUrl: bookingApp,
    link: "#",
    category: "uiux",
  },
  {
    id: 2,
    title: "The Purple Card UI",
    description: "with Figma",
    imageUrl: purpleUI,
    link: "#",
    category: "uiux",
  },
  {
    id: 3,
    title: "Miss Tasks UI",
    description: "infos later",
    imageUrl: missTasks,
    link: "#",
    category: "uiux",
  },
  {
    id: 4,
    title: "Todo List",
    description: "Cute Todo project",
    imageUrl: todo,
    link: "#",
    category: "web",
  },
  {
    id: 5,
    title: "Journaling App",
    description: "infos later",
    imageUrl: journalApp,
    link: "#",
    category: "web",
  },
  {
    id: 6,
    title: "Miss Tasks App!",
    description: "infos later",
    imageUrl: missTasks,
    link: "#",
    category: "web",
  },
  {
    id: 7,
    title: "The Purple Card",
    description: "infos later",
    imageUrl: purple,
    link: "#",
    category: "web",
  },
  {
    id: 8,
    title: "daily performance",
    description: "infos later",
    imageUrl: Beary,
    link: "#",
    category: "graphic",
  },
  {
    id: 9,
    title: "Miss Tasks super three pages!",
    description: "infos later",
    imageUrl: missTasks,
    link: "#",
    category: "graphic",
  },
];

const WorkSection = () => {
  const [filter, setFilter] = useState("web");

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
          {filteredProjects.map(
            ({ id, title, description, imageUrl, link }) => (
              <motion.a
                href={link}
                key={id}
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
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={imageUrl} alt={title} />
                <div className="project-info">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </motion.a>
            )
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default WorkSection;

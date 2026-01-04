import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WorkSection.css";
import ProjectModal from "../UI/ProjectModal.js";
import Spinner from "../UI/Spinner.js";
import journalApp from "../../imgs/g28.png";
import purple from "../../imgs/path1.png";
import purpleUI from "../../imgs/path2.png";
import missTasks from "../../imgs/g2.png";
import Beary from "../../imgs/image1.png";
import todo from "../../imgs/newTodo.png";
import bookingApp from "../../imgs/g36.png";
import backToSelf from '../../imgs/backToSelf.png';
import assistNasma from '../../imgs/assistNasma.png';
import pinkPub from '../../imgs/pinkLavender.png';
import aishaLegalTech from '../../imgs/aishaLegalTech.png';
import react from "../../imgs/icons/reactNoBorder1.png";
import redux from "../../imgs/icons/reduxiconNoBorder1.png";
import framerMotion from "../../imgs/icons/motion-new1.png";
import miro from "../../imgs/icons/miroNoBorder1.png";
import figma from "../../imgs/icons/figmaNoBorder1.png";
import inkscape from "../../imgs/icons/inkscapeNoBorder1.png";
import motoko from "../../imgs/icons/moLogo1.png";
import postgre from "../../imgs/icons/postgreLogo1.png";
import definity from "../../imgs/icons/definity1.png";
import node from "../../imgs/icons/nodeLogoLarge1.png";
import express from "../../imgs/icons/expressLogo1.png";

const projects = [
  {
    id: 1,
    title: "Booking App UX",
    description: "UX Exploration",
    longDescription: "An unfinished UX case study that shows how I organize the UX process ✏️. I focused on structuring the workflow, preparing a research plan, and survey questions, while later steps (personas, journey mapping, wireframing) are shown only as part of the workflow framework 💡.",
    techIcons: [miro],
    link: "https://miro.com/app/board/uXjVI1wpvYg=/?share_link_id=630628476443",
    imageUrl: bookingApp,
    category: "uiux",
  },
  {
    id: 2,
    title: "The Purple Card UI",
    description: "UI Snapshot",
    longDescription: "The homepage UI for The Purple Card App 💜. I first designed it in Figma, then turned it into a working app 🎨✨, showing it just as envisioned 💻🌟.",
    techIcons: [figma],
    link: "https://www.figma.com/proto/3A5RCZ4FeBeNpLI2CbJOv1/The-Purple-Card-%F0%9F%9B%B8?node-id=4-69&t=SC3eNmcSWr3vM56L-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    imageUrl: purpleUI,
    category: "uiux",
  },
  {
    id: 3,
    title: "Miss Tasks UI",
    description: "UI Preview",
    longDescription: "A soft and friendly UI for Miss Tasks 🌸💬. The Figma design shows the app’s gentle, supportive style and how users interact with mood-based chat and productivity features 💡✨. Note: The final design differ slightly from the live app 💻📝.",
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
    link: "https://my-todo-app-one-kappa.vercel.app/",
    githubLink: "https://github.com/aysha-alfasi/my-todo-app",
    imageUrl: todo,
    category: "web",
  },
  {
    id: 5,
    title: "Journaling App",
    description: "full-stack Journal App",
    longDescription:
      "A cozy personal journal app built with React, Ant Design, and PostgreSQL. Users can write, edit, and explore their entries with moods 🌿💭. It includes mood stats 📊, secure login, and smooth UX powered by custom hooks and Redux Toolkit.",
    techIcons: [react, redux, node, express, postgre],
    githubLink: "https://github.com/aysha-alfasi/personal-journal-app",
    imageUrl: journalApp,
    category: "web",
  },
   {
    id: 6,
    title: "Pink Lavender",
    description: "Charming Publisher MVP",
    longDescription: "A cozy and inviting official website for Pink Lavender Publisher 🌸, a charming publishing house for gentle reads, stories, and planners 📚✨. First beta version with a soft, warm design crafted in Canva, supporting Arabic & English via React Context 🍒. Playful interactive alerts using SweetAlert2 💖🌿. A real, live site, not just a practice project.🥰",
    techIcons: [react],
    link: "https://pink-lavender-publishing.vercel.app/",
    imageUrl: pinkPub,
    category: "web",
  },
    {
    id: 7,
    title: "Nasma Assist",
    description: " cute mood App (WIP)",
    longDescription: "A friendly React app featuring Nasma, a cute assistant who helps track moods and build habits 💖. Users can pick moods, hear playful sounds, and see Nasma’s reactions ✨. Built with React and Framer Motion, this project is still in progress with planned features like habit tracking, goals, and a calendar 🌱📆.",
    techIcons: [react, framerMotion],
    link: "https://nasma-assist.vercel.app/",
    githubLink: "https://github.com/aysha-alfasi/Nasma-Assist",
    imageUrl: assistNasma,
    category: "web",
  },
   {
    id: 8,
    title: "Back to Self",
    description: "Cozy digital journal",
    longDescription: "A cozy digital journal built with React 📖✨. Users can write, view, edit, and delete their reflections 💌. It features daily messages, smooth page-turn animations, and calming paper-flip sounds 🍃. Local storage keeps everything safe in the browser 💾.",
    techIcons: [react, framerMotion],
    link: "https://back-to-self-app.vercel.app/",
    githubLink: "https://github.com/aysha-alfasi/back-to-self-App",
    imageUrl: backToSelf,
    category: "web",
  },
  
  
  {
    id: 9,
    title: "Teddy Tracker",
    description: "Daily Self-Check",
    longDescription: "A cozy daily reflection design 🐻🛏️. The sleepy teddy rests under a blanket that looks like a soft panel. Each panel highlights a personal value, like patience, kindness, optimism, or wisdom, with a gentle question related to each value underneath 🌙✨. A playful and comforting way to reflect on your day, track your habits, and continuously improve yourself before bedtime 💛💭.",
    techIcons: [inkscape],
    link: "/graphics/teddy.png",
    imageUrl: Beary,
    category: "graphic",
  },
  {
    id: 10,
    title: "Miss Tasks’ Plan",
    description: "3-Sheet Strategy",
    longDescription: "A smart and playful way to track your progress all year with just three sheets 📒💡. Miss Tasks guides you through daily tasks, monthly reflections, and yearly reviews, providing a simple yet effective strategy to stay on top of your goals 🌸📝. A fun companion for organizing your achievements and celebrating progress 💛🎉.",
    techIcons: [inkscape],
    link: "/graphics/missTasksHasArrived.pdf",
    imageUrl: missTasks,
    category: "graphic",
  },

   {
    id: 11,
    title: "Aisha Legal Tech",
    description: "Legal awareness platform",
    longDescription: "A friendly beta platform for Aisha Legal Tech ⚖️✨, helping users learn their legal rights and take first steps safely 📝🌿. Features Aisha, a focused chatbot 🤖💬 powered by serverless functions, guiding legal queries precisely 🌸💛. Includes interactive scenario-based quizzes 🎲📚 and a rights selector to explore your options. Built with React & Tailwind CSS, this early beta version brings core features to life 💖📜. A playful, evolving, real live platform, not just a practice project 🫶.",
    techIcons: [react],
    link: "https://aisha-legal-tech.vercel.app/",
    imageUrl: aishaLegalTech,
    category: "web",
  },
  
   {
    id: 12,
    title: "Nasma Assist",
    description: "Co-Designed with AI",
    longDescription: "Nasma Assist is a cute character designing project 🌟 where I started by generating a base image with AI 💭✨. Then, I refined the design in Inkscape, adding clothes, details, and multiple facial expressions😄🎨. Fully personalized, ready to bring life and mood to any app! 🌈",
    techIcons: [inkscape],
    link: "/graphics/NasmaAssist.pdf",
    imageUrl: assistNasma,
    category: "graphic",
  },
  {
    id: 13,
    title: "Nasma Assist UI",
    description: "Interactive UI (WIP)",
    longDescription: "A friendly UI for Nasma Assist, the cute mood-tracking app in progress 💖. The Figma design shows several app pages (some not yet developed in the live app), giving a peek at planned features like a calendar and habit tracking ✨🌱. A fun and interactive glimpse at the interface, still a work in progress 💻📆.",
    techIcons: [figma, inkscape],
    link: "https://www.figma.com/design/hkWt1ZIMZmkFJYX1GpFU5C/Mood-Habit-Tracker-App?node-id=0-1&t=SlcD5zXEQhc5NcYC-1",
    imageUrl: assistNasma,
    category: "uiux",
  },

   {
    id:14,
    title: "The Purple Card",
    description: "Fun DApp",
    longDescription:
      "A playful idea-tracking app where users can manage idea cards 💭✨. Built with React and sound/alert effects for a fun UX. The backend runs on Motoko via DFINITY’s Internet Computer 💻🎉 — and there’s room for future magic! 🌈",
    techIcons: [react, definity, motoko],
    link: "https://the-purple-card-frontend.vercel.app/",
    githubLink:
      "https://github.com/aysha-alfasi/The-purple-card-full-DApp-project",
    imageUrl: purple,
    category: "web",
  },
  {
    id: 15,
    title: "Miss Tasks App!",
    description: "Simple full-stack app",
    longDescription:
      "Miss Tasks is a gentle productivity app that chats with you about your day 🌸💬. It responds to your mood using sentiment analysis and offers kind, supportive replies. Built with React, Bootstrap, and a Node.js backend with custom emotional logic 💡📝.",
    techIcons: [react, node, express],
    /* link: "https://miss-tasks-app.onrender.com/", */
    githubLink: "https://github.com/aysha-alfasi/Miss-tasks-app-",
    imageUrl: missTasks,
    category: "web",
  },
];

const WorkSection = () => {
  const [filter, setFilter] = useState("web");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  

    const filteredProjects = projects.filter(
    (project) => project.category === filter
  );

  useEffect(() => {
    // Load all images used in projects <♡ />
    setIsLoaded(false);
    const imageUrls = filteredProjects.map(p => p.imageUrl);
    let loadedCount = 0;
    imageUrls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setIsLoaded(true);
        }
      };
    });
    if (imageUrls.length === 0) setIsLoaded(true);
  }, [filter, filteredProjects]);

  const openModal = (project) => setSelectedProject(project);


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
  {!isLoaded ? ( 
    <Spinner />
  ): (

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
       )}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default WorkSection;

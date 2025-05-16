import { motion } from "framer-motion";
import "./WorkSection.css";

const WorkSection = ({ scrollToSection }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="section work-section"
    >
      <h2>My Work</h2>
 
      <button onClick={() => scrollToSection("hero")}>Back to Home</button>
      <button onClick={() => scrollToSection("skills")}>Go to Skills</button>
      <button onClick={() => scrollToSection("contact")}>Go to Contact</button>
    </motion.section>
  );
};

export default WorkSection;

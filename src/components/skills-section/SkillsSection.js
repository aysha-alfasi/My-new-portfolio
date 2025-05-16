import { motion } from "framer-motion";

const SkillsSection = ({ scrollToSection }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    className="section skills-section"
  >
    <h2>My Skills</h2>

    <button onClick={() => scrollToSection("hero")}>Back to Home</button>
    <button onClick={() => scrollToSection("work")}>Go to Work</button>
    <button onClick={() => scrollToSection("contact")}>Go to Contact</button>
  </motion.section>
);

export default SkillsSection;

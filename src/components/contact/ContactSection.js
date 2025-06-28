import { motion } from "framer-motion";

const ContactSection = ({ scrollToSection }) => (
  <motion.section
    /* initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }} */
    className="section contact-section"
  >
    <h2>Contact Me</h2>

    <button onClick={() => scrollToSection("hero")}>Back to Home</button>
    <button onClick={() => scrollToSection("work")}>Go to Work</button>
    <button onClick={() => scrollToSection("skills")}>Go to Skills</button>
  </motion.section>
);

export default ContactSection;

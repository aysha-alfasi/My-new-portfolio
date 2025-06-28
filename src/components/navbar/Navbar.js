import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = ({ scrollToSection }) => {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button onClick={() => scrollToSection("work")}>Work</button>
      <button onClick={() => scrollToSection("skills")}>Skills</button>
      <button onClick={() => scrollToSection("contact")}>Contact</button>
      <button onClick={() => scrollToSection("hero")}>Home</button>
    </motion.nav>
  );
};

export default Navbar;

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const goTo = (section) => {
   navigate(section === "hero" ? "/portfolio" : `/portfolio/${section}`);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button onClick={() => goTo("work")}>Work</button>
      <button onClick={() => goTo("skills")}>Skills</button>
      <button onClick={() => goTo("contact")}>Contact</button>
      <button onClick={() => goTo("hero")}>Home</button>
    </motion.nav>
  );
};

export default Navbar;


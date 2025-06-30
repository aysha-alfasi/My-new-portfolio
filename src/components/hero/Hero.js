import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import avatar from "../../imgs/smallAvatar.png";
import "./Hero.css";

const Hero = ({ scrollToSection }) => {

  const navigate = useNavigate();
  
  return (
    <section className="hero">
      <div className="stars">
        <svg width="100%" height="100%">
          <circle
            cx="50%"
            cy="50%"
            r="1"
            fill="white"
            opacity="0.5"
            className="twinkle"
          />
        </svg>
      </div>
      <motion.div
        whileHover={{ scale: 1.08, rotate: 1, y: -2 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <motion.img
          src={avatar}
          alt="Portfolio-Avatar"
          className="avatar"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: [1, 1.1, 1] }}
          transition={{
            delay: 2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          loading="eager"
        />
      </motion.div>
      <div className="content">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          
            Hello, I'm <span className="highlight">Aisha</span>
          
        </motion.h1>

        <motion.h2
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Creative Web Developer <span className="heart">🤍</span>
        </motion.h2>

        <div className="buttons">
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("work")}
            transition={{ type: "spring", stiffness: 200 }}
          >
            View Work
          </motion.button>

          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </motion.button>
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("skills")}
          >
            My Skills
          </motion.button>
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/blog")}
          >
            My Blog
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

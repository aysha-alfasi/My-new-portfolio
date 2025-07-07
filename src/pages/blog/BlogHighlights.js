import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./BlogHighlights.css";
import books from "../../imgs/books2.png";
import cuteCoder from "../../imgs/cuteCoder.png";
import pinkLavander from "../../imgs/pinkLavander2.png";
import selfCare from "../../imgs/selfCare.png";

const highlights = [
  {
    title: "Deep Thinking",
    desc: "Reflections on life and meaning",
    backgroundImage: books,
  },
  {
    title: "Coding Thoughts",
    desc: "When you write code with your heart",
    backgroundImage: cuteCoder,
  },
  {
    title: "Self Care",
    desc: "The language of nature as I see it",
    backgroundImage: selfCare,
  },
  {
    title: "Pink Lavander",
    desc: "Every small thing is worth contemplating",
    backgroundImage: pinkLavander,
  },
];

const HighlightCard = ({ title, desc, backgroundImage, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    rootMargin: "-50% 0px 0px 0px",
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="highlight-card"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        duration: 1.2,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 20px rgba(156, 39, 176, 0.3)",
      }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
};

const BlogHighlights = ({ onClick }) => {
  return (
    <section className="highlights-section">
      <div className="highlights-grid">
        {highlights.map(({ title, desc, backgroundImage }, i) => (
          <HighlightCard
            key={i}
            title={title}
            desc={desc}
            backgroundImage={backgroundImage}
            index={i}
          />
        ))}
      </div>
      <button className="mailing-list-btn" onClick={onClick}>
        Join the list 💌
      </button>
    </section>
  );
};

export default BlogHighlights;

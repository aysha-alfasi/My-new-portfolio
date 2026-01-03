import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./BlogHighlights.css";
import books from "../../imgs/books3.png";
import cuteCoder from "../../imgs/cuteCoder.png";
import pinkLavander from "../../imgs/pinkLavander2.png";
import selfCare from "../../imgs/selfCare.png";

const highlights = [
  {
    title: "Pink Lavander",
    desc: "Cute Books and Cozy Vibes",
    backgroundImage: pinkLavander,
    link: "https://pink-lavender-publishing.vercel.app/",
  },

  {
    title: "Coding & Work",
    desc: "My Portfolio and tech Stuff",
    backgroundImage: cuteCoder,
    link: "/portfolio",
  },
  {
    title: "Self Care",
    desc: "Articles on mental health & self care",
    backgroundImage: selfCare,
    link: "/articles",
  },
  {
    title: "Legal awareness",
    desc: "Rights principles with Aisha legal tech",
    backgroundImage: books,
    link: "https://aisha-legal-tech.vercel.app/",
  },
];

const HighlightCard = ({ title, desc, backgroundImage, index, link }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    rootMargin: "-50% 0px 0px 0px",
    triggerOnce: true,
  });

  const SAME_TAB_LINKS = ["/articles"];

  const navigate = useNavigate();

  const handleClick = () => {
    if (!link) return;

    if (SAME_TAB_LINKS.includes(link)) {
      navigate(link);
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

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
      onClick={handleClick}
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
        {highlights.map(({ title, desc, backgroundImage, link }, i) => (
          <HighlightCard
            key={i}
            title={title}
            desc={desc}
            backgroundImage={backgroundImage}
            link={link}
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

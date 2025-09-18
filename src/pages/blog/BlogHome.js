import { useRef } from "react";
import "./BlogHome.css";
import { motion } from "framer-motion";
import BlogHighlights from "./BlogHighlights.js";
import MailingList from "./MailingList.js";
import flower from "../../imgs/small-flower.png";

const BlogHome = () => {
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="blog-home">
      <section className="welcome-section">
        <div className="flowers-top">
          <motion.img
            src={flower}
            alt="flower"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <motion.img
            src={flower}
            alt="flower"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <motion.img
            src={flower}
            alt="flower"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </div>
        <motion.div
          className="text-space"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="blog-title">Aishense</h1>

          <div className="extra-info">
             <p>
              A space for Aisha’s Sense & Essence {"<"}
              <span className="pink-s">♡</span>
              {">"}
            </p>
          </div>

          <div className="flowers-bottom">
            <motion.img
              src={flower}
              alt="flower"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
            <motion.img
              src={flower}
              alt="flower"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
            <motion.img
              src={flower}
              alt="flower"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </div>
        </motion.div>

        <button
          className="explore-button"
          onClick={() => scrollTo(section2Ref)}
        >
          Explore my Interests
        </button>
      </section>

      <section className="" ref={section2Ref}>
        <BlogHighlights onClick={() => scrollTo(section3Ref)} />
      </section>
      <section className="blog-home" ref={section3Ref}>
        <MailingList />
      </section>
    </div>
  );
};

export default BlogHome;

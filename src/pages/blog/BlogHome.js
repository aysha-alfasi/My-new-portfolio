import { Link } from 'react-router-dom';
import './BlogHome.css';
import { motion } from 'framer-motion';

const BlogHome = () => {
  return (
    <motion.main
      className="blog-home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="blog-title"> The Cute Coder{" "}
        <span>{'<♡>'}</span>
        
      </h1>

      <section className="extra-info">
        <p>
          I love coding {"<"}
          <span className="pink-s">♡</span>{">"} designing <span className="pink-s">ღ</span> and writing <span className="pink-s">♫</span>
        </p>
      </section>
      <Link to="/blog/articles" className="explore-button">
        Start reading
      </Link>
      <div className="blog-topics">
  {["Life awareness", "Coding thoghts", "My Imagination", "Self Care"].map((topic, index) => (
    <motion.div
      className="topic-card"
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + index * 0.2, duration: 0.6, ease: "easeOut" }}
    >
      {topic}
    </motion.div>
  ))}
</div>

    </motion.main>
    
  );
};

export default BlogHome;

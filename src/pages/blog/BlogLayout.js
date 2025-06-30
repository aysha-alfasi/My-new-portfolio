import { Outlet, Link, NavLink } from "react-router-dom";
import "./BlogLayout.css";

function BlogLayout() {
  return (
    <div className="blog-layout">
      <nav className="blog-nav">
        <Link to="/" className="portfolio-button">
          My portfolio
        </Link>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          end
        >
          Home
        </NavLink>
        <NavLink to="/blog/about" className={({ isActive }) => isActive ? "active-link" : ""}>
          About Me
        </NavLink>
        <NavLink to="/blog/articles" className={({ isActive }) => isActive ? "active-link" : ""}>
          Articles
        </NavLink>
      </nav>
      <div className="blog-content">
        <Outlet />
      </div>
      <footer className="blog-footer">
          <p className="blog-name">The Cute coder ©</p>
          <p className="footer-last-line">
            <span>{"<"}/♡{">"}</span> Aisha
          </p>
          </footer>
    </div>
  );
}

export default BlogLayout;

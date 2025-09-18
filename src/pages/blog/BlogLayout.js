import { useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./BlogLayout.css";

function BlogLayout() {

  useEffect(() => {
    document.body.classList.add("blog-bg");
    document.body.classList.remove("portfolio-bg");

    return () => {
      document.body.classList.remove("blog-bg");
    };
  }, []);

  return (
    <div className="blog-layout pink-scrollbar" style={{ overflowY: 'scroll', height: '100vh' }}>
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
        <NavLink
          to="/blog/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About Me
        </NavLink>
        <NavLink
          to="/blog/articles"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Articles
        </NavLink>
      </nav>

      <main className="blog-content">
        <Outlet />
      </main>

      <footer className="blog-footer">
        <p className="blog-name">Aishense ©</p>
        <p className="footer-last-line">
       {/*    <span>
            {"<"}/♡{">"}
          </span>{" "}
          Aisha */}
        </p>
      </footer>
    </div>
  );
}

export default BlogLayout;

import { useEffect, useState } from "react";
import "./Articles.css";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
  fetch("/data/articles.json")
    .then((res) => res.json())
    .then((data) => {
      const sorted = [...data].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setArticles(sorted);
    })
    .catch((error) => console.error("Error fetching articles:", error));
}, []);

  return (
    <div className="articles-page">
      {/* <h1 className="articles-title">
      <span className="heart">{"<♡>"}</span>
      </h1> */}

      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img
              src={article.previewImage}
              alt={article.title}
              className="article-image"
            />

            <div className="article-content">
              <h2>
                <Link
                  to={`/blog/articles/${article.id}`}
                  className="article-title-link"
                >
                  {article.title}
                </Link>
              </h2>

              <p className="summary">{article.summary}</p>

              <Link to={`/articles/${article.id}`} className="read-more">
                Read more<span className="read-more-icon">🌸</span>
              </Link>

              <p className="date">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;

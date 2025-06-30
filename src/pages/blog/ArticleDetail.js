import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch('/data/articles.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.id === id);
        setArticle(found);
      })
      .catch((error) => console.error("Error fetching article:", error));
  }, [id]);
  

  if (!article) return <p style={{ padding: '60px', textAlign: 'center' }}>Loading...</p>;

  return (
    <div className="article-details">
            <img src={article.detailImage} alt={article.title} className="article-detail-image" />
      <h1>{article.title}</h1>
      <p className="date-detail">{article.date}</p>
      <div className="content-detail">
        {article.content.split('\n').map((para, index) => (
          <p key={index}>{para.trim()}</p>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetail;

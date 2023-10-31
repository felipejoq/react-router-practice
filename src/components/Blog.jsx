import {useState, useEffect} from 'react';
import {getPots} from "../services/posts.js";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPots().then(posts => {
      setPosts(posts)
    })
  }, []);

  return (
    <div className="row">
      <h1 className="mt-4 mb-4">
        <i className="bi bi-pencil-square"></i> Blog
      </h1>
      <hr />
      <div className="row">
        {posts.map((article, index) => (
          <article key={index} className="col-12 mb-4 border-bottom p-4">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="img-thumbnail"
                />
              </div>
              <div className="col-md-9">
                <h2 className="fs-4">{article.title}</h2>
                <p>{article.excerpt}</p>
                <p><i className="bi bi-calendar"></i> {new Date(article.date).toLocaleString('es-CL')}</p>
                <p><i className="bi bi-person-circle"></i> {article.author}</p>
                {/* Otros atributos del artículo */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

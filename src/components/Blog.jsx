import {useState, useEffect} from 'react';
import {getPots} from "../services/posts.js";
import {Article} from "./Article.jsx";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPots().then(posts => {
      setPosts(posts)
    })
  }, []);

  return (
    <div className="container my-3">
      <h1 className="text-center">
        <i className="bi bi-pencil-square"></i> Blog
      </h1>
      <main className="px-5">
        {
          posts.map((article) => (
            <Article key={crypto.randomUUID()} article={article}/>
          ))
        }
      </main>
    </div>
  );
};

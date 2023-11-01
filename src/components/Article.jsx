export const Article = ({article}) => {
  return (
    <article className="my-4">
      <div className="row">
        <div className="col-12 col-lg-4">
          <img
            src={article.image}
            alt={article.title}
            className="img-thumbnail"
          />
        </div>
        <div className="col-12 col-lg-8">
          <h2 className="fs-4">{article.title}</h2>
          <p>{article.excerpt}</p>
          <p><i className="bi bi-calendar"></i> {new Date(article.date).toLocaleString('es-CL')}</p>
          <p><i className="bi bi-person-circle"></i> {article.author}</p>
        </div>
      </div>
    </article>
  );
};
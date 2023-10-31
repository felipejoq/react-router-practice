export const Home = ({logo}) => {
  return (
    <article className="d-flex flex-column justify-content-center align-items-center gap-2">
      <header className="head-text">
        <h1 className="text-muted">
          Bienvenidos a <span className="text-black">Happy Cake!</span>
        </h1>
        <h2 className="bg-gray rounded my-4 p-2 fs-6 text-center text-muted">
          El lugar de los pasteles felices
        </h2>
      </header>
      <main className="text-center">
        <p>
          Bienvenidos a <strong>Happy Cake</strong>, donde la magia de la repostería se fusiona con la felicidad.
          Nuestros
          pasteles son
          creaciones exquisitas que endulzarán tus momentos especiales con sabor y estilo inigualables.
        </p>
        <p>
          Desde elegantes diseños hasta opciones personalizadas, en <strong>Happy Cake</strong>, cada bocado es una
          experiencia única. Déjanos ser parte de
          tus celebraciones y descubre cómo la felicidad puede tener un sabor verdaderamente delicioso. Sumérgete en un
          mundo de dulzura y creatividad con nosotros.
        </p>
        <img src={logo} alt="Happy Cake Logo - Tienda de pasteles felices"/>
      </main>
    </article>
  );
};
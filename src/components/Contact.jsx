import {InputGroup, Form} from "react-bootstrap";

export const Contact = () => {
  return (
    <main className="d-flex flex-column align-items-center container">
      <article className="d-flex flex-column justify-content-center gap-2 text-center">
        <header className="head-text">
          <h1 className="text-muted">
            Formulario de <span className="text-black">Contacto</span>
          </h1>
          <h2 className="bg-gray rounded my-4 p-2 fs-6 text-center text-muted">
            ¿En qué te podemos ayudar?
          </h2>
        </header>
        <main className="text-center">
          <div className="w-100">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
              <Form.Control
                placeholder="Escriba su nombre..."
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
              <Form.Control
                placeholder="Escriba su correo..."
              />
            </InputGroup>
            <InputGroup>
              <Form.Control as="textarea" placeholder="Escriba su mensaje aquí..."/>
            </InputGroup>
          </div>
        </main>
      </article>
    </main>
  );
};
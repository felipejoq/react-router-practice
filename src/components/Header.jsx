import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Navbar className="bg-cake-color" data-bs-theme="dark">
        <Container className="p-0">
          <NavLink to="/" className="navbar-brand">
            <i className="bi bi-cake2-fill"></i> Happy Cake!
          </NavLink>
          <Nav className="justify-content-end">
            <NavLink
              to="/"
              className={({isActive, isPending}) =>
                isActive && !isPending ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({isActive, isPending}) =>
                isActive && !isPending ? "nav-link active" : "nav-link"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({isActive, isPending}) =>
                isActive && !isPending ? "nav-link active" : "nav-link"
              }
            >
              Contacto
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
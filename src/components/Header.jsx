import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Navbar className="bg-cake-color" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/react-router-practice" className="navbar-brand">
              <i className="bi bi-cake2-fill"></i> Happy Cake!
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              to="/react-router-practice"
              className={({ isActive, isPending }) =>
                isActive && !isPending ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/react-router-practice/blog"
              className={({ isActive, isPending }) =>
                isActive && !isPending ? "nav-link active" : "nav-link"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/react-router-practice/contact"
              className={({ isActive, isPending }) =>
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
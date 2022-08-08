//react
import { Link, NavLink } from "react-router-dom";

//componentes, pages, js
import routes from "../helpers/routes";
import { useAuth } from "../auth/authProvider";
import SearchForm from "./SearchForm";

//dependencias
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavComponent() {
  const { isAuthenticated, admin, id } = useAuth();

  return (
    <>
      <Navbar expand="md" className="py-4" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to={routes.home}>
              <img src="/assets/Logo.png" alt="logo_aluraGeek" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {isAuthenticated ? (
                admin ? (
                  <NavDropdown
                    title="Administración"
                    id="basic-nav-dropdown"
                    className="me-5"
                  >
                    <NavDropdown.Item as={Link} to={routes.admin}>
                      Gestión
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={routes.agregar}>
                      Agregar
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={routes.logout}>
                      Cerrar Sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown
                    title="Mi Cuenta"
                    id="basic-nav-dropdown"
                    className="me-5"
                  >
                    <NavDropdown.Item as={Link} to={routes.clienteMain(id)}>
                      Mis datos
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={routes.logout}>
                      Cerrar Sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                )
              ) : (
                <Nav.Link as={NavLink} className="me-5" to={routes.login}>
                  Login
                </Nav.Link>
              )}
            </Nav>
            <SearchForm />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavComponent;

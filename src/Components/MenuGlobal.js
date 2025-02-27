import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

function MenuGimnasio() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src="/logo.jpg" height="40" alt="Logo" />
                    CODYM
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
                    <Nav>
                        <Nav.Link as={Link} to="/">Servicios</Nav.Link>
                        <Nav.Link as={Link} to="/Alquiler">Alquiler</Nav.Link>
                    </Nav>

                    <div className="d-flex align-items-center ms-auto">
                        <Dropdown align="end">
                            <Dropdown.Toggle as="div">
                                <img
                                    src="/imagenPersona.png"
                                    alt="Cuenta"
                                    height="40"
                                    className="rounded-circle"
                                    style={{ cursor: "pointer" }}
                                />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/Iniciar">Iniciar sesión</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/Registro">Registrarse</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="d-flex ms-3">
                            <a href="#"><img src="/linkedin-removebg-preview.png" alt="LinkedIn" className="me-2" height="30" /></a>
                            <a href="#"><img src="/twitter-removebg-preview.png" alt="Twitter" className="me-2" height="30" /></a>
                            <a href="#"><img src="/instagram-removebg-preview.png" alt="Instagram" className="me-2" height="30" /></a>
                            <a href="#"><img src="/facebook-removebg-preview.png" alt="Facebook" className="me-2" height="30" /></a>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuGimnasio;


import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Logo from "../Img/logo.jpg";

function MenuGimnasio() {


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                <img
                src= {Logo}
                height="40"
                />
                CODYM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Alquiler">Alquiler</Nav.Link>
                        <Nav.Link as={Link} to="/GymApp">Cursos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default MenuGimnasio;
import React, { useState } from 'react';
import { Navbar, Container, Button, Form, Carousel, Offcanvas, ListGroup, Row, Col } from 'react-bootstrap';
import "../Styles/stylesIndex.css";
import MenuGimnasio from './MenuGlobal';  
import Logo from "../Img/logo.jpg";
import Lupa from "../Img/lupa.png";
import Linkedin from "../Img/linkedin-removebg-preview.png";
import Twitter from "../Img/twitter-removebg-preview.png";
import Insta from "../Img/instagram-removebg-preview.png";
import Facebook from "../Img/facebook-removebg-preview.png";
import Profile from "../Img/profilePicture.jpg";
import Carrusel1 from "../Img/gymCarrousel1.jpg";
import Carrusel2 from "../Img/gymCarrousel2.jpg";
import Carrusel3 from "../Img/gymCarrousel3.jpg";

const GymApp = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div>
      <MenuGimnasio />

      {/* Sidebar */}
      <Offcanvas show={showSidebar} onHide={toggleSidebar} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item>
              <img
                src={Profile}
                className="img-thumbnail rounded-circle me-2"
                alt="Profile"
                style={{ width: 50, height: 50 }}
              />
              María Cuervo
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fa fa-line-chart me-2"></i>Tu actividad
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fa fa-user me-2"></i>Perfil Personal
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fa fa-usd me-2"></i>Tu tarifa
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fa fa-calendar me-2"></i>Mis reservas
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Toggle Button */}
      <Container fluid className="mt-4">
        <Row>
          <Col xs={12} className="text-start">
            <Button variant="outline-danger" onClick={toggleSidebar}>
              Mi Perfil <i className="fa fa-bars ms-2"></i>
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Horario - Container independiente */}
      <Container className="mt-5 d-flex justify-content-center">
        <div className="schedule-card text-center border p-4 shadow-sm">
          <h4>
            Nuestro Horario <span className="icon">&#x25BC;</span>
          </h4>
          <p>Lunes - 08:00 / 22:00</p>
          <p>Martes - 08:00 / 22:00</p>
          <p>Miércoles - 08:00 / 22:00</p>
          <p>Jueves - 08:00 / 22:00</p>
          <p>Viernes - 08:00 / 22:00</p>
          <p>Sábado - 09:00 / 16:00</p>
          <p>Domingo - 09:00 / 16:00</p>
        </div>
      </Container>

      {/* Carousel */}
      <Container className="mt-5">
        <div className="carousel-container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carrusel1}
                alt="Rutinas Personalizadas"
              />
              <Carousel.Caption>
                <h5>Rutinas Personalizadas</h5>
                <p>Entrenadores que adaptan tu rutina según tus metas para optimizar resultados.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carrusel2}
                alt="Equipos Modernos"
              />
              <Carousel.Caption>
                <h5>Equipos Modernos</h5>
                <p>Instalaciones de última generación, diseñadas para mejorar tu entrenamiento.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carrusel3}
                alt="Comunidad Activa"
              />
              <Carousel.Caption>
                <h5>Comunidad Activa</h5>
                <p>Clases grupales y retos semanales para mantenerte motivado y acompañado.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default GymApp;

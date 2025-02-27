import React, { useState } from 'react';
import { Navbar, Container, Button, Form, Carousel, Offcanvas, ListGroup } from 'react-bootstrap';
import "../Styles/menuIndex.css";
import "../Styles/stylesIndex.css";
import MenuGimnasio from './MenuGlobal';  
const Lupa = "/lupa.png";
const Linkedin = "/linkedin-removebg-preview.png";
const Twitter = "/twitter-removebg-preview.png";
const Insta = "/instagram-removebg-preview.png";
const Facebook = "/facebook-removebg-preview.png";
const Profile = "/profilePicture.jpg";
const Carrusel1 = "/gymCarrousel1.jpg";
const Carrusel2 = "/gymCarrousel2.jpg";
const Carrusel3 = "/gymCarrousel3.jpg";



const GymApp = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div>

      <MenuGimnasio/>

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
      <Container className="mt-4">
        <Button variant="outline-danger" onClick={toggleSidebar}>
          <i className="fa fa-bars"></i>
        </Button>
      </Container>

      {/* Schedule Section */}
      <section className="d-flex gap-4 mt-5 justify-content-center">
        <div className="text-center border p-4 shadow-sm">
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

        {/* Carousel */}
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
      </section>
    </div>
  );
};

export default GymApp;

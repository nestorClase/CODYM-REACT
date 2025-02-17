import React, { useContext, useState } from 'react';
import { Container, Button, Carousel, Offcanvas, ListGroup, Row, Col, Card } from 'react-bootstrap';
import "../Styles/stylesIndex.css";
import MenuGimnasio from './MenuGlobal';
import { GimnasioContext } from '../GimnasioContext';

const GymApp = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const servicios = useContext(GimnasioContext);
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
                src="/profilePicture.jpg"
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
      <Container fluid className="mt-4 botonPerfil">
        <Row>
          <Col xs={12} className="text-start">
            <Button variant="outline-danger" onClick={toggleSidebar}>
              Mi Perfil <i className="fa fa-bars ms-2"></i>
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Sección Horario y Carrusel en una misma fila */}
      <Container className="mt-5">
        <Row>
          {/* Columna Horario */}
          <Col md={6} className="mb-4">
            <div
              className="schedule-card text-center border p-4 shadow-sm"
              style={{ margin: '0 10px' }}
            >
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
          </Col>

          {/* Columna Carrusel */}
          <Col md={6} className="mb-4 d-flex justify-content-center">
  <div className="carousel-container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/curso2.jpg"
          alt="Rutinas Personalizadas"
          style={{ width: '300px', height: '300px', objectFit: 'cover' }} // Ajustamos el tamaño de la imagen
        />
        <Carousel.Caption>
          <h5>Rutinas Personalizadas</h5>
          <p>Entrenadores que adaptan tu rutina según tus metas para optimizar resultados.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/curso1.jpg"
          alt="Equipos Modernos"
          style={{ width: '300px', height: '300px', objectFit: 'cover' }} // Ajustamos el tamaño de la imagen
        />
        <Carousel.Caption>
          <h5>Equipos Modernos</h5>
          <p>Instalaciones de última generación, diseñadas para mejorar tu entrenamiento.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/curso3.jpg"
          alt="Comunidad Activa"
          style={{ width: '300px', height: '300px', objectFit: 'cover' }} // Ajustamos el tamaño de la imagen
        />
        <Carousel.Caption>
          <h5>Comunidad Activa</h5>
          <p>Clases grupales y retos semanales para mantenerte motivado y acompañado.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
</Col>
        </Row>
      </Container>

      {/* Cards de Servicios */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          {servicios && servicios.length > 0 && 
            servicios.map((servicio, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{servicio.nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Horarios:</Card.Subtitle>
                    <ul>
                      {servicio.horarios.map((horario, i) => (
                        <li key={i}>
                          {horario.dia}: {horario.hora}
                        </li>
                      ))}
                    </ul>
                    <Card.Subtitle className="mb-2 text-muted">Profesores:</Card.Subtitle>
                    <ul>
                      {servicio.profesores.map((profesor, i) => (
                        <li key={i}>{profesor}</li>
                      ))}
                    </ul>
                    <Card.Subtitle className="mb-2 text-muted">Precios:</Card.Subtitle>
                    <ul>
                      <li>Niños: ${servicio.precios.niños}</li>
                      <li>Adultos: ${servicio.precios.adultos}</li>
                      <li>Mayores: ${servicio.precios.mayores}</li>
                    </ul>
                    <Button variant="primary">Apuntarse</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default GymApp;

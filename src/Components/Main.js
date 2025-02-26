import React, { useContext, useState } from 'react';
import { Container, Button, Carousel, Offcanvas, ListGroup, Row, Col, Card, Table } from 'react-bootstrap';
import "../Styles/stylesIndex.css";
import MenuGimnasio from './MenuGlobal';
import { GimnasioContext } from '../GimnasioContext';

const GymApp = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const servicios = useContext(GimnasioContext);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const horasDelDia = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const horarioCompleto = diasDeLaSemana.map(() => {
    return horasDelDia.map(() => ({
      clase: null,
    }));
  });

  if (servicios) {
    servicios.forEach(servicio => {
      servicio.horarios.forEach(horario => {
        const diaIndex = diasDeLaSemana.indexOf(horario.dia);
        
        // Obtener solo la hora de inicio del rango
        const horaInicio = horario.hora.split(' - ')[0];
        const horaIndex = horasDelDia.indexOf(horaInicio);
        
        if (diaIndex !== -1 && horaIndex !== -1) {
          horarioCompleto[diaIndex][horaIndex].clase = servicio.nombre;
        }
      });
    });
  }

  return (
    <div>
      <MenuGimnasio />
      <Offcanvas style={{ backgroundColor: 'grey' }} show={showSidebar} onHide={toggleSidebar} placement="start">
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
      <Row className="mt-4 position-absolute" style={{ left: '20px', zIndex: 3}}>
        <Col xs="auto">
          <Button style={{backgroundColor:"darkGrey"}} variant="outline-danger" onClick={toggleSidebar}>
            Mi Perfil <i className="fa fa-bars ms-2"></i>
          </Button>
        </Col>
      </Row>
      <div className="mt-5">
        <Row className="mt-5 justify-content-center position-relative" style={{ zIndex: 2 }}>
          <Col md={10} className="mb-4">
            <div className="carousel-container">
              <Carousel >
                <Carousel.Item>
                  <img className="d-block w-100 img-fluid" src="/gymhd1.jpg" alt="Rutinas Personalizadas" />
                  <Carousel.Caption>
                    <h5>Rutinas Personalizadas</h5>
                    <p>Entrenadores que adaptan tu rutina según tus metas para optimizar resultados.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 img-fluid" src="/gymhd2.jpg" alt="Equipos Modernos" />
                  <Carousel.Caption>
                    <h5>Equipos Modernos</h5>
                    <p>Instalaciones de última generación, diseñadas para mejorar tu entrenamiento.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 img-fluid" src="/gymhd3.jpg" alt="Comunidad Activa" />
                  <Carousel.Caption>
                    <h5>Comunidad Activa</h5>
                    <p>Clases grupales y retos semanales para mantenerte motivado y acompañado.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
      <Container className="mt-5">
      <Row className="justify-content-center">
    {servicios && servicios.length > 0 &&
      servicios.map((servicio, index) => (
        <Col key={index} md={4} className="mb-4">
          <Card>
            {/* Cabecera de la tarjeta con la imagen */}
            <Card.Img variant="top" src={servicio.foto} alt={servicio.nombre} />

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
        <Row className="justify-content-center">
          <h3 className="text-center">Horarios de Clases</h3>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Hora/Día</th>
                {diasDeLaSemana.map((dia, index) => (
                  <th key={index}>{dia}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {horasDelDia.map((hora, horaIndex) => (
                <tr key={horaIndex}>
                  <td>{hora}</td>
                  {horarioCompleto.map((dia, diaIndex) => (
                    <td key={diaIndex}>{dia[horaIndex].clase ? dia[horaIndex].clase : '-'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};

export default GymApp;

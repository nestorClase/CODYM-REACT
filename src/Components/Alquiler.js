import React, { useState } from 'react';
import { Carousel, Button, Container, Form, Navbar } from 'react-bootstrap';
import MenuGimnasio from './MenuGlobal';

const CustomNav = () => {
  const [selection, setSelection] = useState('');

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  };

  const handleReservation = () => {
    alert('Reserva confirmada');
  };

  return (
    <div>

      <MenuGimnasio />

      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="sm" className="p-3">
        <Container fluid>
          <Navbar.Brand href="index.html">
            <img
              src="/logo.jpg"
              alt="Logo gimnasio"
              height="40"
            />
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <Form.Control
              type="text"
              placeholder="Buscar..."
              className="me-2"
            />
            <Button variant="outline-light">🔍</Button>
          </div>
          <div className="d-flex ms-3">
            <a href="#">
              <img
                src="/imagenes/linkedin-removebg-preview.png"
                alt="LinkedIn"
                className="me-2"
                height="30"
              />
            </a>
            <a href="#">
              <img
                src="/imagenes/twitter-removebg-preview.png"
                alt="Twitter"
                className="me-2"
                height="30"
              />
            </a>
            <a href="#">
              <img
                src="/imagenes/instagram-removebg-preview.png"
                alt="Instagram"
                className="me-2"
                height="30"
              />
            </a>
            <a href="#">
              <img
                src="/imagenes/facebook-removebg-preview.png"
                alt="Facebook"
                className="me-2"
                height="30"
              />
            </a>
          </div>
        </Container>
      </Navbar>

      {/* Selection Dropdown */}
      <Container className="mt-4">
        <Form.Label>¿Qué te gustaría hacer?</Form.Label>
        <Form.Select
          value={selection}
          onChange={handleSelectionChange}
        >
          <option value="">Selecciona una opción</option>
          <option value="maquinas">Alquilar Máquinas</option>
          <option value="clases">Reservar Clases</option>
        </Form.Select>
      </Container>

      {/* Carrusel de Máquinas */}
      {selection === 'maquinas' && (
        <Container className="mt-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../imagenes/multifuncion-1.jpg"
                alt="Máquina 1"
              />
              <Carousel.Caption>
                <Button variant="primary" onClick={handleReservation}>
                  Reservar
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../imagenes/multipower-1.jpg"
                alt="Máquina 2"
              />
              <Carousel.Caption>
                <Button variant="primary" onClick={handleReservation}>
                  Reservar
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../imagenes/cintaDeCorrer.jpg"
                alt="Máquina 3"
              />
              <Carousel.Caption>
                <Button variant="primary" onClick={handleReservation}>
                  Reservar
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      )}

      {/* Carrusel de Clases */}
      {selection === 'clases' && (
        <Container className="mt-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../imagenes/boxeo.jpg"
                alt="Clase 1"
              />
              <Carousel.Caption>
                <Button variant="primary" onClick={handleReservation}>
                  Reservar
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../imagenes/spining.jpg"
                alt="Clase 2"
              />
              <Carousel.Caption>
                <Button variant="primary" onClick={handleReservation}>
                  Reservar
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../imagenes/yoga.jpg"
                alt="Clase 3"
              />
              <Carousel.Caption>
                <Button variant="primary" onClick={handleReservation}>
                  Reservar
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      )}
    </div>
  );
};

export default CustomNav;

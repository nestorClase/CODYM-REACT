import React, { useContext, useState } from 'react';
import { Carousel, Button, Container, Form, Navbar } from 'react-bootstrap';
import MenuGimnasio from './MenuGlobal';
import { GimnasioContext } from '../GimnasioContext';

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
                src="/multifuncion-1.jpg"
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
                src="/multipower-1.jpg"
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
                src="/cintaDeCorrer.jpg"
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
                src="/boxeo.jpg"
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
                src="/spining.jpg"
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
                src="/yoga.jpg"
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

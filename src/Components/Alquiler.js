import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MenuGimnasio from "./MenuGlobal";
import PopupAlquilerMaquina from "./PopupAlquiler";
import "../Styles/stylealquiler.css";

const CustomNav = () => {
  const [maquinas, setMaquinas] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState(null);

  useEffect(() => {
    fetch("./codymMaquinas.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el JSON de máquinas");
        }
        return response.json();
      })
      .then((data) => {
        setMaquinas(data.maquinas);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // Al hacer clic, se selecciona la máquina y se abre el popup
  const handleReservationClick = (maquina) => {
    setSelectedMachine(maquina);
    setShowPopup(true);
  };

  const handleConfirmRental = (horas) => {
    setMaquinas((prev) =>
      prev.map((m) =>
        m.nombre === selectedMachine.nombre ? { ...m, alquilado: true } : m
      )
    );
    setShowPopup(false);
  };

  return (
    <div>
      <MenuGimnasio />

      <Container className="mt-4">
        <Row className="justify-content-center">
          {maquinas.map((maquina, index) => (
            <Col key={index} md={4} xs={12} className="mb-4">
              <Card className="card-fixed">
                <Card.Img
                  variant="top"
                  src={maquina.foto}
                  alt={maquina.nombre}
                  className="img-fluid card-img-fixed"
                />
                <Card.Body>
                  <Card.Title>{maquina.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Funciones:
                  </Card.Subtitle>
                  <ul>
                    {maquina.funciones.map((funcion, i) => (
                      <li key={i}>{funcion}</li>
                    ))}
                  </ul>
                  <Card.Subtitle className="mb-2 text-muted">
                    Precio por hora:
                  </Card.Subtitle>
                  <p>${maquina.precios.alquiler_por_hora}</p>
                  <Button
                    variant="primary"
                    onClick={() => handleReservationClick(maquina)}
                  >
                    Reservar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedMachine && (
        <PopupAlquilerMaquina
          show={showPopup}
          onHide={() => setShowPopup(false)}
          maquina={selectedMachine}
          onConfirm={handleConfirmRental}
        />
      )}
    </div>
  );
};

export default CustomNav;

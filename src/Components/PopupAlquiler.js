import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PopupAlquilerMaquina = ({ show, onHide, maquina, onConfirm }) => {
  const [horas, setHoras] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleHorasChange = (e) => {
    setHoras(e.target.value);
  };

  const handleConfirm = () => {
    // Cierra el modal principal y luego muestra el modal de confirmación
    onHide(); // Oculta el modal principal
    setShowConfirmModal(true);
  };

  const handleConfirmModalClose = () => {
    onConfirm(horas);
    setShowConfirmModal(false);
    setHoras(1);
  };

  return (
    <>
      {/* Modal para ingresar los datos de alquiler */}
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        aria-labelledby="alquiler-maquina-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{maquina ? maquina.nombre : "Cargando..."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {maquina ? (
            <>
              <p>
                <strong>Precio por hora:</strong> $
                {maquina.precios.alquiler_por_hora}
              </p>
              <p>
                <strong>Funciones:</strong> {maquina.funciones.join(" | ")}
              </p>
              {maquina.alquilado ? (
                <p className="text-danger">Esta máquina ya está alquilada.</p>
              ) : (
                <>
                  <Form.Group controlId="horasAlquiler">
                    <Form.Label>¿Cuántas horas deseas alquilar?</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      value={horas}
                      onChange={handleHorasChange}
                    />
                  </Form.Group>
                  <p>
                    <strong>Total a pagar:</strong> $
                    {maquina.precios.alquiler_por_hora * horas}
                  </p>
                </>
              )}
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={handleConfirm}
            disabled={!maquina || maquina.alquilado}
          >
            Confirmar Alquiler
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de confirmación */}
      <Modal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        centered
        aria-labelledby="confirmacion-alquiler-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmación de Alquiler</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {maquina && (
            <div>
              <p>
                Has alquilado <strong>{maquina.nombre}</strong> por{" "}
                <strong>{horas}</strong> {horas > 1 ? "horas" : "hora"}.
              </p>
              <p>Total a pagar: ${maquina.precios.alquiler_por_hora * horas}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirmModalClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopupAlquilerMaquina;

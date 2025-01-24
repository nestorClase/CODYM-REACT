// PopupCategoria.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PopupCategoria = ({ show, onHide, categoria }) => {
  return (
    <Modal
  show={show}
  onHide={onHide}
  size="lg" // Tamaño grande para pantallas grandes
  centered // Centrado verticalmente
  aria-labelledby="contained-modal-title-vcenter"
>
  <Modal.Header closeButton>
    <Modal.Title>{categoria ? categoria.nombre : "Cargando..."}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {categoria ? (
      <div>
        <h5>Horarios:</h5>
        <ul>
          {categoria.horarios.map((horario, index) => (
            <li key={index}>
              {horario.dia}: {horario.hora}
            </li>
          ))}
        </ul>
        <h5>Profesores:</h5>
        <ul>
          {categoria.profesores.map((profesor, index) => (
            <li key={index}>{profesor}</li>
          ))}
        </ul>
        <h5>Precios:</h5>
        <p>Niños: ${categoria.precios.niños}</p>
        <p>Adultos: ${categoria.precios.adultos}</p>
        <p>Mayores: ${categoria.precios.mayores}</p>
      </div>
    ) : (
      <p>Cargando...</p>
    )}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={onHide}>
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>
  );
};

export default PopupCategoria;

// BarraNavegacion.js
import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import PopupCategoria from "./PopupCategoria"; // Importamos el componente PopupCategoria

const BarraNavegacion = () => {
  const [servicios, setServicios] = useState([]);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  // Cargar el JSON desde /public/codymServicios.json
  useEffect(() => {
    fetch("/codymServicios.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el JSON");
        }
        return response.json();
      })
      .then((data) => {
        setServicios(data.servicios);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // Función para abrir el modal con los detalles de la categoría
  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
    setCategoriaSeleccionada(null);
  };

  return (
    <>
        <Navbar className="navbar-custom" bg="light" expand="lg">
      <Container>
        {/* El logo estará siempre alineado a la izquierda */}
        <Navbar.Brand href="#home" className="ms-2 me-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="d-inline-block align-top"
            style={{ width: "50px", height: "50px" }}
          />
          Mi Gimnasio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title="Servicios"
              id="basic-nav-dropdown"
              className="text-center"
            >
              {servicios.map((servicio, index) => (
                <NavDropdown.Item
                  key={index}
                  onClick={() => handleCategoriaSeleccionada(servicio)}
                >
                  {servicio.nombre}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      {/* Popup con los detalles de la categoría seleccionada */}
      <PopupCategoria
        show={showModal}
        onHide={handleCloseModal}
        categoria={categoriaSeleccionada}
      />
    </>
  );
};

export default BarraNavegacion;

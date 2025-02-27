import { React, useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import MenuGimnasio from './MenuGlobal';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styleRegistro.css";

const Registro = () => {
    const [correo, setCorreo] = useState("");
    const [nombre, setNombre] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dni, setDni] = useState("");
    const [cuenta, setCuenta] = useState("");

    const handleChangeCorreo = (event) => {
        setCorreo(event.target.value);
    }
    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    }
    const handleChangeFechaNacimiento = (event) => {
        setFechaNacimiento(event.target.value);
    }
    const handleChangeTelefono = (event) => {
        setTelefono(event.target.value);
    }
    const handleChangeDni = (event) => {
        setDni(event.target.value);
    }
    const handleChangeCuenta = (event) => {
        setCuenta(event.target.value);
    }

    const crearCuenta = () => {
        if (!correo || !nombre || !fechaNacimiento || !telefono || !dni || !cuenta) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert("Cuenta creada con éxito!");
    }

    return (
        <div>
            <MenuGimnasio />
            
            <div
                className="fondo"
                style={{
                    backgroundImage: `url('/RegistroFondo.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1, 
                }}
            >
                
            </div>

            <Container>
                <Row className="caja_1">
                    <Col xs={12} sm={12} md={6} className="mt-3">
                        <img className="cajaInteriorIzq" src="/LogoRegistro2.png" alt="Logo" />
                    </Col>

                    <Col xs={12} sm={12} md={6} className="cajaInteriorDrc">
                        <h1 style={{ color: "white" }}>¡Empieza a entrenar con nosotros!</h1>

                        <input type="text" value={nombre} className="caja_texto" onChange={handleChangeNombre} placeholder="Nombre y apellidos" />
                        <input type="email" className="caja_texto" value={correo} onChange={handleChangeCorreo} placeholder="Correo electrónico" />
                        <input type="text" className="caja_texto" value={fechaNacimiento} onChange={handleChangeFechaNacimiento} placeholder="Fecha de nacimiento" />
                        <input type="tel" className="caja_texto" value={telefono} onChange={handleChangeTelefono} placeholder="Número de teléfono" />
                        <input type="text" className="caja_texto" value={dni} onChange={handleChangeDni} placeholder="DNI" />
                        <input type="text" value={cuenta} className="caja_texto" onChange={handleChangeCuenta} placeholder="Número de cuenta" />

                        <Button onClick={crearCuenta} className="caja_textoRegistro">Registrarse</Button>

                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Registro;
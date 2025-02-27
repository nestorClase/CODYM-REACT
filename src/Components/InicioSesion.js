import { React, useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import MenuGimnasio from './MenuGlobal';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/styleIniciarSesion.css";

const Iniciar = () => {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeCorreo = (event) => {
        setCorreo(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const iniciarSesion = () => {
        if (!correo || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        alert("Inicio de sesión exitoso!");
    };

    return (
        <div>
            <MenuGimnasio />
            
            <div
                className="fondo"
                style={{
                    backgroundImage: `url('/RegistroFondo2.png')`,
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
                <Row className="caja_principal">
                    <Col xs={12} sm={12} md={6} className="mt-3">
                        <img className="imagen_izquierda" src="/LogoRegistro2.png" alt="Logo" />
                    </Col>

                    <Col xs={12} sm={12} md={6} className="contenedor_derecho">
                        <h1 className="titulo_sesion">CODYM</h1>

                        <input 
                            type="text" 
                            value={correo} 
                            className="input_sin_margen" 
                            onChange={handleChangeCorreo} 
                            placeholder="Usuario o correo electrónico" 
                        />
                        
                        <input 
                            type="password" 
                            className="input_estilizado" 
                            value={password} 
                            onChange={handleChangePassword} 
                            placeholder="Contraseña" 
                        />

                        <Button onClick={iniciarSesion} className="boton_sesion" style={{ width: "100%" }}>
                            Iniciar sesión
                        </Button>

                        <Link style={{ color: "orange", marginLeft: "20px" }} as={Link} to="">¿Has olvidado tu contraseña?</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Iniciar;
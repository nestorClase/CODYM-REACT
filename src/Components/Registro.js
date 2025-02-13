import { React, useState } from "react";
import { Carousel, Button } from 'react-bootstrap';
import MenuGimnasio from './MenuGlobal';  
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

            <MenuGimnasio/>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/RegistroFondo.png"
                        alt="Imagen 1"
                        style={{ width: "100%", height: "100vh" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/RegistroFondo2.png"
                        alt="Imagen 2"
                        style={{ width: "100%", height: "100vh" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/RegistroFondo3.png"
                        alt="Imagen 3"
                        style={{ width: "100%", height: "100vh" }}
                    />
                </Carousel.Item>
            </Carousel>

            <div className="contenedor_1">
                <div className="caja_1">
                    <div className="cajaInteriorIzq">
                        <img style={{ width: "600px", height: "595px" }} src="/LogoRegistro2.png" alt="Logo" />
                    </div>
                    <div className="cajaInteriorDrc">
                        <h1 style={{ color: "white" }}>¡Empieza a entrenar con nosotros!</h1>

                        <div>
                            <input
                                type="text"
                                value={nombre}
                                className="caja_texto"
                                onChange={handleChangeNombre}
                                placeholder="Nombre y apellidos"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                className="caja_texto"
                                value={correo}
                                onChange={handleChangeCorreo}
                                placeholder="Correo electrónico"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className="caja_texto"
                                value={fechaNacimiento}
                                onChange={handleChangeFechaNacimiento}
                                placeholder="Fecha de nacimiento"
                            />
                        </div>

                        <div>
                            <input
                                type="tel"
                                className="caja_texto"
                                value={telefono}
                                onChange={handleChangeTelefono}
                                placeholder="Número de teléfono"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className="caja_texto"
                                value={dni}
                                onChange={handleChangeDni}
                                placeholder="DNI"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                value={cuenta}
                                className="caja_texto"
                                onChange={handleChangeCuenta}
                                placeholder="Número de cuenta"
                            />
                        </div>

                        <div>
                            <Button variant="primary" onClick={crearCuenta}>Registrarse</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registro;

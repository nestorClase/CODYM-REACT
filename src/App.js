import React from "react";
import CustomNav from "./Components/Alquiler"
import Registro from "./Components/Registro"
import GymApp from "./Components/Main";
import Iniciar from "./Components/InicioSesion"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GimnasioProvider from "./GimnasioContext"


function App() {
  return (
    <GimnasioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GymApp />} />
          <Route path="/Alquiler" element={<CustomNav />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Iniciar" element={<Iniciar />} />
        </Routes>
      </BrowserRouter>
    </GimnasioProvider>

  );
}

export default App;

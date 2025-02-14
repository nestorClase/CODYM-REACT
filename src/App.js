import React from "react";
<<<<<<< HEAD
import CustomNav from "./Components/Alquiler"
import Registro from "./Components/Registro"
import GymApp from "./Components/Main";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GimnasioProvider from "./GimnasioContext"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/Alquiler" element={<CustomNav />} />
          <Route path="/GymApp" element={<GymApp />} />
        </Routes>
      </BrowserRouter>
=======
import BarraNavegacion from "./BarraNavegacion";
import './App.css';

function App() {
  return (
    <div className="App">
      <BarraNavegacion />
      <div className="page-content">
        
      </div>
    </div>
>>>>>>> 25bbb78984068f2bd9b5711e98e74fd8c11aa10f
  );
}

export default App;

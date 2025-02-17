import React from "react";
import CustomNav from "./Components/Alquiler"
import Registro from "./Components/Registro"
import GymApp from "./Components/Main";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GimnasioProvider from "./GimnasioContext"

function App() {
  return (
    <GimnasioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/Alquiler" element={<CustomNav />} />
          <Route path="/GymApp" element={<GymApp />} />
        </Routes>
      </BrowserRouter>
    </GimnasioProvider>
  );
}

export default App;

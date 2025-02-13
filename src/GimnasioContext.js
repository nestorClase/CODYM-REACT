import React, { createContext, useEffect, useState } from 'react';

const GimnasioContext = createContext("Gimnasio");

export const GimnasioProvider  = ({Children}) => {

    const [servicios, setServicios] = useState([]);

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

    return (
        <GimnasioContext.Provider value = {servicios }>
            {Children}
        </GimnasioContext.Provider>
    )

}

export default GimnasioProvider;


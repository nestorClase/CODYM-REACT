import React, { createContext, useEffect, useState } from 'react';


export const GimnasioContext = createContext();

export const GimnasioProvider  = ({children}) => {

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
        <GimnasioContext.Provider value = {{servicios}}>
            {children}
        </GimnasioContext.Provider>
    )

}

export default GimnasioProvider;


import React from 'react';
import CrearCita from './Cita.jsx';
import './Listado.css';

function Listado({ citas, eliminarCita }) {
  return (
    <div className="contenedor-lista-citas">
      {citas.map((cita, index) => (
        <CrearCita
          key={index}
          index={index}
          Nombre={cita.Nombre}
          Dueño={cita.Dueño}
          Fecha={cita.Fecha}
          Hora={cita.Hora}
          Sintomas={cita.Sintomas}
          eliminarCita={eliminarCita}
        />
      ))}
    </div>
  );
}

export default Listado;

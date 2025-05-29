import React from 'react';
import './Formulario.css';

function Formulario({ agregarCita }) {

  const EnviarDatos = (e) => {
    e.preventDefault();
    const form = e.target;
    const nuevaCita = {
      Nombre: form.Nombre.value,
      Dueño: form.Dueño.value,
      Fecha: form.Fecha.value,
      Hora: form.Hora.value,
      Sintomas: form.Sintomas.value
    };
    agregarCita(nuevaCita);
    form.reset();
  };

  return (
    <form onSubmit={EnviarDatos}>
      <label>Nombre Mascota</label>
      <input type="text" name="Nombre" className="ancho-completo" placeholder="Nombre Mascota"/>
      <label>Nombre Dueño</label>
      <input type="text" name="Dueño" className="ancho-completo" placeholder="Nombre dueño de la mascota"/>
      <label>Fecha</label>
      <input type="date" name="Fecha" className="ancho-completo"/>
      <label>Hora</label>
      <input type="time" name="Hora" className="ancho-completo"/>
      <label>Sintomas</label>
      <textarea name="Sintomas" className="ancho-completo" ></textarea>
      <button type="submit" className="ancho-completo boton-agregar-cita">
        Agregar Cita
      </button>
    </form>
  );
}

export default Formulario;


import React from 'react';
import '../css/Contacto.css';

function Contacto() {
  return (
    <div className="container">
      <h2 className="text-center my-4">Contáctanos</h2>
      <form className='contacto-form'>
        <label htmlFor="nombre" className='label-contacto'>Nombre:</label>
        <input type="text" id="nombre" name="nombre" className='input-contacto' required />
        <label htmlFor="email" className='label-contacto'>Correo Electrónico:</label>
        <input type="email" id="email" name="email" className='input-contacto' required />
        <label htmlFor='mensaje' className='label-contacto'>Deja tu mensaje: </label>
        <textarea id='mensaje' name='mensaje' className='input-contacto'></textarea>
        <button type='submit' className='btn-enviar' required>Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
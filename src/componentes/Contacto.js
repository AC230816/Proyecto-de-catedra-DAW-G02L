import React, { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    let valid = true;

    // Validar que los campos no estén vacíos
    if (formData.name.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'El nombre es requerido',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: '',
      }));
    }

    if (formData.email.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'El correo es requerido',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
    }

    if (formData.message.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'El mensaje es requerido',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: '',
      }));
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Realizar la acción de envío del formulario
      console.log('Formulario enviado:', formData);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className={`form-control ${errors.name && 'is-invalid'}`}
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className={`form-control ${errors.email && 'is-invalid'}`}
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea
            className={`form-control ${errors.message && 'is-invalid'}`}
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <div className="text-danger">{errors.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
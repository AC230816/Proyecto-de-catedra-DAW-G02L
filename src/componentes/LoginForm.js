import React, { useState } from 'react';
import '../css/LoginForm.css';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let valid = true;

    // Validar que el campo de correo no esté vacío
    if (email.trim() === '') {
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

    // Validar que la contraseña tenga al menos 12 caracteres
    if (password.length < 12) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'La contraseña debe tener al menos 12 caracteres',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '',
      }));
    }

    // Validar que la contraseña contenga al menos una letra mayúscula
    if (!/[A-Z]/.test(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'La contraseña debe contener al menos una letra mayúscula',
      }));
      valid = false;
    }

    // Validar que la contraseña contenga al menos una letra minúscula
    if (!/[a-z]/.test(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'La contraseña debe contener al menos una letra minúscula',
      }));
      valid = false;
    }

    // Validar que la contraseña contenga al menos un número
    if (!/[0-9]/.test(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'La contraseña debe contener al menos un número',
      }));
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Realizar la acción de inicio de sesión
      console.log('Inicio de sesión exitoso');
      history.push('/control');
    }
  };

  const hadleBack = (e) => {
    history.push('/');
  }

  return (
    <div className='contenedor-form'>
        <div className="container mt-5">
        <form
            className="border rounded p-3"
            style={{ borderColor: errors.email || errors.password ? 'red' : 'lightgray' }}
            onSubmit={handleSubmit}
        >
            <h1 className='text-center my-4'>Iniciar Sesión</h1>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">
                Correo Electrónico
            </label>
            <input
                type="email"
                className={`form-control form-control-lg ${errors.email && 'is-invalid'}`}
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
                <span className="text-danger">{errors.email}</span>
            )}
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">
                Contraseña
            </label>
            <input
                type="password"
                className={`form-control form-control-lg ${errors.password && 'is-invalid'}`}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
                <span className="text-danger">{errors.password}</span>
            )}
            </div>
            <div className='botones'>
                <button type="submit" className="btn btn-primary">
                Iniciar Sesión
                </button>
                <button type="button" className="btn btn-success" onClick={hadleBack}>
                Volver
                </button>
            </div>
        </form>
        </div>
    </div>
  );
};

Login.propTypes = {
    history: PropTypes.object.isRequired, // Asegura que history esté disponible
  };

export default Login;
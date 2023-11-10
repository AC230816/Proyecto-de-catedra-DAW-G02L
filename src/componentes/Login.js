import React from 'react';
import LoginButton from './LoginButton';
import '../css/Login.css';

function Login({ src,clase }) {
  return (
    <div className='mt-4'>
      <form>
        <div className="container">
          <h1 className='heading-login'>---- Control de Medicamentos ----</h1>
          <img src={ src } alt='logo de control de medicamentos' className='img-login' />
          <LoginButton clase={ clase }/>
        </div>
      </form>
    </div>
  );
}

export default Login;
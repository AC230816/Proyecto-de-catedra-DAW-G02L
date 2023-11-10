// LoginButton.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = ({ clase }) => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      redirectUri: `${window.location.origin}/control`, // Redirige a /control después del inicio de sesión
    });
  };

  return (
    <button onClick={handleLogin} className={ clase }>Iniciar sesión</button>
  );
};

export default LoginButton;
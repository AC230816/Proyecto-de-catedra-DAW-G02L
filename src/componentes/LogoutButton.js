
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = ({ clase }) => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin, // Redirige al inicio después del cierre de sesión
    });
  };

  return (
    <button onClick={handleLogout} className={ clase }>Cerrar sesión</button>
  );
};

export default LogoutButton;
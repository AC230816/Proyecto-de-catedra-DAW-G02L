import '../css/Enlaces.css';
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

export function Login({ clase }) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const history = useHistory();

  const handleLogin = () => {
    loginWithRedirect();
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/control');
    }
  }, [isAuthenticated, history]);

  return (
    <button className={clase} onClick={handleLogin}>
      Iniciar Sesión
    </button>
  );
}


export function Logout({ clase }){
    const { logout } = useAuth0();

    return (
        <button  className={ clase } onClick={ logout }>Cerrar Sesión</button>
    )
}
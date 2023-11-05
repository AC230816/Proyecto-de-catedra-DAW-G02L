import '../css/Enlaces.css';
import { useAuth0 } from '@auth0/auth0-react';

//Enlaces
export function Login({ clase }){
    const { loginWithRedirect } = useAuth0();

    return (
        <button className={ clase } onClick={ loginWithRedirect }>Iniciar Sesión</button>
    ); 
}

export function Logout({ clase }){
    const { logout } = useAuth0();

    return (
        <button  className={ clase } onClick={ logout }>Cerrar Sesión</button>
    )
}
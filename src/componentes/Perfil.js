import React from 'react';
import { Link } from 'react-router-dom';

function Perfil({ user }) {
  return (
    <div className="container text-center">
      <div className='user d-flex justify-content-center align-items-center my-5'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </div>
      <div className="profile-info">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <Link to="/" className='btn btn-danger'>Volver a Inicio</Link>
    </div>
  );
}

export default Perfil;

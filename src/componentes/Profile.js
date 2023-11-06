import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user } = useAuth0();

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      
    </div>
  );
}

export default Profile;
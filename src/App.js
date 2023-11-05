import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Login } from './componentes/Enlace'


function App() {

  return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center login'>
        <h1 className='mt-4 mb-5 text-center text-uppercase font-weight-bold heading-inicio'>Control de Medicamentos</h1>
        <div className='user d-flex flex-column justify-content-center align-items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </div>
        <Login 
        clase={'mt-5 mb-5 btn btn-success btn-login'} />
      </div>
    </div>
  );
}

export default App;

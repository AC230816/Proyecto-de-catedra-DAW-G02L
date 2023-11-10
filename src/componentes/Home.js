import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import '../css/Home.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Control from './Control';
import Perfil from './Perfil';

function Home() {
    const user = {
        name: 'Nombre de Usuario',
        email: 'usuario@example.com',
        picture: 'url_de_la_foto_de_perfil',
    };

    return (
        <Router>
            <h1 className="text-uppercase font-weight-bold text-center my-4">Control de Medicamentos</h1>
            <div className="bg-nav">
                <div className="contenedor mx-auto">
                    <nav className="navegacion-home text-uppercase">
                        <Link to='/Nosotros'>
                            Nosotros
                        </Link>
                        <Link to='/Control'>
                            Control
                        </Link>
                        <Link to='/Perfil'>
                            Perfil
                        </Link>
                        <Link to='/Contacto'>
                            Contacto
                        </Link>
                    </nav>
                </div>
            </div>

            <Switch>
                <Route path='/Nosotros'>
                    <Nosotros />
                </Route>
                <Route path='/Control'>
                    <Control />
                </Route>
                <Route path='/Perfil'>
                    <Perfil user={user}/>
                </Route>
                <Route path='/Contacto'>
                    <Contacto />
                </Route>
            </Switch>
        </Router>
    );
}

export default Home;
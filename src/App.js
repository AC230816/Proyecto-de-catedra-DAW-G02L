import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Home from './componentes/Home';
import Login from './componentes/Login';
import logo from './img/logo.png';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/control">
          <Home />
        </Route>
        <Route path="/">
          <Login 
          src={logo}
          clase={'btn-login'}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
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
import LoginForm from './componentes/LoginForm';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/control">
          <Home />
        </Route>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
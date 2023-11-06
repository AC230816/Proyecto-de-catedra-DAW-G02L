import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Home from './componentes/Home';
import LoginForm from './componentes/LoginForm';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/profile">
          
        </Route>
        <Route path="/control">
          <Home />
        </Route>
        <Route path="/">
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
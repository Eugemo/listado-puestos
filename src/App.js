import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { NavbarListado } from './components/NavbarListado' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainView } from './Views/MainView';
import { PaisesView } from './Views/PaisesView';
import { CiudadesView } from './Views/CiudadesView';

const App = () => (
  <div className="App">
    <NavbarListado />
    <div Class="container"> 
      <Switch>
        <Route path="/"  exact component={MainView} />
        <Route path="/PaisesView"  exact component={PaisesView} />
        <Route path="/CiudadesView"  exact component={CiudadesView} />
      </Switch>
    </div>
  </div>
)

export default App;

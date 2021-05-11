import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { NavbarListado } from './components/NavbarListado' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainView } from './views/MainView';
import { PaisesView } from './views/PaisesView';
import { CiudadesView } from './views/CiudadesView';
import { NotFoundView } from './views/NotFoundView';

const App = () => (
  <div className="App">
    <NavbarListado />
    <div className="container"> 
      <Switch>
        <Route path="/"  exact component={MainView} />
        <Route path="/PaisesView"  exact component={PaisesView} />
        <Route path="/CiudadesView"  exact component={CiudadesView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  </div>
)

export default App;

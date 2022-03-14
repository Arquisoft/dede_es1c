import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState} from 'react';

import './App.css';

import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
import {ProfileView} from "./components/perfil/ProfileView"
import {LogInView} from "./components/LogIn/LogInView";
import { PaymentView } from "./components/Pago/PaymentView";
import Producto from "./components/producto/Producto";
import Footer from "./components/comun/Footer";

function App(): JSX.Element {
  

  return (
    <>
<main>
     <Router>
 
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route  path="/Carrito"render={() => <Carrito/>}/>
        <Route  path="/Pago"render={() => <PaymentView/>}/>
        <Route  path="/Perfil"render={() => <ProfileView/>}/>
        <Route  path="/LogIn"render={() => <LogInView/>}/>
        <Route  path="/Producto/:name" render={() => <Producto/>}/>
      </Switch>
      </Router>
      </main>
    </>
  );
}

export default App;

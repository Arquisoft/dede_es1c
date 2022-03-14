import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState} from 'react';

import './App.css';

import {HomeView} from "./components/home/HomeView";
import {Carrito} from "./components/carrito/Carrito";
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
       <Route  path="/Producto/:name" render={() => <Producto/>}/>
      </Switch>
      </Router>
      <Footer/>
      </main>
    </>
  );
}

export default App;
